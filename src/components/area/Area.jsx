import React from 'react';
import PropTypes from 'prop-types';
import './Area.css';

const Area = (props) => {
  const { label } = props;
  return (
    <div className={`area ${label}`}> {label} </div>
  );
};

Area.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Area;
