import * as constants from '../actions/constants';
// import initialData from './testData';

const targettingReducer = (state = { status: false }, action) => {
  switch (action.type) {
    case constants.ADD_TO_TARGET_POOL:
      if (state.status) {
        const { asset } = action;
        const quantity = state.assetType === asset.type ? state.quantity + asset.quantity : asset.quantity;
        return { ...state, status: true, assetType: state.assetType, quantity };
      }
      return { ...state, status: true, assetType: action.asset.type, quantity: action.asset.quantity };
    case constants.MOVE_TARGET:
      return { ...state, location: action.location };
    case constants.CANCEL_TARGET:
      return { status: false };
    default:
      return state;
  }
};

export default targettingReducer;
