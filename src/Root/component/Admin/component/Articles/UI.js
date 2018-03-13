import React from 'react';
import './style.less';
import _ from 'lodash';

export default ({Articles, onModelChange, onEdit, onDelete}) => {
    const {articles} = Articles;
    return (
        <section id = "admin-articles">
            {
                articles.map((item, index) => <article key = {index}>
                    <span>
                        <h5>{item.title}</h5>
                        <span>update：{item.update}</span>
                        {"  "}
                        <span>{item.pid ? "信安" : "前端"}</span>
                    </span>
                    <span>
                        <button onClick = {_.partial(onEdit, {articleId: item.id, pid: item.pid})}>修改</button>
                        <button onClick = {_.partial(onDelete, {articleId: item.id})}>删除</button>
                    </span>
                </article>)
            }
        </section>
    );
};