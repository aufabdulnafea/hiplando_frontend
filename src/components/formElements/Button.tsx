import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from "react";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
}

export default function Button(props: ButtonProps) {
    const {className} = props
    const defaultClasses = "w-full p-3 flex items-center justify-center rounded-full cursor-pointer transition ease-in-out duration-150";
    const combinedClasses = clsx(defaultClasses, className);

    return (
        <button {...props} className={combinedClasses}>
            {props.children}
        </button>
    )
}

export function GoogleButton(props: ButtonProps) {
    return (
        <Button className="bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-300" {...props}>
            <FaGoogle className="mr-2 text-red-600 h-5" /> Continue with Google
        </Button>
    )
}

export function AppleButton(props: ButtonProps) {
    return (
        <Button className="bg-black hover:bg-zinc-700 text-white" {...props}>
            <FaApple className="mr-2 h-5" /> Continue with Apple
        </Button>
    )
}

export function FacebookButton(props: ButtonProps) {
    return (
        <Button className="bg-[#2563eb] hover:bg-blue-500 text-white" {...props}>
            <FaFacebookF className="mr-2 h-5" /> Continue with Facebook
        </Button>
    )
}

export function PrimaryButton(props: ButtonProps) {
    const {className} = props
    const defaultClasses = "bg-primary hover:bg-primary/80 text-white ";
    const combinedClasses = clsx(defaultClasses, className);
    return (
        <Button className={combinedClasses} {...props}>
            {props.children}
        </Button>
    )
}