import React, { useState } from 'react'
import { Button, Form, Input, Modal, Select, InputNumber } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { Formitem } from 'components/Form_items/Inputs';
import { Select_destination } from 'components/Form_items/Inputs';
const { Option } = Select;
export const AddTransportForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [modal1Open, setModal1Open] = useState(false);
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
                    <Formitem label="Type" name="type" required="true" message="Please input Transport Type!" input={<Input />} />
                    <Formitem label="Provider" name="provider" required="true" message="Please input Transport Provider!" input={<Input />} />
                    <Select_destination label="Destination" name="destination" required="true" message="Please input Transport Destination!" />
                    <Formitem label="Price" name="price" required="true" message="Please input Transport Price!" input={<InputNumber addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={100} style={{ width: '100%', }} />} />
                </Form>
            </Modal>
        </>
    )
}
