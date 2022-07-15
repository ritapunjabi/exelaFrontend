import React, { useState, useEffect } from 'react'
import { deleteBill, getBills } from '../Services/billService';
import { Table, Space, Button, message, Popconfirm } from 'antd';
import { Link } from "react-router-dom";
import "../Styles/Home.css"
const Home = () => {
    const [bills, setBills] = useState([]);
    const text = 'Are you sure to delete this bill?';

    useEffect(() => {

        getBills()
            .then((response) => {
                setBills(response)

            })
            .catch(() => {
                console.error("Some Error Occured");
            });

    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',

        },
        {
            title: 'Address',
            dataIndex: 'address'

        },
        {
            title: 'Bill Date',
            dataIndex: 'bill_date',

        },
        {
            title: 'Paid Date',
            dataIndex: 'paid_date',

        },
        {
            title: 'Units Counsumed',
            dataIndex: 'units_consumed',

        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.amount - b.amount,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a><Link to={`/edit/${record.id}`}>Edit</Link></a>
                    <Popconfirm placement="top" title={text} onConfirm={() => handleDelete(record)} okText="Yes" cancelText="No">
                        <a>Delete</a>
                    </Popconfirm>

                </Space>

            ),
        },
    ];



    const handleDelete = (bill) => {

        deleteBill(bill.id)
            .then((response) => {
                setBills(bills.filter(b => b.id != bill.id));
                console.log(response);
            })
            .catch(() => {
                console.error("Some Error Occured");
            });
        message.info('Bill Deleted.');

    }

    return (

        <>
            <div className="header"> Bills</div>

            <div className="wrapper">
                <Table columns={columns} dataSource={bills} pagination={{ pageSize: 9 }} />
            </div>
            <div className="addbtn">
                <Link to={"/add"}> <Button type="primary" shape="round" >  Add bill</Button ></Link >
            </div>
        </>

    )
}

export default Home