import { FaPlus } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { Form, Button, FormControl } from "react-bootstrap";
import { useState } from "react";
import AssignmentEditor from "./Editor";

interface AssignmentControlsProps {
  assignmentName: string;
  setAssignmentName: React.Dispatch<React.SetStateAction<string>>;
  addAssignment: () => void;
}

export default function AssignmentControls({ assignmentName, setAssignmentName, addAssignment }: AssignmentControlsProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn" onClick={handleShow}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>
      <AssignmentEditor 
        show={show} 
        handleClose={handleClose} 
        dialogTitle="Add Module"
        assignmentName={assignmentName} 
        setAssignmentName={setAssignmentName} 
        addAssignment={addAssignment} 
      />
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-view-progress" style={{ backgroundColor: "#a1a1a1", borderColor: "#a1a1a1", color: "black" }}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </Button>

      <Form className="me-2 float-start position-relative" id="wd-view-progress">
        <IoIosSearch className="position-absolute" style={{ top: "50%", left: "5px", transform: "translateY(-50%)", color: "#a1a1a1" }}/>
        <FormControl type="search" placeholder="Search" aria-label="Search" className="ps-4" style={{ paddingLeft: "30px", width: "200px" }}/>
      </Form>
    </div>
  );
}
