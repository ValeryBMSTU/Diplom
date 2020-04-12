import React from "react";
import s from "./UsersList.module.css"
import * as axios from "axios";
import userDefaultAva from "../../asserts/images/dafault_ava.png"

const UsersList = (props) => {

  if (props.usersList.users.length === 0) {

    axios.get("http://localhost:8080/users").then(response => {
        debugger;
        props.setUsers(response.data)
      });



    // props.setUsers(
    //   [
    //       {
    //         id: 1, fullName: "Bozhe",
    //         status: "nil", country: "Belarus",
    //         city: "Minsk", followed: true
    //       },
    //       {
    //         id: 2, fullName: "Kirik",
    //         status: "nil", country: "Belarus",
    //         city: "Minsk", followed: false
    //       },
    //       {
    //         id: 3, fullName: "Danya",
    //         status: "nil", country: "Belarus",
    //         city: "Minsk", followed: true
    //       },
    //       {
    //         id: 3, fullName: "Danya",
    //         status: "nil", country: "Belarus",
    //         city: "Minsk", followed: true
    //       },
    //       {
    //         id: 4, fullName: "Bob Robinson",
    //         status: "nil", country: "Belarus",
    //         city: "Minsk", followed: false
    //       },
    //       {
    //         id: 5, fullName: "Dima Lebedev",
    //         status: "nil", country: "Belarus",
    //         city: "Minsk", followed: false
    //       },
    //       {
    //         id: 6, fullName: "Dun Shon",
    //         status: "nil", country: "Belarus",
    //         city: "Minsk", followed: true
    //       },
    //       {
    //         id: 7, fullName: "Ali",
    //         status: "nil", country: "Belarus",
    //         city: "Minsk", followed: false
    //       },
    //       {
    //         id: 8, fullName: "Nina",
    //         status: "nil", country: "Belarus",
    //         city: "Minsk", followed: true
    //       },
    //   ]
    // );
  }

  return (
    <div className={s.item}>
      {
        props.usersList.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.ava !== "" ? u.ava : userDefaultAva}/>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => {props.unsub(u.id)}}>unsubscribe</button>
                : <button onClick={() => {props.sub(u.id)}}>subscribe</button>}
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
  )
};

export default UsersList;