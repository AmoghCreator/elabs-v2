import { AlertTitle, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import React from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function AlertBox({
    variant = "filled",
    type,
    title,
    message,
    state,
    handleState,
}) {
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        handleState((cur) => ({ ...cur, open: false }));
    };
    return (
        <Snackbar open={state} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity={type} variant={variant} onClose={handleClose}>
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>
        </Snackbar>
    );
}

export const AlertBoxTypes = {
    SUCCESS: "success",
    WARNING: "warning",
    INFO: "info",
    ERROR: "error",
};

export const changeAlertBoxState = (type, title, message, handleState) =>
    handleState((cur) => ({ ...cur, type, title, message, open: true }));

export default AlertBox;
