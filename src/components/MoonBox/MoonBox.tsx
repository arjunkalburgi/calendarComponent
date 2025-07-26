import { getMoonPhase } from "./moonUtls";

type DateBoxProps = {
    date: Date | null;
    isInactive: boolean;
    isToday: boolean;
};

export default function DateBox({ date, isInactive, isToday }: DateBoxProps) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "10px",
                textAlign: "center",
                background: isInactive ? "#f5f5f5" : isToday ? "#dfffd6" : "white",
            }}
        >
            {date ? date.getDate() : ""}
            {getMoonPhase(new Date("2025-03-10T14:00:00-05:00"))}
        </div>
    );
}
