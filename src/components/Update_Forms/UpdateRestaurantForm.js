import React, { useState } from 'react'
import { Button, Form, Input, Modal, Rate, } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { Formitem, Select_destination, Image_Input } from 'components/Form_items/Inputs';
import { client } from 'utils/axios';
import { useDispatch } from 'react-redux';
import { FaEdit } from 'react-icons/fa';

export const UpdateRestaurantForm = ({ vals }) => {
    const dispatch = useDispatch()
    const onFinish = async (values) => {
        await client.put(`restaurants/${vals.id}/`, values).then(res => {
            dispatch({ type: "UPDATE_RESTAURANT", payload: { id: vals.id, updatedRestaurant: res.data } });
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
            <FaEdit onClick={() => setModal1Open(true)} style={{marginLeft:'15px', color:'blue',fontSize:"20",cursor:"pointer"}}/>
            <Modal
                title="Update Restaurant"
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
