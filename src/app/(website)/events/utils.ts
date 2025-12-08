export function getISOWeekNumber(date: Date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7; // Sunday = 7
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
}

export function expandEventDays(start: Date, end?: Date) {
    const days = [];
    const cursor = new Date(start);
    const last = end ? new Date(end) : new Date(start);

    while (cursor <= last) {
        days.push(new Date(cursor));
        cursor.setDate(cursor.getDate() + 1);
    }

    return days;
}

export function getWeekStart(date: Date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Monday start
    return new Date(d.setDate(diff));
}

// Build 52-week calendar with all days
export function buildISOYearGrid(year: number) {
    const grid: { date: Date; events: any[] }[][] = Array.from({ length: 52 }, () =>
        Array.from({ length: 7 }, () => ({ date: new Date(), events: [] }))
    );

    const firstJan = new Date(year, 0, 1);
    for (let week = 0; week < 52; week++) {
        const weekStart = getWeekStart(new Date(firstJan.getFullYear(), 0, 1 + week * 7));
        for (let day = 0; day < 7; day++) {
            const date = new Date(weekStart);
            date.setDate(weekStart.getDate() + day);
            grid[week][day] = { date, events: [] };
        }
    }

    return grid;
}

export function placeEventsInGrid(events: any[], grid: { date: Date; events: any[] }[][]) {
    events.forEach(ev => {
        const days = expandEventDays(new Date(ev.startDate), ev.endDate ? new Date(ev.endDate) : undefined);
        days.forEach(date => {
            const week = getISOWeekNumber(date) - 1;
            const day = date.getDay() === 0 ? 6 : date.getDay() - 1; // Monday=0, Sunday=6
            if (grid[week] && grid[week][day]) {
                grid[week][day].events.push(ev);
            }
        });
    });
    return grid;
}
