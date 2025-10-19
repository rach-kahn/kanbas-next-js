"use client";
import { useParams } from "next/navigation";
import { Button } from "react-bootstrap";
import AssignmentEditorForms from "./AssignmentEditorForms";

import Link from "next/link";
import { assignments } from "@/app/(Kambaz)/Database";

export default function AssignmentEditor() {
  const {cid, aid} = useParams();
   
  const assignment = assignments.find((a) => a._id === aid && a.course === cid);
  return (
    <div id="wd-assignments-editor">
           <AssignmentEditorForms />
      <div className="wd-assignment-editor-buttons">
        <Link href={`/Courses/${cid}/Assignments`}>
        <Button variant="secondary"  id="wd-view-progress">
                Cancel
            </Button>
            </Link>
           <Link href={`/Courses/${cid}/Assignments`}> 
        <Button variant="danger"> Save </Button>
        </Link>
      </div>
    </div>
);}
