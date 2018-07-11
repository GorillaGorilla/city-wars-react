import React from 'react';
import Area from '../area/Area';
import './Layout.css';
import MapArea from '../map-area/MapArea';

const Layout = () => (
  <div className="layout">
    <Area label="header" />
    <Area label="sidebar" />
    <MapArea />
    <Area label="panel" />
  </div>
);

export default Layout;
