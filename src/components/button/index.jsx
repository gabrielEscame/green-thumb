import React from 'react';
import './style.css'

const Button = ({ label, method, styleName}) => {
  return (
    <button onClick={method} type='submit' className={styleName}> {label} </button>
  );
}

export default Button;