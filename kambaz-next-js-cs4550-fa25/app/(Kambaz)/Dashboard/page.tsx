/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"
import { useEffect, useState } from "react";
//import * as db from "../Database";
import * as client from "../Courses/client";
import Link from "next/link";
import Image from "next/image";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../Courses/[cid]/reducer";
import { setEnrollments, toggleShowAll } from "./reducer";
export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();
  const { enrollments, showAll } = useSelector((state: any) => state.enrollmentsReducer);
  const enrolledCourseIds = enrollments.map((e: any) => e.course);
  
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });
  const fetchCourses = async () => {
    try {
      const courses = await client.findMyCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };
  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };
  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course: any) => course._id !== courseId)));
  };
  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c: any) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    })));
  };
  const onEnrollUser = async (courseId: string) => {
    await client.enrollInCourse(courseId);
    const updated = await client.findMyEnrollments();
    dispatch(setEnrollments(updated));
  };

  const onUnenrollUser = async (courseId: string) => {
    await client.unenrollFromCourse(courseId);
    const updated = await client.findMyEnrollments();
    dispatch(setEnrollments(updated));
  };



  useEffect(() => {
    fetchCourses();
  }, [currentUser]);
  useEffect(() => {
    const loadEnrollments = async () => {
      const enrollments = await client.findMyEnrollments();
      dispatch(setEnrollments(enrollments));
    };
    loadEnrollments();
  }, []);


  //const { enrollments } = db;


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <button
        className="btn btn-primary float-end mb-2"
        onClick={() => dispatch(toggleShowAll())}
      >
        Enrollments
      </button>
      <h5>New Course
        {currentUser?.role === "FACULTY" && (
          <>
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse} > Add </button>
            <button className="btn btn-warning float-end me-2"
              onClick={onUpdateCourse} id="wd-update-course-click">
              Update </button>
          </>
        )}
      </h5>
      <br />
      <input value={course.name} className="form-control mb-2"
        onChange={(e) => setCourse({
          ...course, name: e.target.value
        })} />
      <textarea value={course.description} className="form-control"
        onChange={(e) => setCourse({
          ...course, description: e.target.value
        })} />

      <hr />

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any) => {
            const isEnrolled = enrolledCourseIds.includes(course._id);

            return (
              <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link
                    href={`/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                    <CardBody>
                      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name}
                      </CardTitle>

                      <CardText
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}
                      </CardText>


                      {!isEnrolled && (
                        <button
                          className="btn btn-success me-2"
                          onClick={(event) => {
                            event.preventDefault();
                            onEnrollUser(course._id);
                          }}
                        >
                          Enroll
                        </button>
                      )}

                      {isEnrolled && (
                        <button
                          className="btn btn-danger me-2"
                          onClick={(event) => {
                            event.preventDefault();
                            onUnenrollUser(course._id);
                          }}
                        >
                          Unenroll
                        </button>
                      )}

                      <Button variant="primary">Go</Button>

                      {currentUser?.role === "FACULTY" && (
                        <>
                          <button
                            id="wd-delete-course-click"
                            className="btn btn-danger float-end"
                            onClick={(event) => {
                              event.preventDefault();
                              onDeleteCourse(course._id);
                            }}
                          >
                            Delete
                          </button>

                          <button
                            id="wd-edit-course-click"
                            className="btn btn-warning me-2 float-end"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>

      </div>
    </div>
  );
}

