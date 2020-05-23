import React from 'react';
import Sim from './Sim/Sim'

const MySims = (props) => {

  let simsElements = [];
  if (props.profile !== null) {
    simsElements = props.profile.sims.map((item) => {
      return (
        <Sim title={item.title} text={item.desc}/>
      )
    });
  }

  let newSimElement = React.createRef();

  let onAddSim = () => {
    props.addSim();
  };

  let onChangeSimTitle = () => {
    props.setNewSimTitle(newSimElement.current.value);
  };

  return (
    <div className='sims'>
      My simulations
      {simsElements}
      <textarea onChange={onChangeSimTitle} ref={newSimElement} value={props.newSimTitle}/>
      <button onClick={onAddSim}>Создать симуляцию</button>
    </div>
  );
};

export default MySims;