import { connect } from 'react-redux';
import UI from './UI';

export default connect((App) => ({Root: App.Root}), (dispatch) => ({}))(UI);