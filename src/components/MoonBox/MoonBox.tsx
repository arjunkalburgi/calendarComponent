import { getMoonPhase, MoonPhaseSvgs } from "./moonUtls";
import styles from "./MoonBox.module.css";

type DateBoxProps = {
    date: Date;
    isInactive: boolean;
    isToday: boolean;
};

export default function DateBox({ date, isInactive, isToday }: DateBoxProps) {
    const phase = getMoonPhase(date);
    const svg = MoonPhaseSvgs[phase];

    return (
        <div
            className={styles.moonBoxContainer}
            style={{
                background: isInactive ? "#e2e2e2ff" : isToday ? "#dfffd6" : "white",
            }}
        >
            {date ? date.getDate() : ""}
            {svg}
        </div>
    );
}
