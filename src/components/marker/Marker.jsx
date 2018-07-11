import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AA_TANK from '../../assets/images/AA_TANK.png';
import player from '../../assets/images/player_icon.png';
import FLAK from '../../assets/images/FLAK.png';
import PLANE from '../../assets/images/plane.png';
import enemy from '../../assets/images/colonel2.png';
import { camelize } from '../../utils/index';

const evtNames = ['click', 'mouseover'];
const icons = {
  player,
  enemy,
  PLANE,
  AA_TANK,
  FLAK,
};
let marker;

export default class Marker extends Component {
  componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map) ||
      (this.props.position !== prevProps.position)) {
      this.renderMarker();
    }
  }

  componentWillUnmount() {
    if (this.marker) {
      this.marker.setMap(null);
    }
  }

  handleEvent(evt) {
    return (e) => {
      const evtName = `on${camelize(evt)}`;
      if (this.props[evtName]) {
        this.props[evtName](this.props, this.marker, e);
      }
    };
  }

  renderMarker() {
    let { position } = this.props;
    const {
      map,
      google,
      mapCenter,
      icon,
    } = this.props;

    if (this.marker) {
      this.marker.setOptions({
        position,
      });
    } else {
      const pos = position || mapCenter;
      position = new google.maps.LatLng(pos.lat, pos.lng);
      const pref = {
        map,
        position,
        icon: icons[icon],
      };
      this.marker = new google.maps.Marker(pref);
    }

    evtNames.forEach((e) => {
      this.marker.addListener(e, this.handleEvent(e));
    });
  }

  render() {
    return null;
  }
}

Marker.propTypes = {
  position: PropTypes.object,
  map: PropTypes.object
};
