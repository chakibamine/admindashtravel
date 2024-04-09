import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Card, Radio, Table, Button } from "antd";
import { columns, tableData } from "utils/UsersTablesData";
export const Users = () => {
    return (
        <>
            <div className="tabled">
                <Row gutter={[24, 0]}>
                    <Col xs={24}>
                        <Card
                            bordered={false}
                            className="criclebox tablespace mb-24"
                            title="Users Table"
                            extra={
                                <div>
                                <Button type="primary" style={{ marginRight: '10px' }}><Link to="/adduser" >Add User</Link></Button>
                                <Radio.Group>
                                    <Radio.Button>All </Radio.Button>
                                    <Radio.Button>Online</Radio.Button>
                                </Radio.Group>
                                </div>
                            }
                        >
                            <div className="table-responsive">
                                <Table
                                    columns={columns}
                                    dataSource={tableData}
                                    pagination={false}
                                    className="ant-border-space"
                                />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}
