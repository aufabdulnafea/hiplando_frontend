import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import Tabs from "@/components/Tabs";

export default function Login() {
    return (
        <div className="max-w-xl mx-auto mt-20 p-6 text-zinc-600">
            <div className="pb-6">
                <h2 className="text-3xl font-bold">Welcome back!</h2>
                <p className="text-zinc-500">Sign in to continue your equestrian journey</p>
            </div>
            <Tabs tabs={[
                { label: 'Login', content: <LoginForm /> },
                { label: 'Register', content: <RegisterForm /> },
            ]} />
        </div>
    );
}