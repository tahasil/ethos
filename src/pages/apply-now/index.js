import React, { useState } from "react";
import Header3 from "../../component/header/header3";
import Footer3 from "../../component/footer/footer3";
import { Row, Col, Form, Space, Upload, message, notification } from "antd";
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
export default function Header({ onJoinUsClick }) {
  const [form] = Form.useForm();
  const [contactUs, setContactUs] = useState([false, ""]);
  const [fileList, setFileList] = useState([]);

  const getSignedUrl = async (fileData,ext) => {
    const response = await fetch(`/api/v1/form/get-signed-url?action=putObject&folder_name=uploads&file_name=${fileData.originFileObj.name}&ext=${ext}&id=${fileData.originFileObj.uid}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.response;
  };

  const uploadFileToS3 = async (file, signedUrl) => {
    const response = await fetch(signedUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': file.type,
      },
      body: file.originFileObj,
    });
    if (!response.ok) {
      throw new Error('Failed to upload file to S3');
    }
  };


  const handleSubmit = async (values) => {
    try {
      let fileLinks = [];
      if (fileList.length > 0) {
        await Promise.all(fileList.map(async (fileData) => {
          let get_ext = fileData.originFileObj.name.split('.');
          let ext = get_ext[get_ext.length - 1];
          const signedUrl = await getSignedUrl(fileData, ext);
          await uploadFileToS3(fileData, signedUrl);
          fileLinks.push(signedUrl.split('?')[0]);
        }));
      }

      const response = await fetch('/api/v1/form/mahi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values,  fileLink: fileLinks.length > 0 ? fileLinks[0] : '', }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      notification.success({
        message: 'Form submitted successfully!',
      });
      form.resetFields();
      setFileList([]);
    } catch (error) {
      form.resetFields();
      setFileList([]);
      console.error('Form submission error:', error);
      notification.error({
        message: 'Form submission failed. Please try again.',
      });
    }
  };
 
  // const handleSubmit = async (values) => {
  //   try {
  //     const response = await fetch("/api/v1/form/mahi", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ ...values }),
  //     });
  //     console.log('Form submitted:', response.data);
  //     notification.success({
  //       message: "Form submitted successfully!",
  //     });
  //     form.resetFields();
  //   } catch (error) {
  //     console.error('Form submission error:', error);
  //     notification.error({
  //       message: "There was an error submitting the form. Please try again.",
  //     });
  //     form.resetFields();
  //   }
  // };

  const handleModalOpen = (content) => {
    setContactUs([true, content]);
  };

  const handleCancel = () => {
    setContactUs([false, ""]);
  };

  const handleUploadChange = ({ fileList: newFileList }) => {
    if (newFileList.length > 1) {
      newFileList = newFileList.slice(-1); // Keep only the last file
    }
    setFileList(newFileList);
  };

  const beforeUpload = (file) => {
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      notification.error({
        message: 'File must be smaller than 10MB!',
      });
    }
    return isLt10M;
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
          <XCard>
            <Row>
              <Col xs={24} className="text-center">
                <h1>Apply Now</h1>
              </Col>
            </Row>
            <Form form={form} onFinish={handleSubmit}>
              <Row gutter={[15, 0]} className="mt-5">
                <Col xs={24} sm={12}>
                  <Form.Item name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                    <XInputPage placeholder="Full name" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
                    <XInputPage placeholder="Email" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item name="problem_statement" rules={[{ required: true, message: 'Please describe the problem statement' }]}>
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
                  <Form.Item name="solution_description" rules={[{ required: true, message: 'Please describe your solution' }]}>
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
                  <Form.Item name="technical_elements" rules={[{ required: true, message: 'Please describe the technical elements' }]}>
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
                  <Form.Item name="stage" rules={[{ required: true, message: 'Please select the stage of your idea' }]}>
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
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[15, 15]} className="mt-4">
                <Col xs={24}>
                  <TitleForm>
                    Given the resources available via this grant, are you prepared
                    to take primary responsibility for driving this solution
                    forward and gathering any other necessary resources? *
                  </TitleForm>
                </Col>
                <Col xs={24}>
                  <Form.Item name="responsibility_consent" rules={[{ required: true, message: 'Please select your preparedness' }]}>
                    <XRadio.Group>
                      <Space direction="vertical">
                        <XRadio value="Yes">Yes</XRadio>
                        <XRadio value="No">No</XRadio>
                      </Space>
                    </XRadio.Group>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[15, 15]} className="mt-4">
                <Col xs={24}>
                  <TitleForm>
                    Who are the primary stakeholders you will need to work with to
                    build the solution
                  </TitleForm>
                </Col>
                <Col xs={24}>
                  <Form.Item name="stakeholders" rules={[{ required: true, message: 'Please select primary stakeholders' }]}>
                    <XRadio.Group>
                      <Space direction="vertical">
                        <XRadio value="Policy makers">Policy makers</XRadio>
                        <XRadio value="Practicioners">Practicioners</XRadio>
                        <XRadio value="The public">The public</XRadio>
                        <XRadio value="Institutions">Institutions</XRadio>
                        <XRadio value="Other">Other</XRadio>
                      </Space>
                    </XRadio.Group>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[15, 15]} className="mt-4">
                <Col xs={24}>
                  <TitleForm>
                    Submit a pitch deck, white paper, website, research study, or
                    other media form that explains your solution.
                  </TitleForm>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        validator: (
                          _,
                          value,
                        ) => {
                          if (
                            fileList.length ===
                            0
                          ) {
                            return Promise.reject(
                              new Error(
                                'Please upload at least one document!',
                              ),
                            );
                          }
                          return Promise.resolve();
                        },
                      },
                    ]}
                  >
                    <Dragger 
                      className="antdDragger" 
                      beforeUpload={beforeUpload}
                      onChange={handleUploadChange}
                      maxCount={1}
                      onRemove={() => setFileList([])}
                    >
                      <p className="ant-upload-drag-icon">
                        <img
                          className="img-fluid m-auto"
                          src="/images/upload-icon.svg"
                          alt=""
                        />
                      </p>
                      <p className="ant-upload-para">Upload File</p>
                    </Dragger>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[15, 15]} className="mt-4">
                <Col xs={24}>
                  <TitleForm>
                    Are you prepared to take questions about your solution on June
                    27th at Venture Café in Cambridge from 6:00 to 7:00 pm?
                  </TitleForm>
                </Col>
                <Col xs={24}>
                  <Form.Item name="question_consent" rules={[{ required: true, message: 'Please select your preparedness to take questions' }]}>
                    <XRadio.Group>
                      <Space direction="vertical">
                        <XRadio value="Yes">Yes</XRadio>
                        <XRadio value="No">No</XRadio>
                      </Space>
                    </XRadio.Group>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[15, 15]} className="mt-4">
                <Col xs={24} className="text-center">
                  <XFormButton htmlType="submit">Submit</XFormButton>
                </Col>
              </Row>
            </Form>
          </XCard>
        </Wrapper>
      </MahiWrap>
      <Footer3 />
    </>
  );
}
