import React from "react";
import { Publish } from "@mui/icons-material";
import { Button, FormHelperText } from "@mui/material";
import { useController } from "react-hook-form";
import "./ImageUpload.css";

function ImageUpload({
    avatar,
    show = true,
    imgHeight = 200,
    imgWidth = 200,
    mode = "new",
    control,
    name,
    image,
    setImage,
    rules = {},
    errors = {},
}) {
    const { field } = useController({
        control,
        name,
        rules,
        defaultValue: mode === "update" ? `${avatar}` : "",
    });
    return (
        <>
            <div className="img-upload">
                <div className="img-upload-top">
                    <img
                        className="img-preview"
                        style={{ width: imgWidth, height: imgHeight }}
                        src={image ? URL.createObjectURL(image) : avatar}
                        alt={"img-preview"}
                    />
                    <label htmlFor={name}>
                        <Button
                            variant="contained"
                            size="small"
                            component="span"
                            startIcon={<Publish />}
                            color="warning"
                        >
                            upload
                        </Button>
                    </label>
                    <input
                        type="file"
                        id={name}
                        style={{ display: show ? "none" : "block" }}
                        value={""}
                        onChange={(e) => {
                            setImage(e.target.files[0]);
                            field.onChange(e.target.files[0]);
                        }}
                    />
                </div>
                <div className="img-upload-bottom">
                    {errors[name] && (
                        <FormHelperText
                            error={errors[name] ? true : false}
                            style={{ fontSize: "1.1rem" }}
                        >
                            {errors[name].message}
                        </FormHelperText>
                    )}
                </div>
            </div>
        </>
    );
}

export default ImageUpload;
