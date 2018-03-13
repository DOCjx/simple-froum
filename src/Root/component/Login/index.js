import { connect } from 'react-redux';
import UI from './UI';

export default connect((App) => ({Login: App.Login, Active: App.Root.model}), (dispatch) => ({
    onModelChange({model, userId, pwd}){
        if(!userId || !pwd || !~"admin".indexOf(userId) || !~"admin".indexOf(pwd)) {
            dispatch({
                type: "Alert/SHOW",
                payload: "用户名或密码不能为空,默认都为admin"
            });
            setTimeout(() => {
                dispatch({type: "Alert/CLOSE"});
            }, 2000);
            return;
        }
        //这里还需要发送用户名密码到后台进行验证，同时保存用户登录状态，获得token。登录成功则进行跳转
        dispatch({
            type:"Root/MODELCHANGE",
            payload: {
                model,
                data: {
                    userInfo: {
                        userId,
                        pwd,
                        isOnline: true
                    }
                }
            }
        });
        dispatch({
            type:"Login/CHANGEUSERSTATE",
            payload: {
                isOnline: true,
                userId,
                pwd
            }
        });
    },
    onInputChange(e){
        let field = e.target.type,
            value = e.target.value;
        field = field == "text" ? "userId" : "pwd";
        dispatch({
            type:"Login/CHANGEVALUE",
            payload: {
                field,
                value
            }
        });
    },
    onLogOut(e){
        dispatch({
            type:"Root/MODELCHANGE",
            payload: {
                model: "web",
                data: {
                    userInfo: {
                        isOnline: false
                    }
                }
            }
        });
        dispatch({
            type:"List/LOAD",
            payload: {
                star: 0,
                end: 4,
                model: "web"
            }
        });
        dispatch({
            type:"Login/CHANGEUSERSTATE",
            payload: {
                isOnline: false
            }
        });
        dispatch({
            type:"Info/CLEAR"
        });
    },
    onGoAdmin({model, userId, pwd}){
        dispatch({
            type:"Root/MODELCHANGE",
            payload: {
                model,
                data: {
                    userInfo: {
                        userId,
                        pwd,
                        isOnline: true
                    }
                }
            }
        });
        dispatch({
            type:"Login/CHANGEUSERSTATE",
            payload: {
                isOnline: true,
                userId,
                pwd
            }
        });
    }
}))(UI);