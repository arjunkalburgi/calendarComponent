import { generateCalendarWeeks, type CalendarCell } from "./calendarUtls";
import styles from "./Calendar.module.css";
import DateBox from "./DateBox/DateBox";

type CalendarProps = {
    date: Date;
};

export default function Calendar({ date }: CalendarProps) {
    const weeks = generateCalendarWeeks(date.getFullYear(), date.getMonth());
    
    return (
        <div className={styles.calendarContainer}>
            <h2>
                {date.toLocaleString("default", { month: "long" })} {date.getFullYear()}
            </h2>
            <div className={styles.calendar}>
                {weeks.map((week: CalendarCell[], i: number) => (
                    <div key={i} className={styles.weekRow}>
                        {week.map((cell, j) => (
                            <DateBox
                                key={`${i}-${j}`}
                                date={cell.date}
                                isInactive={cell.isInactive}
                                isToday={cell.isToday}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}