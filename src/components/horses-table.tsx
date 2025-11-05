"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useHorses } from "@/hooks/user-horses";
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

export function HorseTable() {
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
            useHorses({
                page,
                pageSize,
                search,
                sort,
            }),
        // keepPreviousData: true,
    });

    const horses = query.data?.findManyHorse ?? [];

    const toggleSort = (field: string) => {
        setSort((prev) => {
            if (!prev || prev.field !== field) return { field, direction: "asc" };
            if (prev.direction === "asc") return { field, direction: "desc" };
            return null;
        });
    };

    return (
        <div className="space-y-4">
            {/* Search */}
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
                            {["name", "breed", "birthDate"].map((field) => (
                                <TableHead
                                    key={field}
                                    onClick={() => toggleSort(field)}
                                    className="cursor-pointer"
                                >
                                    {field}
                                    {sort?.field === field &&
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
                                <TableRow key={h.id}>
                                    <TableCell>{h.name}</TableCell>
                                    <TableCell>{h.name}</TableCell>
                                    <TableCell>{h.name}</TableCell>
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
