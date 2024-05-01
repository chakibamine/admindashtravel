import React, { useEffect, useState } from 'react'
import { Form, Upload, Select, InputNumber } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { client } from 'utils/axios';

export const Select_destination = ({ label, name, required, message }) => {
    const dispatch = useDispatch();
    const { destinations } = useSelector(state => state.destination);
    const [size, setSize] = useState('middle');
  
    useEffect(() => {
      // Fetch destinations from API when component mounts
      client.get("destinations/")
        .then(res => {
          dispatch({ type: "FETCH_DESTINATIONS", payload: res.data });
        })
        .catch(error => {
          console.error("Error fetching destinations: ", error);
          // Handle error here
        });
    }, []);
  
    const defaultValue = destinations.length > 0 ? destinations[0].id : undefined;
  
    const handleChange = (value) => {
      console.log(`Selected: ${value}`);
    };
  
    return (
      <Form.Item
        label={label}
        name={name}
        rules={[
          {
            required: required,
            message: message,
          },
        ]}
      >
        <Select
          size={size}
          defaultValue={defaultValue}
          onChange={handleChange}
          style={{
            width: '100%',
          }}
        >
          {destinations.map(destination => (
            <Select.Option key={destination.id} value={destination.id}>
              {destination.name}
            </Select.Option>
          ))}
        </Select>
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

export const Image_Input = ({ handleFileSelect ,name}) => {
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    return (
        <>
            <Form.Item
                label="Image"
                name={name}
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Upload
                    listType="picture-card"
                    onChange={(info) => {
                        handleFileSelect(info.file.originFileObj);
                    }}
                >
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