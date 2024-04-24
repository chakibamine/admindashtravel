import React, { useEffect } from 'react';
import { Rate } from 'antd';
import { AddHotelForm } from 'components/Forms/AddHotelForm';
import { Page } from 'components/Page/Page';
import { useDispatch, useSelector } from 'react-redux';
import { client } from 'utils/axios';
import { Confirmation_delete } from 'assets/modal/Confirmation_delete';
import { FaEdit } from 'react-icons/fa';
import { UpdateHotelForm } from 'components/Update_Forms/UpdateHotelForm';

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
    title: 'Destination',
    dataIndex: 'destination',
    key: '4',
  },
  {
    title: 'Pricing',
    dataIndex: 'pricing',
    key: '5',
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
        <Confirmation_delete id={record.id} path={'hotels/'} />
        <UpdateHotelForm vals={record} />
      </span>
    ),
  },
];



export const Hotels = () => {
  const dispatch = useDispatch()
  const { hotels } = useSelector(state => state.hotel)
  useEffect(() => {
    client.get("hotels/").then(res => dispatch({ type: "FETCH_HOTELS", payload: res.data }))
  }, [])
  return (
    <>
      <Page form={<AddHotelForm />} columns={columns} data={hotels} />
    </>
  );
};
