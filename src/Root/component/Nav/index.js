import { connect } from 'react-redux';
import UI from './UI';

export default connect((App) => ({Nav: App.Nav, Active: App.Root.model, userInfo: App.Root.userInfo}), (dispatch) => ({
    onModelChange({model, userInfo}){
        dispatch({
            type:"Root/MODELCHANGE",
            payload: {model, data: {
                userInfo
            }}
        });
        dispatch({
            type:"List/LOAD",
            payload: {
                star: 0,
                end: 4,
                model
            }
        });
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