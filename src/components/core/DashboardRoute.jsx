import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import Sidebar from "../elabs-components/Sidebar/Sidebar.jsx";

function DashboardRoute() {
    const location = useLocation();
    const [logged, setLogged] = useState("he");
    useEffect(() => {
        const isAuth = localStorage.getItem("ud") ? true : false;
        setLogged(() => {
            return isAuth;
        });
    }, [location]);
    return (
        <>
            <div
                className="main-app"
                style={{
                    display: "flex",
                }}
            >
                <Sidebar />
                <div
                    style={{
                        marginLeft: "1rem",
                        width: "100%",
                        height: "calc(100vh - 128px)",
                        overflowY: "auto",
                        overflowX: "auto",
                    }}
                >
                    {logged ? <Outlet /> : <Navigate to={"/login"} />}
                </div>
            </div>
        </>
    );
}

export default DashboardRoute;
