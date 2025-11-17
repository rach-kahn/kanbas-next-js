/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import Link from "next/link";
import AssignmentControls from "./AssignmentControls"
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { BiDownArrow, BiSolidDownArrow } from "react-icons/bi";
import AssignmentControlButtons1 from "./AssignmentControlButtons1";
import AssignmentControlButtons2 from "./AssignmentControlButtons2";
import { TbWriting } from "react-icons/tb";
import { PiNewspaper } from "react-icons/pi";
import LessonControlButtons from "./LessonControlButtons";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import * as client from "../../client";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import RealAssignmentControlButtons from "./RealAssignmentControlButtons";
import { addAssignment, deleteAssignment, editAssignment, updateAssignment, setAssignments } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const courseId = Array.isArray(cid) ? cid[0] : cid || ""; //addded this line, to prevent error 
  //const [assignments, setAssignments] = useState<any[]>(db.assignments);
  const [assignmentName, setAssignmentName] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  const onCreateAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = { title: assignmentName, course: courseId}; //changed cid to courseId
    const assignment = await client.createAssignmentForCourse(courseId, newAssignment); //ignore cid or change the definition , changed cid to courseId
    dispatch(setAssignments([...assignments, assignment]));
  };

  const onRemoveAssignment = async (assignmentId: string) => {
      await client.deleteAssignment(assignmentId);
      dispatch(setAssignments(assignments.filter((a: any) => a._id !== assignmentId)));
    };
    const onUpdateAssignment = async (assignment: any) => {
      await client.updateAssignment(assignment);
      const newAssignments = assignments.map((a: any) => a._id === assignment._id ? assignment : a);
      dispatch(setAssignments(newAssignments));
    };
useEffect(() => {
    fetchAssignments();
  }, []);


  const courseAssignments = assignments.filter((a: any) => a.course === cid); //maybe comment this out idk

  return (
    <div id="wd-assignments">
      <AssignmentControls setAssignmentName={setAssignmentName} assignmentName={assignmentName} addAssignment={onCreateAssignmentForCourse} />
      <h2>Assignments for Course {cid}</h2>
      <ListGroup className="rounded-0">
        {courseAssignments.map((assignment: any) => (
          <ListGroupItem
            key={assignment._id} // 
            className="d-flex align-items-center p-3 mb-2 border"
          >
            <RealAssignmentControlButtons assignmentId={assignment._id}
              deleteAssignment={onRemoveAssignment} editAssignment={(assignmentId) => dispatch(editAssignment(assignmentId))} />
            {/* <BsGripVertical className="me-2 fs-3" />
            <PiNewspaper color="green" className="me-2 fs-3" /> */}
            {!assignment.editing && (
            <Link
              href={`/Courses/${cid}/Assignments/${assignment._id}`}
              className="text-decoration-none"
            >
              {assignment.title}
              </Link>
            )}
          
              {assignment.editing && (
                <FormControl className="w-50 d-inline-block"
                  onChange={(e) => dispatch(updateAssignment({ ...assignment, title: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onUpdateAssignment({ ...assignment, editing: false });
                    }
                  }}
                  defaultValue={assignment.title} />
              )}
            
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}