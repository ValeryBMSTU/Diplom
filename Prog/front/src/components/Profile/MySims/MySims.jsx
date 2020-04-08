import React from 'react';
import Sim from './Sim/Sim'

const MySims = (props) => {
  let simsElements = props.simsData.map((item ) => {
    return (
      <Sim title={item.title} text={item.text} />
    )
  });

  let newSimElement = React.createRef();

  let onAddSim = () => {
    props.addSim();
  };

  let onChangeSimTitle = () => {
    props.changeSimTitle(newSimElement.current.value);
  };

  return (
    <div className='sims'>
      My simulations
      {simsElements}
      <textarea onChange={onChangeSimTitle} ref={newSimElement} value={props.newSimTitle }/>
      <button onClick={onAddSim}>Создать симуляцию</button>
    </div>
  );
};

export default MySims;