import React, { useEffect } from 'react';
import { AddUserForm } from '../../components/Forms/AddUserForm';
import { Page } from 'components/Page/Page';
import { Confirmation_delete } from 'assets/modal/Confirmation_delete';
import { useDispatch, useSelector } from 'react-redux';
import { client } from 'utils/axios';
import { Badge } from 'antd'
import { FaLocationDot } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: '1',
  },
  {
    title: 'Firstname',
    dataIndex: 'firstname',
    key: '2',
  },
  {
    title: 'Lastname',
    dataIndex: 'lastname',
    key: '3',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: '4',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: '5',
    render: (text) => (
      <span>
        {text === 'M' ? 'Male' : text === 'F' ? 'Female' : ''}
      </span>
    ),
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: '6',
    render: (text, record) => (
      
      <a
      
          href={`https://www.google.com/maps?q=${record.location}`}
          target="_blank"
          rel="noopener noreferrer"
      >
          <FaLocationDot /> {text}
      </a>
  ),
  },
  {
    title: 'Status',
    dataIndex: 'is_active',
    key: '7',
    render: (text, record) => (
      <span>{record.is_active ? < Badge status="success" text="Active" />: < Badge status="error" text="Inactive" />}</span>
    ),
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: '8',
    render: (text, record) => (
      <span>
        <Confirmation_delete id={record.id} path={''}/>
        <FaEdit style={{marginLeft:'15px', color:'blue',fontSize:"20"}}/>
      </span>
    ),
  },
];
export const Users = () => {

  const dispatch = useDispatch()
  const { users } = useSelector(state => state.user)
  useEffect(() => {
    client.get("users/").then(res => dispatch({ type: "FETCH_USERS", payload: res.data }))
  }, [])

  return (
    <>
      <Page form={<AddUserForm />} columns={columns} data={users} />
    </>
  );
};
