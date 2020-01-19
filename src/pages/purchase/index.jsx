import React, { useState, useEffect, useCallback } from 'react';
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
import letterImage from '../../images/illustrations/envelop.png'

const Purchase = (props) => {
  const [plant, setPlant] = useState({});
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [inputClassName, setInputClassName] = useState('purchase-form-input');
  const [inputClassEmail, setInputClassEmail] = useState('purchase-form-input');
  const [inputTitleClassName, setInputTitleClassName] = useState('purchase-form-input-title');
  const [inputTitleClassEmail, setInputTitleClassEmail] = useState('purchase-form-input-title');
  const [send, setSend] = useState(false);



  useEffect(() => {
    const { id } = props.match.params;
    api.get(`front-plantTest-service/plant?id=${id}`)
      .then(response => setPlant(response.data))
      .catch(err => console.log(err))
  }, [props.match.params])

  const onChangeName = useCallback((e) => {
    let { value } = e.target;
    const filter = /^[a-zA-Z\s]+$/;
    if (value === '' || filter.test(value)) {
      setNameValue(e.target.value)
    }
  }, [])

  const onChangeEmail = useCallback((e) => {
    let { value } = e.target;
    if (value === '' || value) {
      setEmailValue(e.target.value)
    }
  }, [])

  const onClick = () => {
    const filterEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ;
    const filterName = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){1,4}$/;

    if (!emailValue || !filterEmail.test(emailValue)) {
      setErrorEmail('please provide a valid e-mail');
      setInputClassEmail('input-error');
      setInputTitleClassEmail('input-title-error')
    }

    if (!nameValue || !filterName.test(nameValue)) {
      setErrorName('please provide your full name');
      setInputClassName('input-error');
      setInputTitleClassName('input-title-error')
    }

    else {
      setErrorName('');
      setErrorEmail('');
      setInputClassName('purchase-form-input');
      setInputClassEmail('purchase-form-input');
      setInputTitleClassName('purchase-form-input-title');
      setInputTitleClassEmail('purchase-form-input-title');
      setSend(true);
      api.post('front-plantTest-service', {
        name: nameValue,
        email: emailValue,
        id: plant.id
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

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
            <p>{plant.toxicity ? `Beware! Toxic for pets` : 'Non-toxic for pets'}</p>
          </div>
        </div>
      </div>
      <div className="purchase-form-container">
        {send ?
          <div className='purchase-form-send'>
              <h1>Thank you!</h1>
              <p>you will hear from us soon. Please check your e-mail!</p>
              <img src={letterImage} alt="letter"/>
          </div> :
          <div className='purchase-form-text-container'>
            <h1>Nice Pick!</h1>
            <p className='purchase-form-p'>
              Tell us your name and e-mail
              and we will get in touch
              regarding your order ;)
          </p>
            <h2 className={inputTitleClassName}>Name</h2>
            <input type="text" placeholder='Crazy Plant Person' onChange={onChangeName} value={nameValue} className={inputClassName} />
            <p className='error'>{errorName}</p>
            <h2 className={inputTitleClassEmail}>E-mail</h2>
            <input type="text" placeholder='plantperson@email.com' onChange={onChangeEmail} value={emailValue} className={inputClassEmail} />
            <p className='error'>{errorEmail}</p>
          </div>
        }
        {send ? null :
          <div className='purchase-button-container'>
            <Button label='send' method={() => onClick()} styleName='send-button' />
          </div>
        }
      </div>
    </div>
  );
}

export default Purchase;