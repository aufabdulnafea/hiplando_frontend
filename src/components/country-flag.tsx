import * as Flags from "country-flag-icons/react/3x2";
export function CountryFlag({ code }: { code: string }) {
    if (!code || typeof code !== 'string') return null;

    const upper = code.toUpperCase() as keyof typeof Flags;
    const Flag = Flags[upper];

    if (!Flag) return null;

    return <Flag title={upper} className="w-6 h-6" />;
}