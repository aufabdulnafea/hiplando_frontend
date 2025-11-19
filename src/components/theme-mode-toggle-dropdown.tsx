"use client"

import { Moon, Sun, SunMoon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const isArabic = typeof window !== "undefined" &&
        document.documentElement.dir === "rtl";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="text-primary dark:text-neutral-400">
        <Button variant="outline" size="icon" className="text-primary dark:text-neutral-400">
          {theme === 'light' && <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />}
          {theme === 'dark' && <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />}
          {theme === 'system' && <SunMoon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-1" align={isArabic ? "start" : "end"}>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="h-[1.2rem] w-[1.2rem]" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="h-[1.2rem] w-[1.2rem]" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <SunMoon className="h-[1.2rem] w-[1.2rem]" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
