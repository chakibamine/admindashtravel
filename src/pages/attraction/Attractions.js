import React, { useState } from 'react';
import { Table, Checkbox, Button, Input, Rate } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import './Attractions.css'
import { AddAttractionForm } from 'components/Forms/AddAttractionForm';

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
    title: 'Reviews',
    dataIndex: 'Reviews',
    key: '4',
  },
  {
    title: 'Action',
    dataIndex: 'Action',
    key: '7',
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
  const [checkedList, setCheckedList] = useState(columns.map((item) => item.key));
  const [search, setSearch] = useState('');
  const [filterList, setFilterList] = useState(false)

  const options = columns.map(({ key, title }) => ({
    label: title,
    value: key,
  }));

  const newColumns = columns.filter((item) => checkedList.includes(item.key));

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    )
  );


  return (
    <>
      <Button
        onClick={() => setFilterList(!filterList)}
        style={{ marginRight: "10px" }}
        type={filterList ? 'primary' : 'default'}
      >
        <MenuUnfoldOutlined /> Filter
      </Button>

      {filterList && (
        <Checkbox.Group
          value={checkedList}
          options={options}
          onChange={(value) => {
            setCheckedList(value);
          }}
          className={`checkbox-group ${filterList ? 'checkbox-group-active' : ''}`}
        />
      )}
      <AddAttractionForm />
      <Input style={{ float: 'right', width: "150px", marginRight: "10px" }} placeholder='Search in Table' onChange={(e) => setSearch(e.target.value)} />

      <Table
        columns={newColumns}
        dataSource={filteredData}
        style={{
          marginTop: 24,
        }}
      />
    </>
  );
};
