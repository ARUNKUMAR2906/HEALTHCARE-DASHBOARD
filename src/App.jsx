import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent/DashboardMainContent";
import "./index.css";

export default function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-area">
        <Header />
      </div>
      <div className="Dashboard">
        <DashboardMainContent />
      </div>
    </div>
  );
}
