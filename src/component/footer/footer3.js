import React, { useState } from "react";
import { Row, Col } from "antd";
import { Wrapper, XFooter2 } from "../../styles/GlobalStyle3";
import {
  XOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
export default function Home() {
  return (
    <XFooter2>
      <Wrapper className="py-4 borderRight">
        <Row gutter={[15, 15]} className="align-items-center">
          <Col xs={24} sm={12} lg={12}>
            <ul className="footerLinks">
              <li>
                <a href="#">Story</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={12} lg={12} className="mt-4 mt-sm-0 text-sm-end">
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
    </XFooter2>
  );
}
