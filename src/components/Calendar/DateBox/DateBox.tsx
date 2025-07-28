type DateBoxProps = {
    date: Date | null;
    isInactive: boolean;
    isToday: boolean;
    descriptionId: string;
};

export default function DateBox({ date, isInactive, isToday }: DateBoxProps) {
    const isPast = date && date < new Date();
    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "10px",
                textAlign: "center",
                height: "calc(100% - 20px)",
                background: isInactive ? "#b4b4b4" : isToday ? "#dfffd6" : isPast ? "#efefef" : "white",
            }}
            aria-hidden="true"
        >
            {!isInactive && (<>{date ? date.getDate() : ""}</>)}
        </div>
    );
}
