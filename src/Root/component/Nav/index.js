import { connect } from 'react-redux';
import UI from './UI';
import fetch from '../../../common/fetch.js';

const loadArticles = async ({dispatch, model}) => {
    const articles = await fetch(`articles/${model}`);
    dispatch({
        type:"List/LOAD",
        payload: {
            articles: articles.slice(0, 5)
        }
    });
    dispatch({
        type:"Page/SHOW",
        payload: articles.length
    });
};
export default connect((App) => ({Nav: App.Nav, Active: App.Root.model, userInfo: App.Root.userInfo}), (dispatch) => ({
    onModelChange({model, userInfo}){
        dispatch({
            type:"Root/MODELCHANGE",
            payload: {model, data: {
                userInfo
            }}
        });
        loadArticles({dispatch, model});
        if(userInfo){
            const {isOnline, userId, pwd} = userInfo;
            dispatch({
                type:"Login/CHANGEUSERSTATE",
                payload: {
                    isOnline,
                    userId,
                    pwd
                }
            });
        }
    }
}))(UI);