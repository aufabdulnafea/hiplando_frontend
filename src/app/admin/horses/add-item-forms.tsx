
'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogTitle } from "@/components/ui/dialog";
import { addCategory, AddCategoryFormData, addCategorySchema, addDiscipline, AddDisciplineFormData, addDisciplineSchema, addGender, AddGenderFormData, addGenderSchema } from "@/lib/api";
import { toast } from "sonner";

export function AddCategoryForm() {
    const form = useForm<AddCategoryFormData>({
        resolver: zodResolver(addCategorySchema),
        defaultValues: { name: "", image: null },
    });


    const onSubmit = async (data: AddCategoryFormData) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("image", data.image[0]); // data.file is a FileList

        try {
            await addCategory(formData)
        } catch (err) {
            console.error(err)
            toast.error("Failed to add category")
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" id="add-item-form">
                {/* Name field */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter name" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* File field */}
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>File</FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    accept=".png,.jpg,.jpeg,.webp,.tif"
                                    onChange={(e) => field.onChange(e.target.files)}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>

    )


}

export function AddDisciplineForm() {
    const form = useForm<AddDisciplineFormData>({
        resolver: zodResolver(addDisciplineSchema),
        defaultValues: { name: "" }
    });

    const onSubmit = async (data: AddDisciplineFormData) => {
        try {
            await addDiscipline(data)
        } catch (err) {
            console.error(err)
            toast.error("Failed to add discipline")
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" id="add-item-form">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl><Input placeholder="Enter name" {...field} /></FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}

export function AddGenderForm() {

    const form = useForm<AddGenderFormData>({
        resolver: zodResolver(addGenderSchema),
        defaultValues: { name: "" }
    });


    const onSubmit = async (data: AddGenderFormData) => {
        try {
            await addGender(data)
        } catch (err) {
            console.error(err)
            toast.error("Failed to add gender")
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" id="add-item-form">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter name" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}

export interface AddItemModalProps {
    type: "category" | "gender" | "discipline"
    isOpen: boolean
    onClose: () => void
}

export function AddItemModal(props: AddItemModalProps) {
    const { isOpen, onClose, type } = props

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogDescription className="sr-only">Add horse category</DialogDescription>
            <DialogOverlay className="backdrop-blur-xs" />
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{`Add ${type}`}</DialogTitle>
                </DialogHeader>

                {type === "category" && <AddCategoryForm />}
                {type === "discipline" && <AddDisciplineForm />}
                {type === "gender" && <AddGenderForm />}

                <DialogFooter>
                    <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                    <Button type="button" onClick={() => document.getElementById('add-item-form')?.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))}>
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>

        </Dialog>
    )

}