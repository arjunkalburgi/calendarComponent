import { useState } from "react";
import Calendar from "../components/Calendar/Calendar";
import MoonBox from "../components/MoonBox/MoonBox";

export default function Moon() {
    const [date, setDate] = useState(new Date());
    
    return (
        <div style={{ paddingTop: "60px" }}>
            <h1>Phases of the NYC Moon</h1>
        
            <div>
                <span>For the month: </span>
                <input
                    type="month"
                    value={`2025-${String(date.getMonth() + 1).padStart(2, "0")}`}
                    onChange={(e) => {
                        const [_, month] = e.target.value.split("-").map(Number);
                        setDate(new Date(2025, month - 1, date.getDate()));
                    }}
                />
            </div>
        
            <Calendar 
                date={date} 
                renderDateBox={(cell, descriptionId) => (
                    <MoonBox
                        date={cell.date}
                        isInactive={cell.isInactive}
                        isToday={cell.isToday}
                        descriptionId={descriptionId}
                    />
                )}
            />
        </div>
    );
}
