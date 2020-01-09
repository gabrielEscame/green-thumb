import React, { useState, useEffect } from 'react';
import './style.css'
import Button from '../../components/button';
import { Link } from 'react-router-dom';
// LOGO IMAGE IMPORT
import logo from '../../images/logo/logo-greenthumb.svg'
// SUN IMAGES IMPORT
import sunImage from '../../images/illustrations/sun.png';
import highSun from '../../images/icons/coral/high-sun.svg';
import lowSun from '../../images/icons/coral/low-sun.svg';
import noSun from '../../images/icons/coral/no-answer.svg';
import highWhiteSun from '../../images/icons/white/high-sun.svg';
import lowWhiteSun from '../../images/icons/white/low-sun.svg';
import noWhiteSun from '../../images/icons/white/no-answer.svg';
const Quizz = () => {
  const [sun, setSun] = useState('');
  const [water, serWater] = useState('');
  const [pet, setPet] = useState('');
  const [sunVisible, setSunVisible] = useState(true);
  const [waterVisible, setWaterVisible] = useState(false);
  const [petVisible, setPetVisible] = useState(false);

  const sunOff = () => {
    setSunVisible(false);
    setWaterVisible(true)
  }

  const sunOn = () => {
    setWaterVisible(false);
    setSunVisible(true)
  }

  const waterOff = () => {
    setWaterVisible(false);
    setPetVisible(true)
  }

  const waterOn = () => {
    setPetVisible(false);
    setWaterVisible(true)
  }

  return (
    <div>
      <img className='logo' src={logo} alt="logo" />
      <div className='side-line' />
      {sunVisible ?
        <div className='sunQuizz-container'>
          <img src={sunImage} alt="sun" />
          <h1>
            First, set the amount of
          <b> sunlight</b> your plant will get.
        </h1>
          <div className='buttons-container'>
            <Button method={() => setSun('high')} label='High sunlight' image={sun === 'high' ? highWhiteSun : highSun} styleName={sun === 'high' ? 'sun-chosen-button' :'button-choice'} />
            <Button method={() => setSun('low')} label='Low sunlight' image={sun === 'low' ? lowWhiteSun : lowSun} styleName={sun === 'low' ? 'sun-chosen-button' :'button-choice'} />
            <Button method={() => setSun('no')} label='No sunlight' image={sun === 'no' ? noWhiteSun : noSun} styleName={sun === 'no' ? 'sun-chosen-button' :'button-choice'} />
          </div>
          <div className='next-button-container'>
            <Link className='next-button' to='/'> &lt;-- home</Link>
            <Button method={() => sunOff()} label='--> next' styleName='next-button' />
          </div>
        </div> : null}
      {waterVisible ?
        <div>
          <Button method={() => sunOn()} label='<-- previous' styleName='next-button' />
          <Button method={() => waterOff()} label='--> next' styleName='next-button' />
        </div> : null}
      {petVisible ?
        <div>
          <Button method={() => waterOn()} label='<-- previous' styleName='next-button' />
          <Button method={() => setPetVisible(false)} label='--> finish' styleName='next-button' />
        </div> : null}
    </div>
  );
}

export default Quizz;