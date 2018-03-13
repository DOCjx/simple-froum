import React from 'react';
import './style.less';
import _ from 'lodash';

export default ({Comment, userInfo, articleId, onValueChange, onSend}) => {
    const {comments, sendValue} = Comment;
    const {userId} = userInfo;
    return (
        <section id = "comment">
            <section>
                {
                    comments.map((item, index) =>
                        <div className = "comment-con" key = {index}>
                            <div className = "comment-user">{item.userId}</div>
                            <div className = "comment-detail"><span>{item.comment}</span><span>{item.time}</span></div>
                        </div>
                    )
                }
            </section>
            <div id = "comment-send">
                <input value = {sendValue} onChange = {onValueChange} type="text"/>
                <button onClick = {_.partial(onSend, {articleId, userId, sendValue})}>发送</button>
            </div>
        </section>
    );
};