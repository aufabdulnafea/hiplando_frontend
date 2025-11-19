"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { useRouter } from "next/navigation"

export type CategoryType = {
    id: string,
    name: string,
    imageUrl: string,
}

export const columns: ColumnDef<CategoryType>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    },
    {
        accessorKey: "imageUrl",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Image" />,
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const category = row.original
            const router = useRouter()

            return (
                <div className="flex justify-end">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(category.id)}
                            >
                                Copy category ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onSelect={(e) => {
                                    e.preventDefault() // prevent Radix from interfering
                                    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))
                                    setTimeout(() => {
                                        router.push(`/admin/horses/categories/${category.id}`)
                                    }, 50)
                                }}
                            >
                                View Category
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        },
    },
]