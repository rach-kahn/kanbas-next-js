import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { PiNewspaper, PiPlus } from "react-icons/pi";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
export default function RealAssignmentControlButtons({ assignmentId, deleteAssignment, editAssignment }:
     { assignmentId: string; deleteAssignment: (assignmentId: string) => void; editAssignment: (assignmentId: string) => void }) {
  return (
    <div className="float-end">
         <FaPencil onClick={() => editAssignment(assignmentId)} className="text-primary me-3" />

          <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)}/>
<BsGripVertical className="me-2 fs-3" />
            <PiNewspaper color="green" className="me-2 fs-3" />
    </div>);
}