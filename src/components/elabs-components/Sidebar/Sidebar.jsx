import React from "react";
import SidebarRouteList from "../../../assets/lists/SidebarRouteList";
import "./Sidebar.css";
import SidebarMenu from "./SidebarMenu.jsx";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-menus">
                {SidebarRouteList.map((eachSideBar) => (
                    <SidebarMenu
                        icon={eachSideBar.icon}
                        title={eachSideBar.title}
                        link={eachSideBar.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
