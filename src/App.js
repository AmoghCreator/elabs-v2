import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Team from "./pages/teams/Team.jsx";
import FooterSmall from "./components/elabs-components/Footer/FooterSmall.jsx";
import Login from "./pages/Login/Login.jsx";
import Navbar from "./components/elabs-components/Navbar/Navbar.jsx";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/team" element={<Team />} />
                        <Route
                            path="/course"
                            element={
                                <div className="main-app">Course page</div>
                            }
                        />
                        <Route path="/dashboard">
                            <Route path="login" element={<Login />} />
                        </Route>
                    </Routes>
                </div>
                <FooterSmall />
            </Router>
        </>
    );
}

export default App;
