import styles from "./Calendar.module.css";

type CalendarProps = {
    date: Date;
};

export default function Calendar({ date = new Date() }: CalendarProps) {
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return (
        <div style={{ paddingTop: "60px" }}>
            <h1>{monthNames[date.getMonth()]} {date.getFullYear()}</h1>
        </div>
    );
}
