import { connect } from 'react-redux';
import UI from './UI';

export default connect((App) => ({Edit: App.Edit}), (dispatch) => ({
    onInputChange(action, e){
        const value = e.target.value;

        dispatch({
            type: "Edit/VALUECHANGE",
            payload: {
                value,
                action
            }
        });
    },
    onClear(e){
        dispatch({
            type: "Edit/CLEAR"
        });
    }
}))(UI);