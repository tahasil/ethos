import React, { useState } from "react";
import { Row, Col } from "antd";
import {
  Wrapper,
  XFooter2,
  XInputHero,
  XHeroButton,
} from "../../styles/GlobalStyle2";
import {
  XOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Link from "next/link";
export default function Home() {
  return (
    <XFooter2 className="py-5">
      <Wrapper>
        <Row gutter={[15, 30]}>
          <Col xs={24} sm={24} md={24} lg={7}>
            <h6>Duis aute irure dolor in reprehenderit</h6>
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className="w-100">
              <XInputHero size="large" placeholder="Your email" />
              <XHeroButton size="large" style={{ fontSize: "12px" }}>
                Subscribe
              </XHeroButton>
            </div>
          </Col>
          <Col xs={24} sm={8} md={8} lg={{ span: 5, offset: 2 }}>
            <h4>Company</h4>
            <ul className="footerLinks">
              <li>
                <Link href="/story">Story</Link>
              </li>
              <li>
                <Link href="/community">Community</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={8} md={8} lg={5}>
            <h4>Resources</h4>
            <ul className="footerLinks">
              <li>
                <Link href="#">Lorem Ipsum</Link>
              </li>
              <li>
                <Link href="#">Lorem Ipsum</Link>
              </li>
              <li>
                <Link href="#">Lorem Ipsum</Link>
              </li>
              <li>
                <Link href="#">Lorem Ipsum</Link>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={8} md={8} lg={5} className="text-lg-end">
            <ul className="socialLinks">
              <li>
                <Link href="#">
                  <XOutlined />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FacebookOutlined />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <LinkedinOutlined />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row gutter={[15, 15]} className="mt-5">
          <Col xs={24}>
            <ul className="termsLinks">
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Wrapper>
    </XFooter2>
  );
}
