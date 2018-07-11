/* eslint no-use-before-define: 0 */ 

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { camelize } from '../../utils/index';

const evtNames = ['ready', 'click', 'dragend'];

export class Map extends Component {
  constructor(props) {
    super(props);

    const {lat, lng} = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
          console.log('component did mount', navigator.geolocation);
          const get = (pos) => {
            const coords = pos.coords;
            console.log('coords', coords);
            this.setState({
                currentLocation: {
                    lat: coords.latitude,
                    lng: coords.longitude
                }
            })
        };
          navigator.geolocation.getCurrentPosition(get, (e) => {
            console.log('error', e);
          });
      }
  }
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const { currentLocation } = this.state;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let zoom = 14;
      let { lat, lng } = currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom,
      })
      this.map = new maps.Map(node, mapConfig);

      evtNames.forEach(e => {
        this.map.addListener(e, this.handleEvent(e));
      });

      maps.event.trigger(this.map, 'ready');
    }
    
  }

  recenterMap() {
    const map = this.map;
    const curr = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
        let center = new maps.LatLng(curr.lat, curr.lng)
        map.panTo(center)
    }

    
  }

  handleEvent(evtName) {
    let timeout;
    const handlerName = `on${camelize(evtName)}`;

    return (e) => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => {
        if (this.props[handlerName]) {
          this.props[handlerName](this.props, this.map, e);
        }
      }, 0);
    }
  }

  renderChildren() {
    
    const {children} = this.props;
    if (!children) return;
    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }


  render() {
    const style = {
      display: "grid",
      height: "500px",
    };
    return (
      <div style={style} ref='map'>
        OEFNOSFOIFPINGPANGkdfis
        {this.renderChildren()}
      </div>
    )
  }
}

Map.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object,
  onMove: PropTypes.func
};

Map.defaultProps = {
  zoom: 13,
  // San Francisco, by default
  initialCenter: {
    lat: 50.774929,
    lng: 0.0416
  },
  centerAroundCurrentLocation: true,
  onMove: () => {},
};

export default Map;