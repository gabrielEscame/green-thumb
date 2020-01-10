import React from 'react';
import './style.css'
import logo from '../../images/logo/logo-greenthumb.svg';
import illustration from '../../images/illustrations/illustration-home.png';
import {Link} from 'react-router-dom';

const Home = () => {
  return(
    <div className='home-container'>
      <div className='logo-container'>
        <img src={logo} alt="logo"/>
        <h1>
          Find your next green friend
        </h1>
        <Link className='start-quizz' to='/quizz'>
          --> start quizz
        </Link>
      </div>
      <div className='image-container'>
        <img src={illustration} alt="illustration"/>
      </div>
    </div>
  );
}

export default Home;