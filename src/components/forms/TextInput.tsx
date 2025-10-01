import { InputHTMLAttributes } from "react";
import { UserIcon } from '@heroicons/react/24/outline';

interface TextInputProps {
    id: string;
    type?: InputHTMLAttributes<HTMLInputElement>['type'];
    placeholder?: string;
}

export default function TextInput(props: TextInputProps) {
    const { id, type = 'text', placeholder = '' } = props;
    return (
        <div className="w-full flex mb-4 rounded-full border border-zinc-300 bg-white px-4 py-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
            <input
                className="flex-1"
                type={type}
                id={id || ''}
                placeholder={placeholder || ''}
            />
        </div>
    )
}