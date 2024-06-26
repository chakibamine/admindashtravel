import React, { useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { client } from 'utils/axios';
import { MdDelete } from "react-icons/md";
export const Confirmation_delete = ({ id, path }) => {
  let red = '';
  switch (path) {
    case '' : red = 'DELETE_USER'; break;
    case 'destinations/' : red = 'DELETE_DESTINATIONS'; break;
    case 'hotels/' : red = 'DELETE_HOTELS'; break;
    case 'restaurants/' : red = 'DELETE_RESTAURANT'; break;
    case 'transports/' : red = 'DELETE_TRANSPOPRT'; break;
    case 'events/' : red = 'DELETE_EVENTS'; break;
    case 'offres/' : red = 'DELETE_OFFRES'; break;
    case 'attractions/' : red = 'DELETE_ATTRACTION'; break;
    case 'reviews/' : red = 'DELETE_REVIEWS'; break;
    default: red = '';
  }
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = async () => {
    // Implement delete logic here
    await client.delete(`${path}${id}/delete/`).then(res => {
      dispatch({ type: red, payload: id }); 
    });
    setModalVisible(false); 
  };

  const confirm = () => {
    Modal.confirm({
      title: 'Confirm Delete',
      icon: <ExclamationCircleOutlined />,
      content: `Are you sure you want to delete?`,
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => handleDelete(),
    });
  };

  return (
    <>
      <Space>
        <MdDelete style={{color:'red',fontSize:"20",cursor:"pointer"}} onClick={confirm}>Delete</MdDelete>
      </Space>
    </>
  );
};
