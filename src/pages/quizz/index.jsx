import React, {useState, useEffect} from 'react';
import './style.css'
import Button from '../../components/button';
import {Link} from 'react-router-dom';
import sunImage from '../../images/illustrations/sun.png'

const Quizz = () => {
  const [sun, setSun] =  useState('high');
  const [water, serWater] = useState('rarely');
  const [pet, setPet] = useState('false');
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

  return(
    <div>
      {sunVisible ? 
      <div className='sunQuizz-container'>
        <img src={sunImage} alt="sun"/>
        <h1>
          First, set the amount of
          <b> sunlight</b> your plant will get.
        </h1>
        <div>
          <Button method={()=> setSun('high')} label='High sunlight'/>
          <Button method={()=> setSun('low')} label='Low sunlight' />
          <Button method={()=> setSun('no')} label='No sunlight' />
        </div>
        <div>
        <Link to='/'>Home</Link>
        <Button method={()=> sunOff() } label='--> next' styleName='next-button'/>
        </div>
      </div> : null}
      {waterVisible ? 
      <div>
        <Button method={()=> sunOn()} label='<-- previous' styleName='next-button'/>
        <Button method={()=> waterOff()} label='--> next' styleName='next-button'/>
      </div>  : null}
      {petVisible ? 
      <div>
      <Button method={()=> waterOn()} label='<-- previous' styleName='next-button'/>
      <Button method={()=> setPetVisible(false)} label='--> finish' styleName='next-button'/>  
      </div> : null}
    </div>
  );
}

export default Quizz;