'use client';
import NotificationsDropDown from "@/components/NotificationsDropDown";
import DashboardSidebar from "./dashboard-sidebar";


export default function Admin() {
    return (
        <div className="w-screen h-screen bg-zinc-950 flex text-zinc-400">
            <DashboardSidebar />
            <div className="flex flex-1 flex-col">
                <div className="px-5 py-3 items-center flex justify-between font-bold border-b border-b-zinc-900">
                    <div>Dashboard</div>
                    <NotificationsDropDown />
                </div>

                <div className="flex-1 p-7">
                    <div className="rounded-2xl border border-zinc-200 bg-white xl:w-4/6 dark:border-primary/20 dark:bg-primary/[0.1]">
                        <div className="p-10">Hello</div>
                    </div>
                </div>

            </div>
        </div>
    )
}