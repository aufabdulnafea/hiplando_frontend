"use client"

import {
    IconChartBar,
    IconDashboard,
    IconInnerShadowTop,
    IconUsers,
    IconHorse,
    IconGavel,
    IconAdCircle,
    IconPhoto
} from "@tabler/icons-react"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/admin/dashboard",
            icon: IconDashboard,
        },
        {
            title: "Horses",
            url: "/admin/horses",
            icon: IconHorse,
        },
        {
            title: "Users",
            url: "/admin/users",
            icon: IconUsers,
        },
        {
            title: "Auctions",
            url: "/admin/auctions",
            icon: IconGavel
        },
        {
            title: "Media",
            url: "/admin/media",
            icon: IconPhoto
        },
        {
            title: "Marketing",
            url: "/admin/marketing",
            icon: IconAdCircle
        },
        {
            title: "Analytics",
            url: "/admin/analytics",
            icon: IconChartBar,
        }
    ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >

                            <Link href="/admin/dashboard">
                                <IconInnerShadowTop className="!size-5" />
                                <span className="text-base font-semibold">Hiplando</span>
                            </Link>

                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
