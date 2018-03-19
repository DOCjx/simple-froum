import { connect } from 'react-redux';
import UI from './UI';
import fetch from '../../../../../common/fetch.js';
const sendComment = async (params, dispatch) => {
    const res = await fetch(`comments`, params, "POST");
    if(res){
        dispatch({
            type: "Comment/ONSEND",
            payload: {
                userId: params.userId,
                sendValue: params.comment,
                time: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
            }
        });
    }else{
        dispatch({
            type: "Alert/SHOW",
            payload: "数据库哥哥生病了"
        });
        setTimeout(() => {
            dispatch({type: "Alert/CLOSE"});
        }, 2000);
        return;
    }
};
export default connect((App) => ({Comment: App.Comment, articleId: App.Detail.article.id, userInfo: App.Root.userInfo}), (dispatch) => ({
    onValueChange(e){
        dispatch({
            type: "Comment/CHANGESENDVALUE",
            payload: e.target.value
        });
    },
    onSend({articleId, userId, sendValue, model}){
        const date = new Date();
        if(!userId){
            dispatch({
                type: "Alert/SHOW",
                payload: "请先登录哦"
            });
            setTimeout(() => {
                dispatch({
                    type: "Alert/CLOSE"
                });
            }, 800);
            return;
        }
        if(!sendValue){
            dispatch({
                type: "Alert/SHOW",
                payload: "还没输入哦"
            });
            setTimeout(() => {
                dispatch({
                    type: "Alert/CLOSE"
                });
            }, 800);
            return;
        }
        sendComment({userId, comment: sendValue, model, articleId}, dispatch);
    }
}))(UI);