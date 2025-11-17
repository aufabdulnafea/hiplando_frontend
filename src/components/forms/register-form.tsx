'use client';
import { FormEvent, useState } from "react";
// import { UserIcon } from "@heroicons/react/24/outline";
import { User } from 'lucide-react'
import PasswordInput from '@/components/shadcn-studio/input/input-26'
import InputWithIcon from '@/components/shadcn-studio/input/input-14'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Button } from '@/components/ui/button'

export default function RegisterForm() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    async function register(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Get Firebase ID token
            const token = await user.getIdToken();

            // Send token to your Express backend
            const response = await fetch("http://localhost:4000/api/v1/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ full_name: fullName }),
            });
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={register} className="flex flex-col gap-2">
            <InputWithIcon
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                icon={<User className="size-4" />}
                placeholder="Full name"
            />
            <InputWithIcon
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
            />
            <PasswordInput value={password} onChange={e => setPassword(e.target.value)} />
            <PasswordInput value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />
            <Button size="lg" type="submit" className="w-full rounded-full">Register</Button>
            <Button variant='link'>Forgot Password?</Button>

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
        </form>
    )
}