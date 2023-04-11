import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavbarComponent() {
  return (
    <Navbar bg="primary" expand="sm" className="d-flex justify-content-between">
      <Navbar.Brand as={Link} to="/" className="text-white" fontSize="3rem">
        MyDropbox
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user" className="text-white ">
          Update Profile
        </Nav.Link>
        <Link to="/Login"  className="p-2 text-white" >
          Login
        </Link>
      </Nav>
    </Navbar>
  )
}
