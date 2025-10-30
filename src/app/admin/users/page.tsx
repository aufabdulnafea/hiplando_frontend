import { DataTableDemo } from '@/components/data-table'

export default function AdminUsersPage() {
    return (
      <div className="flex-1 relative">
        <div className="absolute inset-0 overflow-hidden flex">
          <DataTableDemo />
        </div>
      </div>
    )
  }
  