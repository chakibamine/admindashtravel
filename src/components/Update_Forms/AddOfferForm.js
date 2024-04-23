import React, { useState } from 'react'
import { Button, Form, Input, Modal, DatePicker } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { Formitem } from 'components/Form_items/Inputs';
import { Select_destination } from 'components/Form_items/Inputs';
import { Price_Input } from 'components/Form_items/Inputs';
import { Image_Input } from 'components/Form_items/Inputs';
import { client } from 'utils/axios';
import { useDispatch } from 'react-redux';
import moment from 'moment';
const { TextArea } = Input;
export const AddOfferForm = () => {
    const dispatch = useDispatch()
    const onFinish = async (values) => {
        console.log('Success:', values);
        const formattedValues = {
            ...values,
            start_date: moment(values.start_date).format('YYYY-MM-DD'),
            end_date: moment(values.end_date).format('YYYY-MM-DD'),
          };
          console.log('Success:', formattedValues);
        await client.post("offres/create/", formattedValues).then(res => {
            dispatch({ type: "ADD__OFFRES", payload: res.data }); setModal1Open(false)
        }
        )
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
                    <Formitem label="Title" name="title" required="true" message="Please input Offer title!" input={<Input />} />
                    <Formitem label="Description" name="description" required="true" message="Please input Offer Description!" input={<TextArea rows={4} />} />
                    <Price_Input label="Price" name="price" required="true" message="Please input Offer Price!"/>
                    <Formitem label="start date" name="start_date" required="true" message="Please input Offer start date!" input={<DatePicker style={{width:"100%"}} format="YYYY-MM-DD" />} />
                    <Formitem label="end date" name="end_date" required="true" message="Please input Offer end date!" input={<DatePicker style={{width:"100%"}} format="YYYY-MM-DD" />} />
                    <Select_destination label="destination" name="destination" required="true" message="Please input Offer Destination!"/>
                    <Image_Input />
                </Form>
            </Modal>
        </>
    )
}
