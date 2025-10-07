import { TextareaHTMLAttributes } from "react";

export default function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            className="w-full relative rounded-xl border border-zinc-300 bg-white px-4 py-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
            {...props}
        />
    )
}