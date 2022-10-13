import {useDispatch, useSelector} from "react-redux";
import {Button, Form, Input} from "antd";
import {UserOutlined} from "@ant-design/icons";
import React from "react";
import "./ForgotPassword.css";
import {useState} from "react";
import { Alert } from 'antd';


function ForgotPassword() {
    let reduxState = useSelector((state) => state)
    console.log(reduxState)
    let dispatch = useDispatch()
    const handleUpdate = (type)=> {
        dispatch({
            type: type,
            payload: 5
        })
    }

    const [forgotPassword, setForgotPassword] = useState(0);

    const onFinish = (values) => {
        // console.log(values)
        //console.log("aaa", reduxState.registrationState.users)
        let foundUser = reduxState.registrationState.users.find((el) => el.name === values.username);
        if(foundUser) {
            setForgotPassword(foundUser.password)
        }else{
            setForgotPassword(false)
        }
    }
    console.log(!forgotPassword)
    return(
        <div>
            <Form
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
                    <Input className="username-input" prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Forgot
                    </Button>
                </Form.Item>
            </Form>

                {forgotPassword ?
                    < Alert
                    message="Success Tips"
                    description={forgotPassword}
                    type="success"
                    showIcon
                    /> :(forgotPassword===0?null:
                    <Alert
                    message="Warning"
                    description="This is a warning notice about copywriting."
                    type="warning"
                    showIcon
                    closable
                    />)
                }

        </div>
    )
}

export {ForgotPassword}