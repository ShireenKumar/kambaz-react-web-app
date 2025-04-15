import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, FormControl, Button } from "react-bootstrap";

import { addCourse } from "./Courses/courseReducer";
import EnrollmentButtonUpdated from "./Enrollments/EnrollmentButton";
import { createCourse } from "./Courses/client";

export default function Dashboard({
  courses,
  // course,
  // setCourse,
  // addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: React.Dispatch<any>;
  addNewCourse: () => void;
  deleteCourse: (courseId: any) => void;
  updateCourse: (course: any) => void;
}) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments = [] } = useSelector(
    (state: any) => state.enrollmentsReducer
  );

  const isFacultyTrue = currentUser?.role === "Faculty";
  const isStudentTrue = currentUser?.role === "Student";
  const [courseName, setCourseName] = useState("");
  const [showEnrollments, setShowEnrollments] = useState(false);
  const [editingCourse, setEditingCourse] = useState<any | null>(null); // 👈 NEW STATE

  const navigate = useNavigate();

  const isEnrolledTrue = (courseId: string) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id &&
        enrollment.course === courseId
    );

  const displayedCourses = isFacultyTrue
    ? courses
    : showEnrollments
    ? courses
    : courses.filter((course: any) => isEnrolledTrue(course._id));

  const handleAddCourse = async () => {
    const newCourse = {
      name: courseName,
      number: "CS1234",
      startDate: "2025-01-01",
      endDate: "2025-05-01",
      credits: 3,
      image: "/default.jpg",
      description: "New Course Description",
    };

    try {
      const savedCourse = await createCourse(newCourse);
      dispatch(addCourse(savedCourse));
      setCourseName("");
    } catch (err) {
      console.error("Error creating course:", err);
    }
  };

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {isFacultyTrue && (
        <div className="mb-4">
          <FormControl
            className="mb-2"
            placeholder="New Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
          <Button variant="primary" onClick={handleAddCourse}>
            + Add Course
          </Button>
        </div>
      )}

      {isStudentTrue && (
        <Button onClick={() => setShowEnrollments(!showEnrollments)}>
          Enrollments
        </Button>
      )}

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {displayedCourses.map((c: any) => (
          <div key={c._id} className="col" style={{ width: "300px" }}>
            <div className="card">
              <Card.Img
                src={c.image}
                variant="top"
                width="100%"
                height={160}
                onClick={() =>
                  navigate(`/Kambaz/Courses/${c._id}/Home`)
                }
              />
              <Card.Body className="card-body">
                <Card.Title
                  className="wd-dashboard-course-title text-nowrap overflow-hidden"
                  onClick={() =>
                    navigate(`/Kambaz/Courses/${c._id}/Home`)
                  }
                >
                  {c.name}
                </Card.Title>
                <Card.Text
                  className="wd-dashboard-course-description overflow-hidden"
                  style={{ height: "100px" }}
                >
                  {c.description}
                </Card.Text>

                {isStudentTrue && (
                  <EnrollmentButtonUpdated
                    courseId={c._id}
                    isEnrolled={isEnrolledTrue(c._id)}
                    currentUser={currentUser}
                  />
                )}

                {isFacultyTrue && (
                  <>
                    <Button
                      variant="danger"
                      className="float-end"
                      id="wd-delete-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(c._id);
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="warning"
                      className="me-2 float-end"
                      id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setEditingCourse(c); // 👈 Set selected course for editing
                      }}
                    >
                      Edit
                    </Button>
                  </>
                )}
              </Card.Body>
            </div>
          </div>
        ))}
      </div>

      {/* Edit form shows up if editingCourse is set */}
      {editingCourse && (
        <div className="mt-4 border rounded p-4 bg-light">
          <h4>Edit Course</h4>
          <FormControl
            className="mb-2"
            placeholder="Course Name"
            value={editingCourse.name}
            onChange={(e) =>
              setEditingCourse({ ...editingCourse, name: e.target.value })
            }
          />
          <FormControl
            className="mb-2"
            placeholder="Course Description"
            value={editingCourse.description}
            onChange={(e) =>
              setEditingCourse({
                ...editingCourse,
                description: e.target.value,
              })
            }
          />
          <Button
            variant="success"
            onClick={() => {
              updateCourse(editingCourse);
              setEditingCourse(null);
            }}
          >
            Save Changes
          </Button>
          <Button
            variant="secondary"
            className="ms-2"
            onClick={() => setEditingCourse(null)}
          >
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
}
