import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { fics } from "../../assets/lists/fic.js";
import ProfileCard from "../../components/elabs-components/profile-card/ProfileCard.jsx";
import "./team.css";
import API from "../../components/core/utils/API.js";

const tabStyle = {
    fontFamily: "Comfortaa",
    fontWeight: "bold",
    fontSize: "1.1rem",
    "&.Mui-selected": {
        color: "#523D00",
    },
};

function Team() {
    const [members, setMembers] = useState([]);
    const [tabValue, setTabValue] = useState(0);
    const [currentMembers, setCurrentMembers] = useState([]);
    const [alumniMembers, setAlumniMembers] = useState([]);
    const [ficList] = useState(fics);

    useEffect(() => {
        const fetchData = async () => {
            const result = await API("/team");
            let uData;
            if (result.status === 200) {
                uData = result.data.data;
            } else {
                uData = null;
            }

            const groups = uData.reduce((groups, user) => {
                const group = groups[user.domain] || [];
                group.push(user);
                groups[user.domain] = group;
                return groups;
            }, {});

            // Edit: to add it in the array format instead
            const groupArrays = Object.keys(groups).map((group) => {
                return groups[group];
            });
            // console.log(groupArrays);

            // sorting the groups on the basis of their roll numbers
            groupArrays.forEach((group) => {
                group.sort((a, b) => {
                    return (
                        Number(a.email.split("@")[0].substr(0, 3)) -
                        Number(b.email.split("@")[0].substr(0, 3))
                    );
                });
            });

            // sorting members on the basis of their domain

            groupArrays.sort((a, b) => {
                return a[0].domain.localeCompare(b[0].domain);
            });

            setMembers(groupArrays.flat());

            // const sortedMembers = groupArrays.sort((a, b) => {
            //     if (a[0].domain == b[0].domain) {
            //         return (
            //             Number(a[0].email.split("@")[0].substr(0, 3)) -
            //             Number(b[0].email.split("@")[0].substr(0, 3))
            //         );
            //     } else {
            //         return a[0].domain > b[0].domain ? 1 : -1;
            //     }
            // });
            // setMembers(sortedMembers.flat());
        };

        fetchData();

        const current = members.filter(
            (member) => member.isActive === null || member.isActive === true
        );
        const alumni = members.filter((member) => member.isActive === false);

        setCurrentMembers(current);
        setAlumniMembers(alumni);
    }, [members]);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };
    return (
        <div className="main-app">
            <canvas className="background"></canvas>
            <div className="team-fic">
                <div className="team-text header">Our mentors</div>
                <div className="team-container grid">
                    {ficList.map((eachFic) => {
                        return <ProfileCard member={eachFic} />;
                    })}
                </div>
            </div>
            <div className="team-text header">Our team</div>
            <div className="tabs">
                <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    variant="fullWidth"
                    TabIndicatorProps={{
                        sx: {
                            backgroundColor: "#ffc000",
                            height: "0.2rem",
                        },
                    }}
                >
                    <Tab label="Current" disableRipple sx={tabStyle} />
                    <Tab label="Alumni" disableRipple sx={tabStyle} />
                </Tabs>
            </div>
            <div className="team-container">
                <div className="team-container grid">
                    {tabValue === 0 &&
                        currentMembers.map((eachMember) => {
                            return <ProfileCard member={eachMember} />;
                        })}
                    {tabValue === 1 &&
                        alumniMembers.map((eachMember) => {
                            return <ProfileCard member={eachMember} />;
                        })}
                </div>
            </div>
        </div>
    );
}

export default Team;
