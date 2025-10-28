"use client"

import { ModeToggle } from "@/components/theme-mode-toggle"
import { cn } from "@/lib/utils"

interface AdminNavbarProps {
    title: string
    className?: string
}

export default function Navbar({ title, className }: AdminNavbarProps) {
    return (
        <nav
            className={cn(
                "flex items-center justify-between border-b bg-background px-4 pl-16 lg:pl-4 py-3",
                className
            )}
        >
            <h1 className="text-lg font-semibold text-foreground">{title}</h1>

            <div className="flex items-center gap-2">
                <ModeToggle />
            </div>
        </nav>
    )
}
