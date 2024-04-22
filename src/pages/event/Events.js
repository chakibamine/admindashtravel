import React, { useEffect } from 'react';
import { AddEventForm } from 'components/Forms/AddEventForm';
import { Page } from 'components/Page/Page';
import { Confirmation_delete } from 'assets/modal/Confirmation_delete';
import { FaEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { client } from 'utils/axios';
import moment from 'moment';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: '1',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: '2',
    render: (text) => <span>{text.slice(0, 10)}{text.length > 25 ? "..." : ""}</span>,
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: '4',
  },
  {
    title: 'Destination',
    dataIndex: 'destination',
    key: '5',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: '6',
    render: (text) => <span>{moment(text).format('DD/MM/YYYY')}</span>,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: '7',
    render: (text, record) => (
      <span>
        <Confirmation_delete id={record.id} path={'events/'}/>
        <FaEdit style={{marginLeft:'15px', color:'blue',fontSize:"20"}}/>
      </span>
    ),
  },
];





export const Events = () => {
  const dispatch = useDispatch()
  const { events } = useSelector(state => state.event)
  useEffect(() => {
    client.get("events/").then(res => dispatch({ type: "FETCH_EVENTS", payload: res.data }))
  }, [])
  return (
    <>
      <Page form={<AddEventForm /> } columns={columns} data={events}/>
    </> 
  );
};
