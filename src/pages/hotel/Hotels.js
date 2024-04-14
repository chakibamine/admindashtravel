import React, { useState } from 'react';
import { Divider, Table, Checkbox, Button, Input,Rate } from 'antd';
import { Link } from 'react-router-dom';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import './Hotels.css'
import { AddHotelForm } from 'components/Forms/AddHotelForm';

const columns = [
    {
        title: 'Name',
        dataIndex: 'Name',
        key: '1',
    },
    {
        title: 'Location',
        dataIndex: 'Location',
        key: '2',
    },
    {
        title: 'Description',
        dataIndex: 'Description',
        key: '3',
        render: (text) => <span>{text.slice(0, 25)}{text.length > 25 ? "..." : ""}</span>,
    },
    {
        title: 'Destination',
        dataIndex: 'Destination',
        key: '4',
    },
    {
        title: 'Rating',
        dataIndex: 'Rating',
        key: '6',
        render: (rating) => <Rate allowHalf defaultValue={rating} disabled />,
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
    "Location": "Room 1511",
    "Description": "Athscl unsp type bypass of left leg w ulcer oth prt low leg",
    "Destination": "Taverny",
    "Rating": 4.5
  }, {
    "id": 2,
    "Name": "Pouros, Kessler and Metz",
    "Location": "Suite 65",
    "Description": "Other non-in-line roller-skating accident, initial encounter",
    "Destination": "Banjar Bau Kawan",
    "Rating": 4.0
  }, {
    "id": 3,
    "Name": "O'Connell Group",
    "Location": "Room 1292",
    "Description": "Prsn outsd pk-up/van inj in nonclsn trnsp acc nontraf, subs",
    "Destination": "Blois",
    "Rating": 4.3
  }, {
    "id": 4,
    "Name": "Batz Group",
    "Location": "Suite 80",
    "Description": "Underdosing of unsp agents aff the GI sys, init",
    "Destination": "Watuagung",
    "Rating": 3.4
  }, {
    "id": 5,
    "Name": "Jacobi LLC",
    "Location": "Suite 1",
    "Description": "Toxic effect of venom of black widow spider, acc, init",
    "Destination": "Dulangan",
    "Rating": 1.7
  }, {
    "id": 6,
    "Name": "Howell-Murray",
    "Location": "Apt 2",
    "Description": "Other fractures of lower leg",
    "Destination": "San Antonio",
    "Rating": 1.4
  }, {
    "id": 7,
    "Name": "Swaniawski LLC",
    "Location": "Apt 511",
    "Description": "Major laceration of celiac artery, sequela",
    "Destination": "Louveira",
    "Rating": 2.5
  }, {
    "id": 8,
    "Name": "Rolfson-Dickinson",
    "Location": "Apt 335",
    "Description": "Strain of unsp quadriceps muscle, fascia and tendon, sequela",
    "Destination": "Kybartai",
    "Rating": 2.1
  }, {
    "id": 9,
    "Name": "Stokes-Ritchie",
    "Location": "Apt 775",
    "Description": "Sprain of carpal (joint)",
    "Destination": "Qilin",
    "Rating": 4.1
  }, {
    "id": 10,
    "Name": "Fritsch Inc",
    "Location": "16th Floor",
    "Description": "Pressure ulcer of left upper back, stage 3",
    "Destination": "Wanjiazhuang",
    "Rating": 1.6
  },]
  

export const Hotels = () => {
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
                style={{ marginRight:"10px" }}
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
            <AddHotelForm />
            <Input style={{ float: 'right', width:"150px", marginRight:"10px"}} placeholder='Search in Table' onChange={(e)=> setSearch(e.target.value)} />

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
