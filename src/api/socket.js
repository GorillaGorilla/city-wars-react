import openSocket from 'socket.io-client';
import updatePlayers from '../actions/players';
import { dispatch } from '../components/redux/Redux';
import { getGame } from '../game';
import { call } from 'redux-saga/effects';
import URL from '../api/apiURL';

let socket;
// const name = 'Freddie';

let connected = false;

const startConnection = (user) => {
  const { name, authenticated, token } = user;
  return new Promise((resolve, reject) => {
    if (authenticated) { // if authenticated
      console.log('socket.service: is authenticated', name);
      socket = openSocket(URL);

      socket.on('connect', () => {
        // console.log("connected", AuthService.getUser());
        socket.emit('authenticate', { token: '', name }); // send the jwt
      });

      socket.on('authenticated', (response) => {
        console.log('authenticated received');
        connected = true;
        const data = { token, name };
        console.log('add user data', data);
        resolve(data);
        // if (callback) {
        //   callback(null, response);
        // }
      })
        .on('unauthorized', (msg) => {
          console.log(`unauthorized: + ${msg}`);
        })
        .on('disconnect', (msg) => {
          connected = false;
          console.log('disconnect', msg);
        });
    } else {
      reject(new Error('not authenticated'));
      // location.path('/');
    }
  });
};

const addPlayer = (userData) => {
  socket.emit('add user', userData);
};

const sendLocation = (user) => {
  const { location } = user;
  console.log('location', location);
  socket.emit('location', { gameId: getGame().getId(), location: { ...location, username: user.name } });
};

const sendOrder = (type, username, quantity, target) => {
  const obj = {
    gameId: getGame().getId(),
    input: {
      username,
      action: `SEND_${type}`,
      target,
    },
  };
  console.log('obj', obj);
  socket.emit('gameInputMessage', obj);
};

const on = (eventName, callback) => {
  socket.on(eventName, callback);
};

const isConnected = () => {
  return connected;
};

export default {
  startConnection,
  sendLocation,
  addPlayer,
  on,
  sendOrder,
  isConnected,
};
