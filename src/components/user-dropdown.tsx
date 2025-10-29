"use client"

import { IconUser } from "@tabler/icons-react"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export default function UserDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 cursor-pointer rounded-lg border border-zinc-200 dark:border-zinc-800 text-primary relative hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors dark:text-zinc-300">
          <IconUser className="w-5 h-5" stroke={1.5} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        asChild
        align="end"
        sideOffset={8}
        className="rounded-lg shadow-lg w-48 mt-2 border border-zinc-200 dark:border-zinc-800 p-2 bg-background dark:bg-zinc-900 flex flex-col origin-top-right"
        forceMount
      >
        <div>
          <DropdownMenuItem asChild>
            <button className="rounded-lg py-2 pl-2 text-sm text-left w-full transition-colors hover:bg-primary/10">
              Listings
            </button>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <button className="rounded-lg py-2 pl-2 text-sm text-left w-full transition-colors hover:bg-primary/10">
              Favorites
            </button>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <button className="rounded-lg py-2 pl-2 text-sm text-left w-full transition-colors hover:bg-primary/10">
              Settings
            </button>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <button
              onClick={() => signOut(auth)}
              className="rounded-lg py-2 pl-2 text-sm text-left w-full transition-colors hover:bg-destructive/10 text-destructive"
            >
              Logout
            </button>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
