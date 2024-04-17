import React, { useState } from 'react'
import { Button, Form, Input, Radio, Modal } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { Formitem, Image_Input } from 'components/Form_items/Inputs';
export const AddUserForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [modal1Open, setModal1Open] = useState(false);
    return (
        <>
            <Button type='primary' style={{ float: 'right' }} onClick={() => setModal1Open(true)}><UserAddOutlined />Add User</Button>
            <Modal
                title="Add User"
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
                >
                    <Formitem label="Firstname" name="firstname" required="true" message="Please input your Firstname!" input={<Input />} />
                    <Formitem label="Lastname" name="lastname" required="true" message="Please input your Lastname!" input={<Input />} />
                    <Formitem label="Password" name="password" required="true" message="Please input your Password!" input={<Input.Password />} />
                    <Formitem label="Email" name="email" required="true" message="Please input your Email!" input={<Input />} />
                    <Formitem label="Location" name="location" required="true" message="Please input your Location!" input={<Input />} />
                    <Formitem label="Gender" name="gender" required="true" message="Please choose your gender!"
                        input={
                            <Radio.Group>
                                <Radio value="male"> Male </Radio>
                                <Radio value="female"> Female </Radio>
                            </Radio.Group>
                        }
                    />
                    <Image_Input />
                </Form>
            </Modal>
        </>
    )
}
