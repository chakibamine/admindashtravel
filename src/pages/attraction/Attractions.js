import React, { useEffect } from 'react';
import { AddAttractionForm } from 'components/Forms/AddAttractionForm';
import { Page } from 'components/Page/Page';
import { useDispatch, useSelector } from 'react-redux';
import { client } from 'utils/axios';
import { Confirmation_delete } from 'assets/modal/Confirmation_delete';
import { UpdateAttractionForm } from 'components/Update_Forms/UpdateAttractionForm';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: '1',
  },
  {
    title: 'Destination',
    dataIndex: 'destination',
    key: '2',
    
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: '2',
    
  },
  {
    title: 'Action',
    dataIndex: 'Action',
    key: '7',
    render: (text, record) => (
      <span>
        <Confirmation_delete id={record.id} path={'attractions/'} />
        <UpdateAttractionForm vals={record} />
      </span>
    ),
  },
];



export const Attractions = () => {
  const dispatch = useDispatch()
  const { attractions } = useSelector(state => state.attraction)
  useEffect(() => {
    client.get("attractions/").then(res => dispatch({ type: "FETCH_ATTRACTIONS", payload: res.data }))
  }, [])
  return (
    <>
      <Page form={<AddAttractionForm />} columns={columns} data={attractions} />
    </>
  );
};
