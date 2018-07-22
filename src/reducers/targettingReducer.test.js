import targettingReducer from './targettingReducer';
import * as constants from '../actions/constants';

describe('targetting reducer', () => {
  const targetAction = { type: constants.ADD_TO_TARGET_POOL, asset: { type: 'BOMBER', quantity: 1 } };
  const cancelTargetAction = { type: constants.CANCEL_TARGET };
  const updateTargetLocation = { type: constants.MOVE_TARGET, location: { x: 1, y: 51 } };
  const state = { status: true, assetType: 'BOMBER', quantity: 5 };
  it('should return status false by default', () => {
    expect(targettingReducer(undefined, {})).toEqual({ status: false });
  });

  it('should return the correct number of assets in the target pool', () => {
    const { asset } = targetAction;
    expect(targettingReducer(undefined, targetAction))
      .toEqual({ status: true, assetType: asset.type, quantity: asset.quantity });
  });

  it('should return the correct number of assets in the target pool', () => {
    const { asset } = targetAction;
    expect(targettingReducer(state, targetAction))
      .toEqual({ status: true, assetType: asset.type, quantity: state.quantity + asset.quantity });
  });

  it('should handle a cancel target action', () => {
    expect(targettingReducer(state, cancelTargetAction)).toEqual({ status: false });
  });

  it('should handle a `UPDATE_LOCATION` action', () => {
    expect(targettingReducer(state, updateTargetLocation)).toEqual({ ...state, location: { x: 1, y: 51 } });
  });
});
