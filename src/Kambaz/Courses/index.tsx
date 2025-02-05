import CourseNavigation from "./Navigation";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
export default function Courses() {
  return (
    <div id="wd-courses" >
  <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" style={{ paddingLeft: "105px", paddingTop: "20px" }}/>
      Course 1234 </h2> <hr />
  <div className="d-flex">
    <div className="d-none d-md-block">
      <CourseNavigation />
    
    </div>
    <div className="flex-fill" style={{paddingTop: "10px" }}>
    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="Modules" element={<Modules />} />
      <Route path="Assignments" element={<Assignments />} />
      <Route path="Assignments/:aid" element={<AssignmentEditor />} />
    </Routes>
    </div>
    </div>
</div>

  );
}
