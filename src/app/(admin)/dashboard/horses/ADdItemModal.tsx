// components/admin/AddItemModal.tsx
'use client'

import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function AddItemModal({
    isOpen,
    onClose,
    title,
    onSubmit,
    fields,
}: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    onSubmit: (formData: Record<string, string>) => void;
    fields: { name: string; label: string; type?: string }[];
}) {
    const [formData, setFormData] = useState<Record<string, string>>({});

    const handleChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        onSubmit(formData);
        onClose();
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto flex items-center justify-center p-4">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-150"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <DialogPanel className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl max-w-md w-full p-6">
                            <DialogTitle className="text-lg font-semibold mb-4 text-zinc-100">
                                {title}
                            </DialogTitle>

                            <div className="space-y-4">
                                {fields.map((field) => (
                                    <div key={field.name} className="flex flex-col gap-1">
                                        <label className="text-sm text-zinc-400">{field.label}</label>
                                        <input
                                            type={field.type || "text"}
                                            value={formData[field.name] || ""}
                                            onChange={(e) => handleChange(field.name, e.target.value)}
                                            className="bg-zinc-800 border border-zinc-700 text-zinc-200 rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex justify-end gap-2">
                                <button
                                    onClick={onClose}
                                    className="px-3 py-1.5 bg-zinc-800 text-zinc-400 rounded hover:bg-zinc-700"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="px-3 py-1.5 bg-zinc-100 text-zinc-900 rounded hover:bg-zinc-200"
                                >
                                    Save
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    );
}
