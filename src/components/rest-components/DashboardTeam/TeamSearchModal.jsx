import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../elabs-components/input-components-react-hook/TextInput/TextInput.jsx";
import "./DashboardTeamModals.css";

function TeamSearchModal({ open, closeModal }) {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <Dialog open={open} onClose={closeModal} maxWidth="md" fullWidth>
            <form>
                <DialogContent>
                    <div className="team-search-header">Search Members</div>

                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <TextInput
                                name="name"
                                label="Name"
                                control={control}
                                errors={errors}
                                variant="outlined"
                                style={{
                                    textColor: "#000",
                                    borderColor: "#ffab3d",
                                    width: "100%",
                                    disabledColor: "grey",
                                }}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <TextInput
                                name="email"
                                label="Email"
                                control={control}
                                errors={errors}
                                variant="outlined"
                                style={{
                                    textColor: "#000",
                                    borderColor: "#ffab3d",
                                    width: "100%",
                                    disabledColor: "grey",
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} style={{ marginTop: "0.1rem" }}>
                        <Grid item md={6}>
                            <TextInput
                                name="roll"
                                label="Roll"
                                control={control}
                                errors={errors}
                                variant="outlined"
                                style={{
                                    textColor: "#000",
                                    borderColor: "#ffab3d",
                                    width: "100%",
                                    disabledColor: "grey",
                                }}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <TextInput
                                name="domain"
                                label="Domain"
                                control={control}
                                errors={errors}
                                variant="outlined"
                                style={{
                                    textColor: "#000",
                                    borderColor: "#ffab3d",
                                    width: "100%",
                                    disabledColor: "grey",
                                }}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        disableElevation
                        style={{
                            textTransform: "none",
                            fontWeight: "400",
                        }}
                    >
                        Search
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

export default TeamSearchModal;
