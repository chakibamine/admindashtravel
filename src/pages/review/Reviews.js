import React from 'react';
import { AddTransportForm } from 'components/Forms/AddTransportForm';
import { Page } from 'components/Page/Page';

const columns = [
  {
    title: 'User',
    dataIndex: 'User',
    key: '4',
  },
  {
    title: 'Rating',
    dataIndex: 'Rating',
    key: '1',
  },
  {
    title: 'Comment',
    dataIndex: 'Comment',
    key: '2',
    render: (text) => <span>{text.slice(0, 10)}{text.length > 25 ? "..." : ""}</span>,
  },
  {
    title: 'Action',
    dataIndex: 'Action',
    key: '7',
  },
];


const data = [{
  "id": 1,
  "User": "Reinger and Sons",
  "Provider": "Room 1511",
  "Comment": "Athscl unsp User bypass of left leg w ulcer oth prt low leg",
  "Destination": "Taverny",
  "Rating": 4.5
}, {
  "id": 2,
  "User": "Pouros, Kessler and Metz",
  "Provider": "Suite 65",
  "Comment": "Other non-in-line roller-skating accident, initial encounter",
  "Destination": "Banjar Bau Kawan",
  "Rating": 4.0
}, {
  "id": 3,
  "User": "O'Connell Group",
  "Provider": "Room 1292",
  "Comment": "Prsn outsd pk-up/van inj in nonclsn trnsp acc nontraf, subs",
  "Destination": "Blois",
  "Rating": 4.3
}, {
  "id": 4,
  "User": "Batz Group",
  "Provider": "Suite 80",
  "Comment": "Underdosing of unsp agents aff the GI sys, init",
  "Destination": "Watuagung",
  "Rating": 3.4
}, {
  "id": 5,
  "User": "Jacobi LLC",
  "Provider": "Suite 1",
  "Comment": "Toxic effect of venom of black widow spider, acc, init",
  "Destination": "Dulangan",
  "Rating": 1.7
}, {
  "id": 6,
  "User": "Howell-Murray",
  "Provider": "Apt 2",
  "Comment": "Other fractures of lower leg",
  "Destination": "San Antonio",
  "Rating": 1.4
}, {
  "id": 7,
  "User": "Swaniawski LLC",
  "Provider": "Apt 511",
  "Comment": "Major laceration of celiac artery, sequela",
  "Destination": "Louveira",
  "Rating": 2.5
}, {
  "id": 8,
  "User": "Rolfson-Dickinson",
  "Provider": "Apt 335",
  "Comment": "Strain of unsp quadriceps muscle, fascia and tendon, sequela",
  "Destination": "Kybartai",
  "Rating": 2.1
}, {
  "id": 9,
  "User": "Stokes-Ritchie",
  "Provider": "Apt 775",
  "Comment": "Sprain of carpal (joint)",
  "Destination": "Qilin",
  "Rating": 4.1
}, {
  "id": 10,
  "User": "Fritsch Inc",
  "Provider": "16th Floor",
  "Comment": "Pressure ulcer of left upper back, stage 3",
  "Destination": "Wanjiazhuang",
  "Rating": 1.6
},]


export const Reviews = () => {
  return (
    <>
      <Page form={null} columns={columns} data={data}/>
    </>
  );
};
