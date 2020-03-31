import React from 'react';
import Sim from './Sim/Sim'

const MySims = (props) => {
  let simsElements = props.data.simsData.map((item ) => {
    return (
      <Sim title={item.title} text={item.text} />
    )
  });

  return (
    <div className='sims'>
      My simulations
      {simsElements}
    </div>
  );
};

export default MySims;