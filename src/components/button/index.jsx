import React from 'react';
import './style.css'

const Button = ({ label, method, styleName, image}) => {
  return (
    <button onClick={method} type='submit' className={styleName}> <img src={image} alt=""/>{label} </button>
  );
}

export default Button;