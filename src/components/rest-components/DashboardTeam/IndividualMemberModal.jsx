import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { Button, Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import ImageUpload from "./ImageUpload";
import { useForm } from "react-hook-form";
import SimpleInput from "../../elabs-components/input-components-react-hook/SimpleInput/SimpleInput.jsx";
import domainList from "../../../assets/lists/domain";
import { AlertBoxTypes } from "../../elabs-components/AlertBox/AlertBox.jsx";

const getLastPartOfLink = (link) => {
    if (link) {
        const linkParts = link.split("/");
        return linkParts[linkParts.length - 1];
    }
    return "";
};

function IndividualMemberModal({ open, closeModal, selectedMember }) {
    const onMailClick = () => {
        window.open(`mailto:${selectedMember.email}`);
    };
    const onLinkediClick = () => {
        window.open(selectedMember.linkedin);
    };
    const onGithubClick = () => {
        window.open(selectedMember.github);
    };
    const [kpressed, setKpressed] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [admin, setAdmin] = useState(selectedMember.isAdmin);
    const [active, setActive] = useState(
        selectedMember.isActive === null ||
            selectedMember.isActive === undefined
            ? false
            : selectedMember.isActive
    );
    const [domain, setDomain] = useState(selectedMember.domain);
    const [alertBoxState, setAlertBoxState] = useState({
        open: false,
        type: AlertBoxTypes.SUCCESS,
        message: "",
        title: null,
    });

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.ctrlKey && e.key === "q") {
                setKpressed(!kpressed);
            }
        });
    }, [kpressed]);

    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: "onBlur" });

    const onsubmit = async (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("linkedin", data.linkedin);
        formData.append("github", data.github);
        formData.append("domain", domain);
        formData.append("isAdmin", admin);
        formData.append("isActive", active);
        formData.append("image", imageFile);

        const apiUrl = `${process.env.REACT_APP_API_URL}/team/v2/${selectedMember._id}`;
        const response = await fetch(apiUrl, {
            method: "PATCH",
            headers: {
                contentType: "application/json",
            },
            body: formData,
        });
        const result = await response.json();
        console.log("data" + JSON.stringify(result));

        if (result.status === "success") {
            setAlertBoxState({
                open: true,
                type: AlertBoxTypes.SUCCESS,
                message: "Member Updated Successfully",
                title: null,
            });
        } else {
            setAlertBoxState({
                open: true,
                type: AlertBoxTypes.ERROR,
                message: "Error Updating Member",
                title: null,
            });
        }
    };

    // hard reloading the page after updating the member
    useEffect(() => {
        if (alertBoxState.open) {
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    }, [alertBoxState]);

    useEffect(() => {
        setAdmin(selectedMember.isAdmin);
        setActive(
            selectedMember.isActive === null ||
                selectedMember.isActive === undefined
                ? false
                : selectedMember.isActive
        );
        setDomain(selectedMember.domain);
    }, [selectedMember]);

    const onUpdateClick = () => {
        handleSubmit(onsubmit)();
        closeModal();
        kpressed && setKpressed(!kpressed);
    };

    const handleAdminChange = (event) => {
        if (event.target.checked) {
            setAdmin(true);
        } else {
            setAdmin(false);
        }
    };
    const handleActiveChange = (event) => {
        if (event.target.checked) {
            setActive(true);
        } else {
            setActive(false);
        }
    };

    const closeModalHandler = () => {
        handleSubmit(onsubmit)();
        setKpressed(false);
        closeModal();
    };

    return (
        <Dialog open={open} onClose={closeModalHandler} sx="md" fullWidth>
            {Object.keys.length > 0 ? (
                <form onSubmit={handleSubmit(onsubmit)}>
                    <div className="i-member-dialog">
                        <div className="i-member-image-container">
                            {kpressed ? (
                                <ImageUpload
                                    mode="update"
                                    name="photo"
                                    image={imageFile}
                                    setImage={setImageFile}
                                    avatar={selectedMember.photo}
                                    errors={errors}
                                    control={control}
                                />
                            ) : (
                                <img
                                    src={selectedMember.photo}
                                    alt={selectedMember._id}
                                    className="i-member-image"
                                />
                            )}
                        </div>
                        <div className="i-member-details">
                            <div className="i-member-name">
                                {kpressed ? (
                                    <SimpleInput
                                        name="name"
                                        control={control}
                                        defaultValue={selectedMember.name}
                                    />
                                ) : (
                                    selectedMember.name
                                )}
                            </div>

                            <div className="i-member-domain">
                                {kpressed ? (
                                    <select
                                        className="i-member-domain-select"
                                        name="domain"
                                        defaultValue={selectedMember.domain}
                                        onChange={(e) =>
                                            setDomain(e.target.value)
                                        }
                                    >
                                        {domainList.map((domain) => (
                                            <option
                                                value={domain}
                                                key={domain}
                                                className="i-member-domain-option"
                                            >
                                                {domain}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    selectedMember.domain
                                )}
                            </div>
                            {selectedMember.isActive !== null &&
                                selectedMember.isActive === false && (
                                    <div className="i-member-alumni">
                                        Alumni
                                    </div>
                                )}

                            <div className="i-member-rest-details">
                                <div
                                    className="i-member-detail"
                                    onClick={!kpressed && onMailClick}
                                >
                                    <div>
                                        <Mail />
                                    </div>
                                    <div>
                                        {kpressed ? (
                                            <SimpleInput
                                                name="email"
                                                control={control}
                                                defaultValue={
                                                    selectedMember.email
                                                }
                                            />
                                        ) : (
                                            getLastPartOfLink(
                                                selectedMember.email
                                            )
                                        )}
                                    </div>
                                </div>
                                <div
                                    className="i-member-detail"
                                    onClick={!kpressed && onGithubClick}
                                >
                                    <div>
                                        <GitHub />
                                    </div>
                                    <div>
                                        {kpressed ? (
                                            <SimpleInput
                                                name="github"
                                                control={control}
                                                defaultValue={
                                                    selectedMember.github
                                                }
                                            />
                                        ) : (
                                            getLastPartOfLink(
                                                selectedMember.github
                                            )
                                        )}
                                    </div>
                                </div>
                                <div
                                    className="i-member-detail"
                                    onClick={!kpressed && onLinkediClick}
                                >
                                    <div>
                                        <LinkedIn />
                                    </div>
                                    <div>
                                        {kpressed ? (
                                            <SimpleInput
                                                name="linkedin"
                                                control={control}
                                                defaultValue={
                                                    selectedMember.linkedin
                                                }
                                            />
                                        ) : (
                                            getLastPartOfLink(
                                                selectedMember.linkedin
                                            )
                                        )}
                                    </div>
                                </div>

                                {kpressed ? (
                                    <div className="i-member-detail">
                                        <div className="i-member-update">
                                            {/* <input type="checkbox" value="Admin" /> */}
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        defaultChecked={
                                                            selectedMember.isAdmin
                                                        }
                                                        onChange={(e) => {
                                                            handleAdminChange(
                                                                e
                                                            );
                                                        }}
                                                        name="isAdmin"
                                                        color="primary"
                                                    />
                                                }
                                                label="Admin"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        color="warning"
                                                        defaultChecked={
                                                            selectedMember.isActive ===
                                                                null ||
                                                            selectedMember.isActive ===
                                                                true
                                                                ? true
                                                                : false
                                                        }
                                                        onChange={(e) => {
                                                            handleActiveChange(
                                                                e
                                                            );
                                                        }}
                                                        name="isActive"
                                                    />
                                                }
                                                label="isActive"
                                            />
                                        </div>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            type="submit"
                                            onClick={onUpdateClick}
                                        >
                                            Update
                                        </Button>
                                    </div>
                                ) : (
                                    selectedMember.isAdmin && (
                                        <div className="i-member-admin">
                                            <strong>Administrator</strong>{" "}
                                            access granted
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </form>
            ) : null}
        </Dialog>
    );
}

export default IndividualMemberModal;
