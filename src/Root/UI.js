import React from 'react';
import Nav from './component/Nav/';
import List from './component/List/';
import Page from './component/Page/';
import Login from './component/Login/';
import Admin from './component/Admin/';
import Detail from './component/Detail/';
import './style.less';
const models = {"admin": Admin, "detail": Detail};

export default ({Root}) => {
    const {model} = Root;
    const M = models[model];
    return (
        <section>
            <Nav />
            {
                M ?
                    <M />
                :
                    <div>
                        <List />
                        <Page />
                    </div>
            }
            <Login />
        </section>
    );
};