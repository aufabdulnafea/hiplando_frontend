'use client';

import { useAuth } from "@/context/AuthContext";
import Container from "./Container";
import Link from 'next/link';
import { BellIcon, UserIcon } from '@heroicons/react/24/outline'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import NotificationsDropDown from "./NotificationsDropDown";
import UserDropDown from "./UserDropDown";
import Button, { PrimaryButton } from "./formElements/Button";



export default function Navbar() {
    const { user, loading } = useAuth();

    return (
        <nav className="bg-navbar-background-light text-navbar-foreground-light py-4 shadow">
            <Container>
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/" className="text-2xl font-bold text-primary">Hiplando</Link>
                    </div>
                    <div className="flex items-center space-x-6">
                        <ul className="flex space-x-4 hidden">
                            <li className="cursor-pointer">Horses</li>
                            <li className="cursor-pointer">Transport</li>
                            <li className="cursor-pointer">Competitions</li>
                            <li className="cursor-pointer">Services</li>
                            {/* <li className="cursor-pointer">About</li>
                            <li className="cursor-pointer">Contact</li> */}
                        </ul>
                        {
                            user ? (
                                <div className="flex gap-2 items-center">
                                    <UserDropDown />
                                    <NotificationsDropDown />
                                </div>
                            ) : (
                                <Link href='/auth' className="bg-primary py-1.5 px-4 rounded-2xl text-sm text-white">
                                    Login
                                </Link>
                            )
                        }
                    </div>
                </div>
            </Container>


        </nav>
    )
}