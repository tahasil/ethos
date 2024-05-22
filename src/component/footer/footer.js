import React, { useState } from "react";
import { Row, Col } from "antd";
import { Wrapper, XFooter } from "../../styles/GlobalStyle";
import {
  XOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
export default function Home() {
  return (
    <XFooter>
      <Wrapper className="py-4 borderRight">
        <Row gutter={[15, 15]} className="align-items-center">
          <Col xs={24} sm={8} md={4} lg={5}>
            <img className="img-fluid" src="/images/logo-footer.svg" alt="" />
          </Col>
          <Col xs={24} sm={16} md={6} lg={5}>
            <p className="para1">
              Mi tempus imperdiet nulla malesuada pellentesque
            </p>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 14 }}
            md={6}
            lg={{ span: 6, offset: 2 }}
          >
            <a href="#">+1 12345678 </a> <br />
            <a href="#">info@aethos.com</a>
          </Col>
          <Col xs={24} sm={10} md={8} lg={6} className="text-lg-end">
            <ul className="socialLinks">
              <li>
                <a href="#">
                  <XOutlined />
                </a>
              </li>
              <li>
                <a href="#">
                  <FacebookOutlined />
                </a>
              </li>
              <li>
                <a href="#">
                  <LinkedinOutlined />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Wrapper>
    </XFooter>
  );
}
