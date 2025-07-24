export default function Desc() {
    return (
        <div style={{ paddingTop: "60px", margin: "0 auto", lineHeight: "1.6" }}>
            <h1>Mini Product Brief: Meditation Logger Calendar</h1>

            <h2>User Problem</h2>
            <p>
                People want to build a consistent meditation habit, but streak counters feel too binary
                (either you meditated or you broke your streak). A visual mood map of their month can help
                them see patterns, progress, and “how much they’re showing up” without feeling judged.
            </p>

            <h2>Goal</h2>
            <p>
                Give users instant visual feedback on their consistency over the month, motivating them to
                meditate today without obsessing over perfection.
            </p>

            <h2>Core Interaction Model</h2>
            <p>Calendar cells as habit heatmap:</p>
            <ul>
                <li>✅ <strong>Super green</strong> = meditated twice.</li>
                <li>✅ <strong>Green</strong> = meditated once.</li>
                <li>
                ❌ <strong>Light red → deep red gradient</strong> = missed meditation (deeper = more
                consecutive misses).
                </li>
                <li><strong>Today’s cell</strong> = subtle highlight (to nudge action).</li>
            </ul>

            <h3>Month switching</h3>
            <p>
                Probably just previous/next months—historical tracking is nice, but not the primary use
                case.
            </p>
        </div>
    );
}
