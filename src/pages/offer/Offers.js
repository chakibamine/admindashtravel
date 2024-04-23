import React, { useEffect } from 'react';
import { Page } from 'components/Page/Page';
import { AddOfferForm } from 'components/Forms/AddOfferForm';
import { useDispatch, useSelector } from 'react-redux';
import { client } from 'utils/axios';
import moment from 'moment';
import { Confirmation_delete } from 'assets/modal/Confirmation_delete';
import { FaEdit } from 'react-icons/fa';

const columns = [
  
  {
    title: 'Title',
    dataIndex: 'title',
    key: '1',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: '2',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: '3',
  },
  {
    title: 'Destination',
    dataIndex: 'destination',
    key: '4',
  },
  {
    title: 'DateValidity',
    dataIndex: 'start_date',
    key: '5',
    render: (text) => <span>{moment(text).format('DD/MM/YYYY')}</span>,
  },
  {
    title: 'DateValidity',
    dataIndex: 'end_date',
    key: '6',
    render: (text) => <span>{moment(text).format('DD/MM/YYYY')}</span>,
  },
  {
    title: 'Action',
    dataIndex: 'Action',
    key: '7',
    render: (text, record) => (
      <span>
        <Confirmation_delete id={record.id} path={'offres/'}/>
        <FaEdit style={{marginLeft:'15px', color:'blue',fontSize:"20"}}/>
      </span>
    ),
  },
];


const data = [{
  "id": 1,
  "Type": "Reinger and Sons",
  "DateValidity": "Room 1511",
  "Description": "Athscl unsp type bypass of left leg w ulcer oth prt low leg",
  "Destination": "Taverny",
  "Price": 4.5
}, {
  "id": 2,
  "Type": "Pouros, Kessler and Metz",
  "DateValidity": "Suite 65",
  "Description": "Other non-in-line roller-skating accident, initial encounter",
  "Destination": "Banjar Bau Kawan",
  "Price": 4.0
}, {
  "id": 3,
  "Type": "O'Connell Group",
  "DateValidity": "Room 1292",
  "Description": "Prsn outsd pk-up/van inj in nonclsn trnsp acc nontraf, subs",
  "Destination": "Blois",
  "Price": 4.3
}, {
  "id": 4,
  "Type": "Batz Group",
  "DateValidity": "Suite 80",
  "Description": "Underdosing of unsp agents aff the GI sys, init",
  "Destination": "Watuagung",
  "Price": 3.4
}, {
  "id": 5,
  "Type": "Jacobi LLC",
  "DateValidity": "Suite 1",
  "Description": "Toxic effect of venom of black widow spider, acc, init",
  "Destination": "Dulangan",
  "Price": 1.7
}, {
  "id": 6,
  "Type": "Howell-Murray",
  "DateValidity": "Apt 2",
  "Description": "Other fractures of lower leg",
  "Destination": "San Antonio",
  "Price": 1.4
}, {
  "id": 7,
  "Type": "Swaniawski LLC",
  "DateValidity": "Apt 511",
  "Description": "Major laceration of celiac artery, sequela",
  "Destination": "Louveira",
  "Price": 2.5
}, {
  "id": 8,
  "Type": "Rolfson-Dickinson",
  "DateValidity": "Apt 335",
  "Description": "Strain of unsp quadriceps muscle, fascia and tendon, sequela",
  "Destination": "Kybartai",
  "Price": 2.1
}, {
  "id": 9,
  "Type": "Stokes-Ritchie",
  "DateValidity": "Apt 775",
  "Description": "Sprain of carpal (joint)",
  "Destination": "Qilin",
  "Price": 4.1
}, {
  "id": 10,
  "Type": "Fritsch Inc",
  "DateValidity": "16th Floor",
  "Description": "Pressure ulcer of left upper back, stage 3",
  "Destination": "Wanjiazhuang",
  "Price": 1.6
},]


export const Offers = () => {
  const dispatch = useDispatch()
  const { offres } = useSelector(state => state.offre)
  useEffect(() => {
    client.get("offres/").then(res => dispatch({ type: "FETCH_OFFRES", payload: res.data }))
  }, [])
  return (
    <>
      <Page form={<AddOfferForm />} columns={columns} data={offres} />
    </>
  );
};
