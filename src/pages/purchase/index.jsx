import React, {useState, useEffect} from 'react';
import './style.css'
import api from '../../api'

const Purchase = (props) => {
  const [plant, setPlant] = useState({})

  useEffect(() => {
    const {id} = props.match.params;
    api.get(`front-plantTest-service/plant?id=${id}`)
      .then(response => setPlant(response.data))
      .catch(err => console.log(err))
  }, [])
  return(
    <div>
      {plant.name}
    </div>
  );
}

export default Purchase;