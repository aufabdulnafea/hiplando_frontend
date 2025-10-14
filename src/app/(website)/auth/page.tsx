'use client';
import Container from "@/components/Container";
import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import Tabs from "@/components/Tabs";
import { motion } from "motion/react";

export default function Login() {
    return (
        <Container>
            <div className="w-full max-w-lg mx-auto text-zinc-600 py-25">
                <div className="pb-6">
                    <h2 className="text-3xl font-bold">Welcome back!</h2>
                    <p className="text-zinc-500">Sign in to continue your equestrian journey</p>
                </div>
                <motion.div animate={{ rotate: 360 }}>
                <Tabs tabs={[
                    { label: 'Login', content: <LoginForm /> },
                    { label: 'Register', content: <RegisterForm /> },
                ]} />
                </motion.div>
            </div>
        </Container>
    );
}