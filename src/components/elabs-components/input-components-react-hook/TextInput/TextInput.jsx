import { styled, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
function TextInput({
    type = "text",
    name,
    label,
    required = false,
    control,
    defaultValue = "",
    rules = {},
    errors = {},
    inputProperties = {},
    style = {
        textColor: "#000",
        borderColor: "#ffab3d",
        width: "100%",
        disabledColor: "grey",
    },
    ...others
}) {
    const CustomTextField = styled(TextField)({
        "&.MuiTextField-root": {
            width: style.width,
            "-webkit-text-fill-color": "none",
        },
        "& label.Mui-focused": {
            color: style.textColor,
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: style.borderColor,
            },
            "&:hover fieldset": {
                borderColor: style.borderColor,
            },
            "&.Mui-focused fieldset": {
                borderColor: style.borderColor,
            },
            "& .Mui-disabled": {
                color: style.disabledColor,
                "-webkit-text-fill-color": style.disabledColor,
            },
        },
        "& .MuiInputBase-input": {
            color: style.textColor,
            fontFamily: "Comfortaa",
        },
        "& .MuiInputLabel-root": {
            color: style.textColor,
            fontFamily: "Comfortaa",
        },
        "& .Mui-disabled": {
            color: style.disabledColor,
            "-webkit-text-fill-color": style.disabledColor,
        },
    });
    return (
        <div className="input-container">
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                rules={rules}
                render={({ field }) => (
                    <CustomTextField
                        type={type}
                        label={label}
                        //required={required}
                        className="input-textfield"
                        error={errors[name] ? true : false}
                        helperText={errors[name] ? errors[name].message : ""}
                        InputLabelProps={{
                            id: "input-label",
                        }}
                        inputProps={{
                            id: "input-form",
                            ...inputProperties,
                        }}
                        {...field}
                        {...others}
                    />
                )}
            />
        </div>
    );
}

export default TextInput;
