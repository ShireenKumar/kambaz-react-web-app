import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KambazNavigation() {
  const { pathname } = useLocation();

  const links = [
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kambaz/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kambaz/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kambaz/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <>
      <div className="top-nav d-md-none bg-black text-white p-2 d-flex justify-content-between align-items-center">
        <label htmlFor="menu-toggle" className="menu-icon text-white fs-3">☰</label>
        <span className="fs-5">CS5610 SU1 24 MON/FRI</span>
      </div>

      <input type="checkbox" id="menu-toggle" className="d-none" />

      <div id="sidebar" className="list-group rounded-0 bg-black position-fixed bottom-0 top-0 z-2">
        <a id="wd-neu-link"
          target="_blank"
          href="https://www.northeastern.edu/"
          className="list-group-item bg-black border-0 text-center">
          <img src="/images/neu.png" width="75px" alt="Northeastern Logo" />
        </a>
        <br />

        <Link to="/Kambaz/Account"
          id="wd-account-link"
          className={`list-group-item text-center border-0 ${pathname.startsWith("/Kambaz/Account") ? "bg-white text-black" : "bg-black text-white"}`}>
          <FaRegCircleUser className="fs-1 text-white" />
          <br />
          Account
        </Link>

        {links.map((link) => (
          <Link key={link.path} to={link.path}
            className={`list-group-item text-center border-0 ${pathname.startsWith(link.path) ? "bg-white text-black" : "bg-black text-white"}`}>
            <link.icon className="fs-1 text-danger" />
            <br />
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}