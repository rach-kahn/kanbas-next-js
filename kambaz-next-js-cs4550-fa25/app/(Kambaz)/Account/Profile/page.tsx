import Link from "next/link";
import { Col, Form, FormControl, FormSelect, Row } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Row className="mb-3">
        <Col sm={10}>
          <FormControl defaultValue="alice" type="text" placeholder="username" className="wd-username" />
        </Col>
        <Col sm={10}>
       <FormControl defaultValue="123" placeholder="password" type="password"
          className="wd-password" />
          </Col>
          <Col sm={10}>
         <FormControl defaultValue="Alice" type="text" placeholder="First Name" id="wd-firstname" />
        </Col>
        <Col sm={10}>
       <FormControl defaultValue="Wonderland" type="text" placeholder="Last Name" id="wd-lastname" />
        </Col>
         <Col sm={10}>
        <FormControl defaultValue="2000-01-01" type="date" id="wd-dob" />
        </Col>
        <Col sm={10}>
        <FormControl defaultValue="alice@wonderland" type="email" id="wd-email" />
        </Col>
        <Col sm={10}>
        <FormSelect> 
          <option value="USER" defaultChecked>User</option>       <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
        </FormSelect>
        </Col>
        <Link id="wd-signin-btn" href="Signin" className="btn w-100 mb-2 btn-signout"> Sign out </Link>
      </Row>
    </div>
  );
}

