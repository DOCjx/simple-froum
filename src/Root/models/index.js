import Root from './Root';
import Nav from '../component/Nav/models/';
import List from '../component/List/models/';
import Page from '../component/Page/models/';
import Login from '../component/Login/models/';
import Admin from '../component/Admin/models/';
import Detail from '../component/Detail/models/';
import Alert from '../component/Alert/models/';

export default [...Nav, ...List, ...Page, ...Login, ...Admin, ...Detail, ...Alert, {name: "Root", Root: Root}];