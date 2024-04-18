import React, { useState } from 'react'
import { Form, Upload, Select, InputNumber } from 'antd';
import { PlusOutlined } from '@ant-design/icons';




export const Select_destination = ({ label, name, required, message }) => {
    const [size, setSize] = useState('middle');
    const [selectedOption, setSelectedOption] = useState('a10');
    const handleChange = (value) => {
        console.log(`Selected: ${value}`);
        setSelectedOption(value);
    };
    const options = [];
    for (let i = 10; i < 36; i++) {
        options.push({
            value: i.toString(36) + i,
            label: i.toString(36) + i,
        });
    }
    return (
        <Form.Item
            label={label}
            name={name}
            rules={[
                {
                    required: { required },
                    message: { message },
                },
            ]}
        >
            <Select
                size={size}
                value={selectedOption}
                onChange={handleChange}
                style={{
                    width: '100%',
                }}
                options={options}
            />
        </Form.Item>
    );
};
export const Formitem = ({ label, name, required, message, input }) => {
    return (
        <>
            <Form.Item
                label={label}
                name={name}
                rules={[
                    {
                        required: { required },
                        message: { message },
                    },
                ]}
            >
                {input}
            </Form.Item>
        </>
    )
}

export const Image_Input = () => {
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    return (
        <>
            <Form.Item
                label="Image"
                name="image"
                valuePropName="fileList"
                getValueFromEvent={normFile}>
                <Upload action="/upload.do" listType="picture-card">
                    <button
                        style={{
                            border: 0,
                            background: 'none',
                        }}
                        type="button"
                    >
                        <PlusOutlined />
                        <div
                            style={{
                                marginTop: 8,
                            }}
                        >
                            Upload
                        </div>
                    </button>
                </Upload>
            </Form.Item>
        </>
    )
}

export const Price_Input = ({ label, name, required, message }) => {
    const { Option } = Select;
    const selectAfter = (
        <Select
            defaultValue="USD"
            style={{
                width: 60,
            }}
        >
            <Option value="USD">$</Option>
            <Option value="EUR">€</Option>
            <Option value="GBP">£</Option>
            <Option value="CNY">¥</Option>
        </Select>
    );
    const selectBefore = (
        <Select
            defaultValue="add"
            style={{
                width: 60,
            }}
        >
            <Option value="add">+</Option>
            <Option value="minus">-</Option>
        </Select>
    );
    return (
        <>
            <Form.Item
                label={label}
                name={name}
                rules={[
                    {
                        required: { required },
                        message: { message },
                    },
                ]}
            >
                <InputNumber
                    addonBefore={selectBefore}
                    addonAfter={selectAfter}
                    defaultValue={100}
                    style={{
                        width: '100%'
                    }}
                />
            </Form.Item>
        </>
    )
}