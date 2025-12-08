"use client";

import { useEffect, useState } from "react";
import { buildISOYearGrid, placeEventsInGrid } from "./utils";
import { Card } from "@/components/ui/card";
import { fetchAllEvents } from "@/lib/api";

export default function YearCalendar() {
    const [grid, setGrid] = useState<any[][]>([]);
    const [events, setEvents] = useState<any[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const evs = await fetchAllEvents();
            console.log(evs)

            // Convert start/end dates to Date objects
            const formattedEvents = evs.map(ev => ({
                ...ev,
                startDate: ev.startDate ? new Date(ev.startDate) : new Date(ev.createdAt),
                endDate: ev.endDate ? new Date(ev.endDate) : new Date(ev.createdAt),
            }));

            setEvents(formattedEvents);

            const year = 2025;
            const yearGrid = placeEventsInGrid(
                formattedEvents,
                buildISOYearGrid(year)
            );
            setGrid(yearGrid);
        };

        fetchEvents();
    }, []);

    const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
        <div className="p-4 overflow-auto min-h-screen bg-background text-foreground">
            {/* Header */}
            <div className="grid grid-cols-8 gap-0 mb-2 font-semibold text-sm sticky top-0 z-10 bg-background border-b border-border">
                <div className="py-1 px-2">Week</div>
                {dayNames.map(d => (
                    <div key={d} className="text-center py-1 px-1 border-l border-border">{d}</div>
                ))}
            </div>

            {/* Weeks */}
            {grid.map((week, wIndex) => {
                // Collect all events that appear in this week
                const weekEvents: any[] = [];
                week.forEach(cell => cell.events.forEach(ev => {
                    if (!weekEvents.find(e => e.id === ev.id)) weekEvents.push(ev);
                }));

                return (
                    <div key={wIndex} className="grid grid-cols-8 gap-2 mb-1 relative">
                        {/* Week number */}
                        <Card className="flex items-center justify-center border-r border-border bg-card text-card-foreground py-2 px-2 shadow-sm">
                            {wIndex + 1}
                        </Card>

                        {/* Days wrapper */}
                        <div className="col-span-7 grid grid-cols-7 gap-0 relative">
                            {week.map((cell, dIndex) => (
                                <Card key={dIndex} className="h-24 border-l border-b border-border p-1 overflow-hidden bg-card text-card-foreground relative">
                                    <div className="text-[10px] opacity-50 mb-1">{cell.date.getDate()}</div>
                                </Card>
                            ))}

                            {/* Event bars */}
                            {/* Event bars */}
                            {weekEvents.map((ev, evIndex) => {
                                const startOfWeek = week[0].date;
                                const endOfWeek = week[6].date;

                                const evStart = ev.startDate < startOfWeek ? startOfWeek : ev.startDate;
                                const evEnd = ev.endDate > endOfWeek ? endOfWeek : ev.endDate;

                                const startIdx = week.findIndex(c => c.date.toDateString() === evStart.toDateString());
                                const endIdx = week.findIndex(c => c.date.toDateString() === evEnd.toDateString());
                                const span = endIdx - startIdx + 1;

                                if (startIdx === -1 || endIdx === -1) return null;

                                return (
                                    <div
                                        key={ev.id}
                                        className="absolute h-5 bg-primary text-primary-foreground text-[10px] px-1 truncate rounded-md shadow-sm flex items-center justify-center"
                                        style={{
                                            top: `${evIndex * 1.5}rem`, // stack each event below the previous one
                                            left: `${(startIdx / 7) * 100}%`,
                                            width: `${(span / 7) * 100}%`,
                                        }}
                                        title={`${ev.title} (${ev.startDate.toLocaleDateString()} - ${ev.endDate?.toLocaleDateString()})`}
                                    >
                                        {ev.name}
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                );
            })}
        </div>
    );
}
