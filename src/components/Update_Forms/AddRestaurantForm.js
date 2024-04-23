import React, { useState } from 'react'
import { Button, Form, Input, Modal, Rate, } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { Formitem, Select_destination, Image_Input } from 'components/Form_items/Inputs';
import { client } from 'utils/axios';
import { useDispatch } from 'react-redux';

export const AddRestaurantForm = () => {
    const dispatch = useDispatch()
    const onFinish = async (values) => {
        console.log('Success:', values);
        await client.post("restaurants/create/", values).then(res => {
            dispatch({ type: "ADD_RESTAURANT", payload: res.data }); setModal1Open(false)
        }
        )
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [modal1Open, setModal1Open] = useState(false);
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
                    <Formitem label="Name" name="name" required="true" message="Please input Restaurant Name!" input={<Input />} />
                    <Formitem label="Cuisine" name="cuisine" required="true" message="Please input Restaurant Cuisine!" input={<Input />} />
                    <Formitem label="Address" name="address" required="true" message="Please input Restaurant Address!" input={<Input />} />
                    <Formitem label="Phone" name="phone_number" required="true" message="Please input Restaurant Phone!" input={<Input />} />
                    <Formitem label="Rating" name="rating" required="true" message="Please input Restaurant Rating!" input={<Rate allowHalf defaultValue={1} />} />
                    <Image_Input />
                </Form>

            </Modal>
        </>
    )
}
