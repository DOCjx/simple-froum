import Admin from './Admin';
import Articles from '../component/Articles/models/';
import Edit from '../component/Edit/models/';
import Info from '../component/Info/models/';

export default [...Articles, ...Edit, ...Info, {name: "Admin", Admin: Admin}];