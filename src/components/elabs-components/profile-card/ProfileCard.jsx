import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import "./profileCard.css";

function ProfileCard({ member }) {
    const iconButtonStyle = {
        backgroundColor: "#ffc000",
        marginRight: "10px",
    };
    const onMailClick = () => {
        window.open(`mailto:${member.email}`);
    };
    const onLinkediClick = () => {
        window.open(member.linkedin);
    };
    const onGithubClick = () => {
        window.open(member.github);
    };
    return (
        <div className="profile-card-container">
            <div className="profile-image">
                <img
                    src={member.photo}
                    alt="profile-pic"
                    className="profile-image-img"
                />
            </div>
            <div className="profile-info-container">
                <div className="profile-name">{member.name}</div>
                <div className="profile-domain">{member.domain}</div>
                <div className="profile-info">
                    {member.email ? (
                        <Tooltip title={member.email}>
                            <IconButton
                                style={iconButtonStyle}
                                onClick={onMailClick}
                            >
                                <Mail style={{ color: "#000" }} />
                            </IconButton>
                        </Tooltip>
                    ) : null}

                    {member.linkedin ? (
                        <IconButton
                            style={iconButtonStyle}
                            onClick={onLinkediClick}
                        >
                            <LinkedIn style={{ color: "#000" }} />
                        </IconButton>
                    ) : null}
                    {member.github ? (
                        <IconButton
                            style={iconButtonStyle}
                            onClick={onGithubClick}
                        >
                            <GitHub style={{ color: "#000" }} />
                        </IconButton>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
