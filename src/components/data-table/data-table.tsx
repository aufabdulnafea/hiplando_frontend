"use client"

import { useState } from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { DataTablePagination } from "@/components/data-table/data-table-pagination"
import { DataTableViewOptions } from "@/components/data-table/data-table-view-options"
import { Skeleton } from "@/components/ui/skeleton"

export interface DataTableProps<TData, TValue> {
    /** Table columns */
    columns: ColumnDef<TData, TValue>[]
    /** Table data */
    data: TData[]
    /** Total number of items (for pagination) */
    totalCount: number
    /** Loading state */
    isLoading?: boolean
    /** Called when pagination changes */
    onPaginationChange?: (pageIndex: number, pageSize: number) => void
    /** Called when sorting changes */
    onSortingChange?: (sorting: SortingState) => void
    /** Optional: label for search input */
    searchPlaceholder?: string
    /** Optional: controlled search value */
    searchValue?: string
    /** Optional: search setter (for controlled search) */
    onSearchChange?: (value: string) => void
}

/**
 * 🌐 Generic Reusable Data Table
 * Handles sorting, pagination, search, and visibility — UI identical to original.
 */
export function DataTable<TData, TValue>({
    columns,
    data,
    totalCount,
    isLoading = false,
    onPaginationChange,
    onSortingChange,
    searchPlaceholder = "Search...",
    searchValue,
    onSearchChange,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})
    const [pageIndex, setPageIndex] = useState(0)
    const [pageSize, setPageSize] = useState(50)
    const [internalSearch, setInternalSearch] = useState("")

    const search = searchValue ?? internalSearch
    const setSearch = onSearchChange ?? setInternalSearch

    const pageCount = Math.ceil(totalCount / pageSize)

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        manualPagination: true,
        manualSorting: true,
        pageCount,
        onSortingChange: (updater) => {
            const next =
                typeof updater === "function" ? updater(sorting) : updater
            setSorting(next)
            onSortingChange?.(next)
        },
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        onPaginationChange: (updater) => {
            const next =
                typeof updater === "function"
                    ? updater({ pageIndex, pageSize })
                    : updater
            setPageIndex(next.pageIndex)
            setPageSize(next.pageSize)
            onPaginationChange?.(next.pageIndex, next.pageSize)
        },
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            pagination: {
                pageIndex,
                pageSize,
            },
        },
    })

    return (
        <div className="space-y-2">
            {/* Toolbar */}
            <div className="flex gap-2">
                <Input
                    placeholder={searchPlaceholder}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="max-w-md"
                />
                <DataTableViewOptions table={table} />
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto rounded-md border">
                <Table className="min-w-[600px]">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead className="py-2" key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {isLoading ? (
                            Array.from({ length: 8 }).map((_, i) => (
                                <TableRow key={`skeleton-${i}`}>
                                    {columns.map((_, j) => (
                                        <TableCell key={`skeleton-cell-${i}-${j}`} className="h-12">
                                            <Skeleton className="h-4 w-[80%]" />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : data.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    className="hover:bg-muted/40 h-12"
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id} className="px-4">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center text-muted-foreground"
                                >
                                    No results found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="py-2">
                <DataTablePagination table={table} />
            </div>
        </div>
    )
}
