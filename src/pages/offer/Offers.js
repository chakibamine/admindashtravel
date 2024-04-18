import React from 'react';
import { Page } from 'components/Page/Page';
import { AddOfferForm } from 'components/Forms/AddOfferForm';

const columns = [
  
  {
    title: 'Description',
    dataIndex: 'Description',
    key: '1',
    render: (text) => <span>{text.slice(0, 10)}{text.length > 25 ? "..." : ""}</span>,
  },
  {
    title: 'Price',
    dataIndex: 'Price',
    key: '2',
  },
  {
    title: 'Destination',
    dataIndex: 'Destination',
    key: '3',
  },
  {
    title: 'DateValidity',
    dataIndex: 'DateValidity',
    key: '4',
  },
  {
    title: 'Action',
    dataIndex: 'Action',
    key: '5',
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
  return (
    <>
      <Page form={<AddOfferForm />} columns={columns} data={data} />
    </>
  );
};
