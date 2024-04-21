import React from 'react';
import { AddAttractionForm } from 'components/Forms/AddAttractionForm';

import { Page } from 'components/Page/Page';
const columns = [
  {
    title: 'Name',
    dataIndex: 'Name',
    key: '1',
  },
  {
    title: 'Description',
    dataIndex: 'Description',
    key: '2',
    render: (text) => <span>{text.slice(0, 25)}{text.length > 25 ? "..." : ""}</span>,
  },
  {
    title: 'Reviews',
    dataIndex: 'Reviews',
    key: '4',
  },
  {
    title: 'Action',
    dataIndex: 'Action',
    key: '7',
    render: (text, record) => (
      <span>
        {/* <Confirmation_delete id={record.id} /> */}
      </span>
    ),
  },
];


const data = [{
  "id": 1,
  "Name": "Reinger and Sons",
  "Reviews": "Room 1511",
  "Description": "Athscl unsp Name bypass of left leg w ulcer oth prt low leg",
  "Destination": "Taverny",
  "Price": 4.5
}, {
  "id": 2,
  "Name": "Pouros, Kessler and Metz",
  "Reviews": "Suite 65",
  "Description": "Other non-in-line roller-skating accident, initial encounter",
  "Destination": "Banjar Bau Kawan",
  "Price": 4.0
}, {
  "id": 3,
  "Name": "O'Connell Group",
  "Reviews": "Room 1292",
  "Description": "Prsn outsd pk-up/van inj in nonclsn trnsp acc nontraf, subs",
  "Destination": "Blois",
  "Price": 4.3
}, {
  "id": 4,
  "Name": "Batz Group",
  "Reviews": "Suite 80",
  "Description": "Underdosing of unsp agents aff the GI sys, init",
  "Destination": "Watuagung",
  "Price": 3.4
}, {
  "id": 5,
  "Name": "Jacobi LLC",
  "Reviews": "Suite 1",
  "Description": "Toxic effect of venom of black widow spider, acc, init",
  "Destination": "Dulangan",
  "Price": 1.7
}, {
  "id": 6,
  "Name": "Howell-Murray",
  "Reviews": "Apt 2",
  "Description": "Other fractures of lower leg",
  "Destination": "San Antonio",
  "Price": 1.4
}, {
  "id": 7,
  "Name": "Swaniawski LLC",
  "Reviews": "Apt 511",
  "Description": "Major laceration of celiac artery, sequela",
  "Destination": "Louveira",
  "Price": 2.5
}, {
  "id": 8,
  "Name": "Rolfson-Dickinson",
  "Reviews": "Apt 335",
  "Description": "Strain of unsp quadriceps muscle, fascia and tendon, sequela",
  "Destination": "Kybartai",
  "Price": 2.1
}, {
  "id": 9,
  "Name": "Stokes-Ritchie",
  "Reviews": "Apt 775",
  "Description": "Sprain of carpal (joint)",
  "Destination": "Qilin",
  "Price": 4.1
}, {
  "id": 10,
  "Name": "Fritsch Inc",
  "Reviews": "16th Floor",
  "Description": "Pressure ulcer of left upper back, stage 3",
  "Destination": "Wanjiazhuang",
  "Price": 1.6
},]


export const Attractions = () => {
  return (
    <>
      <Page form={<AddAttractionForm />} columns={columns} data={data} />
    </>
  );
};
