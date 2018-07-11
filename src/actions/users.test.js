import * as constants from './constants';
import * as actions from './users';

const userDetails = { name: 'test', password: 'secret' };

it('has an action to register', () => {
  const expectedAction = { type: constants.REGISTER, payload: userDetails };

  expect(actions.register(userDetails)).toEqual(expectedAction);
});

it('has an action to login', () => {
  const expectedAction = { type: constants.LOGIN, payload: userDetails };

  expect(actions.login(userDetails)).toEqual(expectedAction);
});
