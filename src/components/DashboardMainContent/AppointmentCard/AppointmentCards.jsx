import styles from "./AppointmentCards.module.css";

const appointments = [
  {
    title: "Dentist",
    time: "09:00–11:00",
    doctor: "Dr. Cameron Williamson",
    icon: "🦷",
    type: "primary",
  },
  {
    title: "Physiotherapy Appointment",
    time: "11:00–12:00",
    doctor: "Dr. Kevin Djones",
    icon: "💪",
    type: "secondary",
  },
];

export default function AppointmentCards() {
  return (
    <div className={styles.cardContainer}>
      {appointments.map((appt, index) => (
        <div
          key={index}
          className={`${styles.card} ${
            appt.type === "primary" ? styles.primary : styles.secondary
          }`}
        >
          <div className={styles.header}>
            <span>{appt.title}</span>
            <span className={styles.icon}>{appt.icon}</span>
          </div>
          <div className={styles.time}>{appt.time}</div>
          <div className={styles.doctor}>{appt.doctor}</div>
        </div>
      ))}
    </div>
  );
}
