export type CalendarCell = {
    date: Date | null;
    isInactive: boolean;
    isToday: boolean;
};

export function generateCalendarWeeks(year: number, month: number): CalendarCell[][] {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    const lastDayOfWeek = new Date(year, month, daysInMonth).getDay();
    const today = new Date();
    
    // ✅ Leading inactive cells (before day 1)
    const leadingEmpty = Array.from({ length: firstDayOfWeek }, () => ({
        date: null,
        isInactive: true,
        isToday: false,
    }));
    
    // ✅ Active days
    const activeDates = Array.from({ length: daysInMonth }, (_, i) => {
        const d = new Date(year, month, i + 1);
        return {
            date: d,
            isInactive: false,
            isToday: d.toDateString() === today.toDateString(),
        };
    });
    
    // ✅ Trailing inactive cells (after last day)
    const trailingEmpty = Array.from({ length: 6 - lastDayOfWeek }, () => ({
        date: null,
        isInactive: true,
        isToday: false,
    }));
    
    // ✅ Combine into full array
    const fullCells = [...leadingEmpty, ...activeDates, ...trailingEmpty];
    
    // ✅ Chunk into weeks (7 cells per week)
    const weeks: CalendarCell[][] = [];
    for (let i = 0; i < fullCells.length; i += 7) {
        weeks.push(fullCells.slice(i, i + 7));
    }
    
    return weeks;
}
