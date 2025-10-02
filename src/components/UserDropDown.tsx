'use client';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { UserIcon } from '@heroicons/react/24/outline'

import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'

export default function UserDropDown() {
    return (
        <div>
            <Menu>
                <MenuButton className='p-2 rounded-lg border border-zinc-200 text-primary relative'>
                    <UserIcon className='w-5' />
                </MenuButton>

                <MenuItems
                    transition
                    anchor="bottom end"
                    className='rounded-lg shadow w-50 mt-2 border border-zinc-200 p-2 bg-background flex flex-col'
                >
                    <h4 className='pl-2 text-sm font-bold text-primary'>User </h4>
                    <MenuItem>
                        <button className='hover:bg-zinc-200 rounded-lg py-2 pl-2 transition-colors ease-in-out duration-150 cursor-pointer text-sm text-left' onClick={() => signOut(auth)}>Logout</button>
                    </MenuItem>

                </MenuItems>
            </Menu>
        </div>
    )
}