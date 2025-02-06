import { Link } from "react-router-dom";
import { Form } from 'react-bootstrap';
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control id="wd-username"
             placeholder="alice"
             className="mb-2"/>
      <Form.Control id="wd-password"
             placeholder="123" type="password"
             className="mb-2"/>
      <Form.Control id="wd-firstname"
             placeholder="Alice"
             className="mb-2"/>
      <Form.Control id="wd-lastname"
             placeholder="Wonderland"
             className="mb-2"/>
      <Form.Control type="date" className="mb-2" defaultValue="2025-02-20" />
      <Form.Control id="wd-email"
             placeholder="alice@wonderland"
             className="mb-2"/>
      <Form.Select defaultValue="FACULTY" id="wd-role" className="mb-2">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
      </Form.Select>

      <Link id="wd-signout-btn"
            to="/Kambaz/Account/Signup"
            className="btn btn-primary w-100 mb-2">
            Sign Out </Link><br />
    </div>
);}
