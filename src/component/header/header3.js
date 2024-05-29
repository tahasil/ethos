import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Wrapper, XButton } from "../../styles/GlobalStyle3";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Row, Col } from "antd";
export default function Home() {
  return (
    <div className="navbarBg">
      <Wrapper>
        <Navbar key="lg" expand="lg" className="navbar">
          <Navbar.Brand href="/">
            <img src="/images/logo2.svg" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <img src="/images/logo2.svg" alt="Logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 align-items-center">
                <Nav.Link href="/story">Story</Nav.Link>
                <Nav.Link href="/community">Community</Nav.Link>
                <Nav.Link href="/events">Events</Nav.Link>
                <XButton className="headerBtn">Join Us</XButton>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </Wrapper>
    </div>
  );
}
