import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import PeopleDetails from "./Details";

export default function PeopleTable({
  users = [],
  enrollments = [],
}: {
  users?: any[];
  enrollments?: any[];
}) {
  const { cid } = useParams();

  // Filter users based on enrollments and course ID
  const enrolledUsers = cid
    ? users.filter((user) =>
        enrollments.some(
          (enrollment) =>
            enrollment.user === user._id && enrollment.course === cid
        )
      )
    : users;

  return (
    <div id="wd-people-table">
      <PeopleDetails />
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolledUsers.map((user) => (
            <tr key={user._id}>
            <td className="wd-full-name text-nowrap">
              <Link to={`/Kambaz/Account/Users/${user._id}`} className="text-decoration-none">

          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">{user.firstName} </span>
          <span className="wd-last-name">{user.lastName}</span>
          </Link>
        </td>
        <td className="wd-login-id border">{user.loginId}</td>
        <td className="wd-section border">{user.section}</td>
        <td className="wd-role border">{user.role}</td>
        <td className="wd-last-activity border">{user.lastActivity}</td>
        <td className="wd-total-activity border">{user.totalActivity}</td>
      </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
