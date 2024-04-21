import React, { useState } from 'react';
import { Table, Checkbox, Button, Input, Rate } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import './Page.css'
export const Page = ({ form, columns, data }) => {

    const [checkedList, setCheckedList] = useState(columns.map((item) => item.key));
    const [search, setSearch] = useState('');
    const [filterList, setFilterList] = useState(false)

    const options = columns.map(({ key, title }) => ({
        label: title,
        value: key,
    }));

    const newColumns = columns.filter((item) => checkedList.includes(item.key));

    const filteredData = data.filter((item, index) =>
        Object.values(item).some((value) =>
            String(value).toLowerCase().includes(search.toLowerCase())
        )
    ).map((item, index) => ({ ...item, key: index }));
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
            {form}
            <Input style={{ float: 'right', width: "150px", marginRight: "10px" }} placeholder='Search in Table' onChange={(e) => setSearch(e.target.value)} />
            <Table

                columns={newColumns}
                dataSource={filteredData}
                style={{
                    marginTop: 24,
                }}
            />
        </>
    )
}
