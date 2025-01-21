export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          Feel free to use the following starter code to implement the Assignments component. If you prefer to build
          your own version from scratch, feel free to ignore the code provided. Be aware that if you decide to use the
          code provided, later chapters will build on the code from prior chapters. Your own implementation in earlier
          chapters might not be compatible with code in later chapters. Make the component look as shown below on the right.
          Make sure to keep the id and className attributes provided and all li (line items) in the ul (unordered list) must
          have the className set to wd-assignment-list-item.
        </textarea>
        <br />
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="wd-points">Points </label>
            <input id="wd-points" value="100" />
          </div>
          <div className="form-group">
            <label htmlFor="wd-group">Assignment Group </label>
            <select id="wd-group">
              <option value="100">Assignment</option>
              <option value="200">Project</option>
              <option value="300">Quiz</option>
            </select>
          </div>
          <div id="display-grade">
            <label htmlFor="wd-display-grade-as">Display Grade As </label>
            <select id="wd-display-grade-as">
              <option value="100">Percentage</option>
              <option value="200">Letter</option>
              <option value="300">Fraction</option>
            </select>
          </div>
          <div id ="submission-type">
            <label htmlFor="wd-submission-type">Submission Type </label>
            <select id="wd-submission-type">
              <option value="100">Online</option>
              <option value="200">Paper</option>
            </select>
          </div>
          <div id ="wd-text-entry" >
            <br></br>
            <label htmlFor="wd-chkbox-txt">Online Entry Options</label><br/>
            <input type="checkbox" name="check-option" id="wd-chkbox-txt"/>
            <label htmlFor="wd-chkbox-txt">Text Entry</label><br/>

            <input type="checkbox" name="check-option" id="wd-chkbox-web"/>
            <label htmlFor="wd-chkbox-drama">Website URL</label><br/>

            <input type="checkbox" name="check-option" id="wd-chkbox-scifi"/>
            <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>

            <input type="checkbox" name="check-option" id="wd-chkbox-fantasy"/>
            <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
          </div>

          <div id="wd-assign-to">
            <label>Assign to </label>
            <input id="wd-assign-to" value="Everyone" />
          </div>
          <div id = "wd-due-date"> 
          <label> Due Date: </label>
            <input type="date" value="2025-01-21" id="wd-due-date"/><br/>
          </div>
          <div id = "wd-available-from"> 
          <label> Available from: </label>
            <input type="date" value="2025-02-20" id="wd-available-from"/>
          </div>
          <div id = "wd-available-until"> 
          <label> Until: </label>
            <input type="date" value="2025-03-20" id="wd-available-until"/><br/>
          </div>
         
       
        </div>
      </div>
  );}
  