import { generateCalendarWeeks, type CalendarCell } from "./calendarUtls";
import { useState, useEffect } from "react";
import styles from "./Calendar.module.css";
import DateBox from "./DateBox/DateBox";

type CalendarProps = {
    date: Date;
    renderDateBox?: (cell: CalendarCell, descriptionId: string) => React.ReactNode;
};

export default function Calendar({ date, renderDateBox }: CalendarProps) {
    const [currentDate, setCurrentDate] = useState(date);
    useEffect(() => {
        setCurrentDate(date);
    }, [date]);
    const weeks = generateCalendarWeeks(currentDate.getFullYear(), currentDate.getMonth());

    const goToPrevMonth = () => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(prev.getMonth() - 1);
            return newDate;
        });
    };

    const goToNextMonth = () => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(prev.getMonth() + 1);
            return newDate;
        });
    };

    const goToToday = () => {
        setCurrentDate(new Date());
    };
    
    return (
        <div className={styles.calendarContainer}>
            <div className={styles.calendarHeader}>
                <button onClick={goToPrevMonth} aria-label="Previous month">
                    &lt;
                </button>
                <h2 aria-live="polite">
                    {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
                </h2>
                <button onClick={goToNextMonth} aria-label="Next month">
                    &gt;
                </button>
                <button onClick={goToToday} className={styles.todayButton} aria-label="Go to set month">
                    Today
                </button>
            </div>
            <div className={styles.calendar} role="grid">
                {weeks.map((week: CalendarCell[], i: number) => (
                    <div key={i} role="row" className={styles.weekRow}>
                        {week.map((cell, j) => (
                            <div
                                role="gridcell"
                                aria-selected={cell.isToday}
                                tabIndex={0}
                                aria-label={cell.date.toDateString()}
                                className={styles.dateCell}
                                aria-describedby={`date-${i}-${j}`}
                            >
                                {renderDateBox ? (
                                    renderDateBox(cell, `date-${i}-${j}`)
                                ) : (
                                    <DateBox
                                        key={`${i}-${j}`}
                                        date={cell.date}
                                        isInactive={cell.isInactive}
                                        isToday={cell.isToday}
                                        descriptionId={`date-${i}-${j}`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}