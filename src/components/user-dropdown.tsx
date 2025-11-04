"use client"

import { signOut } from "firebase/auth"
import { IconUser } from "@tabler/icons-react"
import { auth } from "@/lib/firebase"
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"

export default function UserDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="text-primary dark:text-neutral-400">
          <IconUser />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuItem>Listings</DropdownMenuItem>
        <DropdownMenuItem>Favorites</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut(auth)}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
