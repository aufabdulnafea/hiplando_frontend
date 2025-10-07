'use client';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/24/outline';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { motion, AnimatePresence } from 'motion/react';

export default function UserDropDown() {
  return (
    <Menu>
      {({ open }) => (
        <>
          <MenuButton
            className="p-2 cursor-pointer rounded-lg border border-zinc-200 text-primary relative hover:bg-zinc-100 transition-colors"
          >
            <UserIcon className="w-5" />
          </MenuButton>
          <AnimatePresence>
            {open && (
              <MenuItems
                as={motion.div}
                static
                anchor="bottom end"
                initial={{ opacity: 0, scale: 0.9, y: -4, animationDuration: 0.1 }}
                animate={{ opacity: 1, scale: 1, y: 0, animationDuration: 0.1 }}
                exit={{ opacity: 0, scale: 0.9, y: -4, animationDuration: 0.1 }}
                transition
                className="rounded-lg shadow-lg w-48 mt-2 border border-zinc-200 p-2 bg-background flex flex-col origin-top-right"
              >
                <MenuItem>
                  <button
                    // onClick={() => signOut(auth)}
                    className='rounded-lg py-2 pl-2 text-sm text-left w-full transition-colors cursor-pointer hover:bg-primary/10'
                  >
                    Listings
                  </button>
                </MenuItem>

                <MenuItem>
                  <button
                    // onClick={() => signOut(auth)}
                    className='rounded-lg py-2 pl-2 text-sm text-left w-full transition-colors cursor-pointer hover:bg-primary/10'
                  >
                    Faviorets
                  </button>
                </MenuItem>

                <MenuItem>
                  <button
                    // onClick={() => signOut(auth)}
                    className='rounded-lg py-2 pl-2 text-sm text-left w-full transition-colors cursor-pointer hover:bg-primary/10'
                  >
                    Settings
                  </button>
                </MenuItem>

                <MenuItem>
                  <button
                    onClick={() => signOut(auth)}
                    className='rounded-lg py-2 pl-2 text-sm text-left w-full transition-colors cursor-pointer hover:bg-primary/10'
                  >
                    Logout
                  </button>
                </MenuItem>
              </MenuItems>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>

  );
}
