import { getMoonPhase, MoonPhaseSvgs } from "./moonUtls";
import styles from "./MoonBox.module.css";

type MoonBoxProps = {
    date: Date;
    isInactive: boolean;
    isToday: boolean;
};

export default function MoonBox({ date, isInactive, isToday }: MoonBoxProps) {
    const isPast = date < new Date();
    return (
        <div
            className={styles.moonBoxContainer}
            style={{
                background: isInactive ? "#b4b4b4" : isToday ? "#dfffd6" : isPast ? "#efefef" : "white",
            }}
        >
            
            {!isInactive && (
                <>
                    {date ? date.getDate() : ""}
                    {MoonPhaseSvgs[getMoonPhase(date)]}
                </>
            )}
        </div>
    );
}
