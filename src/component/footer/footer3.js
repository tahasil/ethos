import React, { useState } from "react";
import { Row, Col, Space, Input, Button, Form, notification } from "antd";
import {
  Wrapper,
  XFooter2,
  XInputNewsLetter,
  XButtonNews,
  TitleCopy,
} from "../../styles/GlobalStyle3";
import {
  XOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Link from "next/link";
export default function Home() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("/api/v1/form/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values }),
      });
      setLoading(false);
      notification.success({
        message: "Successfully subscribed to newsletter!",
      });
      form.resetFields();
    } catch (error) {
      setLoading(false);
      console.error("Form submission error:", error);
      notification.error({
        message: "Failed to subscribe. Please try again later.",
      });
      form.resetFields();
    }
  };

  return (
    <XFooter2>
      <Wrapper className="py-4 borderRight">
        <Row gutter={[15, 15]} className="align-items-center">
          <Col xs={24} sm={12} md={10} lg={6}>
            <ul className="footerLinks">
              <li>
                <Link href="/story">Story</Link>
              </li>
              <li>
                <Link href="/#">Community</Link>
              </li>
              {/* <li>
                <Link href="/event">Events</Link>
              </li> */}
            </ul>
          </Col>
          <Col xs={24} sm={12} md={14} lg={12}>
            <Row align="middle">
              <Col xs={24} sm={24} md={12} lg={10} className="my-3 my-sm-0">
                <ul className="footerLinks">
                  <li>Subscribe to our newsletter</li>
                </ul>
              </Col>
              <Col xs={24} sm={24} md={12} lg={14}>
                <Space
                  style={{
                    width: "100%",
                  }}
                >
                  <Form form={form} onFinish={handleSubmit} layout="inline">
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your email address!",
                        },
                        {
                          type: "email",
                          message: "Please enter a valid email address!",
                        },
                      ]}
                    >
                      <XInputNewsLetter
                        size="large"
                        placeholder="Enter your email address"
                      />
                    </Form.Item>
                    <XButtonNews
                      loading={loading}
                      type="primary"
                      htmlType="submit"
                    >
                      Subscribe
                    </XButtonNews>
                  </Form>
                </Space>
              </Col>
            </Row>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={24}
            lg={6}
            className="my-4 text-sm-end text-md-center text-lg-end"
          >
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
      </Wrapper>
      <TitleCopy>
        <Wrapper>
          <Row gutter={[15, 15]}>
            <Col xs={24} sm={12} mg={12} className="text-center text-sm-start">
              <p className="copy">
                Aethos - All Rights Reserved {new Date().getFullYear()}
              </p>
            </Col>
            <Col xs={24} sm={12} mg={12} className="text-center text-sm-end">
              <p className="copy">
                <Space>
                  Made with
                  <svg
                    width="15px"
                    height="15px"
                    fill="#F00"
                    viewBox="0 0 1024 1024"
                  >
                    <title className="p-0">heart icon</title>
                    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
                  </svg>
                  by
                  <Link target="_blank" href="https://aiolos.cloud/">
                    Aiolos Cloud
                  </Link>
                </Space>
              </p>
            </Col>
          </Row>
        </Wrapper>
      </TitleCopy>
    </XFooter2>
  );
}
