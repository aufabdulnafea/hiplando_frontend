"use client"

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Table } from "@tanstack/react-table"
import { Settings2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

interface DataTableViewOptionsProps<TData> {
    table: Table<TData>
}

export function DataTableViewOptions<TData>({
    table,
}: DataTableViewOptionsProps<TData>) {
    const columns = table
        .getAllColumns()
        .filter(
            (column) =>
                typeof column.accessorFn !== "undefined" && column.getCanHide()
        )

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="ml-auto flex items-center gap-1 text-sm font-medium transition-all hover:shadow-sm"
                >
                    <Settings2 className="h-4 w-4" />
                    <span className="hidden sm:inline">View</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                sideOffset={8}
                className="w-[180px]"
            >
                <DropdownMenuLabel className="text-xs uppercase tracking-wide text-muted-foreground">
                    Toggle columns
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {columns.length ? (
                    columns.map((column) => (
                        <DropdownMenuCheckboxItem
                            key={column.id}
                            checked={column.getIsVisible()}
                            onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            className="flex items-center capitalize rounded-md text-sm transition-colors hover:bg-muted/50"
                        >
                            {column.id.replace(/[-_]/g, " ")}
                        </DropdownMenuCheckboxItem>
                    ))
                ) : (
                    <div className="px-3 py-2 text-xs text-muted-foreground">
                        No toggleable columns
                    </div>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
