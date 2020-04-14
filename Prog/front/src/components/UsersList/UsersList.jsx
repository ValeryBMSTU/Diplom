import React from "react";
import s from "./UsersList.module.css"
import * as axios from "axios";
import userDefaultAva from "../../asserts/images/dafault_ava.png"

class UsersList extends React.Component  {

   componentDidMount() {
     Math.ceil(5)

    axios.get("http://localhost:8080/users?current_page=1&count=4").then(response => {
        debugger;
        this.props.setUsers(response.data.body.users, response.data.body.users_count,
          4, 1)
      });
   }

   changePage(p) {
     debugger;
     axios.get(`http://localhost:8080/users?current_page=${p}&count=4`).then(response => {
       debugger;
       this.props.setUsers(response.data.body.users, response.data.body.users_count,
         4, p)
     });
   }

  render() {
    let pagesCount = Math.ceil(this.props.usersList.usersCount / this.props.usersList.currentCount);

    let pages = [];
    debugger;
    for (let i = 1; i <= pagesCount; i = i + 1) {
      pages.push(i)
    }

  return (
    <div>
      <div>
        {
          pages.map(p => {
            return (<span className={this.props.usersList.currentPage === p ? s.selectedPage : ""}
            onClick={() => {this.changePage(p)}}>{p}</span>)
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
          this.props.usersList.users.map(u => <div key={u.id}>
            <span>
              <div>
                <img src={u.ava !== "" ? u.ava : userDefaultAva} alt="Чет пошло не так"/>
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => {
                    this.props.unsub(u.id)
                  }}>unsubscribe</button>
                  : <button onClick={() => {
                    this.props.sub(u.id)
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
  }
}

export default UsersList;