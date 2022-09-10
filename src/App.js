import "./App.css";
import Navbar from "./components/elabs-components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                {/* <Routes> */}
                {/* <Route path="/team" element={<Team />}></Route> */}
                {/* </Routes> */}
            </Router>
            <div className="maxx-height">Welcome to ELABS</div>
        </>
    );
}

export default App;
