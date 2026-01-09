import Image from "next/image";

interface FlagIconProps {
    className?: string;
}

export const USFlag = ({ className = "" }: FlagIconProps) => (
    <Image
        src="https://cdn.prod.website-files.com/673b2c5e86ad0384e6fa12fc/675ab130a1ce5f029a70b39e_USA.svg"
        alt="US Flag"
        width={20}
        height={16}
        className={className}
    />
);

export const SpainFlag = ({ className = "" }: FlagIconProps) => (
    <Image
        src="https://cdn.prod.website-files.com/673b2c5e86ad0384e6fa12fc/675ab1301abc7ff9bafffeb1_Japan.svg"
        alt="Spain Flag"
        width={20}
        height={16}
        className={className}
    />
);

export const FranceFlag = ({ className = "" }: FlagIconProps) => (
    <Image
        src="https://cdn.prod.website-files.com/673b2c5e86ad0384e6fa12fc/675ab1301abc7ff9bafffeb1_Japan.svg"
        alt="France Flag"
        width={20}
        height={16}
        className={className}
    />
);

export const languages = [
    { code: "en", label: "English", Flag: USFlag },
    { code: "es", label: "Español", Flag: SpainFlag },
    { code: "fr", label: "Français", Flag: FranceFlag },
] as const;

export type Language = typeof languages[number];
