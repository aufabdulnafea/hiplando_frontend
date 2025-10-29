'use client';

import { graphql } from "@/graphql";
import { execute } from "@/graphql/execute";
import { HorsesQuery } from "@/graphql/graphql";

import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    flexRender,
    ColumnDef,
    SortingState,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";

type Horse = NonNullable<HorsesQuery["horses"]>[number];

const columns: ColumnDef<Horse>[] = [
    { accessorKey: "id", header: "ID" },
    {
        accessorKey: "user.name",
        header: "Owner",
        cell: info => info.getValue() ?? "—",
    },
    {
        accessorKey: "price",
        header: "Price ($)",
        cell: info => `$${info.getValue()}`,
    },
    {
        accessorKey: "gender.name",
        header: "Gender",
        cell: info => info.getValue() ?? "—",
    },
    {
        accessorKey: "discipline.name",
        header: "Discipline",
        cell: info => info.getValue() ?? "—",
    },
    {
        accessorKey: "location",
        header: "Location",
        cell: info => info.getValue() ?? "—",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: info => info.getValue() ?? "—",
    },
];

export default function HorsesTable() {
    const [horses, setHorses] = useState<Horse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [sorting, setSorting] = useState<SortingState>([]);

    // 🧠 Fetch Horses from GraphQL
    useEffect(() => {
        const readHorsesDocument = graphql(`
      query horses {
        horses {
          id
          price
          height
          gender {
            id
            name
          }
          discipline {
            id
            name
          }
          user {
            id
            name
            email
            whatsAppNumber
          }
          location
          status
        }
      }
    `);

        execute(readHorsesDocument)
            .then((res) => {
                const horses = (res.data?.horses || []).map((h: any) => ({
                    ...h,
                    id: Number(h.id),
                    sex: h.sex ? { ...h.sex, id: Number(h.sex.id) } : undefined,
                    discipline: h.discipline ? { ...h.discipline, id: Number(h.discipline.id) } : undefined,
                    user: h.user ? { ...h.user, id: Number(h.user.id) } : undefined,
                }));
                setHorses(horses);

            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => setLoading(false));
    }, []);

    const table = useReactTable({
        data: horses,
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    // 💬 Handle Loading / Error / Empty states
    if (loading) {
        return (
            <div className="flex justify-center items-center py-10 text-zinc-400">
                Loading horses...
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 text-red-400 bg-red-950/30 border border-red-800 rounded-xl">
                Error loading horses: {error}
            </div>
        );
    }

    if (horses.length === 0) {
        return (
            <div className="p-6 text-center text-zinc-500 border border-zinc-800 rounded-xl">
                No horses found.
            </div>
        );
    }

    return (
        <div className="overflow-x-auto rounded-xl border border-zinc-800">
            <table className="min-w-full text-sm text-zinc-300">
                <thead className="bg-zinc-900/50 text-zinc-400">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="px-4 py-2 text-left font-semibold cursor-pointer select-none"
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    <div className="flex items-center gap-1">
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {{ asc: "↑", desc: "↓", }[header.column.getIsSorted() as string] ?? null}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="hover:bg-zinc-900/50 transition-colors">
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="px-4 py-2 border-t border-zinc-800">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
