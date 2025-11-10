"use client"

import { ColumnDef } from "@tanstack/react-table"
// import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"
import { FindManyUserQuery } from '@/graphql/sdk'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { useRouter } from "next/navigation"

export type UserType = FindManyUserQuery['findManyUser'][number]

export const columns: ColumnDef<UserType>[] = [
    // {
    //     id: "select",
    //     header: ({ table }) => (
    //         <Checkbox
    //             checked={
    //                 table.getIsAllPageRowsSelected() ||
    //                 (table.getIsSomePageRowsSelected() && "indeterminate")
    //             }
    //             onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //             aria-label="Select all"
    //         />
    //     ),
    //     cell: ({ row }) => (
    //         <Checkbox
    //             checked={row.getIsSelected()}
    //             onCheckedChange={(value) => row.toggleSelected(!!value)}
    //             aria-label="Select row"
    //         />
    //     ),
    //     enableSorting: false,
    //     enableHiding: false,
    // },
    {
        accessorKey: "name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    },
    {
        accessorKey: "email",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
    },
    {
        accessorKey: "phoneNumber",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Phone number" />,
    },
    {
        accessorKey: "whatsAppNumber",
        header: ({ column }) => <DataTableColumnHeader column={column} title="WhatsApp number" />,
    },
    {
        accessorKey: "role",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Role" />,
    },
    {
        accessorKey: "verifiedSeller",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Verified Seller" />,
    },
    {
        id: "listed-horses",
        header: "Listed Horses",
        cell: ({ row }) => {
            const user = row.original
            return (
                <>{user.horses?.length}</>
            )
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const user = row.original
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
                                onClick={() => navigator.clipboard.writeText(user.uid)}
                            >
                                Copy user ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onSelect={(e) => {
                                    e.preventDefault() // prevent Radix from interfering
                                    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))
                                    setTimeout(() => {
                                        router.push(`/admin/users/${user.uid}`)
                                    }, 50)
                                }}
                            >
                                View User
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        },
    },
]