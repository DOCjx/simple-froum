import React from 'react';
import './style.less';
import Page from '../Page/';
import Articles from './component/Articles/';
import Edit from './component/Edit/';
import Info from './component/Info/';

export default ({Admin, Active, onModelChange, onInputChange}) => {
    return (
        <section id = "admin">
            <section className = "con-box">
                <Articles />
                <Page />
            </section>
            <section className = "con-box">
                <Edit />
            </section>
            <section className = "con-box">
                <Info />
            </section>
        </section>
    );
};