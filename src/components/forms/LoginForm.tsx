'use client';
import { FormEvent, useState } from "react"
import TextInput from "./TextInput"
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function register(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("here", email, password)
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            console.log(user)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={register} className="flex flex-col gap-3">
            <TextInput
                id="email"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <TextInput
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div className="pt-3">
                <button
                    className="w-full py-3 flex items-center justify-center rounded-full bg-primary text-white"
                    type="submit"
                >
                    Login
                </button>
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
                <button
                    className="w-full py-3 flex items-center justify-center rounded-full bg-white border border-zinc-300"
                    type="submit"
                >
                    Continue with Google
                </button>
                <button
                    className="w-full py-3 flex items-center justify-center rounded-full bg-black text-white"
                    type="submit"
                >
                    Continue with Apple
                </button>
                <button
                    className="w-full py-3 flex items-center justify-center rounded-full bg-blue-700 text-white"
                    type="submit"
                >
                    Continue with Facebook
                </button>
            </div>
        </form>
    )
}