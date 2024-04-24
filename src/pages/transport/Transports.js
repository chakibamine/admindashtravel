import React, { useEffect } from 'react';
import { AddTransportForm } from 'components/Forms/AddTransportForm';
import { Page } from 'components/Page/Page';
import { Confirmation_delete } from 'assets/modal/Confirmation_delete';
import { useDispatch, useSelector } from 'react-redux';
import { client } from 'utils/axios';
import { FaEdit } from 'react-icons/fa';
import { UpdateTransportForm } from 'components/Update_Forms/UpdateTransportForm';

const columns = [
  {
    title: 'Mode',
    dataIndex: 'mode',
    key: '1',
  },
  {
    title: 'Destination',
    dataIndex: 'destination',
    key: '2',
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    key: '3',
  },
  {
    title: 'duration',
    dataIndex: 'duration',
    key: '4',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: '5',
    render: (text, record) => (
      <span>
        <Confirmation_delete id={record.id} path={'transports/'} />
        <UpdateTransportForm vals={record} />
      </span>
    ),
  },
];





export const Transports = () => {
  const dispatch = useDispatch()
  const { transports } = useSelector(state => state.transport)
  useEffect(() => {
    client.get("transports/").then(res => dispatch({ type: "FETCH_TRANSPOPRT", payload: res.data }))
  }, [])
  return (
    <>
      <Page form={<AddTransportForm />} columns={columns} data={transports} />
    </>
  );
};
