import { useState } from "react";
import Calendar from "../components/Calendar/Calendar";

export default function Home() {
    const [date] = useState(new Date());
    return (
        <div style={{ paddingTop: "60px" }}>
            <Calendar date={date} />
        </div>
    );
}
