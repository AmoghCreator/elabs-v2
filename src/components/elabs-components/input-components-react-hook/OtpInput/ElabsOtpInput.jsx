import { FormHelperText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useController } from "react-hook-form";
import OtpInput from "react-otp-input";

function ElabsOtpInput({
    name,
    control,
    rules = {},
    errors = {},
    otpValid,
    setOtpValid,
}) {
    const { field } = useController({ name, control, rules });
    const [timer, setTimer] = useState(2 * 60);
    useEffect(() => {
        if (otpValid && timer > 0) {
            var timerFunc = setInterval(() => setTimer((cur) => cur - 1), 1000);
        }
        if (timer === 0) {
            setTimer(2 * 60);
            setOtpValid(false);
            console.log("all Cleared");
        }
        return () => {
            clearInterval(timerFunc);
        };
    }, [otpValid, timer, setOtpValid]);
    return (
        <>
            <div
                style={{
                    width: "100%",
                    marginTop: "1rem",
                }}
            >
                <div
                    style={{
                        fontSize: "1rem",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                    }}
                >
                    Enter verification code
                </div>
                <OtpInput
                    numInputs={6}
                    hasErrored={errors[name] ? true : false}
                    containerStyle={{
                        display: "flex",
                        justifyContent: "space-evenly",
                    }}
                    inputStyle={{
                        padding: "1rem 1rem",
                        // margin: "0 0.7rem",
                        fontSize: "1.1rem",
                        borderRadius: "4px",
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        width: "3rem",
                    }}
                    focusStyle={{
                        border: "1.3px #fa9810 solid ",
                    }}
                    errorStyle={{
                        border: "1.3px red solid ",
                    }}
                    {...field}
                />

                {errors[name] && (
                    <FormHelperText
                        error={errors[name] ? true : false}
                        style={{ marginTop: "1rem" }}
                    >
                        {errors[name].message}
                    </FormHelperText>
                )}

                <div
                    style={{
                        marginTop: "1em",
                        width: "100%",
                        textAlign: "center",
                    }}
                >
                    Valid for {timer} secs
                </div>
            </div>
        </>
    );
}

export default ElabsOtpInput;
