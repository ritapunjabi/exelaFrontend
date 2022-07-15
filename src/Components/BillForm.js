import {
    Button, DatePicker, Form, Input, InputNumber,
} from 'antd';

import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { addBill, editBill, getBill } from '../Services/billService';
import moment from 'moment';
import "../Styles/Home.css"

const labelColConf = { span: 4 };
const wrapperColConf = { span: 14 };


const BillForm = () => {

    const { id } = useParams();

    const [form] = Form.useForm();

    const [bill, setBill] = useState({});
    const [label, setLabel] = useState('');
    const [loading, setLoading] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    let navigate = useNavigate();

    const onFinish = (values) => {
        if (isEdit) {
            editBill(bill.id, values).then();
            navigate("/");
        } else {
            addBill(values).then();
            navigate("/");

        }
    };

    useEffect(() => {
        if (id) {
            setLabel('Edit bill');
            setIsEdit(true);
            getBill(id).then(b => {
                setBill({ id: b.id, name: b.name, address: b.address, amount: b.amount, units_consumed: b.units_consumed, bill_date: new moment(b.bill_date), paid_date: new moment(b.paid_date) });
                setLoading(false);
            })
        } else {
            setLabel('Add bill');
            setIsEdit(false);
            setLoading(false);
        };

    }, [id]);

    return (
        <>
            {!loading &&
                <>
                    <div className="label" >

                        <h2 >{label}</h2>
                    </div>
                        <Form labelCol={labelColConf} wrapperCol={wrapperColConf} form={form} name="bill" onFinish={onFinish} colon={false} initialValues={bill}>
                            <Form.Item name="name" label="Name" >
                                <Input disabled={isEdit} />
                            </Form.Item>
                            <Form.Item name="address" label="Address">
                                <Input disabled={isEdit} />
                            </Form.Item>
                            <Form.Item name="bill_date" label="Bill Date">
                                <DatePicker />
                            </Form.Item>
                            <Form.Item name="paid_date" label="Paid Date">
                                <DatePicker />
                            </Form.Item>
                            <Form.Item name="units_consumed" label="Units Consumed">
                                <InputNumber />
                            </Form.Item>
                            <Form.Item name="amount" label="Amount">
                                <Input suffix="₹" />
                            </Form.Item>

                            <Form.Item label="  ">
                                <Button type="primary" htmlType="submit">
                                    {label}

                                </Button>
                            </Form.Item>
                        </Form>
                </>
            }
        </>
    )
}

export default BillForm;