import React, { useEffect, useState } from 'react';
import { Rate } from 'antd';
import { AddRestaurantForm } from 'components/Forms/AddRestaurantForm';
import { Page } from 'components/Page/Page';
import { useDispatch, useSelector } from 'react-redux';
import { client } from 'utils/axios';
import { Confirmation_delete } from 'assets/modal/Confirmation_delete';
import { UpdateRestaurantForm } from 'components/Update_Forms/UpdateRestaurantForm';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: '1',
  },
  {
    title: 'Cuisine',
    dataIndex: 'cuisine',
    key: '2',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: '4',
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: '6',
    render: (rating) => <Rate allowHalf value={rating} />,
  },
  {
    title: 'Action',
    dataIndex: 'Action',
    key: '7',
    render: (text, record) => (
      <span>
        <Confirmation_delete id={record.id} path={'restaurants/'}/>
        <UpdateRestaurantForm vals={record}/>
      </span>
    ),
  },
];




export const Restaurants = () => {
  const dispatch = useDispatch()
  const { restaurants } = useSelector(state => state.restaurant)
  useEffect(() => {
    client.get("restaurants/").then(res => dispatch({ type: "FETCH_RESTAURANT", payload: res.data }))
  }, [])
  
  return (
    <>
      <Page form={<AddRestaurantForm />} columns={columns} data={restaurants}/>
    </>
  );
};
