import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import AlertBox, {
    AlertBoxTypes,
    changeAlertBoxState,
} from "../../../components/elabs-components/AlertBox/AlertBox.jsx";
import API from "../../../components/core/utils/API";
import CoursesAndClassesViewModal from "../../../components/rest-components/DashboardCourse/CoursesAndClassesViewModal.jsx";

function Courses() {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState({});
    const [eachCourseDetailsModalState, setEachCourseDetailsModalState] =
        useState(false);
    const [alertBoxState, setAlertBoxState] = useState({
        open: false,
        type: AlertBoxTypes.SUCCESS,
        message: "",
        title: null,
    });
    useEffect(() => {
        const getCourses = async () => {
            const result = await API("/course");
            if (result.status === 200) {
                setCourses(result.data.courses);
            } else {
                changeAlertBoxState(
                    AlertBoxTypes.ERROR,
                    "Fetching error",
                    "There was problem in fetching the courses",
                    setAlertBoxState
                );
                setCourses(null);
            }
        };
        getCourses();
    }, []);
    const handleEachCourseDetailsModalStateOpen = () => {
        setEachCourseDetailsModalState(true);
    };
    const handleEachCourseDetailsModalStateClose = () => {
        setEachCourseDetailsModalState(false);
    };
    const columns = [
        {
            field: "name",
            headerName: "Course Name",
            width: 300,
            renderCell: (params) => {
                return (
                    <div
                        className="db-team-grid-name"
                        onClick={() => {
                            setSelectedCourse(params.row);
                            handleEachCourseDetailsModalStateOpen();
                        }}
                    >
                        {params.row.name}
                    </div>
                );
            },
        },
        {
            field: "year",
            headerName: "Year",
            width: 200,
        },
        {
            field: "semester",
            headerName: "Semester",
            width: 140,
        },
        {
            field: "totalSeats",
            headerName: "Total Seats",
            width: 150,
        },
        {
            field: "presentSeats",
            headerName: "Present Seats",
            width: 170,
        },
        {
            field: "classTaken",
            headerName: "Classes Taken",
            width: 170,
            renderCell: (params) => {
                return <div>{params.row.classes.length}</div>;
            },
        },
    ];
    return (
        <>
            <div style={{ height: "100%" }}>
                <div className="db-team-info-bar">
                    <div className="db-team-info-text">
                        Courses &amp; Classes
                    </div>
                </div>
                <div className="db-team-grid-container">
                    {courses && (
                        <DataGrid
                            rows={courses}
                            disableSelectionOnClickx
                            disableSelectionOnClick
                            columns={columns}
                            getRowId={(row) => row._id}
                            //loading={courses.length === 0}
                            style={{ fontSize: "0.9rem" }}
                            pagination
                        />
                    )}
                </div>
            </div>
            <AlertBox
                type={alertBoxState.type}
                title={alertBoxState.title}
                message={alertBoxState.message}
                state={alertBoxState.open}
                handleState={setAlertBoxState}
            />
            <CoursesAndClassesViewModal
                open={eachCourseDetailsModalState}
                closeModal={handleEachCourseDetailsModalStateClose}
                selectedCourse={selectedCourse}
            />
        </>
    );
}

export default Courses;
