import Roots from './Root/models/';
import { combineReducers } from 'redux';

let reducers = {};
for(let reduce of Roots){
    reducers[reduce.name] = reduce[reduce.name];
}

export default combineReducers(reducers);