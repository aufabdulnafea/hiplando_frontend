"use client"

import { IconBell } from "@tabler/icons-react"

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

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
                <button className="relative p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-primary hover:bg-zinc-100 transition-colors dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 absolute right-3 top-2" />
                    <IconBell className="w-5 h-5" stroke={1.5} />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                asChild
                align="end"
                sideOffset={8}
                className="rounded-lg shadow-md border border-zinc-200 p-3 w-64 bg-background dark:bg-zinc-900"
                forceMount
            >
                <div>
                    <div className="flex justify-between pb-3 items-center">
                        <h4 className="text-primary font-bold text-sm">2 New</h4>
                        <p className="text-primary text-sm cursor-pointer hover:underline">
                            Mark all as read
                        </p>
                    </div>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem asChild>
                        <Notification />
                    </DropdownMenuItem>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
