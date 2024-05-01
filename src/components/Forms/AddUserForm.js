import React, { useState } from 'react'
import { Button, Form, Input, Radio, Modal } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { Formitem, Image_Input } from 'components/Form_items/Inputs';
import { client } from 'utils/axios';
import { useDispatch } from 'react-redux';
export const AddUserForm = () => {
    const [modal1Open, setModal1Open] = useState(false);
    const [file,setFile]=useState("")
    const dispatch = useDispatch()
    const onFinish = async (values) => {
        console.log('Success:', values);

        await client.post("register/", values).then(res => {
            dispatch({ type: "ADD_USER", payload: res.data }); setModal1Open(false)
        }
        )
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const handleFileSelect = (event) => {
        setFile(event.target.files[0])
      }

      console.log(file);
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
                    encType='multipart/form-data'
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

                    {/* <input type='file' name='image' onChange={handleFileSelect} /> */}
                    <Image_Input />
                </Form>
            </Modal>
        </>
    )
}