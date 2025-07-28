# 🌗 React Calendar Component – With Render Prop Customization

A modular and accessible React calendar component built from scratch to explore architectural patterns in component design, state management, and customization via render props.

This project was created as part of my React learning journey and submitted for discussion during frontend engineering interviews.

Check it out at [arjunkalburgi.com/calendarComponent](http://www.arjunkalburgi.com/calendarComponent/).

## 🔍 What This Project Demonstrates

- **Controlled Component Design:**  
  The `Calendar` component is fully controlled via a `date` prop and `onChangeDate` callback, allowing the parent to own navigation state and coordinate other behavior.

- **Render Prop API for Flexibility:**  
  Consumers can inject custom date cell rendering through a `renderDateBox` prop. This enables use cases like visualizing moon phases, habits, availability, or spending — without modifying the core layout logic.

- **Accessible Semantics:**  
  Uses appropriate ARIA roles (`grid`, `row`, `gridcell`) and screen reader labels for inclusive interaction. Additional improvements are noted for future iterations (see below).

- **Visual State Indicators:**  
  Days are visually styled based on whether they're from the current month, in the past, or match today's date — aiding clarity and user orientation.

## 🗂 File Structure

```bash
components/
├── Calendar/
│   ├── Calendar.tsx          # Main calendar component
│   ├── calendarUtils.ts      # Generates 2D array of CalendarCells
│   └── DateBox/DateBox.tsx   # Default cell renderer
├── MoonBox/MoonBox.tsx       # Custom renderer showing moon phases
routes/
├── Home.tsx                  # Renders default calendar
└── Moon.tsx                  # Renders moon phase calendar using renderDateBox
```

This structure is to show Calendar's default view (Home) and custom rendered view (Moon).

## 🧠 Architectural Considerations

* **Why Controlled?**
  Lifting the date state to the parent makes `Calendar` easier to reuse, test, and coordinate with other components (e.g., tooltips, filters, external views).

* **Why Render Props?**
  This approach cleanly separates layout from cell behavior, and avoids tight coupling. It’s the right level of abstraction for extensibility without introducing context or state machines prematurely.

* **What's Missing (Yet Deliberate)?**
  I avoided `useReducer` or `Context` until state complexity justifies it. Future additions like date range selection, hover states, or multi-cell interaction would be the right time to revisit architecture.

## 📆 Example: Moon Phase Calendar

The `Moon.tsx` file passes a custom `renderDateBox` prop that renders a `MoonBox` with:

* The date number
* A moon phase SVG for that date
* Visually hidden screen reader description

```tsx
<Calendar
  date={date}
  onChangeDate={setDate}
  renderDateBox={(cell, id) => (
    <MoonBox
      date={cell.date}
      isInactive={cell.isInactive}
      isToday={cell.isToday}
      descriptionId={id}
    />
  )}
/>
```

## 🧪 Future Potential Improvements

* [ ] Keyboard navigation (arrow keys, tab index management)
* [ ] Focus ring logic for better accessibility
* [ ] Memoization for cell renderers
* [ ] Support for range selection (would introduce internal state)
* [ ] Tests for layout logic and ARIA compliance

## 🧑‍💻 Running the Project

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` to view the calendar UI.

---

Thanks for reviewing this repo! I'm happy to discuss tradeoffs and ideas for extending this architecture during our interview.

