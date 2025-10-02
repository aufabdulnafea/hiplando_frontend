import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'

export function Notification() {
    return (
        <div className='border-xl bg-white border border-primary/20 p-2 rounded-lg'>
            Test
        </div>
    )
}

export default function NotificationsDropDown() {
    return (
        <div>
            <Menu>
                <MenuButton className='p-2 rounded-lg border border-zinc-200 text-primary relative'>
                    <div className='w-1.5 h-1.5 rounded-full bg-red-500 absolute right-3'></div>
                    <BellIcon className='w-5' />
                </MenuButton>

                <MenuItems
                    transition
                    anchor="bottom end"
                    className='rounded-lg shadow w-xs mt-2 border border-zinc-200 p-3 bg-background'
                >
                    <div className='flex justify-between pb-3 items-center'>
                        <h4 className='text-primary font-bold text-sm'>2 New</h4>
                        <p className='text-primary text-sm'>Mark all as read</p>
                    </div>
                    <MenuItem>
                        <Notification />
                    </MenuItem>

                </MenuItems>
            </Menu>
        </div>
    )
}