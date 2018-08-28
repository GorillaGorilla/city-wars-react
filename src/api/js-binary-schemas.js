import { Type } from 'js-binary';

export const assetSchema = new Type({
  accuracy: 'int',
  altitude: 'float',
  climbSpeed: 'float',
  damage: 'int',
  flyingTime: 'float',
  health: 'float',
  id: 'string',
  line_of_sight: 'float',
  owner: 'string',
  radius: 'float',
  range: 'int',
  running: 'boolean',
  speed: 'float',
  state: 'string',
  type: 'string',
  x: 'float',
  y: 'float',
});

export const playerSchema = new Type({
  AA_deployed: 'float',
  AA_lost: 'float',
  AA_ready: 'float',
  bomber_in_action: 'float',
  bomber_ready: 'float',
  bombers_lost: 'float',
  damage: 'float',
  disconnectedAt: 'string',
  health: 'float',
  id: 'string',
  lat: 'float',
  line_of_sight: 'float',
  lng: 'float',
  money: 'float',
  moneyRate: 'float',
  playing: 'boolean',
  points: 'float',
  radius: 'float',
  running: 'boolean',
  score: 'float',
  speed: 'float',
  state: 'string',
  type: 'string',
  username: 'string',
  x: 'float',
  y: 'float',
});

export const objSchema = new Type({
  assets: ['Buffer'],
  players: ['Buffer'],
});

const obj = {
  assets:
  [
    {
      accuracy: 30,
      altitude: 894.5695435192722,
      climbSpeed: 0.1,
      damage: 40,
      flyingTime: 0,
      health: 50,
      id: "9984e043-4c42-4975-9b6e-0d4bc358d410",
      line_of_sight: 50,
      owner: "Banana",
      radius: 30.299999999999997,
      range: 50,
      running: true,
      speed: 0.3,
      state: "attack",
      type: "BOMBER",
      x: -0.11472457570475103,
      y: 51.503836800154865,
    },
  ],
  players: [
    {
      AA_deployed: 0,
      AA_lost: 0,
      AA_ready: 1,
      bomber_in_action: 0,
      bomber_ready: 1,
      bombers_lost: 0,
      damage: 40,
      disconnectedAt: "2018-07-25T13:33:05.090Z",
      health: 150,
      id: "3bb40145-e74c-48fc-8328-86c3c1a43c3a",
      lat: 1,
      line_of_sight: 50,
      lng: 1,
      money: 50,
      moneyRate: 0.005,
      playing: true,
      points: 0,
      radius: 30.299999999999997,
      running: true,
      score: 0,
      speed: 0.3,
      state: "living",
      type: "PLAYER",
      username: "Freddie",
      x: -0.1118738,
      y: 51.506660299999986,
    },
  ],
};

const encoded = playerSchema.encode(obj['players'][0]);

console.log('encoded', encoded);

const decoded = playerSchema.decode(encoded);

console.log('decoded', decoded);
