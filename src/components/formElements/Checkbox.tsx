import { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    label: string
}

export default function checkbox(props: CheckboxProps) {
    const { id, label } = props
    return (
        <div className="flex items-center">
            <input
                id={id}
                type="checkbox"
            // className="
            //     appearance-none w-4 h-4 border-2 border-blue-500 rounded-sm bg-white
            //     mt-1 shrink-0
            //     checked:bg-blue-800 checked:border-0
            // "
            />
            <label htmlFor={id} className="ms-2 text-sm">{label}</label>
        </div>
    )
}