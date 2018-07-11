let PlayerGame;
let user;

export class Game {
  constructor(id, playerName) {
    this.id = id || '';
    this.playerName = playerName;
  }

  getPlayerName() {
    return this.playerName;
  }
  getId() {
    return this.id;
  }
}

export const newGame = (id) => {
  PlayerGame = new Game(id, user);
  return PlayerGame;
};

export const setPlayer = (name) => {
  user = name;
};

export const getGame = () => {
  return PlayerGame;
};
