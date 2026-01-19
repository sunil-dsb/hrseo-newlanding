"use client";

import { useState, useRef, useEffect } from "react";
import { BiGlobe } from "react-icons/bi";
import { languages, type Language } from "@/components/icons/FlagIcons";
import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useRouter as useBaseRouter, useSearchParams } from 'next/navigation';

interface LanguageDropdownProps {
    className?: string;
    variant?: "navbar" | "footer";
    align?: "left" | "right";
}

export function LanguageDropdown({
    className = "",
    variant = "footer",
    align = "right"
}: LanguageDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const locale = useLocale();
    const router = useRouter(); // next-intl router
    const baseRouter = useBaseRouter(); // native next router
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Find current lang based on URL locale
    const [currentLang, setCurrentLang] = useState<Language>(
        languages.find(l => l.code === locale) || languages[0]
    );

    const dropdownRef = useRef<HTMLDivElement>(null);

    // Sync state with locale updates
    useEffect(() => {
        const found = languages.find(l => l.code === locale);
        if (found) setCurrentLang(found);
    }, [locale]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            return () => document.removeEventListener("keydown", handleEscape);
        }
    }, [isOpen]);

    const handleLanguageChange = (language: Language) => {
        setIsOpen(false);
        const params = searchParams.toString();
        const queryString = params ? `?${params}` : '';

        if (language.code === 'en') {
            // Force explicit /en path for English using native router
            const newPath = `/en${pathname === '/' ? '' : pathname}${queryString}`;
            baseRouter.push(newPath);
        } else {
            // For other languages, let next-intl handle the path, but we might need to manually ensure params are kept if next-intl router doesn't auto-merge (it usually replaces).
            // Passing the path + query string to next-intl's router.replace works if the pathname argument supports it.
            // Safer: router.replace(pathname + queryString, { locale: language.code });
            router.replace(`${pathname}${queryString}`, { locale: language.code });
        }
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    if (variant === "navbar") {
        return (
            <div ref={dropdownRef} className={`relative ${className}`}>
                <button
                    onClick={toggleDropdown}
                    className="p-1 md:p-2 text-zinc-500 hover:text-brand-dark transition-colors rounded-full hover:bg-zinc-100/50"
                    aria-label="Change language"
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                    type="button"
                >
                    <BiGlobe className="h-6 w-6 md:h-5 md:w-5" />
                </button>

                {isOpen && (
                    <div
                        className={`absolute ${align === "left" ? "left-0" : "right-0"} top-full mt-4 w-48 bg-white border border-black/4 shadow-xl rounded-lg p-1 z-50 overflow-hidden ring-1 ring-black/3`}
                        role="menu"
                        aria-label="Language options"
                    >
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => handleLanguageChange(language)}
                                className="w-full flex items-center gap-3 px-3 py-1.5 text-left transition-colors text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-lg"
                                role="menuitem"
                                aria-current={currentLang.code === language.code ? "true" : "false"}
                            >
                                <language.Flag className="shrink-0" />
                                <span
                                    className={`text-sm transition-all ${currentLang.code === language.code
                                        ? "font-semibold text-black"
                                        : "font-medium"
                                        }`}
                                >
                                    {language.label}
                                </span>
                                {currentLang.code === language.code && (
                                    <span className="ml-auto text-brand-primary text-xs">●</span>
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div ref={dropdownRef} className={`relative ${className}`}>
            <button
                onClick={toggleDropdown}
                className="flex items-center justify-between gap-2 px-3 py-2 text-zinc-600 w-40 border border-zinc-200 bg-white rounded-lg hover:bg-zinc-50 transition-colors"
                aria-controls="language-dropdown"
                aria-haspopup="menu"
                aria-expanded={isOpen}
                type="button"
            >
                <div className="flex items-center gap-2">
                    <currentLang.Flag className="shrink-0" />
                    <div className="text-xs font-medium">{currentLang.label}</div>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    viewBox="0 0 8 5"
                    fill="none"
                    className={`transition-transform duration-200 text-zinc-400 ${isOpen ? "rotate-180" : ""
                        }`}
                >
                    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {isOpen && (
                <nav
                    className={`absolute ${align === "left" ? "left-0" : "right-0"} bottom-full mb-1 w-40 bg-white border border-zinc-200 z-20 shadow-lg rounded-lg p-1`}
                    id="language-dropdown"
                    role="menu"
                    aria-label="Language options"
                >
                    {languages.map((lang) => {
                        const isActive = currentLang.code === lang.code;
                        return (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang)}
                                className="w-full flex items-center gap-2 px-3 py-1.5 text-zinc-600 transition-colors hover:bg-zinc-50 rounded-md"
                                role="menuitem"
                                type="button"
                            >
                                <lang.Flag className="shrink-0" />
                                <div
                                    className={`text-xs ${isActive ? "font-semibold text-black" : "font-medium"
                                        }`}
                                >
                                    {lang.label}
                                </div>
                            </button>
                        );
                    })}
                </nav>
            )}
        </div>
    );
}
