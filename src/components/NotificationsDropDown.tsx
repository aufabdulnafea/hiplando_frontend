import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'

import { motion, AnimatePresence } from 'motion/react';

export function Notification() {
    return (
        <div className='border-xl text-zinc-300 text-sm bg-white dark:bg-zinc-900 border border-primary/20 dark:border-zinc-800 p-2 rounded-lg'>
            Test
        </div>
    )
}

export default function NotificationsDropDown() {
    return (

        <Menu>
            {({ open }) => (
                <>
                    <MenuButton className='p-2 cursor-pointer rounded-lg border border-zinc-200 dark:border-zinc-800 text-primary relative hover:bg-zinc-100 transition-colors dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300'>
                        <div className='w-1.5 h-1.5 rounded-full bg-red-500 absolute right-3'></div>
                        <BellIcon className='w-5' />
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
                                className="rounded-lg shadow w-xs mt-2 border border-zinc-200 p-3 bg-background dark:bg-zinc-900"
                            >

                                <div className='flex justify-between pb-3 items-center'>
                                    <h4 className='text-primary font-bold text-sm'>2 New</h4>
                                    <p className='text-primary text-sm'>Mark all as read</p>
                                </div>
                                <MenuItem><Notification /></MenuItem>
                            </MenuItems>
                        )}
                    </AnimatePresence>
                </>
            )}
        </Menu>

    )
}