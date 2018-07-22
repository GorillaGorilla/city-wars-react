import assetsReducer from './playersReducer';
import * as constants from '../actions/constants';

const asset = {
  accuracy: 30,
  altitude: 1002.4626971279174,
  climbSpeed: 0.1,
  damage: 40,
  flyingTime: null,
  health: 50,
  id: '32962c02-8531-4aa9-a931-e339ac67e83a',
  line_of_sight: 50,
  owner: 'Freddie',
  radius: 30.299999999999997,
  range: 50,
  running: true,
  speed: 0.3,
  state: 'attack',
  type: 'BOMBER',
  x: 0.14967858619659521,
  y: 51.31031164835759,
};

describe('assets reducer', () => {
  const assetsAction = { type: constants.UPDATE_ASSETS, assets: [asset] };

  it('should return the initial empty array', () => {
    expect(assetsReducer(undefined, {})).toEqual([]);
  });

  it('should return the new assets', () => {
    expect(assetsReducer(undefined, assetsAction))
      .toEqual(assetsAction.assets);
  });
});
