import * as constants from '../actions/constants';

const defaultState = {
  name: null,
  token: null,
  authenticated: false,
  location: { y: null, x: null },
};
const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.USER_LOGGED_IN:
      return {
        ...state,
        name: action.payload.name,
        token: action.payload.token,
        authenticated: true,
      };
    case constants.USER_REGISTERED:
      return state;
    case constants.UPDATE_LOCATION:
      return { ...state, location: { x: action.payload.longitude, y: action.payload.latitude } };
    default:
      return state;
  }
};

export default userReducer;
