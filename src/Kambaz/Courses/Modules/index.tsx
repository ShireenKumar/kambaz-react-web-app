import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs"; 
import ModulesControls from "./ModulesControls"; 
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons"; 
import "../../styles.css";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br /><br /><br /><br />
      
      <ListGroup className="rounded-0" id="wd-modules">
        {/* Week 1 */}
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary text-black">
            <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        {/* Week 2 */}
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border border-secondary">
          <div className="wd-title p-3 ps-2 bg-secondary text-black">
            <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LESSON 1 <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LESSON 2 <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
