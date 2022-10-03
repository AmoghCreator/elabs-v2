import { ManageSearchRounded, PersonAddAlt1Rounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useTitle } from "../../../components/core/hooks/useTitle";
import API from "../../../components/core/utils/API";
import AlertBox, {
    AlertBoxTypes,
    changeAlertBoxState,
} from "../../../components/elabs-components/AlertBox/AlertBox.jsx";
import IndividualMemberModal from "../../../components/rest-components/DashboardTeam/IndividualMemberModal.jsx";
import TeamSearchModal from "../../../components/rest-components/DashboardTeam/TeamSearchModal.jsx";
import "./DashboardTeam.css";

const onlyActiveMembersFilter = (allMembers) => {
    return allMembers.filter(
        (each) => each.isActive == null || each.isActive === true
    );
};

function DashboardTeam() {
    useTitle("Team - ELabs Console");
    const [members, setMemebers] = useState([]);
    const [selectedMember, setSelectedMember] = useState({});
    const [teamSearchModalState, setTeamSearchModalState] = useState(false);
    const [teamMemberModalState, setTeamMemberModalState] = useState(false);
    const [alertBoxState, setAlertBoxState] = useState({
        open: false,
        type: AlertBoxTypes.SUCCESS,
        message: "",
        title: null,
    });
    useEffect(() => {
        const getMembers = async () => {
            const result = await API("/team");
            if (result.status === 200) {
                setMemebers(onlyActiveMembersFilter(result.data.data));
                //setMemebers(result.data.data);
            } else {
                changeAlertBoxState(
                    AlertBoxTypes.ERROR,
                    "Fetching error",
                    "There was problem in fetching the member details",
                    setAlertBoxState
                );
                setMemebers(null);
            }
        };
        getMembers();
    }, []);
    const handleSearchModalOpen = () => {
        setTeamSearchModalState(true);
    };
    const handleSearchModalClose = () => {
        setTeamSearchModalState(false);
    };
    const handleTeamMemberModalOpen = () => {
        setTeamMemberModalState(true);
    };
    const handleTeamMemberModalClose = () => {
        setTeamMemberModalState(false);
    };
    const columns = [
        {
            field: "name",
            headerName: "Members",
            flex: 1,
            renderCell: (params) => {
                return (
                    <div
                        className="db-team-grid-name"
                        onClick={() => {
                            setSelectedMember(params.row);
                            handleTeamMemberModalOpen();
                        }}
                    >
                        <img
                            className="db-team-grid-photo"
                            src={params.row.photo}
                            alt={params.row._id}
                        />
                        {/* {params.row.isActive != null &&
                        params.row.isActive === false ? (
                            <span style={{ color: "red" }}>
                                {params.row.name}
                            </span>
                        ) : (
                            params.row.name
                        )} */}
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "domain", headerName: "Domain", flex: 1 },
    ];
    return (
        <>
            <div style={{ height: "100%" }}>
                <div className="db-team-info-bar">
                    <div className="db-team-info-text">Team Management</div>
                    <div>
                        <Button
                            disableElevation
                            startIcon={<ManageSearchRounded />}
                            variant="outlined"
                            style={{
                                textTransform: "none",
                                marginRight: "1rem",
                            }}
                            onClick={handleSearchModalOpen}
                        >
                            Search ...
                        </Button>
                        <Button
                            variant="contained"
                            disableElevation
                            startIcon={<PersonAddAlt1Rounded />}
                            style={{
                                textTransform: "none",
                            }}
                        >
                            Add Member
                        </Button>
                    </div>
                </div>
                <div className="db-team-grid-container">
                    <DataGrid
                        rows={members}
                        disableSelectionOnClickx
                        disableSelectionOnClick
                        columns={columns}
                        getRowId={(row) => row._id}
                        loading={members.length === 0}
                        style={{ fontSize: "0.9rem" }}
                        pagination
                    />
                </div>
            </div>
            <AlertBox
                type={alertBoxState.type}
                title={alertBoxState.title}
                message={alertBoxState.message}
                state={alertBoxState.open}
                handleState={setAlertBoxState}
            />
            <TeamSearchModal
                open={teamSearchModalState}
                closeModal={handleSearchModalClose}
            />
            <IndividualMemberModal
                open={teamMemberModalState}
                closeModal={handleTeamMemberModalClose}
                selectedMember={selectedMember}
            />
        </>
    );
}

export default DashboardTeam;
