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
        </div>
    );
}
