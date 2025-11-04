'use client';

import Container from "@/components/container";
import LoginForm from "@/components/forms/login-form";
import RegisterForm from "@/components/forms/register-form";
import Tabs from "@/components/tabs";
// import { motion } from "motion/react";

export default function Login() {
    return (
        <Container>
            <div className="w-full max-w-lg mx-auto text-zinc-600 py-25">
                <div className="pb-6">
                    <h2 className="text-3xl font-bold">Welcome back!</h2>
                    <p className="text-zinc-500">Sign in to continue your equestrian journey</p>
                </div>
                <Tabs tabs={[
                    { label: 'Login', content: <LoginForm /> },
                    { label: 'Register', content: <RegisterForm /> },
                ]} />
            </div>
        </Container>
    );
}