import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoogleApiComponent from '../google-api-component/Google-api-component';
import { updateLocation } from '../../actions/users';
import { updatePlayers } from '../../actions/players';
import { updateAssets } from '../../actions/assets';
import { moveTarget } from '../../actions/targetter';
import Map from '../map/Map';
import { newGame, setPlayer } from '../../game';
import Marker from '../marker/Marker';
import Shape from '../shape/Shape';
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
  componentDidMount() {
    if (navigator && navigator.geolocation) {
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
              this.props.updateAssets(assets);
              // this.props.updateExplosions(explosions);
            });
            Socket.on('game connected', (response) => {
              Game = newGame(response.gameId);
              setPlayer(user.name);
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

  targetFinder() {
    const { targetting } = this.props;
    return <Shape position={{ lng: targetting.location.x, lat: targetting.location.y }} />;
  }

  assetMarkers() {
    const { assets } = this.props;
    return assets.map((asset) => {
      return <Marker key={asset.id} position={{ lng: asset.x, lat: asset.y }} icon={asset.type} />;
    });
  };

  player() {
    const { user } = this.props;
    return <Marker key={user.name} position={{ lng: user.location.x, lat: user.location.y }} icon="player" />;
  }

  render() {
    const { loaded, user, google, targetting } = this.props;
    if (!loaded || !user.location.x) {
      return <div>Loading...</div>;
    }
    const moveRender = (props, map, evt) => {
      console.log('evt', map, map.center.lng(), map.center.lat());
      const location = { x: map.center.lng(), y: map.center.lat() };
      this.props.moveTarget(location);
    };
    return (
      <Map google={google} onDragend={moveRender}>
        {this.playerMarkers()}
        {this.player()}
        {this.assetMarkers()}
        {targetting.status ? this.targetFinder() : []}
      </Map>);
  }
}

function mapStateToProps({ user, players, assets, targetting }) {
  return { user, players, assets, targetting };
}

Container.propTypes = {
  updateLocation: PropTypes.func.isRequired,
  updatePlayers: PropTypes.func.isRequired,
  updateAssets: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default GoogleApiComponent({
  apiKey: 'AIzaSyCvVWYrWCaBIajNRaBHHs293CQ9xQE5zOs',
  style,
})(connect(mapStateToProps, { updateLocation, updatePlayers, updateAssets, moveTarget })(Container));
