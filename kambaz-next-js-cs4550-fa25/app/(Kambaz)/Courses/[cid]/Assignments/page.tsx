"use client";
import Link from "next/link";
import AssignmentControls from "./AssignmentControls"
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { BiDownArrow, BiSolidDownArrow } from "react-icons/bi";
import AssignmentControlButtons1 from "./AssignmentControlButtons1";
import AssignmentControlButtons2 from "./AssignmentControlButtons2";
import { TbWriting } from "react-icons/tb";
import { PiNewspaper } from "react-icons/pi";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "next/navigation";
import * as db from "../../../Database";

export default function Assignments() {
   const { cid } = useParams();
  const assignments = db.assignments;
 const courseAssignments = assignments.filter((a) => a.course === cid);

  return (
    <div id="wd-assignments">
      <h2>Assignments for Course {cid}</h2>
      <ListGroup className="rounded-0">
        {courseAssignments.map((assignment) => (
          <ListGroupItem
            key={assignment._id} // 
            className="d-flex align-items-center p-3 mb-2 border"
          >
            <BsGripVertical className="me-2 fs-3" />
            <PiNewspaper color="green" className="me-2 fs-3" />

            <Link
              href={`/Courses/${cid}/Assignments/${assignment._id}`}
              className="text-decoration-none"
            >
              {assignment.title}
            </Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}