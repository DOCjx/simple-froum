import { connect } from 'react-redux';
import UI from './UI';

export default connect((App) => ({List: App.List, Active: App.Root.model}), (dispatch) => ({
    onGoDetail({articleId, Active}){
        dispatch({
            type:"Root/MODELCHANGE",
            payload: {model: "detail", data: {}}
        });
        dispatch({
            type: "Detail/SHOW",
            payload: {
                articleId,
                model: Active
            }
        });
    }
}))(UI);