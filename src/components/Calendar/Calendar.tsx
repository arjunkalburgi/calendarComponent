import { generateCalendarWeeks, type CalendarCell } from "./calendarUtls";
import styles from "./Calendar.module.css";
import DateBox from "./DateBox/DateBox";

type CalendarProps = {
    date: Date;
    onChangeDate: (newDate: Date) => void;
    renderDateBox?: (cell: CalendarCell, descriptionId: string) => React.ReactNode;
};

export default function Calendar({ date, onChangeDate, renderDateBox }: CalendarProps) {
    const weeks = generateCalendarWeeks(date.getFullYear(), date.getMonth());

    const goToPrevMonth = () => {
        const newDate = new Date(date);
        newDate.setMonth(date.getMonth() - 1);
        onChangeDate(newDate);
    };

    const goToNextMonth = () => {
        const newDate = new Date(date);
        newDate.setMonth(date.getMonth() + 1);
        onChangeDate(newDate);
    };

    const goToToday = () => {
        onChangeDate(new Date());
    };
    
    return (
        <div className={styles.calendarContainer}>
            <div className={styles.calendarHeader}>
                <button onClick={goToPrevMonth} aria-label="Previous month">
                    ←
                </button>
                <h2 aria-live="polite">
                    {date.toLocaleString("default", { month: "long" })} {date.getFullYear()}
                </h2>
                <button onClick={goToNextMonth} aria-label="Next month">
                    →
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
                                key={`${i}-${j}`}
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