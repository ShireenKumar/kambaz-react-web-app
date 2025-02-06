import { FaPlus } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { Form, Button, FormControl } from "react-bootstrap";

export default function AssignmentControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>
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
