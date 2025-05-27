import styles from "./Sidebar.module.css";
import { IoSettingsOutline } from "react-icons/io5";
import {
  FaHome,
  FaHistory,
  FaCalendar,
  FaCalendarCheck,
  FaChartBar,
  FaComment,
  FaPhoneAlt,
} from "react-icons/fa";

import { navigationLinks, navigationLinks2 } from "../../data/navigation";

const iconMap = {
  FaHome: <FaHome />,
  FaHistory: <FaHistory />,
  FaCalendar: <FaCalendar />,
  FaCalendarCheck: <FaCalendarCheck />,
  FaChartBar: <FaChartBar />,
  FaComment: <FaComment />,
  FaPhoneAlt: <FaPhoneAlt />,
};

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div>
        <div className={styles.logo}>Health<span>care.</span></div>

        <div className={styles.section}>
          <h5>General</h5>
          <ul>
            {navigationLinks.map((link) => (
              <li key={link.id}>
                {iconMap[link.icon]}
                <span>{link.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h5>Tools</h5>
          <ul>
            {navigationLinks2.map((link) => (
              <li key={link.id}>
                {iconMap[link.icon]}
                <span>{link.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.setting}>
          <IoSettingsOutline />
          <span>Setting</span>
        </div>
      </div>
    </aside>
  );
}
