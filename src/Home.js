import {Link, useNavigate} from "react-router-dom";
import "./Home.css"
import {useDispatch, useSelector} from "react-redux";
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input} from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import registrationState from "./reducers/registrationState";


function Home() {
    let reduxState = useSelector((state) => state)
    console.log(reduxState)
    let dispatch = useDispatch()
    const handleUpdate = (type)=> {
        dispatch({
            type: type,
            payload: 5
        })
    }

    let navigate = useNavigate();


    const onFinish = (values) => {
        console.log("aaa", reduxState.registrationState.users)
        if(values.register === true) {
            dispatch({
                type:'register',
                payload:{
                    id:Math.random(),
                    name: values.username,
                    password: values.password
                }
            })
        }else {
            if(reduxState.registrationState.users.find((el) => el.name === values.username && el.password === values.password)){
                dispatch({
                    type: 'LOGIN',
                    payload: {
                        id:Math.random(),
                        name: values.username,
                        password: values.password
                    }
                })
                navigate('enterParol')
            }else{
                alert('dsad')
            }


            }

    }

    return (
        <div className="main">

            <div className="div-form" style={{justifyContent:'center'}}>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"

                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="register" valuePropName="checked" noStyle>
                            <Checkbox>register</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            вход
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </div>

            <Link to="films">films</Link>

        </div>
    );
}

export {Home};

  