import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { camelize } from '../../utils/index';

const evtNames = ['click', 'mouseover'];

let shape;

export default class Shape extends Component {
  componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map) ||
      (this.props.position !== prevProps.position)) {
      this.renderShape();
    }
  }

  componentWillUnmount() {
    if (this.shape) {
      this.shape.setMap(null);
    }
  }

  handleEvent(evt) {
    return (e) => {
      const evtName = `on${camelize(evt)}`;
      if (this.props[evtName]) {
        this.props[evtName](this.props, this.shape, e);
      }
    };
  }

  renderShape() {
    let { position } = this.props;
    const {
      map,
      google,
      mapCenter,
    } = this.props;

    if (this.shape) {
      this.shape.setOptions({
        position,
      });
    } else {
      const pos = position || mapCenter;
      position = new google.maps.LatLng(pos.lat, pos.lng);
      const pref = {
        strokeColor: '#4286f4',
        strokeOpacity: 0.0,
        strokeWeight: 2,
        fillColor: '#4286f4',
        fillOpacity: 0.0,
        map,
        position,
        radius: this.props.radius || 50,
      };
      this.shape = new google.maps.Circle(pref);
    }

    evtNames.forEach((e) => {
      this.shape.addListener(e, this.handleEvent(e));
    });
  }

  render() {
    return null;
  }
}

Shape.propTypes = {
  position: PropTypes.object,
  map: PropTypes.object
};
