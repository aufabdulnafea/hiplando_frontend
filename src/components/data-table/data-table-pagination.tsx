import { Table } from "@tanstack/react-table"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DataTablePaginationProps<TData> {
    table: Table<TData>
}

export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
    const pageCount = table.getPageCount()
    const currentPage = table.getState().pagination.pageIndex
    const visiblePages = getVisiblePages(currentPage, pageCount)

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-2 bg-background">
            <div className="text-muted-foreground text-sm hidden lg:block">
                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 w-full sm:w-auto">
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium hidden sm:block">Rows per page</p>
                    <Select
                        value={`${table.getState().pagination.pageSize}`}
                        onValueChange={(value) => {
                            table.setPageSize(Number(value))
                        }}
                    >
                        <SelectTrigger className="h-8 w-[80px]">
                            <SelectValue placeholder={table.getState().pagination.pageSize} />
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[10, 20, 25, 30, 40, 50].map((pageSize) => (
                                <SelectItem key={pageSize} value={`${pageSize}`}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex items-center space-x-1">
                    <Button
                        variant="outline"
                        size="icon"
                        className="hidden size-8 lg:flex"
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronsLeft className="h-4 w-4" />
                        <span className="sr-only">First</span>
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="size-8"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Previous</span>
                    </Button>

                    <div className="hidden lg:flex items-center space-x-1">
                        {visiblePages.map((pageNumber, i) =>
                            pageNumber === "..." ? (
                                <span key={i} className="px-2 text-muted-foreground">
                                    ...
                                </span>
                            ) : (
                                <Button
                                    key={i}
                                    variant={
                                        currentPage === pageNumber - 1 ? "default" : "outline"
                                    }
                                    size="sm"
                                    className="w-8"
                                    onClick={() => table.setPageIndex(pageNumber - 1)}
                                >
                                    {pageNumber}
                                </Button>
                            )
                        )}
                    </div>

                    <Button
                        variant="outline"
                        size="icon"
                        className="size-8"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Next</span>
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="hidden size-8 lg:flex"
                        onClick={() => table.setPageIndex(pageCount - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronsRight className="h-4 w-4" />
                        <span className="sr-only">Last</span>
                    </Button>
                </div>

                <div className="text-sm font-medium lg:hidden">
                    Page {currentPage + 1} of {pageCount}
                </div>
            </div>
        </div>
    )
}

function getVisiblePages(current: number, total: number): (number | "...")[] {
    const delta = 2
    const range: (number | "...")[] = []
    const left = Math.max(1, current + 1 - delta)
    const right = Math.min(total, current + 1 + delta)

    for (let i = left; i <= right; i++) range.push(i)

    if (left > 2) range.unshift("...")
    if (left > 1) range.unshift(1)
    if (right < total - 1) range.push("...")
    if (right < total) range.push(total)

    return range
}
