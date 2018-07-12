import React from 'react';
import Area from '../area/Area';
import Bar from '../bar/Bar';
import './Layout.css';
import MapContainer from '../map-container/Map-container';

const Layout = () => (
  <div className="layout">
    <Bar />
    <MapContainer />
    <Area label="tray" />
  </div>
);

export default Layout;
