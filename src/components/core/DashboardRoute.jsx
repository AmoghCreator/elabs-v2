import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../elabs-components/Sidebar/Sidebar.jsx";

function DashboardRoute() {
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
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default DashboardRoute;
