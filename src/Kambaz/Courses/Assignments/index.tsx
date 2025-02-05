export default function Assignments() {
    return (
      <div id="wd-assignments"  style={{ paddingLeft: "130px", paddingTop: "20px" }}>
        <input placeholder="Search for Assignments"
               id="wd-search-assignment" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button> </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a href="#/Kambaz/Courses/webdev/Assignments/a1"
               className="wd-assignment-link" >
              A1 - HTML
            </a> </li>
          <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/webdev/Assignments/a2"
               className="wd-assignment-link" >
              A2 - CSS
            </a>
          </li>
          <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/webdev/Assignments/a3"
               className="wd-assignment-link" >
              A3 - CSS
            </a>
          </li>
          <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/webdev/Assignments/a4"
               className="wd-assignment-link" >
              A4 - React
            </a>
          </li>
        </ul>
      </div>
  );}
  