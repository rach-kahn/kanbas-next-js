export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input type="number" id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
           <select id="wd-display-grade-as">
              <option value="ASSIGNMENTS">Percentage</option>
              <option value="QUIZZES">Points</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
           <select id="wd-display-grade-as">
              <option value="ONLINE">Online</option>
            </select>
            <br />
            <br />
            <label>Online Entry Options</label><br/>

              <input type="checkbox" name="check-online-entry" id="wd-text-entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label><br/>

              <input type="checkbox" name="check-online-entry" id="wd-website-url"/>
              <label htmlFor="wd-website-url">Website URL</label><br/>

              <input type="checkbox" name="check-online-entry" id="wd-media-recordings"/>
              <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

              <input type="checkbox" name="check-online-entry" id="wd-student-annotation"/>
              <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

              <input type="checkbox" name="check-online-entry" id="wd-file-upload"/>
              <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label><br />
           <input id="wd-assign-to" defaultValue={"Everyone"} />
           <br />
           <br />
            <label htmlFor="wd-due-date">Due</label><br />
            <input type="date"
                    value="2024-05-13"
                    id="wd-due-date"/>
           <br />
           <br />
            <label htmlFor="wd-available-from">Available from        </label>
            <label htmlFor="wd-available-until">         Until</label> <br/>
            <input type="date"
                    value="2024-05-06"
                    id="wd-available-from"/> 
            <input type="date"
                    value="2024-05-20"
                    id="wd-available-until"/>          
          </td>
        </tr>
      </table>
      <table width="100%">
       <tr>
        <td align="right" valign="bottom">
            <button>Cancel</button> <button>Save</button>
          </td>
         </tr>  
      </table>
    </div>
);}
