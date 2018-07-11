import playersReducer from './playersReducer';
import * as constants from '../actions/constants';

describe('players reducer', () => {
  const playersAction = { type: constants.UPDATE_PLAYERS, players: [{ money: '20', score: 0, username: test }] };

  it('should return the initial empty array', () => {
    expect(playersReducer(undefined, {})).toEqual([]);
  });

  it('should return the new players', () => {
    expect(playersReducer(undefined, playersAction))
      .toEqual(playersAction.players);
  });
});
