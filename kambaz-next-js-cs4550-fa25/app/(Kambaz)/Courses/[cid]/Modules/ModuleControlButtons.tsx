import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { PiPlus } from "react-icons/pi";
export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <PiPlus />  
      <IoEllipsisVertical className="fs-4" />
    </div> );}