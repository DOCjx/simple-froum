import { connect } from 'react-redux';
import UI from './UI';

export default connect((App) => ({Info: App.Info, userInfo: App.Root.userInfo}), (dispatch) => ({
    onValueChange(action, e){
        const value = e.target.value;
        dispatch({
            type: "Info/VALCHANGE",
            payload: {
                action,
                value
            }
        })
    },
}))(UI);