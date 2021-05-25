// import { combineReducers } from 'redux';
import {createStore} from 'redux'

import auth from './auth'

// export const reducers = combineReducers({ auth });

const store = createStore(auth);

export default store