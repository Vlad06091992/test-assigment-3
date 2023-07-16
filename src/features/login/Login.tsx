import React, {useEffect} from 'react';
import 'antd/dist/antd.css';
import {Button, Checkbox, Form, Input} from 'antd';
import {useAppDispatch, useAppSelector} from "../../../src/app/hooks";
import {login} from "../../../src/features/login/authSlice";
import {LoginParamsType} from "../../../src/features/login/authAPI";
import {useNavigate} from "react-router-dom";
import styles from "./Login.module.css"


export const Login = () => {
    const navigate = useNavigate();
    const error = useAppSelector(state => state.auth.error)
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    const dispatch = useAppDispatch()
    const onFinish = (values: LoginParamsType) => {
        dispatch(login(values))
    }

    const onFinishFailed = (errorInfo: any) => {
        debugger
        console.log('Failed:', errorInfo)
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/private-page');
        }
    }, [isLoggedIn])


    return <div className={styles.loginDiv}>
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
            {error && <div className={styles.error}>Please enter correct password and username</div>}

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        <div className={styles.testingInfo}>
            <div>for testing:</div>
            <div>username: hbingley1</div>
            <div>password: CQutx25i8r</div>
        </div>
    </div>
}