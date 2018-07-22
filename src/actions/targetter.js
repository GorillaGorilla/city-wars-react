import * as constants from './constants';

export const addToTargetPool = (asset) => {
  return {
    type: constants.ADD_TO_TARGET_POOL,
    asset,
  };
};

export const cancelTarget = () => {
  return {
    type: constants.CANCEL_TARGET,
  };
};

export const moveTarget = (location) => {
  return {
    type: constants.MOVE_TARGET,
    location,
  };
};
