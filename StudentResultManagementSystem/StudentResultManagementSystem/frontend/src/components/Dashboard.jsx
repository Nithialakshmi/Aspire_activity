import { useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Nav, Sidenav } from "rsuite/";
import Home from "@rsuite/icons/legacy/Home";
import { Link } from "react-router-dom";
import './Dashboard.css';

export default function Dashboard() {
  const [expand, setExpand] = useState(true);
  const [activeKey, setActiveKey] = useState("1");

  return (
    <div className="dashboard-container">
      <Sidenav expanded={expand} className="sidenav-vertical">
        <Sidenav.Header>
          <div className="dashboard-header">Dashboard</div>
        </Sidenav.Header>
        <Sidenav.Body className="sidenav-body">
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item
              eventKey="1"
              icon={<Home />}
              as={Link}
              to="/adminhome"
            >
              Dashboard
            </Nav.Item>

            <Nav.Menu eventKey="2" title="Student">
              <Nav.Item eventKey="2-1" as={Link} to="/addstudent">
                Add Student
              </Nav.Item>
              <Nav.Item eventKey="2-2" as={Link} to="/viewstudent">
                View Student
              </Nav.Item>
            </Nav.Menu>

            <Nav.Menu eventKey="3" title="Course">
              <Nav.Item eventKey="3-1" as={Link} to="/addcourse">
                Add Course
              </Nav.Item>
              <Nav.Item eventKey="3-2" as={Link} to="/viewcourse">
                View Course
              </Nav.Item>
            </Nav.Menu>

            <Nav.Menu eventKey="4" title="Result">
              <Nav.Item eventKey="4-1" as={Link} to="/addresult">
                Add Result
              </Nav.Item>
            </Nav.Menu>
          </Nav>

          <div className="logout-container">
            <Link to="/login" className="btn btn-light logout-button">
              Logout
            </Link>
          </div>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}
