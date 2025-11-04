import { Button } from "@/components/ui/button";
import AddItemModal from "./ADdItemModal";
import { useState } from "react";
import { Plus } from "lucide-react";

export interface TableControlsProps {
    onSubmit: (formData: Record<string, string>) => void;
    type: 'category' | 'gender' | 'discipline'
}

export default function TableControls(props: TableControlsProps) {
    const { type, onSubmit } = props
    const [isOpen, setIsOpen] = useState(false)
    const lable = type === 'category' ? "Categories" : type === 'discipline' ? "Disciplines" : type === 'gender' ? "Genders" : ""
    const title = type === 'category' ? "Add Category" : type === 'discipline' ? "Add Discipline" : type === 'gender' ? "Add Gender" : ""

    const fields =
        type === "category"
            ? [
                { name: "name", label: "Category Name" },
                { name: "imageUrl", label: "Image URL" },
            ]
            : [{ name: "name", label: "Name" }];

    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="font-bold text-neutral-300">{lable}</div>
                <Button size='icon-sm' variant='outline' onClick={() => setIsOpen(true)}>
                    <Plus />
                </Button>
            </div>
            <AddItemModal
                fields={fields}
                onSubmit={onSubmit}
                title={title}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    )
}