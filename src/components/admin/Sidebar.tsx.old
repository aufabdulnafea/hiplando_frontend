'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LiaHorseHeadSolid } from 'react-icons/lia';
import { AiOutlineUser } from 'react-icons/ai';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: 'Horses', href: '/dashboard/horses', icon: LiaHorseHeadSolid },
  { label: 'Users', href: '/dashboard/users', icon: AiOutlineUser },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const NavigationLinks = () => (
    <nav className="flex flex-col gap-2 mt-4" role="navigation" aria-label="Sidebar navigation">
      {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition border",
              isActive
                ? "bg-primary/10 text-primary border-primary/15"
                : "text-muted-foreground hover:bg-muted border-transparent"
            )}
          >
            <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
            {label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      <div className="lg:hidden fixed top-3 left-4 z-50">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              aria-label="Toggle sidebar menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="p-4 bg-background">
            <div className="flex flex-col h-full">
              <h2 className="text-xl font-semibold mb-4">Hiplando</h2>
              <NavigationLinks />
              <Button variant="default" className="mt-auto w-full">
                Logout
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <aside
        className="hidden lg:flex flex-col w-64 h-screen border-r bg-background p-4"
        role="complementary"
        aria-label="Main sidebar"
      >
        <h2 className="text-2xl font-bold mb-4">Hiplando</h2>
        <NavigationLinks />
        <Button variant="default" className="mt-auto w-full">
          Logout
        </Button>
      </aside>
    </>
  );
}
