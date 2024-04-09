import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Upload, Radio, Modal } from 'antd';
import { PlusOutlined,UserAddOutlined } from '@ant-design/icons';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
export const AddUserForm = () => {


    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    const [modal1Open, setModal1Open] = useState(false);

    return (
        <>
            <Button type='primary' style={{ float: 'right'}} onClick={() => setModal1Open(true)}><UserAddOutlined />Add User</Button>
            <Modal
                title="Add User"
                style={{ top: 20 }}
                visible={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
                footer={[
                    <Button key="cancel" onClick={() => setModal1Open(false)}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" form="userForm" htmlType="submit">
                        Submit
                    </Button>
                ]}
            >
                <Form
                    id="userForm"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="firstname"
                        name="firstname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your firstname!',
                            },
                        ]}
                    >
                        <Input style={{ width: '100%', borderRadius: '8px', borderColor: '#ccc' }} />
                    </Form.Item>
                    <Form.Item
                        label="lastname"
                        name="lastname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your lastname!',
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
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Location"
                        name="Location"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Location!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Gender"
                        name="gender"
                        rules={[
                            {
                                required: true,
                                message: 'Please choose your gender!',
                            },
                        ]}
                    >
                        <Radio.Group>
                            <Radio value="male"> Male </Radio>
                            <Radio value="female"> Female </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Image" valuePropName="fileList" getValueFromEvent={normFile}>
                        <Upload action="/upload.do" listType="picture-card">
                            <button
                                style={{
                                    border: 0,
                                    background: 'none',
                                }}
                                type="button"
                            >
                                <PlusOutlined />
                                <div
                                    style={{
                                        marginTop: 8,
                                    }}
                                >
                                    Upload
                                </div>
                            </button>
                        </Upload>
                    </Form.Item>
                </Form>

            </Modal>
        </>
    )
}
