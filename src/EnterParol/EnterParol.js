import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {Button, Form, Input} from "antd";
import {UserOutlined} from "@ant-design/icons";


function EnterParol() {
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

    useEffect(() => {
        if(!reduxState.auth.user.name) {
            navigate("/");
        }
    }, []);

    console.log(reduxState.registrationState)

    const handleLogout = ()=>{
        dispatch({
            type:'LOGOUT',
        })

        navigate("/");
    }

    const onFinish = (values) => {
        //console.log(values.username)
        //console.log(reduxState.registrationState.users)

            dispatch({
                type:'UPDATE_USER',
                payload:{
                    id:reduxState.auth.user.id,
                    name: values.username,
                    password: values.password
                }
            })
        navigate("/");
    }


    return(
        <div>
            <Form
                initialValues={{
                    remember: true,
                    username: reduxState.auth.user.name,
                    password: reduxState.auth.user.password
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
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input className="username-input" prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        update
                    </Button>
                </Form.Item>
            </Form>


        </div>
    )
}

export {EnterParol}