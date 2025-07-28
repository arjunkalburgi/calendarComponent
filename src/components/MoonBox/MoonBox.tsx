import { getMoonPhase, MoonPhaseSvgs } from "./moonUtls";
import styles from "./MoonBox.module.css";

type MoonBoxProps = {
    date: Date;
    isInactive: boolean;
    isToday: boolean;
    descriptionId?: string;
};

export default function MoonBox({ date, isInactive, isToday, descriptionId }: MoonBoxProps) {
    const phase = getMoonPhase(date);
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
                    <span aria-hidden="true">{MoonPhaseSvgs[phase]}</span>
                    {descriptionId && (
                        <p id={descriptionId} className={styles.visuallyHidden}>
                            Moon phase: {phase}
                        </p>
                    )}
                </>
            )}
        </div>
    );
}
