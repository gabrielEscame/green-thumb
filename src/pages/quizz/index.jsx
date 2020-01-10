import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api'
import './style.css'
import Button from '../../components/button';
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
// WATER IMAGES IMPORT
import waterImage from '../../images/illustrations/wateringcan.png';
import rarelyWater from '../../images/icons/green/one-drop.svg';
import regularyWater from '../../images/icons/green/two-drops.svg';
import dailyWater from '../../images/icons/green/three-drops.svg';
import rarelyWhiteWater from '../../images/icons/white/one-drop.svg';
import regularyWhiteWater from '../../images/icons/white/two-drops.svg';
import dailyWhiteWater from '../../images/icons/white/three-drops.svg';
// PET IMAGES IMPORT
import petImage from '../../images/illustrations/dog.png';
import yesPet from '../../images/icons/coral/pet.svg';
import noPet from '../../images/icons/coral/no-answer.svg';
import yesWhitePet from '../../images/icons/white/pet.svg';
import noWhitePet from '../../images/icons/white/no-answer.svg';
// HAND IMAGE IMPORT
import handImage from '../../images/illustrations/pick.png'

const Quizz = () => {
  const [results, setResults] = useState(false);
  const [plantList, setPlantList] = useState([]);
  const [sun, setSun] = useState('');
  const [water, setWater] = useState('');
  const [pet, setPet] = useState('');
  const [sunVisible, setSunVisible] = useState(true);
  const [waterVisible, setWaterVisible] = useState(false);
  const [petVisible, setPetVisible] = useState(false);

  useEffect(()=> {
    api.get(`front-plantTest-service?sun=${sun}&water=${water}&pets=${pet}`)
      .then(response => setPlantList(response.data))
      .catch(err => console.log(err))
  }, [sun, water, pet])

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

  const petOff = () => {
    setPetVisible(false);
    setResults(true);
  }

  return (
    <div>
      <img className='logo' src={logo} alt="logo" />
      <div className='side-line' />
      {sunVisible ?
        <div className='quizz-container'>
          <img className='sun-illustration' src={sunImage} alt="sun" />
          <h1 className='h1-container'>
            First, set the amount of
            <b> sunlight</b> your plant will get.
          </h1>
          <div className='buttons-container'>
            <div className='choice-buttons-container'>
              <Button method={() => setSun('high')} label='High sunlight' image={sun === 'high' ? highWhiteSun : highSun} styleName={sun === 'high' ? 'sun-chosen-button' : 'button-choice'} />
              <Button method={() => setSun('low')} label='Low sunlight' image={sun === 'low' ? lowWhiteSun : lowSun} styleName={sun === 'low' ? 'sun-chosen-button' : 'button-choice'} />
              <Button method={() => setSun('no')} label='No sunlight' image={sun === 'no' ? noWhiteSun : noSun} styleName={sun === 'no' ? 'sun-chosen-button' : 'button-choice'} />
            </div>
            <div className='next-button-container'>
              <Link className='next-button' to='/'> &lt;-- home </Link>
              <Button method={() => sunOff()} label='--> next' styleName='next-button' />
            </div>
          </div>
        </div> : null}
      {waterVisible ?
        <div className='quizz-container'>
          <img className='water-illustration' src={waterImage} alt="water" />
          <h1 className='h1-container'>
            How often do you want to
            <b> water</b> your plant?
          </h1>
          <div className='buttons-container'>
            <div className="choice-buttons-container">
              <Button method={() => setWater('rarely')} label='Rarely' image={water === 'rarely' ? rarelyWhiteWater : rarelyWater} styleName={water === 'rarely' ? 'water-chosen-button' : 'button-choice'} />
              <Button method={() => setWater('regulary')} label='Regulary' image={water === 'regulary' ? regularyWhiteWater : regularyWater} styleName={water === 'regulary' ? 'water-chosen-button' : 'button-choice'} />
              <Button method={() => setWater('daily')} label='Daily' image={water === 'daily' ? dailyWhiteWater : dailyWater} styleName={water === 'daily' ? 'water-chosen-button' : 'button-choice'} />
            </div>
            <div className="next-button-container">
              <Button method={() => sunOn()} label='<-- previous' styleName='next-button' />
              <Button method={() => waterOff()} label='--> next' styleName='next-button' />
            </div>
          </div>
        </div> : null}
      {petVisible ?
        <div className='quizz-container'>
          <img className='pet-illustration' src={petImage} alt="pet" />
          <h1 className='pet-h1-container'>
            Do you have pets? Do they <b> chew </b> plants?
          </h1>
          <p>We are asking because some plants can be <b> toxic</b> for your buddy. </p>
          <div className='pet-buttons-container'>
            <div className="choice-buttons-container">
              <Button method={() => setPet('true')} label='Yes' image={pet === 'true' ? yesWhitePet : yesPet} styleName={pet === 'true' ? 'sun-chosen-button' : 'button-choice'} />
              <Button method={() => setPet('false')} label="No/They don't care" image={pet === 'false' ? noWhitePet : noPet} styleName={pet === 'false' ? 'sun-chosen-button' : 'button-choice'} />
            </div>
            <div className="next-button-container">
              <Button method={() => waterOn()} label='<-- previous' styleName='next-button' />
              <Button method={() => petOff()} label='--> finish' styleName='next-button' />
            </div>
          </div>
        </div> : null}
        {results ? 
        <div className='quizz-container'>
          <img className='hand-illustration' src={handImage} alt='pick' />
          <h1 className='pick-h1-container'>
            Our picks for you
          </h1>
          <div className="plants-container">
            <ul>
              {plantList.map((e, idx) => (
                <div key={idx} className='plant-buy-container'>
                  <img src={e.url} alt="plant"/>
                  <p>
                    {e.name}
                  </p>
                  <div className='price-status-container'>
                    {`$${e.price}`}
                  </div>
                  <Link to='/' className='buy-button'>
                    buy now
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        </div> : null}
    </div>
  );
}

export default Quizz;