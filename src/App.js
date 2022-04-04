import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import SetMenuPage from "./pages/SetMenuPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/setmenu" element={<SetMenuPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
