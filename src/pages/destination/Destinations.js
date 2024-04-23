import React, { useEffect } from 'react';
import { Rate } from 'antd';
import { AddDestinationForm } from 'components/Forms/AddDestinationForm';
import { Page } from 'components/Page/Page';
import { useDispatch, useSelector } from 'react-redux';
import { client } from 'utils/axios';
import { Confirmation_delete } from 'assets/modal/Confirmation_delete';
import { FaEdit } from 'react-icons/fa';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: '1',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: '2',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: '3',
    render: (text) => <span>{text.slice(0, 25)}{text.length > 25 ? "..." : ""}</span>,
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: '6',
    render: (rating) => <Rate allowHalf defaultValue={rating} disabled />,
  },
  {
    title: 'Action',
    dataIndex: 'Action',
    key: '7',
    render: (text, record) => (
      <span>
        <Confirmation_delete id={record.id} path={'destinations/'} />
        <FaEdit style={{marginLeft:'15px', color:'blue',fontSize:"20",cursor:"pointer"}}/>
      </span>
    ),
  },
];


export const Destinations = () => {
  const dispatch = useDispatch()
  const { destinations } = useSelector(state => state.destination)
  useEffect(() => {
    client.get("destinations/").then(res => dispatch({ type: "FETCH_DESTINATIONS", payload: res.data }))
  }, [])
  return (
    <>
      <Page form={<AddDestinationForm />} columns={columns} data={destinations} />
    </>
  );
};
