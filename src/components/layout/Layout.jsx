import React from 'react';
import Area from '../area/Area';
import Bar from '../bar/Bar';
import './Layout.css';
import MapArea from '../map-area/MapArea';

const Layout = () => (
  <div className="layout">
    <Bar />
    <MapArea />
    <Area label="tray" />
  </div>
);

export default Layout;
