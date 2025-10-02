import { InputHTMLAttributes, ReactNode, useState } from "react";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';


interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode,
}

export default function TextInput(props: TextInputProps) {
    const { icon, type } = props;
    const [showPassword, setShowPassword] = useState(false)

    function toggleShowPassword() {
        setShowPassword(val => !val)
    }

    return (
        <div className="w-full relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                {/* <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                {icon || null}
            </div>
            <input
                className={`w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary 
                    ${icon ? 'pl-10' : ''}
                    ${type === 'password' ? 'pr-10' : ''}
                    `}
                {...props}
                type={type === 'password' ? (showPassword ? 'text' : type) : type}
                
            />
            {type === 'password' ? (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    {
                        
                        <button className="py-2" onClick={toggleShowPassword}>
                            {showPassword ? <EyeSlashIcon className="h-5" /> : <EyeIcon className="h-5" />}
                        </button>
                        
                    }
                </div>
            ): null}
        </div>
    )
}