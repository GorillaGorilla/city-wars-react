import * as constants from '../actions/constants';
// import initialData from './testData';

const playersReducer = (state = [], action) => {
  switch (action.type) {
    case constants.UPDATE_PLAYERS:
      return action.players;
    default:
      return state;
  }
};

export default playersReducer;
