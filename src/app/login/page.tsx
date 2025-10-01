import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import Tabs from "@/components/Tabs";

export default function Login() {
    return (
        <div className="max-w-xl mx-auto mt-20 p-6 bg-white rounded-3xl shadow text-zinc-600">
            <Tabs tabs={[
                { label: 'Login', content: <LoginForm /> },
                { label: 'Register', content: <RegisterForm /> },
            ]} />
        </div>
    );
}