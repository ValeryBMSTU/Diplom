import React from 'react';
import s from "./Sim.module.css";

const Sim = (props) => {
    return (
        <div className={s.item}>
            <img src='https://avatars.mds.yandex.net/get-pdb/224463/468ff8a9-cac9-41c1-9876-c54d4f21d3a6/s1200' alt="Чет пошло не так"/>
            <a>{props.title} </a><a>{props.text}</a>
        </div>
    );
};

export default Sim;