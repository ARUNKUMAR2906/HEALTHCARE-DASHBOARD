import styles from "./UpcomingSchedule.module.css";

const schedule = [
  {
    day: "On Thursday",
    appointments: [
      { title: "Health checkup complete", time: "11:00 AM", icon: "💉" },
      { title: "Ophthalmologist", time: "14:00 PM", icon: "👁️" },
    ],
  },
  {
    day: "On Saturday",
    appointments: [
      { title: "Cardiologist", time: "12:00 AM", icon: "❤️" },
      { title: "Neurologist", time: "16:00 PM", icon: "🧑‍⚕️" },
    ],
  },
];

export default function UpcomingSchedule() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>The Upcoming Schedule</h2>
      {schedule.map((block, i) => (
        <div key={i} className={styles.dayBlock}>
          <p className={styles.dayLabel}>{block.day}</p>
          <div className={styles.cardRow}>
            {block.appointments.map((appt, j) => (
              <div key={j} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span>{appt.title}</span>
                  <span className={styles.icon}>{appt.icon}</span>
                </div>
                <p className={styles.time}>{appt.time}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
