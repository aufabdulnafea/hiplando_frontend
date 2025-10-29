import UsersTable from "./usersTable";

// import NotificationsDropDown from "@/components/NotificationsDropDown";
// show tabs to add and edit
// horses
// horseCategories
// horseSexes
// horseDisciplines

export default function AdminUsersPage() {
    return (
        <div className="flex-1 flex flex-col">
            <div className="p-4">
                <UsersTable />
            </div>
        </div>
    )
}