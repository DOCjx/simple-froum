import { connect } from 'react-redux';
import UI from './UI';

export default connect((App) => ({Articles: App.Articles, userInfo: App.Root.userInfo}), (dispatch) => ({
    onEdit({articleId, pid}){
        dispatch({
            type: "Edit/EDIT",
            payload: {articleId, pid}
        });
    },
    onDelete({articleId}){
        dispatch({
            type: "Articles/DELETE",
            payload: articleId
        });
    }
}))(UI);