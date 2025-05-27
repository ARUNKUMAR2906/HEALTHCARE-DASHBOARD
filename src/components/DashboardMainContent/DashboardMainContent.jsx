import CalendarView from "./CalendarView/CalendarView";
import UpcomingSchedule from "./UpcomingSchedule/UpcomingSchedule";
import AppointmentCards from "./AppointmentCard/AppointmentCards";
import styles from "./DashboardMain.module.css";

export default function DashboardMainContent() {
  return (
    <main className={styles.dash}>
      <div className={styles.header}>
        <div className={styles.actions}>
          <span className={styles.avatar}>👤</span>
          <button className={styles.addBtn}>+</button>
        </div>
      </div>

      {/* Each section gets equal share of available space */}
      <div className={styles.section} style={{ flex: 1.2 }}>
        <CalendarView />
      </div>
      <div className={styles.section} style={{ flex: 1.1 }}>
        <AppointmentCards />
      </div>
      <div className={styles.section} style={{ flex: 2.2 }}>
        <UpcomingSchedule />
      </div>
    </main>
  );
}
