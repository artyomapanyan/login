import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css"

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

function Home() {
  // const [valueLogin, setValueLogin] = useState("");
  // const [valuePassword, setValuePassword] = useState("");
   
    let login = "artyom";
    let password = "apanyan";
    
    // let aaa = (e) => {
    //   setValuePassword(e.target.value)
    // }

    // let bbb = (e) => {
    //   setValueLogin(e.target.value)
    // }

    // let qqq = (e) =>  {
    //   if (valueLogin !== login) {
    //     e.preventDefault();
    //     alert("неправильное имя пользователя или пароль") 
    //   } else if (valuePassword !== password) {
    //     e.preventDefault();
    //     alert("неправильное имя пользователя или пароль") 
    //   }
    // }

    let navigate = useNavigate();

    const onFinish = (values) => {
      if (values.password === password && values.username === login) {
        navigate('about')
      } else {
        alert("неправильное имя пользователя или пароль")
      }
    };

    return (
      <div className="main">
        {/* <main>
          <form onSubmit={qqq}>
            
               Login <input type="login" onChange={bbb}/>
               Password <input type="text"  onChange={aaa} />
                <Link to="/about" className="link-login" onClick={qqq}>войти</Link>
            
          </form>
        </main> */}

        <div className="div-form">
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
              <Input prefix={<UserOutlined className="site-form-item-icon" />}  placeholder="Username" />
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
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary"  htmlType="submit" className="login-form-button">
              вход
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>

        <Link  to="loade">zagruzki</Link>
      </div>
    );
  }

  export {Home};

  