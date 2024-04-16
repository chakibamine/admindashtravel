import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Upload, Radio, Modal, Rate, Select } from 'antd';
import { PlusOutlined, AppstoreAddOutlined } from '@ant-design/icons';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
export const AddRestaurantForm = () => {

    const { TextArea } = Input;
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
    const options = [];
    for (let i = 10; i < 36; i++) {
        options.push({
            value: i.toString(36) + i,
            label: i.toString(36) + i,
        });
    }
    const handleChange = (value) => {
        console.log(`Selected: ${value}`);
    };
    const [size, setSize] = useState('middle');
    return (
        <>
            <Button type='primary' style={{ float: 'right' }} onClick={() => setModal1Open(true)}><AppstoreAddOutlined />Add Restaurant</Button>
            <Modal
                title="Add Restaurant"
                style={{ top: 20 }}
                visible={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
                footer={[
                    <Button key="cancel" onClick={() => setModal1Open(false)}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" form="userForm" htmlType="submit">
                        Insert
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
                        label="Name"
                        name="Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Restaurant Name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Cuisine"
                        name="Cuisine"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Restaurant Cuisine!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Destination"
                        name="Destination"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Restaurant Destination!',
                            },
                        ]}
                    >
                        <Select
                            size={size}
                            defaultValue="a1"
                            onChange={handleChange}
                            style={{
                                width: '100%',
                            }}
                            options={options}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Rating"
                        name="Rating"
                        rules={[
                            {
                                required: true,
                                message: 'Please Rate Tihs Restaurant!',
                            },
                        ]}
                    >
                        <Rate allowHalf defaultValue={1} />
                    </Form.Item>




                    <Form.Item
                        label="Image"
                        name="image"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}>
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
