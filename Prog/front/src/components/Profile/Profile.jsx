import React from 'react';
import classes from './Profile.module.css'
import MySims from "./MySims/MySims";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className='myProfile'>
                <div className={classes.imgProfile}>
                    <img src='https://cont.ws/uploads/pic/2018/9/microscopic7.jpg' alt="Чет пошло не так"/>
                </div>
                <div>
                    ava + description
                </div>
                <MySims />
            </div>
        </div>
    );
};

export default Profile;