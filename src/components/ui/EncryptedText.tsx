import { useEffect, useRef, useState } from "react";
import { m, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type EncryptedTextProps = {
    text: string;
    className?: string;
    revealDelayMs?: number;
    charset?: string;
    flipDelayMs?: number;
    encryptedClassName?: string;
    revealedClassName?: string;
    onComplete?: () => void;
    repeatDelayMs?: number;
};

const DEFAULT_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function generateRandomCharacter(charset: string): string {
    const index = Math.floor(Math.random() * charset.length);
    return charset.charAt(index);
}

function generateGibberishPreservingSpaces(
    original: string,
    charset: string,
): string {
    if (!original) return "";
    let result = "";
    for (let i = 0; i < original.length; i += 1) {
        const ch = original[i];
        result += ch === " " ? " " : generateRandomCharacter(charset);
    }
    return result;
}

export const EncryptedText: React.FC<EncryptedTextProps> = ({
    text,
    className,
    revealDelayMs = 50,
    charset = DEFAULT_CHARSET,
    flipDelayMs = 50,
    encryptedClassName,
    revealedClassName,
    onComplete,
    repeatDelayMs = 5000,
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    const [revealCount, setRevealCount] = useState<number>(0);
    const animationFrameRef = useRef<number | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const startTimeRef = useRef<number>(0);
    const lastFlipTimeRef = useRef<number>(0);
    const scrambleCharsRef = useRef<string[]>(
        text ? generateGibberishPreservingSpaces(text, charset).split("") : [],
    );

    const startAnimation = () => {
        const initial = text
            ? generateGibberishPreservingSpaces(text, charset)
            : "";
        scrambleCharsRef.current = initial.split("");
        startTimeRef.current = performance.now();
        lastFlipTimeRef.current = startTimeRef.current;
        setRevealCount(0);

        if (animationFrameRef.current !== null) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(update);
    };

    const update = (now: number) => {
        const elapsedMs = now - startTimeRef.current;
        const totalLength = text.length;
        const currentRevealCount = Math.min(
            totalLength,
            Math.floor(elapsedMs / Math.max(1, revealDelayMs)),
        );

        setRevealCount(currentRevealCount);

        if (currentRevealCount >= totalLength) {
            if (onComplete) {
                onComplete();
            }
            if (repeatDelayMs) {
                timeoutRef.current = setTimeout(() => {
                    startAnimation();
                }, repeatDelayMs);
            }
            return;
        }

        const timeSinceLastFlip = now - lastFlipTimeRef.current;
        if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
            for (let index = 0; index < totalLength; index += 1) {
                if (index >= currentRevealCount) {
                    if (text[index] !== " ") {
                        scrambleCharsRef.current[index] =
                            generateRandomCharacter(charset);
                    } else {
                        scrambleCharsRef.current[index] = " ";
                    }
                }
            }
            lastFlipTimeRef.current = now;
        }

        animationFrameRef.current = requestAnimationFrame(update);
    };

    useEffect(() => {
        if (!isInView) return;

        startAnimation();

        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [isInView, text, revealDelayMs, charset, flipDelayMs, repeatDelayMs]);

    if (!text) return null;

    return (
        <m.span
            ref={ref}
            className={cn(className)}
            aria-label={text}
            role="text"
        >
            {text.split("").map((char, index) => {
                const isRevealed = index < revealCount;
                const displayChar = isRevealed
                    ? char
                    : char === " "
                        ? " "
                        : (scrambleCharsRef.current[index] ??
                            generateRandomCharacter(charset));

                return (
                    <span
                        key={index}
                        className={cn(isRevealed ? revealedClassName : encryptedClassName)}
                    >
                        {displayChar}
                    </span>
                );
            })}
        </m.span>
    );
};
