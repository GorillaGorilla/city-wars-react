import * as constants from '../actions/constants';
// import initialData from './testData';

const assetsReducer = (state = [], action) => {
  switch (action.type) {
    case constants.UPDATE_ASSETS:
      return action.assets;
    default:
      return state;
  }
};

export default assetsReducer;
