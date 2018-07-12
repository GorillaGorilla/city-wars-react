import React from 'react';
import { connect } from 'react-redux';
import GoogleApiComponent from '../google-api-component/Google-api-component';
import { updateLocation } from '../../actions/users';
import { updatePlayers } from '../../actions/players';
import Map from '../map/Map';
import { newGame, setPlayer } from '../../game';
import Marker from '../marker/Marker';
import Socket from '../../api/socket';

const style = {
  width: '100%',
  height: '100%',
  backgroundColor: 'yellow',
  className: 'hello',
};

let Game;
let socket;

class Container extends React.Component {
  constructor(props) {
    super();
    // maybe move all this to component will mount?
  }

  componentDidMount() {
    const { user } = this.props;
    if (navigator && navigator.geolocation) {
      console.log('component did mount', navigator.geolocation);

      const p = () => {
        return new Promise((resolve, reject) => {
          const get = (pos) => {
            const { coords } = pos;
            console.log('coords', coords);
            this.props.updateLocation(coords);
            resolve();
          };
          navigator.geolocation.getCurrentPosition(get, (e) => {
            console.log('error', e);
            reject(e);
          });
        });
      };
      p();
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    console.log('componentDidUpdate');
    const { user } = this.props;
    if (user.location !== prevProps.user.location) {
      const p2 = () => {
        console.log('p2');
        return new Promise((resolve, reject) => {
          Socket.startConnection(user).then((response) => {
            Socket.addPlayer(response);
            Socket.on('gameState', (data) => {
              const { players, assets, explosions } = data;
              // dispatch(receiveUser(data.user));
              this.props.updatePlayers(players);
              // this.props.updateAssets(assets);
              // this.props.updateExplosions(explosions);
            });
            Socket.on('game connected', (response) => {
              Game = newGame(response.gameId);
              setPlayer(user.name);
              console.log('Game', Game);
              console.log('app.game', response.gameId);
              Socket.sendLocation(user);
            });
            Socket.on('waiting for game', (data) => {
              // $state.go('waiting');  //
            });
          });
        });
      };
      p2();
    }
  }

  playerMarkers() {
    const { players, user } = this.props;
    return players.filter(p => p.name !== user.name).map((player) => {
      return <Marker key={player.name} position={{ lng: player.x, lat: player.y }} icon="enemy" />;
    });
  }

  player() {
    const { user } = this.props;
    return <Marker key={user.name} position={{ lng: user.location.x, lat: user.location.y }} icon="player" />;
  }

  render() {
    const { loaded, user, google } = this.props;
    console.log('MapContainer this.props', this.props, user.location.x);
    if (!loaded || !user.location.x) {
      return <div>Loading...</div>;
    }
    return (
      <Map google={google} >
        {this.playerMarkers()}
        {this.player()}
      </Map>);
  }
}

function mapStateToProps({ user, players }) {
  return { user, players };
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyCvVWYrWCaBIajNRaBHHs293CQ9xQE5zOs',
  style,
})(connect(mapStateToProps, { updateLocation, updatePlayers })(Container));
