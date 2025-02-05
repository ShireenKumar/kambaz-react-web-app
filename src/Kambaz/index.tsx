import "./styles.css";
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";

export default function Kambaz() {
  return (
    <div id="wd-kambaz">
    <table width="100%">
      <tr><td valign="top">
        <KambazNavigation />
        </td><td valign="top">
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses/:cid/*" element={<Courses />} />
        </Routes>
      </div>
        </td></tr>
    </table>
  </div>
  
  );
}
