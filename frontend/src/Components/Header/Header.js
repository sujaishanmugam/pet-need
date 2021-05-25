import React from "react";
import image from "../../images/myIcon.png";
import "./Header.css";
import { Nav, Navbar } from "react-bootstrap";
import { auth } from "../../firebase";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../features/userSlice";

import { useStateValue } from "../../StateProvider";
// import { useEffect } from "react";
import axios from 'axios'
import { actionTypes } from "../../reducer";

function Header() {
  const [{ user , auth }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  React.useEffect(() => {

    axios.get('about').then(res => {
      if (res.data) {
        dispatch({ type: actionTypes.SET_AUTH, user: res.data });
      }
    })

  }, [])

// console.log(">>>>>>>>>>>",user.result.email)
  return (
    <div className="header">
      <Navbar className="nav" bg="dark" variant="dark">
        <Navbar.Brand href="/" className="nav__brand">
          <img className="logo" src={image} alt="" />
          WigglyWag
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link className="navLink" href="/">
              Home
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link className="navLink" href="/about">
              About
            </Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
            <Nav.Link className="navLink" href="/userinfo">
              User Info
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link className="navLink" href="/dashboard">
              Doctors Zone
            </Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
            <Nav.Link className="navLink" href="/community">
              Community
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link className="navLink" href="/contactUs">
              Contact Us
            </Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
              <Nav.Link className="navLink" href="/login">
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" href="/signup">
                Signup
              </Nav.Link>
            </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navLink" href="/login">
              <div onClick={handleAuthentication} className="header__option">
                <span className="header__optionLineOne">
                  Hello {!auth ? "Guest" : auth.name}
                </span>
                <span className="header__optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
