import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Wrapper } from "../../styles/GlobalStyle";

import { Row, Col } from "antd";
export default function Home() {
  return (
    <div className="navbarBg">
      <Wrapper>
        <Navbar key="md" expand="lg" className="navbar">
          <Navbar.Brand href="#">
            <img src="/images/logo.svg" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <img src="/images/logo.svg" alt="Logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/community">Community</Nav.Link>
                <Nav.Link href="/station">The Station</Nav.Link>
                <Nav.Link href="/programming">Public Programming</Nav.Link>
                <Nav.Link href="/about-us">About us</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </Wrapper>
    </div>
  );
}
