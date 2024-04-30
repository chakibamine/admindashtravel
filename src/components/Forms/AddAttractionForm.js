import React, { useState } from 'react'
import { Button, Form, Input, Modal} from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { Formitem } from 'components/Form_items/Inputs';
import { Select_destination } from 'components/Form_items/Inputs';
import { Image_Input } from 'components/Form_items/Inputs';
import { useDispatch } from 'react-redux';
import { client } from 'utils/axios';
export const AddAttractionForm = () => {
    const { TextArea } = Input;
    const dispatch = useDispatch()
    const onFinish = async (values) => {
        console.log('Success:', values);
        await client.post("attractions/create/", values).then(res => {
            dispatch({ type: "ADD_ATTRACTION", payload: res.data }); setModal1Open(false)
        })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    const [modal1Open, setModal1Open] = useState(false);
   
    return (
        <>
            <Button type='primary' style={{ float: 'right' }} onClick={() => setModal1Open(true)}><AppstoreAddOutlined />Add Attraction</Button>
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
                >
                    <Formitem label="Name" name="name" required="true" message="Please input Attraction Name!" input={<Input />} />
                    <Formitem label="Description" name="description" required="true" message="Please input Attraction Description!" input={<TextArea rows={4} />} />
                    <Select_destination />
                    <Formitem label="Reviews" name="rseviews" required="true" message="Please input Attraction Reviews!" input={<Input />} />
                    <Image_Input />
                </Form>

            </Modal>
        </>
    )
}
