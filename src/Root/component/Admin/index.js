import { connect } from 'react-redux';
import UI from './UI';

export default connect((App) => ({Admin: App.Admin, Active: App.Root.model}), (dispatch) => ({
    onModelChange({model, userId, pwd}){
        dispatch({
            type:"Root/MODELCHANGE",
            payload: model
        });
        //这里还需要发送用户名密码到后台进行验证，同时保存用户登录状态，获得token。登录成功则进行跳转
        dispatch({
            type:"Admin/SHOW",
            payload: userId
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
    }
}))(UI);