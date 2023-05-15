// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button className={props.type}>{props.btnName}</button>
  );
}

Button.propTypes = {
  btnName: PropTypes.string,
  type:PropTypes.string
};

export default Button;