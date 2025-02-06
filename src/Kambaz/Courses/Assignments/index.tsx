import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs"; 
import AssignmentControls from "./AssignmentControls"; 
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons"; 
import { MdDescription } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../styles.css";
export default function Assignments() {
    return (
      <div id="wd-assignments">
        <div>
      <AssignmentControls />
      <br /><br /><br /><br />
      
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary text-black">
            <BsGripVertical className="me-2 fs-3" /> Assignments <ModuleControlButtons />
          </div>
          <ListGroup.Item className="wd-lesson p-3 d-flex align-items-start">
            <BsGripVertical className="me-2 fs-3 text-gray" />
            <MdDescription className="me-2 text-success fs-4" />
            <div className="flex-grow-1">
            <Link to="./Editor" className="fw-semibold text-dark mb-1 text-decoration-none">
                    A1
                  </Link>
              <p className="text-sm mb-1">
                <span className="text-danger">Multiple Modules</span> | 
                <span className="fw-semibold text-muted"> Not available until</span> May 6 at 12:00am |
              </p>
              <p className="text-sm text-secondary mb-0">
                <span className="fw-semibold">Due</span> May 13 at 11:59pm | 100 pts
              </p>
            </div>
            <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 d-flex align-items-start">
            <BsGripVertical className="me-2 fs-3 text-gray" />
            <MdDescription className="me-2 text-success fs-4" />
            <div className="flex-grow-1">
            <Link to="./Editor" className="fw-semibold text-dark mb-1 text-decoration-none">
                    A2
                  </Link>
              <p className="text-sm mb-1">
                <span className="text-danger">Multiple Modules</span> | 
                <span className="fw-semibold text-muted"> Not available until</span> April 24th at 11:59pm |
              </p>
              <p className="text-sm text-secondary mb-0">
                <span className="fw-semibold">Due</span> May 06 at 11:59pm | 70 pts
              </p>
            </div>
            <LessonControlButtons />
            </ListGroup.Item>
        </ListGroup.Item>

        
      </ListGroup>
    </div>

      </div>
  );}
  