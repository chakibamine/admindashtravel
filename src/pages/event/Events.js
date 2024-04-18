import React from 'react';
import { AddEventForm } from 'components/Forms/AddEventForm';
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
    render: (text) => <span>{text.slice(0, 10)}{text.length > 25 ? "..." : ""}</span>,
  },
  {
    title: 'Location',
    dataIndex: 'Location',
    key: '4',
  },
  {
    title: 'Destination',
    dataIndex: 'Destination',
    key: '5',
  },
  {
    title: 'Date d\'ebut',
    dataIndex: 'start_Date',
    key: '6',
  },
  {
    title: 'Date fin',
    dataIndex: 'end_Date',
    key: '7',
  },
  
  {
    title: 'Action',
    dataIndex: 'Action',
    key: '8',
  },
];


const data = [{
  "id": 1,
  "Name": "Reinger and Sons",
  "Location": "Room 1511",
  "Description": "Athscl unsp Name bypass of left leg w ulcer oth prt low leg",
  "Destination": "Taverny",
  "Date": 4.5
}, {
  "id": 2,
  "Name": "Pouros, Kessler and Metz",
  "Location": "Suite 65",
  "Description": "Other non-in-line roller-skating accident, initial encounter",
  "Destination": "Banjar Bau Kawan",
  "Date": 4.0
}, {
  "id": 3,
  "Name": "O'Connell Group",
  "Location": "Room 1292",
  "Description": "Prsn outsd pk-up/van inj in nonclsn trnsp acc nontraf, subs",
  "Destination": "Blois",
  "Date": 4.3
}, {
  "id": 4,
  "Name": "Batz Group",
  "Location": "Suite 80",
  "Description": "Underdosing of unsp agents aff the GI sys, init",
  "Destination": "Watuagung",
  "Date": 3.4
}, {
  "id": 5,
  "Name": "Jacobi LLC",
  "Location": "Suite 1",
  "Description": "Toxic effect of venom of black widow spider, acc, init",
  "Destination": "Dulangan",
  "Date": 1.7
}, {
  "id": 6,
  "Name": "Howell-Murray",
  "Location": "Apt 2",
  "Description": "Other fractures of lower leg",
  "Destination": "San Antonio",
  "Date": 1.4
}, {
  "id": 7,
  "Name": "Swaniawski LLC",
  "Location": "Apt 511",
  "Description": "Major laceration of celiac artery, sequela",
  "Destination": "Louveira",
  "Date": 2.5
}, {
  "id": 8,
  "Name": "Rolfson-Dickinson",
  "Location": "Apt 335",
  "Description": "Strain of unsp quadriceps muscle, fascia and tendon, sequela",
  "Destination": "Kybartai",
  "Date": 2.1
}, {
  "id": 9,
  "Name": "Stokes-Ritchie",
  "Location": "Apt 775",
  "Description": "Sprain of carpal (joint)",
  "Destination": "Qilin",
  "Date": 4.1
}, {
  "id": 10,
  "Name": "Fritsch Inc",
  "Location": "16th Floor",
  "Description": "Pressure ulcer of left upper back, stage 3",
  "Destination": "Wanjiazhuang",
  "Date": 1.6
},]


export const Events = () => {
  return (
    <>
      <Page form={<AddEventForm /> } columns={columns} data={data}/>
    </> 
  );
};
