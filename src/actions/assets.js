import * as constants from './constants';

export const updateAssets = (assets) => {
  return {
    type: constants.UPDATE_ASSETS,
    assets,
  };
};

export default updateAssets;
