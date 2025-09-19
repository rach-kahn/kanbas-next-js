import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" alt="dash image" width={200} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/4321" className="wd-dashboard-course-link">
             <Image src="/images/reactjs.jpg" alt="dash image" width={200} height={150} />
            <div>
              <h5> CS3500 OOD </h5>
              <p className="wd-dashboard-course-title">
                Back End Software Engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link href="/Courses/2345" className="wd-dashboard-course-link">
             <Image src="/images/reactjs.jpg" alt="dash image" width={200} height={150} />
            <div>
              <h5> CS3000 Algo </h5>
              <p className="wd-dashboard-course-title">
                Algorithms
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/6789" className="wd-dashboard-course-link">
             <Image src="/images/reactjs.jpg" alt="dash image" width={200} height={150} />
            <div>
              <h5> CS5000 Advanced OOD </h5>
              <p className="wd-dashboard-course-title">
                Back End Software Engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/9876" className="wd-dashboard-course-link">
             <Image src="/images/reactjs.jpg" alt="dash image" width={200} height={150} />
            <div>
              <h5> CS2500 Fundies2 </h5>
              <p className="wd-dashboard-course-title">
                Full Stack Software Engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/2468" className="wd-dashboard-course-link">
             <Image src="/images/reactjs.jpg" alt="dash image" width={200} height={150} />
            <div>
              <h5> CS2000 Fundies1 </h5>
              <p className="wd-dashboard-course-title">
                Back End Software Engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/1357" className="wd-dashboard-course-link">
             <Image src="/images/reactjs.jpg" alt="dash image" width={200} height={150} />
            <div>
              <h5> CS4000 AI </h5>
              <p className="wd-dashboard-course-title">
                AI Engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}

