"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useUsers } from "@/hooks/use-users";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function UsersTable() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState<{
        field: string;
        direction: "asc" | "desc";
    } | null>(null);

    const pageSize = 10;

    const query = useQuery({
        queryKey: ["horses", page, search, sort],
        queryFn: () =>
            useUsers({
                page,
                pageSize,
                search,
                sort,
            })
    });

    const horses = query.data?.findManyUser ?? [];

    const toggleSort = (field: string) => {
        setSort((prev) => {
            if (!prev || prev.field !== field) return { field, direction: "asc" };
            if (prev.direction === "asc") return { field, direction: "desc" };
            return null;
        });
    };

    const headers = [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "phoneNumber", label: "Phone Number" },
        { key: "whatsAppNumber", label: "WhatsApp Number" },
        { key: "role", label: "Role" },
        { key: "verifiedSeller", label: "Verified Seller" },
    ]

    return (
        <div className="space-y-4">
            <Input
                placeholder="Search horses..."
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                }}
                className="w-64"
            />

            {/* Table */}
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {headers.map((header) => (
                                <TableHead
                                    key={header.key}
                                    onClick={() => toggleSort(header.key)}
                                    className="cursor-pointer"
                                >
                                    {header.label}
                                    {sort?.field === header.key &&
                                        (sort.direction === "asc" ? " ▲" : " ▼")}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {query.isLoading ? (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center">
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : horses.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center">
                                    No results found
                                </TableCell>
                            </TableRow>
                        ) : (
                            horses.map((h) => (
                                <TableRow key={h.uid}>
                                    <TableCell>{h.name}</TableCell>
                                    <TableCell>{h.email}</TableCell>
                                    <TableCell>{h.phoneNumber}</TableCell>
                                    <TableCell>{h.whatsAppNumber}</TableCell>
                                    <TableCell>{h.role}</TableCell>
                                    <TableCell>{h.verifiedSeller}</TableCell>
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
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm">Page {page}</span>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage((p) => p + 1)}
                    disabled={horses.length < pageSize}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
