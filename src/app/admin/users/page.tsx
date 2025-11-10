// import { DataTableDemo } from '@/components/data-table'
// import { UsersTable } from '@/components/users-table'

import { UsersTable } from "./users-table";

export default function AdminUsersPage() {
  return (
    <div className="max-w-screen overflow-hidden px-4 pt-4 flex flex-col gap-10">
      <UsersTable />
    </div>
  )
}
