import React from 'react';
import Sim from './Sim/Sim'

const MySims = () => {
  let simsData = [
    {id: 1, title: "My first sim", text: "Random text"},
    {id: 2, title: "Already", text: "love science"},
    {id: 3, title: "GoTo", text: "My name is bob"}
  ];

  return (
    <div className='sims'>
      My simulations
      <Sim title={simsData[0].title} text={simsData[0].text} />
      <Sim title={simsData[1].title} text={simsData[1].text} />
      <Sim title={simsData[2].title} text={simsData[2].text} />
    </div>
  );
};

export default MySims;