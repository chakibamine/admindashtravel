import React, { useState } from 'react'
import { Button, Form, Input, Modal, Rate } from 'antd';
import { Formitem, Select_destination, Image_Input } from 'components/Form_items/Inputs';
import { useDispatch } from 'react-redux';
import { client } from 'utils/axios';
import { FaEdit } from 'react-icons/fa';
const { TextArea } = Input;
export const UpdateHotelForm = ({ vals }) => {

    const dispatch = useDispatch()
    const onFinish = async (values) => {
        console.log('Success:', values);
        await client.put(`hotels/${vals.id}/update/`, values).then(res => {
            dispatch({ type: "UPDATE_HOTEL", payload: { id: vals.id, updatedHotel: res.data } });
            setModal1Open(false);
        }).catch(error => {
            console.log('Error:', error);
        });
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [modal1Open, setModal1Open] = useState(false);
    return (
        <>
            <FaEdit onClick={() => setModal1Open(true)} style={{ marginLeft: '15px', color: 'blue', fontSize: "20", cursor: "pointer" }} />
            <Modal
                title="Update Hotel"
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
                    initialValues={vals}
                >
                    <Formitem label="Name" name="name" required="true" message="Please input hotel Name!" input={<Input />} />
                    <Formitem label="Location" name="location" required="true" message="Please input hotel Location!" input={<Input />} />
                    <Formitem label="Description" name="description" required="true" message="Please input hotel Description!" input={<TextArea rows={4} />} />
                    <Select_destination label="Destination" name="destination" required="true" message="Please input hotel Destination!" />
                    <Formitem label="Pricing" name="pricing" required="true" message="Please input hotel Pricing!" input={<Input />} />
                    <Formitem label="Rating" name="rating" required="true" message="Please Rate Tihs hotel!" input={<Rate allowHalf defaultValue={1} />} />
                    <Image_Input />
                </Form>

            </Modal>
        </>
    )
}