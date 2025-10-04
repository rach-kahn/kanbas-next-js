import React from 'react';
import { Button, FormControl } from "react-bootstrap";
import { FaSearch, FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from 'react-icons/fa6';
export default function AssignmentControls() {
    return (
        <div id="wd-assignment-controls" className="d-flex text-nowrap">
            <div style={{ position: "relative", width: "250px",  }} className="me-5">
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
            <Button variant="secondary" size="md" id="wd-collapse-all">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> Group
            </Button>
            <Button variant="danger" size="md"  id="wd-add-module-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
            </div>
        </div>
    )
}

