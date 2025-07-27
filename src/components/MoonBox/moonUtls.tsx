import type { JSX } from "react";

export type MoonPhaseKey =
| "new_moon"
| "waxing_crescent"
| "first_quarter"
| "waxing_gibbous"
| "full_moon"
| "waning_gibbous"
| "last_quarter"
| "waning_crescent";

export function getMoonPhase(date: Date = new Date()): MoonPhaseKey {
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
    if (moonAge < 1.0) return "new_moon";
    if (moonAge < 6.99) return "waxing_crescent";
    if (moonAge < 8.99) return "first_quarter";
    if (moonAge < 13.99) return "waxing_gibbous";
    if (moonAge < 15.99) return "full_moon";
    if (moonAge < 20.99) return "waning_gibbous";
    if (moonAge < 22.99) return "last_quarter";
    if (moonAge < 28.99) return "waning_crescent";
    return "new_moon";
}

export const MoonPhaseSvgs: Record<MoonPhaseKey, JSX.Element> = {
    new_moon: (
        <svg width="24" height="24" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="black" stroke="black" strokeWidth="2" />
        </svg>
    ),
    waxing_crescent: (
        <svg width="24" height="24" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="transparent" stroke="black" strokeWidth="2" />
            <path
                d="M24 4
                    A20 20 0 0 0 24 44
                    A10 20 0 0 1 24 4Z"
                fill="black"
            />
        </svg>
    ),
    first_quarter: (
        <svg width="24" height="24" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="transparent" stroke="black" strokeWidth="2" />
            <path
                d="M24 4
                    A20 20 0 0 0 24 44
                    L24 4Z"
                fill="black"
            />
        </svg>
    ),
    waxing_gibbous: (
        <svg width="24" height="24" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="transparent" stroke="black" strokeWidth="2" />
            <path
                d="M24 4
                    A20 20 0 0 0 24 44
                    A18 20 0 0 1 24 4Z"
                fill="black"
            />
        </svg>
    ),
    full_moon: (
        <svg width="24" height="24" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="transparent" stroke="black" strokeWidth="2" />
        </svg>
    ),
    waning_gibbous: (
        <svg width="24" height="24" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="transparent" stroke="black" strokeWidth="2" />
            <path
                d="M24 4
                    A20 20 0 0 1 24 44
                    A18 20 0 0 0 24 4Z"
                fill="black"
            />
        </svg>
    ),
    last_quarter: (
        <svg width="24" height="24" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="transparent" stroke="black" strokeWidth="2" />
            <path
                d="M24 4
                    A20 20 0 0 1 24 44
                    L24 4Z"
                fill="black"
            />
        </svg>
    ),
    waning_crescent: (
        <svg width="24" height="24" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="transparent" stroke="black" strokeWidth="2" />
            <path
                d="M24 4
                    A20 20 0 0 1 24 44
                    A10 20 0 0 0 24 4Z"
                fill="black"
            />
        </svg>
    ),
};
