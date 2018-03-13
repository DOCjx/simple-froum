import { connect } from 'react-redux';
import UI from './UI';

export default connect((App) => ({Comment: App.Comment, articleId: App.Detail.article.id, userInfo: App.Root.userInfo}), (dispatch) => ({
    onValueChange(e){
        dispatch({
            type: "Comment/CHANGESENDVALUE",
            payload: e.target.value
        });
    },
    onSend({articleId, userId, sendValue}){
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
        dispatch({
            type: "Comment/ONSEND",
            payload: {
                userId,
                sendValue,
                time: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
            }
        });
    }
}))(UI);