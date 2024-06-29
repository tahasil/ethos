import React, { useState } from "react";
import Header3 from "../../component/header/header3";
import Footer3 from "../../component/footer/footer3";
import { Row, Col, Form } from "antd";
import { Wrapper, XInputPage, TitleForm } from "../../styles/GlobalStyle3";
import Joinus from "../../component/joinus/index";
import Gallery from "../../component/gallery/index";
import Connect from "../../component/connect/index";
import { MahiWrap, MahiStory, XCard } from "./indexStyle";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";
//import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Header({ onJoinUsClick }) {
  const [contactUs, setContactUs] = useState([false, ""]);
  const handleModalOpen = (content) => {
    setContactUs([true, content]);
  };
  const handleCancel = () => {
    setContactUs([false, ""]);
  };
  return (
    <>
      <MahiWrap>
        <MahiStory className="pb-5">
          <Header3 onJoinUsClick={() => handleModalOpen("join")} />
          <Wrapper>
            <Row>
              <Col xs={24} sm={24} lg={24} className="text-center">
                <h1>Massachusetts AI Health Innovation</h1>
              </Col>
              <Col
                xs={24}
                sm={24}
                lg={{ span: 14, offset: 5 }}
                className="text-center my-0 my-lg-3"
              >
                <h2>(MAHI) Grant</h2>
              </Col>
            </Row>
          </Wrapper>
        </MahiStory>
        <Wrapper className="mb-5">
          <XCard>
            <Row>
              <Col xs={24} className="text-center">
                <h1>Apply Now</h1>
              </Col>
            </Row>
            <Row gutter={[15, 0]} className="mt-5">
              <Col xs={24} sm={12}>
                <Form.Item>
                  <XInputPage placeholder="Full name" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item>
                  <XInputPage placeholder="Email" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item>
                  <XInputPage.TextArea
                    style={{
                      background: "none",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    placeholder="What problem do you want to address in public health using AI?"
                    size="large"
                  />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item>
                  <XInputPage.TextArea
                    style={{
                      background: "none",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    placeholder="Please describe your solution. How would you describe the expected outcome of this solution?"
                    size="large"
                  />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item>
                  <XInputPage.TextArea
                    style={{
                      background: "none",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    placeholder="In as much depth as you can, please outline the technical elements required to build your solution so that the CIC Technology team can evaluate its feasibility."
                    size="large"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[15, 0]}>
              <Col xs={24}>
                <TitleForm>
                  What option best describes the stage of your idea
                </TitleForm>
              </Col>
            </Row>
          </XCard>
        </Wrapper>
      </MahiWrap>
      <Footer3 />
    </>
  );
}
