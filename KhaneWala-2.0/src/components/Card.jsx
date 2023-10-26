import React from 'react'

const Card = ({foodItems}) => {
  return (
    <div className='w-[210px] max-h-25 p-1 m-2 bg-gray-100 shadow-lg'>
     <img className='h-25' src={foodItems.img}/>
     <strong>{foodItems.name}</strong>
     <p>
      {foodItems.description}
     </p>
    </div>
  )
}

export default Card
