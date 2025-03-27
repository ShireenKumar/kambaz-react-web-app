import { useState } from "react";
import FormControl from "react-bootstrap/FormControl";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: 1,
    name: "Full Stack Development",
    description: "Learn both frontend and backend technologies.",
    course: "Web Development",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div>
      <h3 id="wd-working-with-objects">Working With Objects</h3>

      {/* Assignment Section */}
      <h4>Modifying Assignment Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <FormControl
        className="w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <hr />

      {/* Module Section */}
      <h4>Modifying Module Properties</h4>
      {/* Get Module */}
      <a
        id="wd-retrieve-module"
        className="btn btn-primary"
        href={`${MODULE_API_URL}`}
      >
        Get Module
      </a>
      <hr />

      {/* Get Module Name */}
      <a
        id="wd-retrieve-module-name"
        className="btn btn-primary"
        href={`${MODULE_API_URL}/name`}
      >
        Get Module Name
      </a>
      <hr />

      {/* Modify Module Name */}
      <FormControl
        className="w-75"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) =>
          setModule({ ...module, name: e.target.value })
        }
      />
      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Module Name
      </a>
      <hr />

      {/* Modify Module Description */}
      <FormControl
        className="w-75"
        id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) =>
          setModule({ ...module, description: e.target.value })
        }
      />
      <a
        id="wd-update-module-description"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Module Description
      </a>
      <hr />
    </div>
  );
}
