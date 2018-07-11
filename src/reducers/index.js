import { combineReducers } from 'redux';
import players from './playersReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  players,
  user,
});

export default rootReducer;
