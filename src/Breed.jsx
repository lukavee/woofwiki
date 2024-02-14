import React from 'react'

const Breed = ({breedInfo}) => {
  return (
    <div className='dog-info-container'>
      <h2>Breed name: {breedInfo.name}</h2>
      <p>Characteristics: <span>{breedInfo.description}</span></p>
      <img src={breedInfo.image} alt={breedInfo.name} />
    </div>
  )
}

export default Breed
