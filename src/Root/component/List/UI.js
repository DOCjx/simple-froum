import React from 'react';
import './style.less';
import _ from 'lodash';

export default ({List, Active, onGoDetail}) => {
    const {articles} = List;
    return (
        <section id = "content">
            {
                articles.map((item, index) => <article className="article-con" key = {index}>
                    <div>BY: {item.auth}</div>
                    <h4>{item.title}</h4>
                    <span onClick = {_.partial(onGoDetail, {articleId: item.id, Active})} className = "article-lin"></span>
                </article>)
            }
        </section>
    );
};