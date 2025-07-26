

export function getMoonPhase(date: Date): string {
    // Constants
    const SYNODIC_MONTH = 29.530588853;
    
    // Reference new moon (NYC local time)
    const referenceNewMoon = new Date("2025-01-01T00:00:00-05:00"); // EST (NYC winter time)
    
    // Calculate difference in days (local time)
    const diffMs = date.getTime() - referenceNewMoon.getTime();
    const daysSinceRef = diffMs / (1000 * 60 * 60 * 24);
    
    // Normalize age (0 to 29.53)
    const moonAge = ((daysSinceRef % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH;
    
    // Map moon age to discrete phase
    if (moonAge < 1.0) return "New Moon";
    if (moonAge < 6.99) return "Waxing Crescent";
    if (moonAge < 8.99) return "First Quarter";
    if (moonAge < 13.99) return "Waxing Gibbous";
    if (moonAge < 15.99) return "Full Moon";
    if (moonAge < 20.99) return "Waning Gibbous";
    if (moonAge < 22.99) return "Last Quarter";
    if (moonAge < 28.99) return "Waning Crescent";
    return "New Moon"; // wrap around
}