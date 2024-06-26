import React, { useState } from 'react'
import { Button, Form, Input, Radio, Modal } from 'antd';
import { Formitem, Image_Input } from 'components/Form_items/Inputs';
import { client } from 'utils/axios';
import { useDispatch } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
export const UpdateUserForm = ({vals}) => {
    const [modal1Open, setModal1Open] = useState(false);
    console.log(vals);
    const dispatch = useDispatch()
    const onFinish = async (values) => {
        console.log('Success:', values);
    
        await client.put(`users/${vals.id}/`, values).then(res => {
            dispatch({ type: "UPDATE_USER", payload: { id: vals.id, updatedUser: res.data } });
            setModal1Open(false);
        }).catch(error => {
            console.log('Error:', error);
        });
    }; 
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <FaEdit onClick={() => setModal1Open(true)} style={{marginLeft:'15px', color:'blue',fontSize:"20",cursor:"pointer"}}/>
            <Modal
                title="Update User"
                style={{ top: 20 }}
                visible={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
                footer={[
                    <Button key="cancel" onClick={() => setModal1Open(false)}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" form="userForm" htmlType="submit">
                        Submit
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
                    <Formitem label="Firstname" name="firstname" required="true" message="Please input your Firstname!" input={<Input />} />
                    <Formitem label="Lastname" name="lastname" required="true" message="Please input your Lastname!" input={<Input />} />
                    <Formitem label="Password" name="password" required="true" message="Please input your Password!" input={<Input.Password />} />
                    <Formitem label="Email" name="email" required="true" message="Please input your Email!" input={<Input />} />
                    <Formitem label="Location" name="location" required="true" message="Please input your Location!" input={<Input />} />
                    <Formitem label="Gender" name="gender" required="true" message="Please choose your gender!"
                        input={
                            <Radio.Group>
                                <Radio value="M"> Male </Radio>
                                <Radio value="F"> Female </Radio>
                            </Radio.Group>
                        }
                    />
                    <Image_Input />
                </Form>
            </Modal>
        </>
    )
}