import "./App.css";
import Navbar from "./components/elabs-components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Team from "./pages/teams/Team.jsx";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <div className="main-app">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/team" element={<Team />} />
                        <Route
                            path="/course"
                            element={<div>Course page</div>}
                        />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
