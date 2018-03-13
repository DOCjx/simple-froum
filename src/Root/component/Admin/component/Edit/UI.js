import React from 'react';
import './style.less';
import _ from 'lodash';

export default ({Edit, onInputChange, onClear}) => {
    const {article} = Edit;
    const {pid, title, content} = article;
    return (
        <section id = "admin-edit">
            <lable id = "select">分类：
                <select onChange = {_.partial(onInputChange, "pid")} value = {pid || "0"}>
                    <option value = "0">前端</option>
                    <option value = "1">网安</option>
                </select>
            </lable>
            <lable>标题：<input type="text" value = {title || ""} onChange = {_.partial(onInputChange, "title")} /></lable>
            <lable>内容：
                <textarea onChange = {_.partial(onInputChange, "content")} value = {content || ""} />
            </lable>
            <span>
                <button>发表/修改</button>
                <button onClick = {onClear}>清空列表</button>
            </span>
        </section>
    );
};