export type CalendarCell = {
    date: Date;
    isInactive: boolean;
    isToday: boolean;
};

export function generateCalendarWeeks(year: number, month: number): CalendarCell[][] {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    const lastDayOfWeek = new Date(year, month, daysInMonth).getDay();
    const today = new Date();
    
    // ✅ Leading dates (previous month)
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const prevMonthDays = new Date(prevYear, prevMonth + 1, 0).getDate();
    
    const leadingDates = Array.from({ length: firstDayOfWeek }, (_, i) => {
        const day = prevMonthDays - firstDayOfWeek + i + 1;
        const d = new Date(prevYear, prevMonth, day);
        return {
            date: d,
            isInactive: true,
            isToday: d.toDateString() === today.toDateString(),
        };
    });
    
    // ✅ Active dates (current month)
    const activeDates = Array.from({ length: daysInMonth }, (_, i) => {
        const d = new Date(year, month, i + 1);
        return {
            date: d,
            isInactive: false,
            isToday: d.toDateString() === today.toDateString(),
        };
    });
    
    // ✅ Trailing dates (next month)
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    const trailingCount = 6 - lastDayOfWeek;
    
    const trailingDates = Array.from({ length: trailingCount }, (_, i) => {
        const d = new Date(nextYear, nextMonth, i + 1);
        return {
            date: d,
            isInactive: true,
            isToday: d.toDateString() === today.toDateString(),
        };
    });
    
    // ✅ Combine into weeks
    const fullCells = [...leadingDates, ...activeDates, ...trailingDates];
    const weeks: CalendarCell[][] = [];
    for (let i = 0; i < fullCells.length; i += 7) {
        weeks.push(fullCells.slice(i, i + 7));
    }
    
    return weeks;
}
