import React from 'react';
import './style.less';
import _ from 'lodash';

export default ({Login, Active, onModelChange, onInputChange, onLogOut, onGoAdmin}) => {
    const {userId, pwd, isOnline, email, role} = Login;
    return (
        <div className = {isOnline ? "login on-line" : "login off-line"}>
            {   isOnline ? <span onClick = {onLogOut} id = "logout">Q</span> : "" }
            <div className = "form">
                {   isOnline ?
                        <div className = "user-info">
                            <div>用户名：{userId}</div>
                            <div><span>园龄：2年</span><span style = {{margin: "10px"}}>文章：53</span></div>
                            <button onClick = {_.partial(onGoAdmin, {model: "admin", userId, pwd, email, role})}>进入后台</button>
                        </div>
                    :
                        <div className = "form-con">
                            <input value = {userId} onChange = {onInputChange} placeholder = "你的名字" type="text" />
                            <input value = {pwd} onChange = {onInputChange} placeholder = "你的密码" type="password" />
                            <span>
                                <button onClick = {_.partial(onModelChange, {model: Active, userId, pwd})}>登录</button>
                                <button>注册</button>
                                <button>找回</button>
                            </span>
                        </div>
                }
            </div>
        </div>
    );
};