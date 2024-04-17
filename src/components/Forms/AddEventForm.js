import React, { useState } from 'react'
import { Button, Form, Input, Modal, DatePicker } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { Formitem } from 'components/Form_items/Inputs';
import { Select_destination } from 'components/Form_items/Inputs';
const { RangePicker } = DatePicker;
export const AddEventForm = () => {

    const { TextArea } = Input;
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [modal1Open, setModal1Open] = useState(false);
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
                    <Formitem label="Name" name="name" required="true" message="Please input Event Name!" input={<Input />} />
                    <Formitem label="Description" name="description" required="true" message="Please input Event Description!" input={<TextArea rows={4} />} />
                    <Formitem label="Location" name="location" required="true" message="Please input Event Location!" input={<Input />} />
                    <Select_destination label="Destination" name="destination" required="true" message="Please input Event Destination!" />
                    <Formitem label="Date" name="date" required="true" message="Please input Event Date!" input={<RangePicker style={{ width: '100%' }} />} />
                </Form>
            </Modal>
        </>
    )
}
