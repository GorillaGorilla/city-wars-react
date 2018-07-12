import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HamburgerMenu from 'react-hamburger-menu';
import './Tray.css';

const Tray = (props) => {
  // const { } = props;
  return (
    <div className="tray">
      <button className="planes">
        <h2 className="label">Planes <span role="img" aria-label="plane">✈️</span></h2>
        <span className="count">5</span>
      </button>
      <button className="tanks">
        <h2>Tanks <span role="img" aria-label="tank">🚔</span></h2>
        <span>3</span>
      </button>
    </div>
  );
};

Tray.propTypes = {
  // label: PropTypes.string.isRequired,
};

function mapStateToProps({ user, players }) {
  return { user, players };
}

export default connect(mapStateToProps, { })(Tray);
