"use client"

import Link from "next/link"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { UserRound, List, Heart, Settings, LogOut } from 'lucide-react'

export function UserDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="text-primary dark:text-neutral-400">
          <UserRound />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="mt-1">
        <Link href="/horses">
          <DropdownMenuItem className="flex items-center gap-2">
            <List />
            Listings
          </DropdownMenuItem>
        </Link>
        <Link href="/favorites">
          <DropdownMenuItem className="flex items-center gap-2">
            <Heart />
            Favorites
          </DropdownMenuItem>
        </Link>
        <Link href="/settings">
          <DropdownMenuItem className="flex items-center gap-2">
            <Settings />
            Settings
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="flex items-center gap-2" onClick={() => signOut(auth)}>
          <LogOut />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
