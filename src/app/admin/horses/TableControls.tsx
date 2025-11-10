import { Button } from "@/components/ui/button";
// import AddItemModal from "./AddItemModal";
import { useState } from "react";
import { Plus } from "lucide-react";
import { AddItemModal } from './add-item-forms'

export interface TableControlsProps {
    type: 'category' | 'gender' | 'discipline'
}

export default function TableControls(props: TableControlsProps) {
    const { type } = props
    const [isOpen, setIsOpen] = useState(false)
    const lable = type === 'category' ? "Categories" : type === 'discipline' ? "Disciplines" : type === 'gender' ? "Genders" : ""

    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="font-bold">{lable}</div>
                <Button size='icon-sm' variant='outline' onClick={() => setIsOpen(true)}>
                    <Plus />
                </Button>
            </div>
            <AddItemModal type={type} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    )
}