import React from 'react';
import './style.less';
import _ from 'lodash';

export default ({Nav, Active, userInfo, onModelChange}) => {
    const {urls} = Nav;
    return (
        <nav id="nav">
            <ul>
                <li className = {urls[0].model == Active ? "active-lin" : ""} onClick = {_.partial(onModelChange, {model: urls[0].model, userInfo})}>{urls[0].name}<span id="solid"></span></li>
                <li className = {urls[1].model == Active ? "active-lin" : ""} onClick = {_.partial(onModelChange, {model: urls[1].model, userInfo})}>{urls[1].name}</li>
            </ul>
        </nav>
    );
};