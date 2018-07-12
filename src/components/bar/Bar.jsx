import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HamburgerMenu from 'react-hamburger-menu';
import './Bar.css';

const Bar = (props) => {
  // const { } = props;
  let burgerOpen = false;
  return (
    <div className="bar">
      <div className="burger">
        <HamburgerMenu
          isOpen={burgerOpen}
          menuClicked={() => { burgerOpen = !burgerOpen; }}
          width={18}
          height={15}
          strokeWidth={1}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>
      <h1 className="title">CITY WARS <span role="img" aria-label="gun">🔫</span></h1>
      <span className="profile" role="img" aria-label="person-fencing"> 🤺 </span>
    </div>
  );
};

Bar.propTypes = {
  // label: PropTypes.string.isRequired,
};

function mapStateToProps({ user, players }) {
  return { user, players };
}

export default connect(mapStateToProps, { })(Bar);
