import React, { useState } from 'react';
import { Button, FormControl } from "react-bootstrap";
import { FaSearch, FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from 'react-icons/fa6';
import AssignmentEditor from './AssignmentEditor';
export default function AssignmentControls({ assignmentName, setAssignmentName, addAssignment }:
{ assignmentName: string; setAssignmentName: (title: string) => void; addAssignment: () => void; }) {

        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <div id="wd-assignment-controls" className="d-flex text-nowrap">
                <div style={{ position: "relative", width: "250px", }} className="me-5">
                    <FormControl
                        type="text"
                        placeholder="Search..."
                        style={{ paddingLeft: "30px", height: "38px" }}
                    />

                    <FaSearch
                        style={{
                            position: "absolute",
                            left: "8px",
                            top: "30%",
                            color: "gray",
                        }}
                    />
                </div>
                <div className="flex-assignment-buttons">
                    <Button variant="secondary" size="lg" id="wd-collapse-all">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> Group
                    </Button>
                    <Button variant="danger" onClick={handleShow} size="lg" id="wd-add-module-btn">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Assignment
                    </Button>
                </div>
                 <AssignmentEditor show={show} handleClose={handleClose} dialogTitle="Add Assignment"
       assignmentName={assignmentName} setAssignmentName={setAssignmentName} addAssignment={addAssignment} />
            </div>
        )
    }

