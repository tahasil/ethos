import React, { useState } from "react";
import Header3 from "../../component/header/header3";
import Footer3 from "../../component/footer/footer3";
import { Row, Col, Form, Space, Upload } from "antd";
import Joinus from "../../component/joinus/index";
import Gallery from "../../component/gallery/index";
import Connect from "../../component/connect/index";
import { MahiWrap, MahiStory, XCard } from "./indexStyle";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";
import { UploadOutlined } from "@ant-design/icons";
import {
  Wrapper,
  XInputPage,
  TitleForm,
  XRadio,
  XFormButton,
} from "../../styles/GlobalStyle3";

const { Dragger } = Upload;

const onFinish = () => {
  console.log("Success:");
};
const handleAction = () => {
  console.log("WIP.....");
};

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
        <Wrapper className="pb-5">
          <Form onFinish={onFinish} onSubmit={handleAction} autoComplete="off">
            <XCard>
              <Row>
                <Col xs={24} className="text-center">
                  <h1>Apply Now</h1>
                </Col>
              </Row>
              <Row gutter={[15, 0]} className="mt-5">
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="fullname"
                    rules={[
                      {
                        required: true,
                        message: "Please input!",
                      },
                    ]}
                  >
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
              <Row gutter={[15, 15]} className="mt-0">
                <Col xs={24}>
                  <TitleForm>
                    What option best describes the stage of your idea
                  </TitleForm>
                </Col>
                <Col xs={24}>
                  <XRadio.Group>
                    <Space direction="vertical">
                      <XRadio value="Building a company with a team and an MVP">
                        Building a company with a team and an MVP
                      </XRadio>
                      <XRadio value="Working towards building a team and an MVP">
                        Working towards building a team and an MVP
                      </XRadio>
                      <XRadio value="Working towards the solution from within an existing organisation">
                        Working towards the solution from within an existing
                        organisation
                      </XRadio>
                      <XRadio value="Conducting research pointing towards the solution">
                        Conducting research pointing towards the solution
                      </XRadio>
                      <XRadio value="Developing the idea on the side">
                        Developing the idea on the side
                      </XRadio>
                      <XRadio value="It's just an idea!">
                        It's just an idea!
                      </XRadio>
                    </Space>
                  </XRadio.Group>
                </Col>
              </Row>
              <Row gutter={[15, 15]} className="mt-4">
                <Col xs={24}>
                  <TitleForm>
                    Given the resources available via this grant, are you
                    prepared to take primary responsibility for driving this
                    solution forward and gathering any other necessary
                    resources? *
                  </TitleForm>
                </Col>
                <Col xs={24}>
                  <XRadio.Group>
                    <Space direction="vertical">
                      <XRadio value="Yes">Yes</XRadio>
                      <XRadio value="No">No</XRadio>
                    </Space>
                  </XRadio.Group>
                </Col>
              </Row>
              <Row gutter={[15, 15]} className="mt-4">
                <Col xs={24}>
                  <TitleForm>
                    Who are the primary stakeholders you will need to work with
                    to build the solution
                  </TitleForm>
                </Col>
                <Col xs={24}>
                  <XRadio.Group>
                    <Space direction="vertical">
                      <XRadio value="Policy makers">Policy makers</XRadio>
                      <XRadio value="Practicioners">Practicioners</XRadio>
                      <XRadio value="The public">The public</XRadio>
                      <XRadio value="Institutions">Institutions</XRadio>
                      <XRadio value="Other">Other</XRadio>
                    </Space>
                  </XRadio.Group>
                </Col>
              </Row>
              <Row gutter={[15, 15]} className="mt-4">
                <Col xs={24}>
                  <TitleForm>
                    Submit a pitch deck, white paper, website, research study,
                    or other media form that explains your solution.
                  </TitleForm>
                </Col>
                <Col xs={24}>
                  <Dragger className="antdDragger">
                    <p className="ant-upload-drag-icon">
                      <img
                        className="img-fluid m-auto"
                        src="/images/upload-icon.svg"
                        alt=""
                      />
                    </p>
                    <p className="ant-upload-para">Upload File</p>
                  </Dragger>
                </Col>
              </Row>
              <Row gutter={[15, 15]} className="mt-4">
                <Col xs={24}>
                  <TitleForm>
                    Are you prepared to take questions about your solution on
                    June 27th at Venture Café in Cambridge from 6:00 to 7:00 pm?
                  </TitleForm>
                </Col>
                <Col xs={24}>
                  <XRadio.Group>
                    <Space direction="vertical">
                      <XRadio value="Yes">Yes</XRadio>
                      <XRadio value="No">No</XRadio>
                    </Space>
                  </XRadio.Group>
                </Col>
              </Row>
              <Row gutter={[15, 15]} className="mt-4">
                <Col xs={24} className="text-center">
                  <XFormButton type="submit">Submit</XFormButton>
                </Col>
              </Row>
            </XCard>
          </Form>
        </Wrapper>
      </MahiWrap>
      <Footer3 />
    </>
  );
}
