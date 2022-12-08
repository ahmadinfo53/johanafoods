import React from 'react'

const Restaurentslocations = ({cities, filterItems}) => {
  return (
    <div className='locationsbtns'>
      {cities.map((city, index) => {
        return( <button type='button' key={index} onClick = {() => filterItems(city)}> {city} </button> );
      })}
    </div>
    );
};

export default Restaurentslocations