import React, { useState } from 'react'
import { Button, Form, Input, Modal, Rate } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { Formitem } from 'components/Form_items/Inputs';
import { Image_Input } from 'components/Form_items/Inputs';
import { useDispatch } from 'react-redux';
import { client } from 'utils/axios';
export const AddDestinationForm = () => {

    const { TextArea } = Input;
    const dispatch = useDispatch()
    const onFinish = async (values) => {
        console.log('Success:', values);
        await client.post("destinations/create/", values).then(res => {
            dispatch({ type: "ADD_DESTINATIONS", payload: res.data }); setModal1Open(false)
        })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [modal1Open, setModal1Open] = useState(false);
    return (
        <>
            <Button type='primary' style={{ float: 'right' }} onClick={() => setModal1Open(true)}><AppstoreAddOutlined />Add Destination</Button>
            <Modal
                title="Add Destination"
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
                    <Formitem label="Name" name="name" required="true" message="Please input Destination Name!" input={<Input />} />
                    <Formitem label="Location" name="location" required="true" message="Please input Destination Location!" input={<Input />} />
                    <Formitem label="Description" name="description" required="true" message="Please input Destination Description!" input={<TextArea rows={4} />} />
                    <Formitem label="Rating" name="rating" required="true" message="Please Rate Tihs Destination!" input={<Rate allowHalf defaultValue={1} />} />
                    <Image_Input />
                </Form>

            </Modal>
        </>
    )
}