'use client';
import { FormEvent, useState } from "react";
import TextInput from "../formElements/TextInput";
import { EnvelopeIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { AppleButton, FacebookButton, GoogleButton, PrimaryButton } from "../formElements/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";


export default function RegisterForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function register(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={register} className="flex flex-col gap-3">
            <TextInput
                id="full-name"
                type="text"
                placeholder="Full Name"
                value={email}
                onChange={e => setEmail(e.target.value)}
                icon={<UserIcon className="h-5" />}
            />
            <TextInput
                id="email"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                icon={<EnvelopeIcon className="h-5" />}
            />
            <TextInput
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                icon={<LockClosedIcon className="h-5" />}
            />
            <TextInput
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                icon={<LockClosedIcon className="h-5" />}
            />
            <div className="pt-3">
                <PrimaryButton type="submit">Login</PrimaryButton>
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
                <GoogleButton />
                <AppleButton />
                <FacebookButton />
            </div>
        </form>
    )
}