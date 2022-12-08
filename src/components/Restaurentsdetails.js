import React from 'react'

const Restaurentsdetails = ({items}) => {
  return (
    <div className='restaurentsdetailsection'>
        {items.map((menuItem) =>{
            const {id, img, location} = menuItem;
            return(<div key={id}>
                        <img src={img} alt="img" className='restaurentsimages'/>
                        <p>{location}</p>
                    </div>)
        })}
    </div>
  )
}

export default Restaurentsdetails