
'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogTitle } from "@/components/ui/dialog";

export function AddCategoryForm() {
    const schema = z.object({
        name: z.string().min(1, "Name is required"),
        image: z
            .any()
            .refine((files) => files?.length === 1, "File is required"), // make sure one file is selected
    });

    type FormData = z.infer<typeof schema>;

    const form = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            image: null,
        },
    });


    const onSubmit = async (data: FormData) => {
        console.log("submitting")
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("image", data.image[0]); // data.file is a FileList

        try {
            const res = await fetch("http://localhost:4000/api/v1/admin/horses/category", {
                method: "POST",
                body: formData,
            });
            console.log(await res.json());
        } catch (err) {
            console.error(err);
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

    const schema = z.object({
        name: z.string().min(1, "Name is required"),
    });

    type FormData = z.infer<typeof schema>;

    const form = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
        },
    });


    const onSubmit = async (data: FormData) => {
        try {
            const res = await fetch("http://localhost:4000/api/v1/admin/horses/discipline", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: data.name }),
            });
            console.log(await res.json());
        } catch (err) {
            console.error(err);
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
            </form>
        </Form>

    )


}

export function AddGenderForm() {

    const schema = z.object({
        name: z.string().min(1, "Name is required"),
    });

    type FormData = z.infer<typeof schema>;

    const form = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
        },
    });


    const onSubmit = async (data: FormData) => {
        try {
            const res = await fetch("http://localhost:4000/api/v1/admin/horses/gender", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: data.name }),
            });
            console.log(await res.json());
        } catch (err) {
            console.error(err);
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