import * as constants from './constants';

export const register = (userData) => {
  return {
    type: constants.REGISTER,
    payload: userData,
  };
};

export const login = (credentials) => {
  return {
    type: constants.LOGIN,
    payload: credentials,
  };
};

export const updateLocation = (coords) => {
  return {
    type: constants.UPDATE_LOCATION,
    payload: coords,
  };
};
