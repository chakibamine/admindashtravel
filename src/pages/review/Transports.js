import React, { useState } from 'react';
import { Table, Checkbox, Button, Input, Rate } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { AddTransportForm } from 'components/Forms/AddTransportForm';
import './Transports.css'

const columns = [
  {
    title: 'Type',
    dataIndex: 'Type',
    key: '1',
  },
  {
    title: 'Provider',
    dataIndex: 'Provider',
    key: '2',
    render: (text) => <span>{text.slice(0, 10)}{text.length > 25 ? "..." : ""}</span>,
  },
  {
    title: 'Destination',
    dataIndex: 'Destination',
    key: '4',
  },
  {
    title: 'Price',
    dataIndex: 'Price',
    key: '5',
  },
  {
    title: 'Action',
    dataIndex: 'Action',
    key: '7',
  },
];


const data = [{
  "id": 1,
  "Type": "Reinger and Sons",
  "Provider": "Room 1511",
  "Cuisine": "Athscl unsp type bypass of left leg w ulcer oth prt low leg",
  "Destination": "Taverny",
  "Price": 4.5
}, {
  "id": 2,
  "Type": "Pouros, Kessler and Metz",
  "Provider": "Suite 65",
  "Cuisine": "Other non-in-line roller-skating accident, initial encounter",
  "Destination": "Banjar Bau Kawan",
  "Price": 4.0
}, {
  "id": 3,
  "Type": "O'Connell Group",
  "Provider": "Room 1292",
  "Cuisine": "Prsn outsd pk-up/van inj in nonclsn trnsp acc nontraf, subs",
  "Destination": "Blois",
  "Price": 4.3
}, {
  "id": 4,
  "Type": "Batz Group",
  "Provider": "Suite 80",
  "Cuisine": "Underdosing of unsp agents aff the GI sys, init",
  "Destination": "Watuagung",
  "Price": 3.4
}, {
  "id": 5,
  "Type": "Jacobi LLC",
  "Provider": "Suite 1",
  "Cuisine": "Toxic effect of venom of black widow spider, acc, init",
  "Destination": "Dulangan",
  "Price": 1.7
}, {
  "id": 6,
  "Type": "Howell-Murray",
  "Provider": "Apt 2",
  "Cuisine": "Other fractures of lower leg",
  "Destination": "San Antonio",
  "Price": 1.4
}, {
  "id": 7,
  "Type": "Swaniawski LLC",
  "Provider": "Apt 511",
  "Cuisine": "Major laceration of celiac artery, sequela",
  "Destination": "Louveira",
  "Price": 2.5
}, {
  "id": 8,
  "Type": "Rolfson-Dickinson",
  "Provider": "Apt 335",
  "Cuisine": "Strain of unsp quadriceps muscle, fascia and tendon, sequela",
  "Destination": "Kybartai",
  "Price": 2.1
}, {
  "id": 9,
  "Type": "Stokes-Ritchie",
  "Provider": "Apt 775",
  "Cuisine": "Sprain of carpal (joint)",
  "Destination": "Qilin",
  "Price": 4.1
}, {
  "id": 10,
  "Type": "Fritsch Inc",
  "Provider": "16th Floor",
  "Cuisine": "Pressure ulcer of left upper back, stage 3",
  "Destination": "Wanjiazhuang",
  "Price": 1.6
},]


export const Transports = () => {
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
      <AddTransportForm />
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
