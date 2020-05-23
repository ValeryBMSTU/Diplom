import {NavLink} from "react-router-dom";
import s from "./Dlg.module.css"
import React from "react";


const Dlg = (props) => {
  return (
    <div className={s.dlg}>
      <img src='https://avatars.mds.yandex.net/get-pdb/224463/468ff8a9-cac9-41c1-9876-c54d4f21d3a6/s1200'
           alt="Чет пошло не так"/>
      <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  )
};

export default Dlg;