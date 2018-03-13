import React from 'react';
import './style.less';
import _ from 'lodash';

export default ({Page, Active, onCurrentChange, onStepChange}) => {
    const {pages, current, total} = Page;
    let items = [];
    for(let i = current < 5 ? 1 : current - 3; i <= pages; i++){
        if(current < 5 ? i >= 6 : i > current + 1) break;
        items.push(<span onClick = {_.partial(onCurrentChange, {pages, i, Active, total})} key = {i} className = {i == current ? "current" : ""}>{i}</span>);
    }
    return (
        <section id = "page">
            <span onClick = {_.partial(onStepChange, {type: "pre", current, pages, Active, total})} id = "pre">{"<"}</span>
            {current >= 5 ? <span className = "more">...</span> : ""}
            {items}
            {pages >= 6 && current < 5 ? <span className = "more">...</span> : ""}
            <span onClick = {_.partial(onStepChange, {type: "next", current, pages, Active, total})} id = "next">{">"}</span>
        </section>
    );
};