import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/images/elabs_logo.png";
import PublicNavbar from "./PublicNavbar.jsx";
import { ExitToApp } from "@mui/icons-material";
import "./Navbar1.css";
import "./navbar.css";
// import { useDataGridProps } from "@mui/x-data-grid/DataGrid/useDataGridProps";

function Navbar() {
    const location = useLocation();
    const [path, setPath] = useState();
    useEffect(() => {
        setPath(location.pathname);
    }, [location]);

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("ud")));
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (user) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, [user]);

    const handleLogout = () => {
        localStorage.removeItem("ud");
        setUser(null);
        setIsAuth(false);
    };

    return (
        <>
            {path && path.split("/").includes("dashboard") ? (
                <div className="topbar">
                    <div className="topbarWrapper">
                        {/* <div
                            className={
                                path === "/dashboard/login"
                                    ? "topLeft-transparent"
                                    : "topLeft"
                            }
                        >
                            <div className="topLeft">
                            <div className="top-logo">
                                <Link to="/" className="link">
                                    <img
                                        src={Logo}
                                        alt=""
                                        className="topAvatar"
                                    />
                                </Link>
                            </div>
                            <div className="top-text">
                                <Link to="/" className="link">
                                    E Labs
                                </Link>
                            </div>
                        </div> */}
                        <h1
                            className={
                                path === "/dashboard/login"
                                    ? "topLeft-transparent"
                                    : "topLeft"
                            }
                        >
                            <Link to="/" className="link">
                                <img src={Logo} height="42" alt="nothing" />E
                                Labs
                            </Link>
                        </h1>
                        <div className="topRight">
                            {isAuth && (
                                <>
                                    <Link className="link" to="/myProfile">
                                        <div className="top-details">
                                            <div>
                                                <img
                                                    className="topAvatar"
                                                    src={user.uphoto}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="top-user">
                                                <div className="top-name">
                                                    {user.uname}
                                                </div>
                                                <div className="top-domain">
                                                    {user.udomain}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div
                                        onClick={() => handleLogout()}
                                        title="Logout"
                                    >
                                        <ExitToApp
                                            className="top-logout"
                                            style={{
                                                width: "1.8rem",
                                                height: "1.8rem",
                                            }}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <PublicNavbar />
            )}
        </>
    );
}

export default Navbar;
