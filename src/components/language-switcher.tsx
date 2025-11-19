"use client";

import { useTransition } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
    const [isPending, startTransition] = useTransition();

    const changeLocale = (locale: string) => {
        document.cookie = `locale=${locale}; path=/; max-age=31536000`;

        startTransition(() => {
            window.location.reload();
        });
    };

    return (
        <Select value={currentLocale} onValueChange={changeLocale}>
            <SelectTrigger className="w-32">
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="ar">العربية</SelectItem>
            </SelectContent>
        </Select>
    );
}
