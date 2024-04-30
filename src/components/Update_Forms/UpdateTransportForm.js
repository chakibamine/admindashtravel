import React, { useState } from 'react'
import { Button, Form, Input, Modal, Select, InputNumber } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { Formitem } from 'components/Form_items/Inputs';
import { Select_destination } from 'components/Form_items/Inputs';
import { Price_Input } from 'components/Form_items/Inputs';
import { useDispatch } from 'react-redux';
import { client } from 'utils/axios';
import { FaEdit } from 'react-icons/fa';
const { Option } = Select;
export const UpdateTransportForm = ({ vals }) => {

    const dispatch = useDispatch()
    const onFinish = async (values) => {
        console.log('Success:', values);
        
        await client.put(`transports/${vals.id}/update/`, values).then(res => {
            dispatch({ type: "UPDATE_TRANSPOPRT", payload: { id: vals.id, updatedTransport: res.data } });
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
                title="Update Transport"
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
                    <Select_destination label="Destination" name="destination" required="true" message="Please input Transport Destination!" />
                    <Formitem label="Mode" name="mode" required="true" message="Please input Transport Mode!" input={<Input />} />
                    <Formitem label="Duration" name="duration" required="true" message="Please input Transport duration!" input={<Input />} />
                    <Price_Input label="Cost" name="cost" required="true" message="Please input Transport Cost!" />
                </Form>
            </Modal>
        </>
    )
}
