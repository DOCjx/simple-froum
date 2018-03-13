import React from 'react';
import './style.less';
import _ from 'lodash';

export default ({Info, userInfo, onValueChange}) => {
    const {userId, pwd, email} = userInfo;
    const {userIdInfo, pwdInfo, emailInfo} = Info;
    return (
        <section id = "admin-info">
            <div id = "info-form">
                <label>用户名：
                    <input value = {userIdInfo || userId} onChange = {_.partial(onValueChange, "userIdInfo")} type = "text"/>
                </label>
                <label>密码：
                    <input value = {pwdInfo || pwd} onChange = {_.partial(onValueChange, "pwdInfo")} type = "text"/>
                </label>
                <label>邮箱：
                    <input value = {emailInfo || email} onChange = {_.partial(onValueChange, "emailInfo")} type = "email"/>
                </label>
                <button>确认修改</button>
            </div>
        </section>
    );
};