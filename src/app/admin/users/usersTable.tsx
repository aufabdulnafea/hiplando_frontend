// 'use client';

// import { graphql } from "@/graphql";
// import { UsersQuery } from '@/graphql/graphql'
// import { execute } from "@/graphql/execute";
// import {
//     useReactTable,
//     getCoreRowModel,
//     getSortedRowModel,
//     flexRender,
//     ColumnDef,
//     SortingState,
// } from "@tanstack/react-table";
// import { useEffect, useState } from "react";

// type User = NonNullable<UsersQuery["users"]>[number];

// const columns: ColumnDef<User>[] = [
//     { accessorKey: "name", header: "Name" },
//     { accessorKey: "email", header: "E-mail" },
//     { accessorKey: "phoneNumber", header: "Phone" },
//     { accessorKey: "whatsAppNumber", header: "WhatsApp" },
//     { accessorKey: "verifiedSeller", header: "Verified" },
//     { accessorKey: "role", header: "Role" },
// ];

// export default function UsersTable() {
//     const [users, setUsers] = useState<User[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//     const [sorting, setSorting] = useState<SortingState>([]);

//     useEffect(() => {
//         const readHorsesDocument = graphql(`
//             query users {
//                 users {
//                     id
//                     name
//                     firebaseUid
//                     phoneNumber
//                     email
//                     whatsAppNumber
//                     verifiedSeller
//                     role
//                     createdAt
//                     updatedAt
//                 }
//             }
//         `);

//         execute(readHorsesDocument)
//             .then((res) => {
//                 const users = (res.data?.users || []);
//                 setUsers(users);

//             })
//             .catch((err) => setError(err.message))
//             .finally(() => setLoading(false));
//     }, []);

//     const table = useReactTable({
//         data: users,
//         columns,
//         state: { sorting },
//         onSortingChange: setSorting,
//         getCoreRowModel: getCoreRowModel(),
//         getSortedRowModel: getSortedRowModel(),
//     });

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center py-10 text-zinc-400">
//                 Loading horses...
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="p-4 text-red-400 bg-red-950/30 border border-red-800 rounded-xl">
//                 Error loading horses: {error}
//             </div>
//         );
//     }

//     if (users.length === 0) {
//         return (
//             <div className="p-6 text-center text-zinc-500 border border-zinc-800 rounded-xl">
//                 No horses found.
//             </div>
//         );
//     }

//     return (
//         <div className="overflow-x-auto rounded-xl border border-zinc-800">
//             <table className="min-w-full text-sm text-zinc-300">
//                 <thead className="bg-zinc-900/50 text-zinc-400">
//                     {table.getHeaderGroups().map((headerGroup) => (
//                         <tr key={headerGroup.id}>
//                             {headerGroup.headers.map((header) => (
//                                 <th
//                                     key={header.id}
//                                     className="px-4 py-2 text-left font-semibold cursor-pointer select-none"
//                                     onClick={header.column.getToggleSortingHandler()}
//                                 >
//                                     <div className="flex items-center gap-1">
//                                         {flexRender(header.column.columnDef.header, header.getContext())}
//                                         {{
//                                             asc: "↑",
//                                             desc: "↓",
//                                         }[header.column.getIsSorted() as string] ?? null}
//                                     </div>
//                                 </th>
//                             ))}
//                         </tr>
//                     ))}
//                 </thead>

//                 <tbody>
//                     {table.getRowModel().rows.map((row) => (
//                         <tr key={row.id} className="hover:bg-zinc-900/50 transition-colors">
//                             {row.getVisibleCells().map((cell) => (
//                                 <td key={cell.id} className="px-4 py-2 border-t border-zinc-800">
//                                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                                 </td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }


export default function UsersTable() {
    return (
        <div></div>
    )
}