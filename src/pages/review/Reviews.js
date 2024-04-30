import React, { useEffect } from 'react';
import { AddTransportForm } from 'components/Forms/AddTransportForm';
import { Page } from 'components/Page/Page';
import { useDispatch, useSelector } from 'react-redux';
import { client } from 'utils/axios';
import { Confirmation_delete } from 'assets/modal/Confirmation_delete';

const columns = [
  {
    title: 'User',
    dataIndex: 'user',
    key: '4',
  },
  {
    title: 'Destination',
    dataIndex: 'destination',
    key: '4',
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: '1',
  },
  {
    title: 'Comment',
    dataIndex: 'comment',
    key: '2',
    render: (text) => <span>{text.slice(0, 10)}{text.length > 25 ? "..." : ""}</span>,
  },
  {
    title: 'Action',
    dataIndex: 'Action',
    key: '7',
    render: (text, record) => (
      <span>
        <Confirmation_delete id={record.id} path={'reviews/'} />
      </span>
    ),
  },
];





export const Reviews = () => {
  const dispatch = useDispatch()
  const { reviews } = useSelector(state => state.review)
  useEffect(() => {
    client.get("reviews/").then(res => dispatch({ type: "FETCH_REVIEWS", payload: res.data }))
  }, [])
  return (
    <>
      <Page form={null} columns={columns} data={reviews}/>
    </>
  );
};
