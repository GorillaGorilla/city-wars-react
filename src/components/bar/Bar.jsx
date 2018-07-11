import React from 'react';
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
      <span role="img" aria-label="gun"> CITY WARS 🔫 </span>
      <span className="profile" role="img" aria-label="person-fencing"> 🤺 </span>
    </div>
  );
};

Bar.propTypes = {
  // label: PropTypes.string.isRequired,
};

export default Bar;
