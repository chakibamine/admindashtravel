import React, { useState } from 'react'
import { Button, Form, Input, Modal } from 'antd';
import { Formitem } from 'components/Form_items/Inputs';
import { Select_destination } from 'components/Form_items/Inputs';
import { Image_Input } from 'components/Form_items/Inputs';
import { useDispatch } from 'react-redux';
import { client } from 'utils/axios';
import { FaEdit } from 'react-icons/fa';
export const UpdateAttractionForm = ({ vals }) => {
    const { TextArea } = Input;
    const dispatch = useDispatch()
    const onFinish = async (values) => {
        console.log('Success:', values);

        await client.put(`attractions/${vals.id}/update/`, values).then(res => {
            dispatch({ type: "UPDATE_ATTRACTION", payload: { id: vals.id, updatedAttraction: res.data } });
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
                title="Update Attraction"
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
                    <Formitem label="Name" name="name" required="true" message="Please input Attraction Name!" input={<Input />} />
                    <Formitem label="Description" name="description" required="true" message="Please input Attraction Description!" input={<TextArea rows={4} />} />
                    <Select_destination />
                </Form>

            </Modal>
        </>
    )
}
