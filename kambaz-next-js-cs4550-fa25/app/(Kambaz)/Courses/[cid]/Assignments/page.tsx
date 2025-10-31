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
import { useState } from "react";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import RealAssignmentControlButtons from "./RealAssignmentControlButtons";
import { addAssignment, deleteAssignment, editAssignment, updateAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  //const [assignments, setAssignments] = useState<any[]>(db.assignments);
  const [assignmentName, setAssignmentName] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();




  const courseAssignments = assignments.filter((a: any) => a.course === cid);

  return (
    <div id="wd-assignments">
      <AssignmentControls setAssignmentName={setAssignmentName} assignmentName={assignmentName} addAssignment={() => {
        dispatch(addAssignment({ title: assignmentName, course: cid }));
        setAssignmentName("");
      }
      } />
      <h2>Assignments for Course {cid}</h2>
      <ListGroup className="rounded-0">
        {courseAssignments.map((assignment: any) => (
          <ListGroupItem
            key={assignment._id} // 
            className="d-flex align-items-center p-3 mb-2 border"
          >
            <RealAssignmentControlButtons assignmentId={assignment._id}
              deleteAssignment={(assignmentId) => {
                dispatch(deleteAssignment(assignmentId));
              }
              } editAssignment={(assignmentId) => dispatch(editAssignment(assignmentId))} />
            {/* <BsGripVertical className="me-2 fs-3" />
            <PiNewspaper color="green" className="me-2 fs-3" /> */}

            <Link
              href={`/Courses/${cid}/Assignments/${assignment._id}`}
              className="text-decoration-none"
            >
              {!assignment.editing && assignment.title}
              {assignment.editing && (
                <FormControl className="w-50 d-inline-block"
                  onChange={(e) => dispatch(updateAssignment({ ...assignment, title: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(updateAssignment({ ...assignment, editing: false }));
                    }
                  }}
                  defaultValue={assignment.title} />
              )}
            </Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}