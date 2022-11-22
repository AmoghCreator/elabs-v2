import { Description } from "@mui/icons-material";
import {
    Avatar,
    Dialog,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import API from "../../core/utils/API";
import "./DashboardCourse.css";

function CoursesAndClassesViewModal({ open, closeModal, selectedCourse }) {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        const getClasses = async () => {
            const result = await API(`/class/course/${selectedCourse._id}`);
            if (result.status === 200) {
                setClasses(result.data.classes);
            } else {
                console.error("PROBLEM in fetch");
                //TODO: Alert Box Changes
            }
        };
        if (selectedCourse._id) {
            getClasses();
        }
    }, [selectedCourse]);

    return (
        <Dialog
            open={open}
            onClose={() => {
                closeModal();
                setClasses([]);
            }}
            maxWidth="md"
            fullWidth
        >
            <div className="db-course-container">
                <div className="db-course-details">
                    <div className="db-course-each-detail">
                        <div className="db-course-each-detail-header">Name</div>
                        <div className="db-course-each-detail-info">
                            {selectedCourse.name}
                        </div>
                    </div>
                    <div className="db-course-each-detail">
                        <div className="db-course-each-detail-header">Year</div>
                        <div className="db-course-each-detail-info">
                            {selectedCourse.year}
                        </div>
                    </div>
                    <div className="db-course-each-detail">
                        <div className="db-course-each-detail-header">
                            Semester
                        </div>
                        <div className="db-course-each-detail-info">
                            {selectedCourse.semester}
                        </div>
                    </div>
                    <div className="db-course-each-detail">
                        <div className="db-course-each-detail-header">
                            Total Seats
                        </div>
                        <div className="db-course-each-detail-info">
                            {selectedCourse.totalSeats}
                        </div>
                    </div>
                    <div className="db-course-each-detail">
                        <div className="db-course-each-detail-header">
                            Present Seats
                        </div>
                        <div className="db-course-each-detail-info">
                            {selectedCourse.presentSeats}
                        </div>
                    </div>
                </div>
                <div className="db-course-classes">
                    <div className="db-course-class-header">Classes</div>
                    {classes.length <= 0 ? (
                        <div>No classes conducted yet.</div>
                    ) : (
                        <List>
                            {classes.map((eachClass, index) => {
                                return (
                                    <ListItem key={eachClass._id}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Description />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={`Day ${index + 1}`}
                                            secondary={eachClass.date}
                                        />
                                    </ListItem>
                                );
                            })}
                        </List>
                    )}
                </div>
            </div>
        </Dialog>
    );
}

export default CoursesAndClassesViewModal;
