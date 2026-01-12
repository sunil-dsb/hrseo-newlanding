"use client";

import type { Variants } from "framer-motion";
import { m, useAnimation } from "framer-motion";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef, useEffect } from "react";

import { cn } from "@/lib/utils";

export interface FileStackIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface FileStackIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const FileStackIcon = forwardRef<FileStackIconHandle, FileStackIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    // Start animation on mount and repeat
    useEffect(() => {
      const runAnimation = async () => {
        await controls.start("animate");
        await controls.start("normal");
      };
      runAnimation();
      const interval = setInterval(runAnimation, 2000);
      return () => clearInterval(interval);
    }, [controls]);

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) {
          onMouseEnter?.(e);
        } else {
          controls.start("animate");
        }
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) {
          onMouseLeave?.(e);
        } else {
          controls.start("normal");
        }
      },
      [controls, onMouseLeave]
    );

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <m.svg
          animate={controls}
          fill="none"
          height={size}
          initial="normal"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <m.path
            animate={controls}
            d="M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"
            variants={{
              normal: { translateX: 0, translateY: 0 },
              animate: { translateX: 4, translateY: -4 },
            }}
          />
        </m.svg>
      </div>
    );
  }
);

FileStackIcon.displayName = "FileStackIcon";

export { FileStackIcon };
