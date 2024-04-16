import React, { useState } from 'react'
import { Button, Form, Input, Modal, Select, Cascader, InputNumber, Space, DatePicker } from 'antd';
import { PlusOutlined, AppstoreAddOutlined } from '@ant-design/icons';
const { Option } = Select;
const { RangePicker } = DatePicker;
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
export const AddEventForm = () => {

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
            <Button type='primary' style={{ float: 'right' }} onClick={() => setModal1Open(true)}><AppstoreAddOutlined />Add Event</Button>
            <Modal
                title="Add Event"
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
                                message: 'Please input Event Name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="Description"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Event Description!',
                            },
                        ]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item
                        label="Location"
                        name="Location"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Event Location!',
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
                                message: 'Please input Transport Destination!',
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
                        label="Date"
                        name="Date"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Event Date!',
                            },
                        ]}
                    >
                        <RangePicker
                            style={{
                                width: '100%',
                            }}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
