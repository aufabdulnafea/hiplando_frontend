"use client";

import { IconBell, IconTrash, IconCheck, IconChecks } from "@tabler/icons-react";
import {
    DropdownMenu,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { getGraphQLClient } from "@/lib/graphql";
import { auth } from "@/lib/firebase";
import { Card } from "@/components/ui/card";
import {
    deleteNotification,
    markAllNotificationsAsRead,
    markNotificationAsRead,
} from "@/lib/api";

interface NotificationProps {
    id: string;
    title: string;
    message: string;
    read: boolean;
    createdAt: string;
}

function NotificationCard({ title, message, createdAt, read }: NotificationProps) {
    return (
        <Card className={`p-3 border shadow-sm ${read ? "opacity-60" : ""}`}>
            <h3 className="font-semibold text-sm">{title}</h3>
            <p className="text-xs opacity-80 mt-1">{message}</p>
            <p className="text-[10px] mt-2 opacity-60">
                {new Date(createdAt).toLocaleString()}
            </p>
        </Card>
    );
}

export function NotificationsDropDown() {
    const locale = useLocale();
    const isArabic = locale === "ar";

    const [notifications, setNotifications] = useState<NotificationProps[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchNotifications = async () => {
        try {
            const user = auth.currentUser;
            if (!user) return;

            const sdk = await getGraphQLClient();
            const { findManyNotification } = await sdk.findManyNotification({
                where: { userUid: { equals: user.uid } },
            });

            setNotifications(findManyNotification);
        } catch (error) {
            console.error("Failed to load notifications:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, []);

    const markNotificationRead = async (id: string) => {
        try {
            await markNotificationAsRead(id);
            setNotifications((prev) =>
                prev.map((n) => (n.id === id ? { ...n, read: true } : n))
            );
        } catch (err) {
            console.error("markNotificationRead error:", err);
        }
    };

    const delNotification = async (id: string) => {
        try {
            await deleteNotification(id);
            setNotifications((prev) => prev.filter((n) => n.id !== id));
        } catch (err) {
            console.error("deleteNotification error:", err);
        }
    };

    const markAllAsRead = async () => {
        try {
            await markAllNotificationsAsRead();
            setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
        } catch (err) {
            console.error("markAllAsRead error:", err);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="text-primary dark:text-neutral-400 relative">
                    <IconBell />
                    {notifications.filter((n) => !n.read).length > 0 && (
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 absolute top-2.5 right-2.5 animate-pulse" />
                    )}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="mt-1 w-80 p-1" align={isArabic ? "start" : "end"}>
                <div className="flex justify-between">
                    <DropdownMenuLabel className="font-medium">Notifications</DropdownMenuLabel>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            markAllAsRead();
                        }}
                        className="flex items-center gap-1 text-xs hover:opacity-80 px-3"
                    >
                        <IconChecks size={14} /> Mark all as read
                    </button>
                </div>

                <div className="flex flex-col gap-2 max-h-96 px-2">
                    {loading && <div className="p-3 text-sm opacity-70">Loading...</div>}

                    {!loading && notifications.length === 0 && (
                        <div className="p-3 text-sm opacity-70">No notifications</div>
                    )}

                    {!loading &&
                        notifications.map((notification) => (
                            <DropdownMenuItem
                                key={notification.id}
                                className="p-0 hover:bg-transparent focus:bg-transparent"
                            >
                                <div className="relative w-full">

                                    <Button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            markNotificationRead(notification.id);
                                        }}
                                        variant="ghost"
                                        className="absolute z-10 right-2 top-2 p-1 text-blue-600 dark:text-blue-400"
                                    >
                                        <IconCheck size={16} />
                                    </Button>

                                    <Button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            delNotification(notification.id);
                                        }}
                                        variant="ghost"
                                        className="absolute z-10 right-2 bottom-2 p-1 text-red-600 dark:text-red-400"
                                    >
                                        <IconTrash size={16} />
                                    </Button>

                                    <NotificationCard {...notification} />
                                </div>
                            </DropdownMenuItem>
                        ))}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
