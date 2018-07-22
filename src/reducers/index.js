import { combineReducers } from 'redux';
import players from './playersReducer';
import assets from './assetsReducer';
import user from './userReducer';
import targetting from './targettingReducer';

const rootReducer = combineReducers({
  players,
  user,
  targetting,
  assets,
});

export default rootReducer;
