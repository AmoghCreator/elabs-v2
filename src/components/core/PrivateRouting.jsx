import React from "react";
import { Outlet, Navigate } from "react-router";

function PrivateRouting() {
    const isAuth = localStorage.getItem("ud") ? true : false;
    return <>{isAuth ? <Outlet /> : <Navigate to={"/login"} />}</>;
}

export default PrivateRouting;
