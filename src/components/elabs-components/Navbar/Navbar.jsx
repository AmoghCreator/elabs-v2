import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../../assets/images/elabs_logo.png";
import { list } from "../../../assets/lists/routeList";

const Navbar = () => {
    const [offset, setOffset] = useState(0);
    const [clicked, setClicked] = useState(false);

    // useEffect(() => {
    //     const onScroll = () => setOffset(window.pageYOffset);
    //     window.removeEventListener("scroll", onScroll);
    //     window.addEventListener("scroll", onScroll, { passive: true });
    //     return () => window.removeEventListener("scroll", onScroll);
    // }, []);
    // console.log(offset);

    return (
        <nav className="NavbarItems fixed">
            {/* <nav className={`NavbarItems ${offset > "400" ? "fixed" : ""}`}> */}
            <h1 className="navbar-logo">
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
            <button>
                <h3>Login</h3>
            </button>
        </nav>
    );
};

export default Navbar;
