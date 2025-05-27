import styles from "./CalendarView.module.css";

const calendarData = [
  {
    day: "Mon",
    date: 25,
    slots: ["10:00", "11:00", "12:00"],
  },
  {
    day: "Tues",
    date: 26,
    slots: ["08:00", "09:00", "10:00"],
    selected: true,
  },
  {
    day: "Wed",
    date: 27,
    slots: ["12:00", "", "13:00"],
  },
  {
    day: "Thurs",
    date: 28,
    slots: ["10:00", "11:00", ""],
  },
  {
    day: "Fri",
    date: 29,
    slots: ["", "14:00", "16:00"],
  },
  {
    day: "Sat",
    date: 30,
    slots: ["12:00", "14:00", "15:00"],
  },
  {
    day: "Sun",
    date: 31,
    disabled: true,
    slots: ["09:00", "10:00", "11:00"],
  },
];

export default function CalendarView() {
  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHeader}>
        <span>October 2021</span>
        <div className={styles.calendarNav}>
          <span >{"<"}</span>
          <span>{">"}</span>
        </div>
      </div>
      <div className={styles.calendarGrid}>
        {calendarData.map((day, index) => (
          <div
            key={index}
            className={`${styles.calendarDay} ${
              day.selected ? styles.selected : ""
            } ${day.disabled ? styles.disabled : ""}`}
          >
            <div className={styles.calendarDate}>
              <div>{day.day}</div>
              <div>{day.date}</div>
            </div>
            <div className={styles.calendarSlots}>
              {day.slots.map((slot, idx) => (
                <div
                  key={idx}
                  className={`${styles.slot} ${
                    slot === "09:00" || slot === "11:00"
                      ? styles.highlighted
                      : ""
                  }`}
                >
                  {slot || "—"}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
