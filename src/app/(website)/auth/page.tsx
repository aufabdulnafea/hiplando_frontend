'use client';

import Container from "@/components/container";
import LoginForm from "@/components/forms/login-form";
import RegisterForm from "@/components/forms/register-form";
import { TabsComponent } from "@/components/tabs";
// import { motion } from "motion/react";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import { auth } from '@/lib/firebase'



export default function Login() {
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) return router.replace('/')
            setLoading(false)
        })
        return unsubscribe
    }, [router])

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <Container>
            <div className="w-full max-w-lg mx-auto py-35">
                <div className="pb-6">
                    <h2 className="text-3xl font-bold">Welcome back!</h2>
                    <p className="text-zinc-500">Sign in to continue your equestrian journey</p>
                </div>
                <TabsComponent tabs={[
                    { label: 'Login', content: <LoginForm /> },
                    { label: 'Register', content: <RegisterForm /> },
                ]} />
            </div>
        </Container>
    );
}