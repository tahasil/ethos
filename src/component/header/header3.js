import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Wrapper, XButton } from "../../styles/GlobalStyle3";
import Link from "next/link";

export default function Header({ onJoinUsClick }) {
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

            <Offcanvas.Body className="mobileAlign">
              <Nav className="justify-content-end flex-grow-1 align-items-center">
                <Nav.Link href="/story">Story</Nav.Link>
                <Nav.Link href="/#">Community</Nav.Link>
                {/* <Nav.Link href="/event">Events</Nav.Link> */}
                {/* <XButton className="headerBtn" onClick={onJoinUsClick}>
                  Join Us
                </XButton> */}
                <Link href="/aethos-station">
                  <XButton className="headerBtn">Join Us</XButton>
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </Wrapper>
      {/* <XContactModal
        title={false}
        centered
        open={joinUs}
        onOk={() => setJoinUs(false)}
        onCancel={() => setJoinUs(false)}
        footer={false}
      >
        <Row>
          <Col xs={24} className="text-center">
            <h1>Join Us</h1>
          </Col>
          <Col
            xs={24}
            sm={{ span: 16, offset: 4 }}
            lg={{ span: 16, offset: 4 }}
            className="text-center mt-2 mb-4"
          >
            <p>Join us to be a part of an innovative and dynamic community.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={24} className="text-center">
            <XInputModal size="large" placeholder="Name" />
          </Col>
          <Col xs={24} className="my-4 text-center">
            <XInputModal size="large" placeholder="Email address" />
          </Col>
          <Col xs={24}>
            <XButtonModal size="large">Submit</XButtonModal>
          </Col>
        </Row>
      </XContactModal> */}
    </div>
  );
}
