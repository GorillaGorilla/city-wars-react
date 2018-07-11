import * as constants from './constants';
import * as actions from './players';

const players = [
  {
    AA_deployed: 0,
    AA_lost: 0,
    AA_ready: 1,
    bomber_in_action: 0,
    bomber_ready: 1,
    bombers_lost: 0,
    damage: 40,
    disconnectedAt: '2018-07-10T15:13:19.870Z',
    health: 150,
    id: 'f93a4f4c-8f30-4bd0-8daa-c395502d5bbd',
    lat: 2,
    line_of_sight: 50,
    lng: 2,
    money: 53,
    moneyRate: 0.005,
    playing: true,
    points: 0,
    radius:
    30.299999999999997,
    running:
    true,
    score:
    null,
    speed:
    0.3,
    state: 'living',
    type: 'PLAYER',
    username: 'Banana',
    x: 51.50662289999999,
    y: -0.11237089999999397,
  },
];

it('has an action to update the players', () => {
  const expectedAction = { type: constants.UPDATE_PLAYERS, players };

  expect(actions.updatePlayers(players)).toEqual(expectedAction);
});
