import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './FirstPage.css'; 

const FirstPage = () => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="navbar-container" style={{ backgroundColor: 'black' }}>
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li className="active">
              <ScrollLink
                  to="section1"
                  smooth={true}
                  duration={500}
                  className="btn"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="section2"
                  smooth={true}
                  duration={500}
                  className="btn"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="section3"
                  smooth={true}
                  duration={500}
                  className="btn"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
            <div className="topnav-right">
              <Link to="/login" className="login-link">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="section one" id="section1">
        <b>
          <h1>Dream College of Engineering</h1>
          <h4>New Dushera Maidan, NIR Campus, TT Nagar</h4>
          <h4>Villupuram, TamilNadu 605104</h4>
          <h4>Counselling Code: 1409</h4>
        </b>
      </div>

      <div className="section two" id="section2">
        <h1>About</h1>
        <h3>Our College provides career satisfaction and success outside of the workplace.</h3>
        <h3>With more and more occupations requiring advanced education, a college degree is critical to your success in today's workforce.</h3>
      </div>

      <div className="section three" id="section3">
        <h1 style={{textAlign:"center"}} >Contact</h1>
        <div className="row">
          <div className="column">
            <h2>Address</h2>
            <h4>New Dushera Maidan, NIR Campus, TT Nagar<br /> Chennai, TamilNadu 462003.</h4>
          </div>
          <div className="column">
            <h2 >Contact Number</h2>
            <h4>+(91) 8882281628</h4>
          </div>
          <div className="column">
            <h2>Email Address</h2>
            <h4>collegeofdream@gmail.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
