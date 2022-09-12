import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { fics } from "../../assets/lists/fic.js";
import ProfileCard from "../../components/elabs-components/profile-card/ProfileCard.jsx";
import "./team.css";

const tabStyle = {
    fontFamily: "Comfortaa",
    fontWeight: "bold",
    fontSize: "1.1rem",
    "&.Mui-selected": {
        color: "#523D00",
    },
};

function Team() {
    const [members] = useState([
        {
            isAdmin: false,
            _id: "60e43fc9dbb0bd5598688d40",
            name: "Praddyum Verma",
            domain: "Web Development",
            photo: "https://firebasestorage.googleapis.com/v0/b/e-labs-550aa.appspot.com/o/new_team%2FPraddyum_Verma.png?alt=media&token=f31a67f0-9da9-431f-b017-1b7c23ba1619",
            email: "1828257@kiit.ac.in",
            linkedin: "https://www.linkedin.com/in/praddyum",
            github: "https://github.com/Praddy2009",
            __v: 0,
            isActive: true,
        },
        {
            isAdmin: true,
            _id: "60e47882dbb0bd5598688d54",
            name: "Pratyay Saha",
            domain: "Internet of Things",
            photo: "https://firebasestorage.googleapis.com/v0/b/e-labs-550aa.appspot.com/o/new_team%2Fpratyay_saha.jpg?alt=media&token=75b9516e-9279-4a51-8e1e-3766c4b44ddb",
            email: "1928045@kiit.ac.in",
            linkedin: "https://www.linkedin.com/in/pratyay-saha/",
            github: "https://github.com/pratyaysaha",
            __v: 0,
            isActive: true,
        },
        {
            isAdmin: false,
            _id: "60e471a4dbb0bd5598688d4c",
            name: "Rishav De",
            domain: "Photography",
            photo: "https://firebasestorage.googleapis.com/v0/b/e-labs-550aa.appspot.com/o/new_team%2FRishav%20De.jpeg?alt=media&token=508f15f8-35e6-4ae8-be87-ef98448a67c9",
            email: "1905198@kiit.ac.in",
            linkedin: "https://www.linkedin.com/in/rishav-de-10641a1a0",
            github: "https://github.com/mech-rishav",
            __v: 0,
            isActive: true,
        },
        {
            isAdmin: false,
            _id: "60e43d0fdbb0bd5598688d38",
            name: "Meghdut Mandal",
            domain: "App Development",
            photo: "https://firebasestorage.googleapis.com/v0/b/e-labs-550aa.appspot.com/o/new_team%2FMeghdut_Mandal.jpg?alt=media&token=ff43d5c8-0b10-4f1b-9016-f9d3fef94bbc",
            email: "1828017@kiit.ac.in",
            linkedin: "https://www.linkedin.com/in/meghdut-mandal-aa2625185/",
            github: "https://github.com/Meghdut-Mandal/",
            __v: 0,
            isActive: false,
        },
        {
            isAdmin: false,
            _id: "60fc6dce497da85bccb0df7c",
            name: "Shreya Raj",
            domain: "Marketing",
            photo: "https://firebasestorage.googleapis.com/v0/b/e-labs-550aa.appspot.com/o/new_team%2FShreya%20Raj.jpeg?alt=media&token=2ccc3e47-07ae-4d14-95b2-67ee0bfaf72a",
            email: "2030050@kiit.ac.in",
            linkedin: "http://www.linkedin.com/in/theshreyaraj",
            github: "https://github.com/theshreyaraj",
            __v: 0,
            isActive: true,
        },
        {
            isAdmin: false,
            _id: "60ff00f209ba9100157e4782",
            name: "Aanchal Chamaria",
            domain: "Java",
            photo: "https://firebasestorage.googleapis.com/v0/b/e-labs-550aa.appspot.com/o/new_team%2FAanchal%20Chamaria.jpeg?alt=media&token=42c88dbb-8697-4702-9a70-7b5906360a85",
            email: "20051602@kiit.ac.in",
            linkedin: "https://www.linkedin.com/in/aanchal-chamaria-177a09210/",
            __v: 0,
            github: "",
            isActive: false,
        },
        {
            isAdmin: false,
            _id: "60e46d63dbb0bd5598688d44",
            name: "Sanchrika Debnath",
            domain: "Marketing",
            photo: "https://firebasestorage.googleapis.com/v0/b/e-labs-550aa.appspot.com/o/new_team%2FSANCHARIKA_DEBNATH.jpeg?alt=media&token=40cb00e7-4c1c-438e-9539-b00e1b3625e2",
            email: "1906126@kiit.ac.in",
            linkedin: "https://www.linkedin.com/in/sancharika-debnath/",
            github: "https://github.com/sancharika",
            isActive: true,
            __v: 0,
        },
        {
            isAdmin: false,
            _id: "60fef29d09ba9100157e471c",
            name: "Ritika Gupta",
            domain: "Java",
            photo: "https://firebasestorage.googleapis.com/v0/b/e-labs-550aa.appspot.com/o/new_team%2FRITIKA%20GUPTA.jpg?alt=media&token=89b97b10-bbbf-4d70-9976-a880791f0849",
            email: "1905412@kiit.ac.in",
            linkedin: "https://www.linkedin.com/in/ritikagupta04",
            github: "https://github.com/ritika-04",
            __v: 0,
            isActive: true,
        },
        {
            isAdmin: false,
            _id: "60e43c29dbb0bd5598688d35",
            name: "Raj Gupta",
            domain: "Web Development",
            photo: "https://firebasestorage.googleapis.com/v0/b/e-labs-550aa.appspot.com/o/new_team%2Fraj_gupta.jpg?alt=media&token=7b59c685-5e93-4ad0-9f76-6293f4eb373f",
            email: "1905552@kiit.ac.in",
            linkedin: "https://www.linkedin.com/in/raj-gupta-a92b83194",
            github: "https://github.com/dantes-code",
            __v: 0,
            isActive: false,
        },
        {
            isAdmin: false,
            _id: "60fefd7509ba9100157e4757",
            name: "Dipankan Bandhopadhya",
            domain: "Graphic Designing",
            photo: "https://firebasestorage.googleapis.com/v0/b/e-labs-550aa.appspot.com/o/new_team%2FShashi%20Shekhar%20Yadav.jpg?alt=media&token=68ca7d6c-294b-4289-acb6-f5b4a8fc29e4",
            email: "1928058@kiit.ac.in",
            linkedin: "https://www.linkedin.com/in/shashi-shekhar-mcgolu/",
            __v: 0,
            isActive: false,
        },
    ]);
    const [tabValue, setTabValue] = useState(0);
    const [currentMembers, setCurrentMembers] = useState([]);
    const [alumniMembers, setAlumniMembers] = useState([]);
    const [ficList] = useState(fics);

    useEffect(() => {
        const filterCurrentMembers = members.filter(
            (each) => each.isActive === true
        );
        setCurrentMembers(filterCurrentMembers);
        const filterAlumniMembers = members.filter(
            (each) => each.isActive === false
        );
        setAlumniMembers(filterAlumniMembers);
    }, [members]);
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };
    return (
        <div>
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
