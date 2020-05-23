import React from "react";
import s from "./UsersList.module.css"
import userDefaultAva from "../../asserts/images/dafault_ava.png"
import {NavLink} from "react-router-dom";

let UsersList = (props) => {
  return (
    <div>
      <div>
        {
          props.uPages.map(p => {
            return (<span className={props.currentPage === p ? s.selectedPage : ""}
                          onClick={() => {props.changePage(p)}}>{p}</span>)
          })
        }
        {/*<span className={s.selectedPage}>1</span>*/}
        {/*<span className={s.selectedPage}>2</span>*/}
        {/*<span className={s.selectedPage}>3</span>*/}
        {/*<span className={s.selectedPage}>4</span>*/}
        {/*<span className={s.selectedPage}>5</span>*/}
      </div>
      <div className={s.item}>
        {
          props.users.map(u => <div key={u.id}>
              <span>
                <div>
                  <NavLink to={"/profile/" + u.id}>
                    <img src={u.ava !== "" ? u.ava : userDefaultAva} alt="Чет пошло не так"/>
                  </NavLink>
                </div>
                <div>
                  {u.followed
                    ? <button onClick={() => {
                      props.unsub(u.id)
                    }}>unsubscribe</button>
                    : <button onClick={() => {
                      props.sub(u.id)
                    }}>subscribe</button>}
                </div>
              </span>
            <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>Belarus</div>
                  <div>Minsk</div>
                </span>
              </span>
          </div>)
        }
      </div>
    </div>
  )
};

export default UsersList;