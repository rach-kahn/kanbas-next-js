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
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br /> <br /> <br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> <BiSolidDownArrow className="me-2 fs-3" />
            Assignments <AssignmentControlButtons1 />
          </div>
          <ListGroup className="wd-assignment-list rounded-0">
            <ListGroupItem className="wd-assignment-list-item  p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> <PiNewspaper color="green" className="me-2 fs-3" />
              <Link href="/Courses/1234/Assignments/123"
                className="wd-assignment-link" >
                A1 - ENV + HTML
              </Link> <LessonControlButtons />

              <div className="wd-assignment-info p-3 ps-1">
                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am |
                <br />
                <strong>Due</strong> May 13 at 11:59pm | 100 pts </div> 
            </ListGroupItem>
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> <PiNewspaper color="green" className="me-2 fs-3" />
              <Link href="/Courses/1234/Assignments/123"
                className="wd-assignment-link" >
                A2 - CSS + BOOTSTRAP
              </Link> <LessonControlButtons />
              <div className="wd-assignment-info p-3 ps-1">
                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am |
                <br />
                <strong>Due</strong> May 20 at 11:59pm | 100 pts
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> <PiNewspaper color="green" className="me-2 fs-3" />
              <Link href="/Courses/1234/Assignments/123"
                className="wd-assignment-link" >
                A3 - JAVASCRIPT + REACT
              </Link> <LessonControlButtons />
              <div className="wd-assignment-info p-3 ps-1">
                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am |
                <br />
                <strong>Due</strong> May 27 at 11:59pm | 100 pts
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>


        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> <BiSolidDownArrow className="me-2 fs-3" />
              QUIZZES 10% of Total <AssignmentControlButtons2 />
            </div>
            <ListGroup className="wd-assignment-list rounded-0">
              <ListGroupItem className="wd-assignment-list-item  p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /> <PiNewspaper color="green" className="me-2 fs-3" />
                <Link href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link" >
                  Q1
                </Link> <LessonControlButtons />
                <div className="wd-assignment-info p-3 ps-1">
                  <strong>Not available until</strong> Sep 19 at 12:00am |
                  <br />
                  <strong>Due</strong> Sep 26 at 11:59pm | 29 pts
                </div>
              </ListGroupItem>
              <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
               <BsGripVertical className="me-2 fs-3" /> <PiNewspaper color="green" className="me-2 fs-3"/>
                <Link href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link" >
                   Q2
                </Link> <LessonControlButtons />
                <div className="wd-assignment-info p-3 ps-1">
                  <strong>Not available until</strong> Sep 26 at 12:00am |
                  <br />
                  <strong>Due</strong> Oct 3 at 11:59pm | 23 pts
                </div>
              </ListGroupItem>
              <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /> <PiNewspaper color="green" className="me-2 fs-3"/>
                <Link href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link" >
                  Q3
                </Link> <LessonControlButtons />
                <div className="wd-assignment-info  p-3 ps-1">
                  <strong>Not available until</strong> Oct 3 at 12:00am |
                  <br />
                  <strong>Due</strong> Oct 10 at 11:59pm | 32 pts
                </div>
              </ListGroupItem>
            </ListGroup>
          </ListGroupItem>
        </ListGroupItem>




        {/* <h3 id="wd-assignments-title">
          EXAMS 20% of Total <button>+</button> </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/123"
              className="wd-assignment-link" >
              X1
            </Link>
            <div className="wd-assignment-info">
              <strong>Not available until</strong> Oct 24 at 12:00am |
              <br />
              <strong>Due</strong> Oct 31 at 11:59pm | 100 pts
            </div>
          </li>
          <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/123"
              className="wd-assignment-link" >
              X2
            </Link>
            <div className="wd-assignment-info">
              <strong>Not available until</strong> Dec 3 at 12:00am |
              <br />
              <strong>Due</strong> Dec 10 at 11:59pm | 103 pts
            </div>
          </li>
        </ul>
        <h3 id="wd-assignments-title">
          PROJECT 30% of Total <button>+</button> </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/123"
              className="wd-assignment-link" >
              Project - Kambaz Quizzes
            </Link>
            <div className="wd-assignment-info">
              <strong>Due</strong> Dec 7 at 11:59pm | 100 pts
            </div>
          </li>
          <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/123"
              className="wd-assignment-link" >
              Project - Kambaz Pazza
            </Link>
            <div className="wd-assignment-info">
              <strong>Due</strong> Dec 7 at 11:59pm | 100 pts
            </div>
          </li>
          <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/123"
              className="wd-assignment-link" >
              Project - Social Network
            </Link>
            <div className="wd-assignment-info">
              <strong>Due</strong> Dec 7 at 11:59pm | 100 pts
            </div>
          </li>
        </ul> */}
      </ListGroup>
    </div>
  );
}
