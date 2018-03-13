import { connect } from 'react-redux';
import UI from './UI';

export default connect((App) => ({Detail: App.Detail}), (dispatch) => ({}))(UI);