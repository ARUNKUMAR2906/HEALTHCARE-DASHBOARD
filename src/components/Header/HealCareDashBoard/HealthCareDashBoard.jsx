import styles from "./HealthCareDashBoard.module.css";
import human from "../asserts/human.png";
import Activity from "../asserts/Activity.png";
const healthData = [
  {
    icon: "🫁",
    title: "Lungs",
    date: "26 Okt 2021",
    colorClass: styles.redBar,
    widthClass: styles.w30,
  },
  {
    icon: "🦷",
    title: "Teeth",
    date: "26 Okt 2021",
    colorClass: styles.greenBar,
    widthClass: styles.w70,
  },
  {
    icon: "🦴",
    title: "Bone",
    date: "26 Okt 2021",
    colorClass: styles.orangeBar,
    widthClass: styles.w50,
  },
];

export default function HealthDashboard() {
  return (
    <>
      <div className={styles.header}>
        <h1>Dashboard</h1>
        <span>This Week</span>
      </div>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <img src={human} alt="Human Body" className={styles.bodyImage} />
          <div className={`${styles.badge} ${styles.heart}`}>
            ❤️ Healthy Heart
          </div>
          <div className={`${styles.badge} ${styles.leg}`}>🦵 Healthy Leg</div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.cards}>
            {healthData.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardIcon}>{item.icon}</div>
                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                  <p>Date: {item.date}</p>
                  <div className={styles.progressBar}>
                    <div className={`${item.colorClass} ${item.widthClass}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.detailsLink}>
            <a href="#">Details →</a>
          </div>
        </div>
      </div>
      <div className={styles.activity_module}>
        <div className={styles.header}>
          <h1>Activity</h1>
          <span>3 appointment on this week</span>
        </div>
        <img src={Activity} alt="" />
      </div>
    </>
  );
}
