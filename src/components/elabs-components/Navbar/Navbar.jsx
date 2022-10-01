import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PublicNavbar from "./PublicNavbar.jsx";

function Navbar() {
    const location = useLocation();
    const [path, setPath] = useState();
    useEffect(() => {
        setPath(location.pathname);
        console.log(location.pathname);
        console.log(location);
    }, [location]);
    return (
        <>
            {path && path.split("/").includes("dashboard") ? (
                <nav className={"NavbarItems"}>TODO: DASHBOARD NAVBAR</nav>
            ) : (
                <PublicNavbar />
            )}
        </>
    );
}

export default Navbar;
