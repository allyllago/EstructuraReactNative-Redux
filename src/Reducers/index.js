import {combineReducers} from 'redux';

import home from './home';
import navReducer from './navigator';


const rootReducer = combineReducers({home, nav: navReducer});


export default rootReducer;