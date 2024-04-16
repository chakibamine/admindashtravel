import React, { useState } from 'react'
import { Button, Form, Input, Modal, Select, Cascader, InputNumber, Space } from 'antd';
import { PlusOutlined, AppstoreAddOutlined } from '@ant-design/icons';
const { Option } = Select;
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
export const AddTransportForm = () => {

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
    const selectAfter = (
        <Select
            defaultValue="USD"
            style={{
                width: 60,
            }}
        >
            <Option value="USD">$</Option>
            <Option value="EUR">€</Option>
            <Option value="GBP">£</Option>
            <Option value="CNY">¥</Option>
        </Select>
    );
    const selectBefore = (
        <Select
            defaultValue="add"
            style={{
                width: 60,
            }}
        >
            <Option value="add">+</Option>
            <Option value="minus">-</Option>
        </Select>
    );
    return (
        <>
            <Button type='primary' style={{ float: 'right' }} onClick={() => setModal1Open(true)}><AppstoreAddOutlined />Add Transport</Button>
            <Modal
                title="Add Transport"
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
                        label="Type"
                        name="Type"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Transport Type!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Provider"
                        name="Provider"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Transport Provider!',
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
                        label="Price"
                        name="Price"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Transport Price!',
                            },
                        ]}
                    >
                        <InputNumber
                            addonBefore={selectBefore}
                            addonAfter={selectAfter}
                            defaultValue={100}
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
