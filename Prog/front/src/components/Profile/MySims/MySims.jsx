import React from 'react';
import Sim from './Sim/Sim'

const MySims = () => {
    return (
        <div className='sims'>
            My simulations
            <Sim title='My first sim' text='Random text'/>
            <Sim title='My second sim' text='I love science'/>
            <Sim title='My third sim' text='My name is bob'/>
        </div>
    );
};

export default MySims;