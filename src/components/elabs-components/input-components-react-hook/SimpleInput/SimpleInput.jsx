import React from "react";
import { Controller } from "react-hook-form";
import "./SimpleInput.css";

function SimpleInput({
    type = "text",
    name,
    required = false,
    control,
    defaultValue = "",
    rules = {},
    errors = {},
    ...others
}) {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field }) => (
                <input
                    type={type}
                    value={defaultValue}
                    {...field}
                    {...others}
                    className="simple-input-form"
                />
            )}
        />
    );
}
export default SimpleInput;
