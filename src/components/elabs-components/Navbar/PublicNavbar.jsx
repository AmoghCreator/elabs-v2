import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import Logo from "../../../assets/images/elabs_logo.png";
import { list } from "../../../assets/lists/NavbarRouteList.js";
import { useIsLoggedIn } from "../../core/hooks/useIsLoggedIn";

const PublicNavbar = () => {
    const [offset, setOffset] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [path, setPath] = useState();
    const location = useLocation();
    const isLogged = useIsLoggedIn();
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    // console.log(offset);
    useEffect(() => {
        setPath(location.pathname);
        console.log(location.pathname);
    }, [location]);
    return (
        <nav className={`NavbarItems ${offset > "400" ? "fixed" : ""}`}>
            <h1
                className={
                    path === "/" && offset < "400"
                        ? "navbar-logo-transparent"
                        : "navbar-logo"
                }
            >
                <img src={Logo} height="42" alt="nothing" />E Labs
            </h1>
            <div className="menu-icon" onClick={() => setClicked(!clicked)}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {list.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.url} className={item.cName}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Link to={isLogged ? "/dashboard/app" : "/login"}>
                <button>
                    <h3>{isLogged ? "Dashboard" : "Login"}</h3>
                </button>
            </Link>
        </nav>
    );
};

export default PublicNavbar;
