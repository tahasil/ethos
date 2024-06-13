import React, { useState, useEffect } from "react";
import { Row, Col, Form, notification } from "antd";
import {
  Wrapper,
  XButton,
  XTitle3,
  FreeSample,
  XContactModal,
  XInputModal,
  XButtonModal,
} from "../../styles/GlobalStyle3";
import { LargePara } from "../../pages/community/indexStyle";
import ScrollAnimation from "react-animate-on-scroll";

export default function JoinUs({ contactUs, handleModalOpen, handleCancel }) {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      const response = await fetch(
        "https://api.hubspot.com/contacts/v1/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        notification.success({
          message: "Success",
          description: "Your message has been sent successfully.",
        });
        form.resetFields();
        setContactUs([false, ""]);
      } else {
        throw new Error("Error submitting the form");
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description:
          "There was an error submitting the form. Please try again.",
      });
      form.resetFields();
      setContactUs([false, ""]);
    }
  };

  // const handleModalOpen = (contact) => {
  //   setContactUs([true, contact]);
  // };

  // const handleCancel = () => {
  //   form.resetFields();
  //   setContactUs([false, ""]);
  // };

  return (
    <>
      <ScrollAnimation duration={1} animateIn="zoomInLeft">
        <FreeSample className="py-5">
          <Wrapper>
            <Row gutter={[15, 15]}>
              <Col xs={24} sm={24} lg={24} className="text-center">
                <XTitle3 className="my-3">Join Us.</XTitle3>
              </Col>
              <Col xs={24} sm={24} lg={12}>
                <div className="cardWrap">
                  <p>
                    If you’re building with AI in Boston, Berlin, or Tokyo and
                    are looking to find your home, give us a shout! We’d love to
                    get to know you and see whether the Æthos community would be
                    right for you.
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} lg={12}>
                <div className="cardWrap">
                  <p>
                    If you work in AI ethics, represent a corporation, an
                    investor, or a service provider or any other entity on our
                    stakeholder map with resources to bring to founders, tell us
                    a little about yourself! We aspire to be a conduit for your
                    tools to reach the front line of development.
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} lg={24} className="mt-3 text-center">
                <XButton onClick={() => handleModalOpen("contact")}>
                  Contact Us
                </XButton>
                <XContactModal
                  title={false}
                  centered
                  open={contactUs[0]}
                  onCancel={handleCancel}
                  footer={false}
                >
                  {contactUs[1] === "contact" && (
                    <Row className="mb-4">
                      <Col xs={24} className="text-center">
                        <h1>Contact Us</h1>
                      </Col>
                    </Row>
                  )}
                  {contactUs[1] === "join" && (
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
                        <p>
                          Join us to be a part of an innovative and dynamic
                          community.
                        </p>
                      </Col>
                    </Row>
                  )}
                  <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Row>
                      <Col xs={24} className="text-center">
                        <Form.Item
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: "Please enter your name",
                            },
                          ]}
                        >
                          <XInputModal size="large" placeholder="Name" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} className="my-4 text-center">
                        <Form.Item
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: "Please enter your email",
                            },
                            {
                              type: "email",
                              message: "Please enter a valid email",
                            },
                          ]}
                        >
                          <XInputModal
                            size="large"
                            placeholder="Email address"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24}>
                        <XButtonModal
                          size="large"
                          type="primary"
                          htmlType="submit"
                        >
                          Submit
                        </XButtonModal>
                      </Col>
                    </Row>
                  </Form>
                </XContactModal>
              </Col>
            </Row>
          </Wrapper>
        </FreeSample>
      </ScrollAnimation>
    </>
  );
}
