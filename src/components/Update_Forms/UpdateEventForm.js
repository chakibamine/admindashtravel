import React, { useState } from 'react'
import { Button, Form, Input, Modal, DatePicker } from 'antd';
import { Formitem } from 'components/Form_items/Inputs';
import { Select_destination } from 'components/Form_items/Inputs';
import { useDispatch } from 'react-redux';
import { client } from 'utils/axios';
import { FaEdit } from 'react-icons/fa';
import moment from 'moment';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
export const UpdateEventForm = ({ vals }) => {
    console.log(vals);
    const dispatch = useDispatch()
    const onFinish = async (values) => {
        console.log('Success:', values);

        await client.put(`events/${vals.id}/`, values).then(res => {
            dispatch({ type: "UPDATE_EVENTS", payload: { id: vals.id, updatedEvent: res.data } });
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
                title="Update Event"
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
                    initialValues={{
                        ...vals,
                        date: vals.date ? moment(vals.date) : null
                    }}
                >
                    <Formitem label="Name" name="name" required="true" message="Please input Event Name!" input={<Input />} />
                    <Formitem label="Description" name="description" required="true" message="Please input Event Description!" input={<TextArea rows={4} />} />
                    <Formitem label="Location" name="location" required="true" message="Please input Event Location!" input={<Input />} />
                    <Select_destination label="Destination" name="destination" required="true" message="Please input Event Destination!" />
                    <Formitem label="Date" name="date" required="true" message="Please input Event Date!" input={<DatePicker style={{ width: '100%' }} />} />
                </Form>
            </Modal>
        </>
    )
}
