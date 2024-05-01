import React, { useState } from 'react';
import { Button, Form, Input, Modal, Rate } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { client } from 'utils/axios';
import { Formitem, Select_destination } from 'components/Form_items/Inputs';

const { TextArea } = Input;

export const AddHotelForm = () => {
    const dispatch = useDispatch();
    const [modal1Open, setModal1Open] = useState(false);
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');
    const [imageList, setImageList] = useState([]);

    const onFinish = async (values) => {
        console.log('Form Values:', values); // Log form data
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('location', values.location);
        formData.append('description', values.description);
        formData.append('destination', values.destination);
        formData.append('pricing', values.pricing);
        formData.append('rating', values.rating);

        const imagesData = imageList.map(image => ({
            image: image.file,
            image_url: image.url
        }));
        formData.append('images', JSON.stringify(imagesData));

        console.log('Success:', formData);
        await client.post("hotels/create/", formData)
            .then(res => {
                dispatch({ type: "ADD_HOTELS", payload: res.data });
                setModal1Open(false);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setImageList([...imageList, { url: imageUrl, file: file }]);
    };

    const handleurlchange = (e) => {
        setUrl(e.target.value);
    };

    return (
        <>
            <Button type='primary' style={{ float: 'right' }} onClick={() => setModal1Open(true)}>
                <AppstoreAddOutlined /> Add Hotel
            </Button>
            <Modal
                title="Add Hotel"
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
                    encType="multipart/form-data"
                >
                    <Formitem label="Name" name="name" required message="Please input hotel Name!" input={<Input />} />
                    <Formitem label="Location" name="location" required message="Please input hotel Location!" input={<Input />} />
                    <Formitem label="Description" name="description" required message="Please input hotel Description!" input={<TextArea rows={4} />} />
                    <Select_destination label="Destination" name="destination" required message="Please input hotel Destination!" />
                    <Formitem label="Pricing" name="pricing" required message="Please input hotel Pricing!" input={<Input />} />
                    <Formitem label="Rating" name="rating" required message="Please Rate This hotel!" input={<Rate allowHalf defaultValue={1} />} />
                    <input type='file' name='image' onChange={handleFileSelect} />
                    {/* Display preview of selected images */}
                    {imageList.map((image, index) => (
                        <img key={index} src={image.url} alt={`Preview ${index}`} style={{ maxWidth: '100%', marginBottom: '10px' }} />
                    ))}
                    <Formitem label="Url" message="Please input hotel Url!" input={<Input onChange={handleurlchange} />} />
                </Form>
            </Modal>
        </>
    )
};
