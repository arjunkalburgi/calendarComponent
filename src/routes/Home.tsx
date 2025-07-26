import { useState } from "react";
import Calendar from "../components/Calendar/Calendar";

export default function Home() {
    const [date, setDate] = useState(new Date());
    
    return (
        <div style={{ paddingTop: "60px" }}>
            <h1>Phases of the Moon</h1>
        
            {/* ✅ Simple month-day picker */}
            <div>
                <span>For the date: </span>
                <input
                    type="month"
                    value={`2025-${String(date.getMonth() + 1).padStart(2, "0")}`}
                    onChange={(e) => {
                        const [_, month] = e.target.value.split("-").map(Number);
                        setDate(new Date(2025, month - 1, date.getDate()));
                    }}
                />
                <input
                    type="number"
                    min={1}
                    max={31}
                    value={date.getDate()}
                    onChange={(e) => {
                        setDate(new Date(2025, date.getMonth(), Number(e.target.value)));
                    }}
                />
            </div>
        
            <Calendar date={date} />
        </div>
    );
}
