import * as constants from './constants';

export const updatePlayers = (players) => {
  return {
    type: constants.UPDATE_PLAYERS,
    players,
  };
};

export default updatePlayers;
