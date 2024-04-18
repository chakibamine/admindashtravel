import React from 'react';
import { AddUserForm } from '../../components/Forms/AddUserForm';
import { Page } from 'components/Page/Page';
import { Confirmation_delete } from 'assets/modal/Confirmation_delete';

const columns = [
    {
        title: 'Firstname',
        dataIndex: 'Firstname',
        key: '1',
    },
    {
        title: 'Lastname',
        dataIndex: 'Lastname',
        key: '2',
    },
    {
        title: 'Email',
        dataIndex: 'Email',
        key: '3',
    },
    {
        title: 'Gender',
        dataIndex: 'Gender',
        key: '4',
    },
    {
        title: 'Location',
        dataIndex: 'Location',
        key: '5',
    },
    {
        title: 'Status',
        dataIndex: 'Status',
        key: '6',
    },
    {
        title: 'Action',
        dataIndex: 'Action',
        key: '7',
        render: (text, record) => (
          <span>
            <Confirmation_delete id={record.id} />
          </span>
        ),
    },
];


const data = [
    {
        key: '1',
        Firstname: 'Yassine',
        Lastname: 'Radim',
        Email: 'yassineRadim@gmail.com',
        Gender: 'Male',
        Location: 'Wlad youssef',
        Status: 'Actif',
        Action: '',
    },
    {
        "key": 11,
        "Firstname": "Pippo",
        "Lastname": "Waadenburg",
        "Email": "pwaadenburg0@economist.com",
        "Gender": "Male",
        "Location": "Room 1604",
        "Status": false,
        "Action": false
      }, {
        "key": 2,
        "Firstname": "Aldric",
        "Lastname": "Moreman",
        "Email": "amoreman1@phoca.cz",
        "Gender": "Male",
        "Location": "Apt 283",
        "Status": true,
        "Action": true
      }, {
        "key": 3,
        "Firstname": "Thelma",
        "Lastname": "Reeks",
        "Email": "treeks2@jiathis.com",
        "Gender": "Female",
        "Location": "Apt 852",
        "Status": true,
        "Action": true
      }, {
        "key": 4,
        "Firstname": "Deanna",
        "Lastname": "Mazdon",
        "Email": "dmazdon3@scientificamerican.com",
        "Gender": "Female",
        "Location": "19th Floor",
        "Status": false,
        "Action": true
      }, {
        "key": 5,
        "Firstname": "Akim",
        "Lastname": "Sprakes",
        "Email": "asprakes4@wordpress.org",
        "Gender": "Male",
        "Location": "12th Floor",
        "Status": true,
        "Action": true
      }, {
        "key": 6,
        "Firstname": "Dael",
        "Lastname": "Zipsell",
        "Email": "dzipsell5@scribd.com",
        "Gender": "Female",
        "Location": "Room 1698",
        "Status": true,
        "Action": false
      }, {
        "key": 7,
        "Firstname": "Rocky",
        "Lastname": "Golt",
        "Email": "rgolt6@imdb.com",
        "Gender": "Male",
        "Location": "Suite 83",
        "Status": false,
        "Action": true
      }, {
        "key": 8,
        "Firstname": "Twila",
        "Lastname": "Drennan",
        "Email": "tdrennan7@globo.com",
        "Gender": "Female",
        "Location": "Suite 22",
        "Status": false,
        "Action": true
      }, {
        "key": 9,
        "Firstname": "Penrod",
        "Lastname": "Dockwray",
        "Email": "pdockwray8@istockphoto.com",
        "Gender": "Male",
        "Location": "Suite 53",
        "Status": false,
        "Action": true
      }, {
        "key": 10,
        "Firstname": "Alanson",
        "Lastname": "Gaynsford",
        "Email": "agaynsford9@wiley.com",
        "Gender": "Male",
        "Location": "Room 1468",
        "Status": true,
        "Action": true
      }
];

export const Users = () => {
    return (
        <>
        <Page form={<AddUserForm />} columns={columns} data={data}/>
        </>
    );
};
