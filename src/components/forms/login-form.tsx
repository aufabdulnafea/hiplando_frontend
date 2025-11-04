'use client';

import { FormEvent, useState } from "react"
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { EyeIcon, EyeOffIcon, MailIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isVisible, setIsVisible] = useState(false)

    function toggleVisibility() {
        setIsVisible(val => !val)
    }

    async function login(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={login} className="flex flex-col gap-3">
            <div className="w-full space-y-2">
                <div className="relative">
                    <div className="text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50">
                        <MailIcon className="size-5" />
                        <span className="sr-only">User</span>
                    </div>
                    <Input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        className="peer pl-10 text-base rounded-xl h-10"
                    />
                </div>
            </div>

            <div className='relative mb-3'>
                <Input
                    id="password"
                    type={isVisible ? 'text' : 'password'}
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='pr-12 text-base rounded-xl h-10'
                />

                <div>
                    <Button
                        variant='ghost'
                        size='icon'
                        onClick={toggleVisibility}
                        className='text-muted-foreground pr-2 focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent h-full'
                    >
                        {isVisible ? <EyeOffIcon className="size-5" /> : <EyeIcon className="size-5" />}
                        <span className='sr-only'>{isVisible ? 'Hide password' : 'Show password'}</span>
                    </Button>
                </div>
            </div>

            <div>
                <Button type="submit" className="w-full rounded-full h-10">Login</Button>
            </div>
            <div className="text-center text-primary">
                <a href="">Forgot Password?</a>
            </div>
            <div className="flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500">Or continue with</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex flex-col gap-2">
                <Button type="submit" className="w-full rounded-full bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-300">
                    <FaGoogle className="mr-2 text-red-600 h-5" /> Google Login
                </Button>
                <Button type="submit" className="w-full rounded-full bg-black hover:bg-zinc-700 text-white">
                    <FaApple className="mr-2 h-5" /> Apple Login
                </Button>
                <Button type="submit" className="w-full rounded-full bg-[#2563eb] hover:bg-blue-500 text-white">
                    <FaFacebookF className="mr-2 h-5" /> Facebook Login
                </Button>
            </div>
        </form>
    )
}