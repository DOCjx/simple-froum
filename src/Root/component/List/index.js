import { connect } from 'react-redux';
import UI from './UI';
import fetch from '../../../common/fetch.js';

const loadDetail = async ({dispatch, model, id}) => {
    const article = await fetch(`articles/model/${model}/id/${id}`);
    const comments = await fetch(`comments/model/${model}/id/${id}`);
    const comment = comments["comments"];
    dispatch({
        type: "Detail/SHOW",
        payload: {
            article,
            articleId: id
        }
    });
    dispatch({
        type: "Comment/ONLOAD",
        payload: {
            comment,
            model
        }
    });
};

export default connect((App) => ({List: App.List, Active: App.Root.model}), (dispatch) => ({
    onGoDetail({articleId, Active}){
        dispatch({
            type:"Root/MODELCHANGE",
            payload: {model: "detail", data: {}}
        });
        loadDetail({dispatch, model: Active, id: articleId});
    }
}))(UI);