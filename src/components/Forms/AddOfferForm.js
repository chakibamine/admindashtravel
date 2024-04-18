import React, { useState } from 'react'
import { Button, Form, Input, Modal, DatePicker } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { Formitem } from 'components/Form_items/Inputs';
import { Select_destination } from 'components/Form_items/Inputs';
import { Price_Input } from 'components/Form_items/Inputs';
const { TextArea } = Input;
export const AddOfferForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [modal1Open, setModal1Open] = useState(false);
    return (
        <>
            <Button type='primary' style={{ float: 'right' }} onClick={() => setModal1Open(true)}><AppstoreAddOutlined />Add Offer</Button>
            <Modal
                title="Add Offer"
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
                    <Formitem label="Description" name="Description" required="true" message="Please input Offer Description!" input={<TextArea rows={4} />} />
                    <Price_Input label="Price" name="price" required="true" message="Please input Offer Price!"/>
                    <Formitem label="DateValidity" name="DateValidity" required="true" message="Please input Offer DateValidity!" input={<DatePicker style={{width:"100%"}} />} />
                    <Select_destination label="Destination" name="destination" required="true" message="Please input Offer Destination!"/>
                </Form>
            </Modal>
        </>
    )
}
