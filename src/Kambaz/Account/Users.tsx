import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";
import { FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const { uid } = useParams();

  const fetchUsers = async () => {
    const allUsers = await client.findAllUsers();
    applyFilters(allUsers, role, name);
  };

  const applyFilters = (allUsers: any[], role: string, name: string) => {
    let filtered = allUsers;

    if (role) {
      const roleLC = role.toLowerCase();
      filtered = filtered.filter((u) => u.role?.toLowerCase() === roleLC);
    }

    if (name) {
      const nameLC = name.toLowerCase();
      filtered = filtered.filter(
        (u) =>
          (u.firstName && u.firstName.toLowerCase().includes(nameLC)) ||
          (u.lastName && u.lastName.toLowerCase().includes(nameLC))
      );
    }

    setUsers(filtered);
  };

  useEffect(() => {
    fetchUsers();
  }, [uid]);

  const handleRoleChange = async (value: string) => {
    const allUsers = await client.findAllUsers();
    setRole(value);
    applyFilters(allUsers, value, name);
  };

  const handleNameChange = async (value: string) => {
    const allUsers = await client.findAllUsers();
    setName(value);
    applyFilters(allUsers, role, value);
  };

  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    fetchUsers();
  };

  return (
    <div>
      <h3>Users</h3>
      <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
        <FaPlus className="me-2" />
        Users
      </button>

      <FormControl
        value={name}
        onChange={(e) => handleNameChange(e.target.value)}
        placeholder="Search people"
        className="float-start w-25 me-2 wd-filter-by-name"
      />

      <select
        value={role}
        onChange={(e) => handleRoleChange(e.target.value)}
        className="form-select float-start w-25 wd-select-role"
      >
        <option value="">All Roles</option>
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>

      <PeopleTable users={users} />
    </div>
  );
}
