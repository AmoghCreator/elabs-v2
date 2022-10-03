import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { Dialog } from "@mui/material";
import React from "react";

const getLastPartOfLink = (link) => {
    const linkArr = link.split("/");
    if (linkArr[linkArr.length - 1] !== "") {
        return linkArr[linkArr.length - 1];
    } else {
        return linkArr[linkArr.length - 2];
    }
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
    return (
        <Dialog open={open} onClose={closeModal} sx="md" fullWidth>
            {Object.keys.length > 0 ? (
                <div className="i-member-dialog">
                    <div className="i-member-image-container">
                        <img
                            src={selectedMember.photo}
                            alt={selectedMember._id}
                            className="i-member-image"
                        />
                    </div>
                    <div className="i-member-details">
                        <div className="i-member-name">
                            {selectedMember.name}
                        </div>
                        <div className="i-member-domain">
                            {selectedMember.domain}
                        </div>
                        {selectedMember.isActive !== null &&
                            selectedMember.isActive === false && (
                                <div className="i-member-alumni">Alumni</div>
                            )}

                        <div className="i-member-rest-details">
                            <div
                                className="i-member-detail"
                                onClick={onMailClick}
                            >
                                <div>
                                    <Mail />
                                </div>
                                <div>{selectedMember.email}</div>
                            </div>
                            {selectedMember.github && (
                                <div
                                    className="i-member-detail"
                                    onClick={onGithubClick}
                                >
                                    <div>
                                        <GitHub />
                                    </div>
                                    <div>
                                        {getLastPartOfLink(
                                            selectedMember.github
                                        )}
                                    </div>
                                </div>
                            )}
                            {selectedMember.linkedin && (
                                <div
                                    className="i-member-detail"
                                    onClick={onLinkediClick}
                                >
                                    <div>
                                        <LinkedIn />
                                    </div>
                                    <div>
                                        {getLastPartOfLink(
                                            selectedMember.linkedin
                                        )}
                                    </div>
                                </div>
                            )}
                            {selectedMember.isAdmin && (
                                <div className="i-member-admin">
                                    <strong>Administrator</strong> access
                                    granted
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : null}
        </Dialog>
    );
}

export default IndividualMemberModal;
