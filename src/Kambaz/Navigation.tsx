import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
export default function KambazNavigation() {
  const location = useLocation();
  return (
    <div 
    id="wd-kambaz-navigation"
    className="list-group rounded-0 position-fixed bottom-0 top-0 bg-black z-2"
    style={{ width: 120 }}>
      <a id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"><img src="/images/neu.png" width="75px" alt="Northeastern Logo" /></a><br/>
      <Link
        to="/Kambaz/Account"
        id="wd-account-link"
        className={`list-group-item text-center border-0 ${location.pathname.startsWith("/Kambaz/Account") ? "bg-white text-black" : "bg-black text-white"}`}      
        >
        <FaRegCircleUser 
        className="fs-1 text-white" 
        />
        <br />
        Account
      </Link>
      <Link
      to="/Kambaz/Dashboard"
        id="wd-dashboard-link"
        className={`list-group-item text-center border-0 bg-black text-danger ${location.pathname.startsWith("/Kambaz/Dashboard") ? "bg-white text-black" : "bg-black text-white"}`}
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>
      <Link
        to="/Kambaz/Courses/index"
        id="wd-course-link"
        className={`list-group-item text-center border-0 bg-black text-danger ${location.pathname.startsWith("/Kambaz/Courses/index") ? "bg-white text-black" : "bg-black text-white"}`}
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>

      <Link
        to="/Kambaz/Calendar"
        id="wd-calendar-link"
        className={`list-group-item text-center border-0 bg-black text-danger ${location.pathname.startsWith("/Kambaz/Calendar") ? "bg-white text-black" : "bg-black text-white"}`}
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>

      <Link
        to="/Kambaz/Inbox"
        id="wd-inbox-link"
        className={`list-group-item text-center border-0 bg-black text-danger ${location.pathname.startsWith("/Kambaz/Inbox") ? "bg-white text-black" : "bg-black text-white"}`}
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>

      <Link
        to="/Labs"
        id="wd-labs-link"
        className={`list-group-item text-center border-0 bg-black text-danger ${location.pathname.startsWith("/Labs") ? "bg-white text-black" : "bg-black text-white"}`}
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </Link>
    </div>
);}
