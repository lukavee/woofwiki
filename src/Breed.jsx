import React from 'react'

const Breed = ({breedInfo}) => {
  return (
    <div className='dog-info-container'>
      <h2>{breedInfo.name}</h2>
      <p>{breedInfo.description}</p>
      <img src={breedInfo.image} alt={breedInfo.name} />
    </div>
  )
}

export default Breed
