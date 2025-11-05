'use client';

import { FormEvent, useState } from "react"
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Button } from "@/components/ui/button";
import PasswordInput from '@/components/shadcn-studio/input/input-26'
import InputWithIcon from '@/components/shadcn-studio/input/input-14'
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    async function login(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <form onSubmit={login} className="flex flex-col gap-2">
                <InputWithIcon
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                    type="email"
                />
                <PasswordInput
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                />
                <Button type="submit" className="w-full rounded-full h-10">Login</Button>

                <Button variant='link'>Forgot Password?</Button>

            </form >
            <div className="flex items-center mb-2">
                <div className="flex-grow border-b border-neutral-300 dark:border-neutral-800"></div>
                <span className="mx-4 text-neutral-500 text-sm dark:text-neutral-500">Or continue with</span>
                <div className="flex-grow border-t border-neutral-300 dark:border-neutral-800"></div>
            </div>

            <div className="flex gap-2 pt-4">
                <Button size='lg' className="flex-1 rounded-full bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-300">
                    <FaGoogle className="mr-2 text-red-600 h-5" /> Google
                </Button>
                <Button size='lg' className="flex-1 rounded-full bg-black hover:bg-zinc-700 dark:border dark:border-neutral-800 text-white">
                    <FaApple className="mr-2 h-5" /> Apple
                </Button>
                <Button size='lg' className="flex-1 rounded-full bg-[#2563eb] hover:bg-blue-500 text-white">
                    <FaFacebookF className="h-5" />Facebook
                </Button>
            </div>
        </>
    )
}