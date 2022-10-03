import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useLocation } from "react-router";

function SidebarMenu({ icon: Icon, title, link }) {
    const location = useLocation();
    const [path, setPath] = useState(location.pathname);
    useEffect(() => {
        setPath(location.pathname);
    }, [location]);

    const getClassName = () => {
        if (title.toLowerCase() === "home" && path === "/dashboard/app") {
            return "sidebar-menu-active";
        }
        if (path.split("/").includes(title.toLowerCase())) {
            return "sidebar-menu-active";
        }
    };

    return (
        <Link to={link} className="sidebar-menu-link">
            <div className={`sidebar-menu ${getClassName()}`}>
                <div>
                    <Icon className="sidebarIcon" />
                </div>
                <div>{title}</div>
            </div>
        </Link>
    );
}

export default SidebarMenu;
