export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </a>
          <div className="wd-assignment-info">
            Multiple Modules | <strong>Not availbe until</strong> May 6 at 12:00am |
            <br />
            <strong>Due</strong> May 13 at 11:59pm | 100 pts
          </div>
           </li>
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A2 - CSS + BOOTSTRAP
          </a>
          <div className="wd-assignment-info">
            Multiple Modules | <strong>Not availbe until</strong> May 13 at 12:00am |
            <br />
            <strong>Due</strong> May 20 at 11:59pm | 100 pts
          </div>
        </li>
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A3 - JAVASCRIPT + REACT
          </a>
          <div className="wd-assignment-info">
            Multiple Modules | <strong>Not availbe until</strong> May 20 at 12:00am |
            <br />
            <strong>Due</strong> May 27 at 11:59pm | 100 pts
          </div>
        </li>
      </ul>
     <h3 id="wd-assignments-title">
        QUIZZES 10% of Total <button>+</button> </h3>
        <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            Q1
          </a>
          <div className="wd-assignment-info">
            <strong>Not availbe until</strong> Sep 19 at 12:00am |
            <br />
            <strong>Due</strong> Sep 26 at 11:59pm | 29 pts
          </div>
           </li>
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            Q2
          </a>
          <div className="wd-assignment-info">
            <strong>Not availbe until</strong> Sep 26 at 12:00am |
            <br />
            <strong>Due</strong> Oct 3 at 11:59pm | 23 pts
          </div>
        </li>
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            Q3
          </a>
          <div className="wd-assignment-info">
            <strong>Not availbe until</strong> Oct 3 at 12:00am |
            <br />
            <strong>Due</strong> Oct 10 at 11:59pm | 32 pts
          </div>
        </li>
      </ul> 
      <h3 id="wd-assignments-title">
        EXAMS 20% of Total <button>+</button> </h3>
              <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            X1
          </a>
          <div className="wd-assignment-info">
            <strong>Not availbe until</strong> Oct 24 at 12:00am |
            <br />
            <strong>Due</strong> Oct 31 at 11:59pm | 100 pts
          </div>
           </li>
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            X2
          </a>
          <div className="wd-assignment-info">
            <strong>Not availbe until</strong> Dec 3 at 12:00am |
            <br />
            <strong>Due</strong> Dec 10 at 11:59pm | 103 pts
          </div>
        </li>
      </ul>
      <h3 id="wd-assignments-title">
        PROJECT 30% of Total <button>+</button> </h3>
              <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            Project - Kambaz Quizzes
          </a>
          <div className="wd-assignment-info">
            <strong>Due</strong> Dec 7 at 11:59pm | 100 pts
          </div>
           </li>
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            Project - Kambaz Pazza
          </a>
          <div className="wd-assignment-info">
            <strong>Due</strong> Dec 7 at 11:59pm | 100 pts
          </div>
        </li>
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            Project - Social Network
          </a>
          <div className="wd-assignment-info">
            <strong>Due</strong> Dec 7 at 11:59pm | 100 pts
          </div>
        </li>
      </ul>  
    </div>
);}
