import React, { useState } from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';

export const Confirmation_delete = ({ id }) => {
  const [modal, contextHolder] = Modal.useModal();
  const confirm = () => {
    modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: `${id}`,
      okText: 'delete',
      cancelText: 'cancel',
    });
  };
  const handleDelete = (e, id) => {
    // Implement delete logic here
    e.stopPropagation();
    console.log("Delete:", id);
  };
  return (
    <>
      <Space>
        <Button type='danger' onClick={(e) => { handleDelete(e, id); confirm() }}>delete</Button>

      </Space>
      {contextHolder}
    </>
  );
}