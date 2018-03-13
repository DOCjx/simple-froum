import React from 'react';
import './style.less';
import Comment from './component/Comment/';

export default ({Detail, onValueChange}) => {
    const {article} = Detail;
    const {title, content, update, auth} = article;

    return (
        <section id = "detail">
            <h3>{title}</h3>
            <article>
                <div>{content}</div>
                <div id = "detail-info"><span>{auth}</span><span>{update}</span></div>
            </article>
            <Comment />
        </section>
    );
};