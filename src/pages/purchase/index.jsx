import React, { useState, useEffect } from 'react';
import './style.css'
import api from '../../api'
import Button from '../../components/button'
// LOGO IMAGE IMPORT
import logo from '../../images/logo/logo-greenthumb.svg'
// INFORMATION IMAGES IMPORT
import highSunGrey from '../../images/icons/grey/high-sun.png';
import lowSunGrey from '../../images/icons/grey/low-sun.png';
import noSunGrey from '../../images/icons/grey/no-answer.svg';
import rarelyWaterGrey from '../../images/icons/grey/one-drop.png';
import regularlyWaterGrey from '../../images/icons/grey/two-drops.png';
import dailyWaterGrey from '../../images/icons/grey/three-drops.png';
import toxicGrey from '../../images/icons/grey/toxic.svg';
import petGrey from '../../images/icons/grey/pet.svg';

const Purchase = (props) => {
  const [plant, setPlant] = useState({})

  useEffect(() => {
    const { id } = props.match.params;
    api.get(`front-plantTest-service/plant?id=${id}`)
      .then(response => setPlant(response.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='purchase-container'>
      <img className='purchase-logo' src={logo} alt="logo" />
      <div className='purchase-side-line' />
      <div className="purchase-plant-container">
        <h1>{plant.name}</h1>
        <h3>{`$${plant.price}`}</h3>
        <img src={plant.url} alt="plant" />
        <div className="purchase-plant-status">
          <div className='purchase-status-image-plant'>
            {plant.sun === 'high' ? <img src={highSunGrey} alt="Highsun" /> : null}
            {plant.sun === 'low' ? <img src={lowSunGrey} alt="Lowsun" /> : null}
            {plant.sun === 'no' ? <img src={noSunGrey} alt="Nosun" /> : null}
            {plant.water === 'rarely' ? <img src={rarelyWaterGrey} alt="Rarely" /> : null}
            {plant.water === 'regularly' ? <img src={regularlyWaterGrey} alt="Regularly" /> : null}
            {plant.water === 'daily' ? <img src={dailyWaterGrey} alt="Daily" /> : null}
            {plant.toxicity ? <img src={toxicGrey} alt="toxic" /> : <img src={petGrey} alt="pet" />}
          </div>
          <div className='purchase-status-text-plant'>
            <p>{`${plant.sun} sunlight`}</p>
            <p>{`Water ${plant.water}`}</p>
            <p>{plant.toxicity ? <p><b>Beware!</b> Toxic for pets</p> : <p>Non-toxic for pets</p>}</p>
          </div>
        </div>
      </div>
      <div className="purchase-form-container">
        <div className='purchase-form-text-container'>
          <h1>Nice Pick!</h1>
          <p>
            Tell us your name and e-mail
            and we will get in touch
            regarding your order ;)
          </p>
          <h2>Name</h2>
          <input type="text" placeholder='Crazy Plant Person' />
          <h2>E-mail</h2>
          <input type="text" placeholder='plantperson@email.com' />
        </div>
          <Button label='send' method={() => console.log('enviouuu')} styleName='buy-button'/>
      </div>
    </div>
  );
}

export default Purchase;