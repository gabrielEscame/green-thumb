import React from 'react';
import './style.css'

const Button = ({ label, method, styleName, image, imageClass}) => {
  return (
    <button onClick={method} type='submit' className={styleName}> <img className={imageClass} src={image} alt=""/> {label} </button>
  );
}

export default Button;