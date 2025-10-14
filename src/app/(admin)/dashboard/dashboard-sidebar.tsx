'use client';
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { LiaHorseHeadSolid } from "react-icons/lia";


export default function DashboardSidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col overflow-hidden w-2xs bottom-0 left-0 h-screen shadow text-zinc-50 border-r border-zinc-900 bg-zinc-950">
            <div className="text-2xl px-5 py-5 font-bold text-zinc-300">Hiplando</div>
            <div className="flex gap-2 flex-col pr-5 flex-1 overflow-auto ml-5 scrollbar scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-zinc-950">
                <div className="p-2 px-3 border text-primary font-semibold border-primary/20 bg-primary/10 rounded-xl flex gap-2 items-center">
                    <LiaHorseHeadSolid className="w-6 h-8" />
                    <h4>Horses</h4>
                </div>

                <div className="p-2 px-3 border text-zinc-400 font-semibold border-primary/0 rounded-lg flex gap-2 items-center">
                    <LiaHorseHeadSolid className="w-6 h-8" />
                    <h4>Categories</h4>
                </div>
            </div>

            <div className="py-5 px-5">
                <button className="bg-primary cursor-pointer px-4 py-2 rounded-md w-full hover:bg-primary/90 transition text-sm">Logout</button>
            </div>
        </div>
    );
}
