"use client";

import { useState } from "react";
import { useUsers } from "@/hooks/use-users";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SortingState } from "@tanstack/react-table";

export function UsersTable() {
    const [pageIndex, setPageIndex] = useState(0); // 0-based for skip calculation
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState<SortingState>([]);

    const pageSize = 10;

    const { data, isLoading } = useUsers({
        pageIndex,
        pageSize,
        search,
        sorting,
    });

    const users = data?.users ?? [];
    const totalCount = data?.count ?? 0;
    const totalPages = Math.ceil(totalCount / pageSize);

    const toggleSort = (field: string) => {
        setSorting((prev) => {
            if (!prev.length || prev[0].id !== field)
                return [{ id: field, desc: false }];
            if (!prev[0].desc) return [{ id: field, desc: true }];
            return [];
        });
    };

    const headers = [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "phoneNumber", label: "Phone Number" },
        { key: "whatsAppNumber", label: "WhatsApp Number" },
        { key: "role", label: "Role" },
        { key: "verifiedSeller", label: "Verified Seller" },
    ];

    return (
        <div className="space-y-4">
            {/* Search input */}
            <Input
                placeholder="Search users..."
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setPageIndex(0);
                }}
                className="w-64"
            />

            {/* Table */}
            <div className="rounded-md border overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {headers.map((header) => (
                                <TableHead
                                    key={header.key}
                                    onClick={() => toggleSort(header.key)}
                                    className="cursor-pointer select-none"
                                >
                                    {header.label}
                                    {sorting[0]?.id === header.key &&
                                        (sorting[0].desc ? " ▼" : " ▲")}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {isLoading ? (
                            <TableRow>
                                <TableCell
                                    colSpan={headers.length}
                                    className="text-center py-6 text-sm text-muted-foreground"
                                >
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : users.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={headers.length}
                                    className="text-center py-6 text-sm text-muted-foreground"
                                >
                                    No results found
                                </TableCell>
                            </TableRow>
                        ) : (
                            users.map((u: any) => (
                                <TableRow key={u.uid}>
                                    <TableCell>{u.name}</TableCell>
                                    <TableCell>{u.email}</TableCell>
                                    <TableCell>{u.phoneNumber}</TableCell>
                                    <TableCell>{u.whatsAppNumber}</TableCell>
                                    <TableCell>{u.role}</TableCell>
                                    <TableCell>{u.verifiedSeller ? "Yes" : "No"}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-end space-x-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPageIndex((p) => Math.max(0, p - 1))}
                    disabled={pageIndex === 0 || isLoading}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>

                <span className="text-sm">
                    Page {pageIndex + 1} of {Math.max(totalPages, 1)}
                </span>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPageIndex((p) => p + 1)}
                    disabled={isLoading || pageIndex + 1 >= totalPages}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
