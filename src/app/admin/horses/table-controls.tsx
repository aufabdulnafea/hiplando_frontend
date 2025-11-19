import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus } from "lucide-react";
import { AddItemModal } from './add-item-forms'

export interface TableControlsProps {
    type: 'category' | 'gender' | 'discipline'
}

export function TableControls(props: TableControlsProps) {
    const { type } = props
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <Button size='icon' variant='outline' onClick={() => setIsOpen(true)}>
                <Plus />
            </Button>
            <AddItemModal type={type} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    )
}