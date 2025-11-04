"use client"

import { IconBell } from "@tabler/icons-react"
import { DropdownMenu, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

function Notification() {
    return (
        <div className="border-xl text-zinc-300 text-sm bg-white dark:bg-zinc-900 border border-primary/20 dark:border-zinc-800 p-2 rounded-lg">
            Test
        </div>
    )
}

export default function NotificationsDropDown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="text-primary dark:text-neutral-400">
                    <IconBell />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild><Notification /></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
