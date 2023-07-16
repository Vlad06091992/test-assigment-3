import React, {useEffect} from 'react';
import 'antd/dist/antd.css';
import {Button, Checkbox, Form, Input} from 'antd';
import {useAppDispatch, useAppSelector} from "../../../src/app/hooks";
import {login} from "../../../src/features/login/authSlice";
import {LoginParamsType} from "../../../src/features/login/authAPI";
import {useNavigate} from "react-router-dom";


export const Login = () => {
    const navigate = useNavigate();
    const errors = useAppSelector(state => state.auth.error)
    const isLggedIn = useAppSelector(state => state.auth.isLoggedIn)

    const dispatch = useAppDispatch()
    const onFinish = (values: LoginParamsType) => {
        debugger
        dispatch(login(values))
    }

    const onFinishFailed = (errorInfo: any) => {
        debugger
        console.log('Failed:', errorInfo)
    }

    useEffect(()=>{
        if(isLggedIn){
            navigate('/private-page');
        }
    },[isLggedIn])



    return <div>


        hbingley1

        CQutx25i8r


        {/*    return (*/}
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >

                <Input.Password/>

            </Form.Item>
            { errors && <div>errorssss</div> }

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
}