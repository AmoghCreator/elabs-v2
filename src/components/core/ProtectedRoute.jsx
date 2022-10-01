import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ adminProtect = false, ...rest }) {
    const location = useLocation();
    const isAuth = localStorage.getItem("ud") ? true : false;
    const [isOnLogin, setIsOnLogin] = useState(false);
    /* const isAdmin = isAuth
        ? JSON.parse(localStorage.getItem("ud")).uadmin
        : false; */
    useEffect(() => {
        if (location.pathname.split("/").includes("login")) {
            setIsOnLogin(true);
        }
    }, [location]);
    return (
        /*  <Route
            {...rest}
             loader={(props) => {
                if (isAuth) {
                    if ((adminProtect && isAdmin) || !adminProtect) {
                        return <Component />;
                    } else {
                        return <Navigate to="/" replace={true} />;
                    }
                } else {
                    return <Navigate to={"/login"} replace={true} />;
                }
            }} */
        isAuth ? (
            isOnLogin ? (
                <Navigate to={"/"} replace={true} />
            ) : (
                <Outlet />
            )
        ) : (
            <Navigate to={"login"} replace={false} />
        )
    );
}

export default ProtectedRoute;
