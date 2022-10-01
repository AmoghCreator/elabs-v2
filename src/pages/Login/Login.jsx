import React, { useEffect, useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import TextInput from "../../components/elabs-components/input-components-react-hook/TextInput/TextInput.jsx";
import { Button, CircularProgress, styled } from "@mui/material";
import ElabsOtpInput from "../../components/elabs-components/input-components-react-hook/OtpInput/ElabsOtpInput.jsx";
import AlertBox, {
    AlertBoxTypes,
    changeAlertBoxState,
} from "../../components/elabs-components/AlertBox/AlertBox.jsx";
function Login() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [otpSent, setOtpSent] = useState(false);
    const [otpValid, setOtpValid] = useState(false);
    const [progress, setProgress] = useState(false);
    const [alertBoxState, setAlertBoxState] = useState({
        open: false,
        type: AlertBoxTypes.SUCCESS,
        message: "",
        title: null,
    });
    useEffect(() => {
        if (otpValid === false) {
            setOtpSent(false);
        }
    }, [otpValid]);
    const onsubmit = async (data) => {
        console.log(data);
        if (!otpSent) {
            setProgress(true);
            const apiUrl = `${process.env.REACT_APP_API_URL}/auth/admin/login`;
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const returnedData = await response.json();
            if (response.status === 201) {
                changeAlertBoxState(
                    AlertBoxTypes.SUCCESS,
                    "OTP Sent",
                    "Valid for 2 mins",
                    setAlertBoxState
                );
                setOtpSent(true);
                setOtpValid(true);
                setProgress(false);
            } else {
                changeAlertBoxState(
                    AlertBoxTypes.ERROR,
                    "OTP Not Sent",
                    returnedData.error,
                    setAlertBoxState
                );
                setProgress(false);
            }
        } else {
            setProgress(true);
            const apiUrl = `${process.env.REACT_APP_API_URL}/auth/admin/verify`;
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.status === 200) {
                const returnedData = await response.json();
                let authkey = "";
                response.headers.forEach((val, key) => {
                    if (key === "auth-token") {
                        authkey = val;
                    }
                });
                const ud = {
                    utoken: authkey,
                    uid: returnedData.data._id,
                    uname: returnedData.data.name,
                    uadmin: returnedData.data.isAdmin,
                    uphoto: returnedData.data.photo,
                    udomain: returnedData.data.domain,
                };
                localStorage.setItem("ud", JSON.stringify(ud));
                setProgress(false);
                window.location.assign("/");
            } else {
                changeAlertBoxState(
                    AlertBoxTypes.ERROR,
                    "OTP",
                    "Invalid OTP",
                    setAlertBoxState
                );
                setProgress(false);
            }
        }
    };

    const CustomButton = styled(Button)({
        "&.MuiButtonBase-root": {
            color: "#000",
            backgroundColor: "#ffab3d",
            width: "100%",
        },
        "&.MuiButtonBase-root:hover": {
            backgroundColor: "#ffc557",
        },
    });
    return (
        <>
            <div className="main-app">
                <div className="img_box login-outer-container">
                    <div className="login-inner-container">
                        <div className="login-form">
                            <div className="login-text login-big">Login</div>
                            <form
                                onSubmit={handleSubmit(onsubmit)}
                                className="login-form-internal"
                            >
                                <TextInput
                                    name="email"
                                    label="Email"
                                    control={control}
                                    errors={errors}
                                    disabled={otpSent}
                                    variant="outlined"
                                    rules={{
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[0-9]{7,8}@kiit.ac.in$/,
                                            message: "Enter a KIIT email",
                                        },
                                    }}
                                    style={{
                                        textColor: "#fff",
                                        borderColor: "#ffab3d",
                                        width: "100%",
                                        disabledColor: "grey",
                                    }}
                                />
                                {otpSent && (
                                    <ElabsOtpInput
                                        name="otp"
                                        control={control}
                                        errors={errors}
                                        otpValid={otpValid}
                                        setOtpValid={setOtpValid}
                                        rules={{ required: "Enter the OTP" }}
                                    />
                                )}
                                <div className="login-button">
                                    <CustomButton
                                        type="submit"
                                        disabled={progress}
                                    >
                                        {progress && (
                                            <CircularProgress
                                                size="1.8rem"
                                                style={{ color: "#000" }}
                                            />
                                        )}
                                        {!progress && !otpSent && "Login"}
                                        {!progress && otpSent && "Verify"}
                                    </CustomButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <AlertBox
                type={alertBoxState.type}
                title={alertBoxState.title}
                message={alertBoxState.message}
                state={alertBoxState.open}
                handleState={setAlertBoxState}
            />
        </>
    );
}

export default Login;
