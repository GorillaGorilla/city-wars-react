import React from 'react';
import { connect } from 'react-redux';
import { addToTargetPool, cancelTarget } from '../../actions/targetter';
import PropTypes from 'prop-types';
import HamburgerMenu from 'react-hamburger-menu';
import Socket from '../../api/socket';
import { getGame } from '../../game';
import './Tray.css';

const getUserPlayer = (user, players) => {
  console.log('players', players);
  return players.filter(p => p.username === user.name)[0];
};

const Tray = (props) => {
  this.clickBomber = () => {
    if (!Socket.isConnected() || props.players.length === 0) {
      return;
    }
    const player = getUserPlayer(props.user, props.players);
    console.log('player', player.bomber_ready);
    props.addToTargetPool({ type: 'BOMBER', quantity: 1 });
  };

  this.clickTank = () => {
    if (!Socket.isConnected() || props.players.length === 0) {
      return;
    }
    const player = getUserPlayer(props.user, props.players);
    props.addToTargetPool({ type: 'BATTERY', quantity: 1 });
  };

  this.sendOrder = () => {
    const { targetting, user } = props;
    if (targetting.status) {
      Socket.sendOrder(targetting.assetType, user.name, targetting.quantity, targetting.location);
      props.cancelTarget();
    }
  };

  return (
    <div className="tray">
      <button className="planes" onClick={this.clickBomber} >
        <h2 className="label">Planes <span role="img" aria-label="plane">✈️</span></h2>
        <span className="count">5</span>
      </button>
      <button className="tanks" onClick={this.clickBomber}>
        <h2>Tanks <span role="img" aria-label="tank">🚔</span></h2>
        <span>3</span>
      </button>
      {props.targetting.status && <button onClick={this.sendOrder}> <h2>Send <span role="img" aria-label="tank">🚔</span></h2> </button>}
    </div>
  );
};

Tray.propTypes = {
  addToTargetPool: PropTypes.func.isRequired,
};

function mapStateToProps({ user, players, targetting }) {
  return { user, players, targetting };
}

export default connect(mapStateToProps, { addToTargetPool, cancelTarget })(Tray);
