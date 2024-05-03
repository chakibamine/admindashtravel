import React from "react";
import {
  Layout,
  Button,
  Typography,
  Form,
  Input,
  Col,
  Row,
  message,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { client } from "utils/axios";

const { Content } = Layout;
const { Title } = Typography;

const SignIn = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await client.post("login/", values);
      console.log("Login Successful: ", response.data);
      // Redirect user to dashboard or wherever you want
      navigate("/");
    } catch (error) {
      if (error.response.status === 400) {
        message.error("Invalid email or password");
      } else {
        message.error("An error occurred. Please try again later");
      }
    }
  };

  const onFinishFailed = (errInfo) => {
    console.log("Error : ", errInfo);
    message.error("Please complete all the fields");
  };

  return (
    <>
      <div className="layout-default layout-signin">
        <Content className="signin">
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 2 }}
              md={{ span: 12 }}
            >
              <Title className="mb-15" style={{ fontFamily: 'Circular, sans-serif' }}>Sign In</Title>
              <Title className="text-muted"  style={{ fontFamily: 'Circular, sans-serif' }} level={5}>
                Enter your email and password to sign in
              </Title>
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="row-col"
              >
                <Form.Item
                  className="username"
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                  className="username"
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item>
                  <Button
                    htmlType="submit"
                    style={{ width: "100%", backgroundColor:"#26baeb",color:"white" }}
                  >
                    SIGN IN
                  </Button>
                </Form.Item>
                <p className="font-semibold text-muted">
                  Don't have an account?{" "}
                  <Link to="/sign-up" className="text-dark font-bold">
                    Sign Up
                  </Link>
                </p>
              </Form>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <img src={logo} alt="" style={{ width: "60%", marginLeft: "100px", marginTop: "50px" }} />
            </Col>
          </Row>
        </Content>
        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default SignIn;
