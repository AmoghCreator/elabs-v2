import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Team from "./pages/teams/Team.jsx";
import FooterSmall from "./components/elabs-components/Footer/FooterSmall.jsx";
import Login from "./pages/Login/Login.jsx";
import Navbar from "./components/elabs-components/Navbar/Navbar.jsx";
import DashboardRoute from "./components/core/DashboardRoute.jsx";
import DashboardTeam from "./pages/dashboard/Team/DashboardTeam.jsx";
import Course from "./pages/Course/Course";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/course" element={<Course />} />
                        <Route path="/dashboard">
                            <Route path="login" element={<Login />} />
                            <Route path="app" element={<DashboardRoute />}>
                                <Route path="" element={<div>Home</div>} />
                                <Route
                                    path="team"
                                    element={<DashboardTeam />}
                                />
                            </Route>
                        </Route>
                        <Route path="*" element={<div>Error</div>} />
                    </Routes>
                </div>
                <FooterSmall />
            </Router>
        </>
    );
}

export default App;
