import { useState } from "react";
import Calendar from "../components/Calendar/Calendar";

export default function Home() {
    const [date, setDate] = useState(new Date());
    
    return (
        <div style={{ paddingTop: "60px" }}>
            <h1>Default Calendar</h1>
        
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
        
            {/* I made Calendar predictable and composable. The parent can now 
                orchestrate other components around the selected date.
                Can lift more logic out for extensibility.
                This is also easier to test. */}
            <Calendar onChangeDate={setDate} date={date} />
        </div>
    );
}
