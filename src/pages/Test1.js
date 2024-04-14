import React, { useState } from 'react';
import { Steps, Form, Input, Button } from 'antd';
import { LoginOutlined, ProfileOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Step } = Steps;

export const Test1 = () => {
    const [current, setCurrent] = useState(0);
    const [loginDetails, setLoginDetails] = useState(null);
    const [profileDetails, setProfileDetails] = useState(null);
    
    const handleStepChange = current => {
        setCurrent(current);
    };

    const onFinishLoginForm = values => {
        setLoginDetails(values);
        setCurrent(1);
    };

    const onFinishProfileForm = values => {
        setProfileDetails(values);
        setCurrent(2);
    };
    const isfinishdisable = (stepNum) => {
        if(stepNum === 0) {
            return false;
        }
        if(stepNum === 1) {
            return loginDetails === null;
        }
        if(stepNum === 2) {
            return loginDetails === null || profileDetails === null;
        }
    };
    const forms = [
        <LoginForm onFinish={onFinishLoginForm} initialValues={loginDetails} />,
        <ProfileForm onFinish={onFinishProfileForm} initialValues={profileDetails} />,
        <FinishForm />
    ];

    return (
        <>
            <Steps
                style={{ padding: "30px 16px" }}
                current={current}
                onChange={handleStepChange}
            >
                <Step disabled={isfinishdisable(0)} title="Login" icon={<LoginOutlined />} />
                <Step disabled={isfinishdisable(1)} title="Profile" icon={<ProfileOutlined />} />
                <Step disabled={isfinishdisable(2)} title="Finish" icon={<CheckCircleOutlined />} />
            </Steps>
            {forms[current]}
        </>
    );
};

const LoginForm = ({ onFinish, initialValues }) => {
    return (
        <Form
            onFinish={onFinish}
            initialValues={initialValues}
            style={{ maxWidth: 300, margin: 'auto', marginTop: 20 }}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your username'
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your password'
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Continue
                </Button>
            </Form.Item>
        </Form>
    );
};


const ProfileForm = ({ onFinish, initialValues }) => {
    return (
        <Form
            onFinish={onFinish}
            initialValues={initialValues}
            style={{ maxWidth: 300, margin: 'auto', marginTop: 20 }}
        >
            <Form.Item
                label="Firstname"
                name="firstname"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your Firstname'
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Lastname"
                name="lastname"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your Lastname'
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Continue
                </Button>
            </Form.Item>
        </Form>
    );
};

const FinishForm = () => {
    return (
        <h1>All good :)</h1>
    );
};
