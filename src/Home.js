import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css"

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

function Home() {
  const [valueLogin, setValueLogin] = useState("");
  const [valuePassword, setValuePassword] = useState("");
   
    let login = "artyom";
    let password = "apanyan";
    
    let aaa = (e) => {
      setValuePassword(e.target.value)
    }

    let bbb = (e) => {
      setValueLogin(e.target.value)
    }

    let qqq = (e) =>  {
      if (valueLogin !== login) {
        e.preventDefault();
        alert("неправильное имя пользователя или пароль") 
      } else if (valuePassword !== password) {
        e.preventDefault();
        alert("неправильное имя пользователя или пароль") 
      }
    }

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
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
          onSubmit={qqq}
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
              <Input prefix={<UserOutlined className="site-form-item-icon" />} onChange={bbb} placeholder="Username" />
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
                onChange={aaa}
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
              <Button type="primary" htmlType="submit" className="login-form-button">
              <Link to="/about" className="link-login" onClick={qqq}>войти</Link>
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>

      </div>
    );
  }

  export {Home};