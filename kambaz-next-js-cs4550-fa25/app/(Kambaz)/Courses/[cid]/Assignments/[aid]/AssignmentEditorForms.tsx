"use client";
import { useParams } from "next/navigation";
import React from 'react';
import { Button, Col, Form, FormCheck, FormControl, FormLabel, FormSelect, InputGroup, Row } from 'react-bootstrap';
import FormRange from 'react-bootstrap/esm/FormRange';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import { assignments } from "@/app/(Kambaz)/Database";

export default function AssignmentEditorForms() {
     const {cid, aid} = useParams();
   const assignment = assignments.find(a => a._id === aid && a.course === cid);
    return (
        <>
            <div id="wd-name">
                <Row className="mb-3">
                    <FormLabel>{assignment?.title}</FormLabel>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="A1" />
                    </Col>
                </Row>
            </div >
            <div id="wd-description">
                <Row className="mb-3">
                    <FormLabel>      </FormLabel>
                    <Col sm={10}>
                        <FormControl as="textarea" rows={5} placeholder="The assignment is available online Submit a link to the landing page of" />
                    </Col>
                </Row>
            </div>
            <div id="wd-points">
                <Row className="mb-3">
                    <FormLabel>Points</FormLabel>
                    <Col sm={10}>
                        <FormControl type="number" placeholder="100" />
                    </Col>
                </Row>
            </div>
            <div id="wd-group">
                <Row className="mb-3">
                    <FormLabel>Assignment Group</FormLabel>
                    <Col sm={10}>
                        <FormSelect>
                            <option value="ASSIGNMENTS" defaultChecked>ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </FormSelect>
                    </Col>
                </Row>
            </div>
            <div id="wd-display-grade-as">
                <Row className="mb-3">
                    <FormLabel>Display Grade as</FormLabel>
                    <Col sm={10}>
                        <FormSelect>
                            <option value="PERCENTAGE" defaultChecked>Percentage</option>
                            <option value="POINTS">Points</option>
                        </FormSelect>
                    </Col>
                </Row>
            </div>
            <div id="wd-submission-type">
                <Row className="mb-3">
                    <FormLabel>Submission Type</FormLabel>
                    <Col sm={10}>
                        <FormSelect>
                            <option value="ONLINE" defaultChecked>ONLINE</option>
                            <option value="INPERSON">In Person</option>

                        </FormSelect>
                    </Col>
                    <Col sm={10}>
                        Online Entry Options
                        <FormCheck type="radio" label="Text Entry" name="formHorizontalRadios" defaultChecked />
                        <FormCheck type="radio" label="Website URL" name="formHorizontalRadios" />
                        <FormCheck type="radio" label="Media Recordings" name="formHorizontalRadios" />
                        <FormCheck type="radio" label="Student Annotation" name="formHorizontalRadios" />
                        <FormCheck type="radio" label="File Uploads" name="formHorizontalRadios" />
                    </Col>
                </Row>
            </div>

            <div id="wd-assign-to">
                <Row className="mb-3">
                    <FormLabel>Assign to</FormLabel>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Everyone" />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <FormLabel> Due </FormLabel>
                    <Col sm={10}>
                        <FormControl type="date" placeholder="2024-05-13" />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <FormLabel> Available from </FormLabel>
                    <Col sm={10}>
                        <FormControl type="date" placeholder="2024-05-13" />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <FormLabel> Until </FormLabel>
                    <Col sm={10}>
                        <FormControl type="date" />
                    </Col>
                </Row>
            </div>


        </>
    )
}