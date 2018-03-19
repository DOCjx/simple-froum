import { connect } from 'react-redux';
import UI from './UI';
import fetch from '../../../common/fetch';
import config from '../../../common/config';
const {rootModel} = config;

const checkLogin = async ({userId, pwd}) => {
    return await  fetch(`users/pwd/${pwd}/id/${userId}`);;
};
const logout = async ({dispatch}) => {
    const articles = await fetch(`articles/${rootModel}`);
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
const login = async ({dispatch}) => {
    const articles =
};

export default connect((App) => ({Login: App.Login, Active: App.Root.model}), (dispatch) => ({
    onModelChange({model, userId, pwd}){
        if(!userId || !pwd) {
            dispatch({
                type: "Alert/SHOW",
                payload: "用户名或密码不能为空"
            });
            setTimeout(() => {
                dispatch({type: "Alert/CLOSE"});
            }, 2000);
            return;
        }
        const userInfo = checkLogin({userId, pwd});
        userInfo.then((data) => {
            const {email, role} = data;
            //这里还需要发送用户名密码到后台进行验证，同时保存用户登录状态，获得token。登录成功则进行跳转
            dispatch({
                type:"Root/MODELCHANGE",
                payload: {
                    model,
                    data: {
                        userInfo: {
                            userId,
                            pwd,
                            email,
                            role,
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
                    email,
                    role,
                    pwd
                }
            });
        }).catch(e => {
            console.log(e);
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
                model: rootModel,
                data: {
                    userInfo: {
                        isOnline: false
                    }
                }
            }
        });
        logout({dispatch});
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
    onGoAdmin({model, userId, pwd, email, role}){
        dispatch({
            type:"Root/MODELCHANGE",
            payload: {
                model,
                data: {
                    userInfo: {
                        userId,
                        pwd,
                        email,
                        role,
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
                email,
                role,
                pwd
            }
        });
    }
}))(UI);