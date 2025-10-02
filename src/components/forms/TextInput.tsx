import { ChangeEventHandler, Dispatch, InputHTMLAttributes, SetStateAction } from "react";
import { UserIcon } from '@heroicons/react/24/outline';

interface TextInputProps {
    id: string;
    type?: InputHTMLAttributes<HTMLInputElement>['type'];
    placeholder?: string;
    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
}

export default function TextInput(props: TextInputProps) {
    const { id, type = 'text', placeholder = '' } = props;
    return (
        <div className="w-full relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
                className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 pl-12 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
                type={type}
                id={id || ''}
                placeholder={placeholder || ''}
                autoComplete="new-password"
                onChange={props.onChange || undefined}
            />
        </div>
    )
}