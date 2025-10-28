// components/admin/AddItemModal.tsx
'use client'

import { useState, useRef, useEffect } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AddItemModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    onSubmit: (formData: Record<string, string>) => void
    fields: { name: string; label: string; type?: string }[]
}

export default function AddItemModal({
    isOpen,
    onClose,
    title,
    onSubmit,
    fields,
}: AddItemModalProps) {
    const [formData, setFormData] = useState<Record<string, string>>({})
    const inputRefs = useRef<HTMLInputElement[]>([])

    const handleChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        onSubmit(formData)
        onClose()
    }

    // Focus first input when modal opens
    useEffect(() => {
        if (isOpen && inputRefs.current[0]) {
            inputRefs.current[0].focus()
        }
    }, [isOpen])

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 py-2">
                    {fields.map((field, index) => (
                        <div key={field.name} className="flex flex-col gap-2">
                            <Label htmlFor={field.name}>{field.label}</Label>
                            <Input
                                id={field.name}
                                type={field.type || "text"}
                                value={formData[field.name] || ""}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault()
                                        if (index === fields.length - 1) handleSubmit()
                                        else inputRefs.current[index + 1]?.focus()
                                    }
                                }}
                                ref={(el) => {
                                    if (el) inputRefs.current[index] = el
                                }}
                            />
                        </div>
                    ))}
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
