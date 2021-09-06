import React from 'react'
import {useState} from 'react'; 
import {NavLink} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu'; 
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

import "./Header.css";

function Header() {
    const [inputSearch , setinputSearch] = useState('');
    return (
        <>
        <div className = "header">
            <div className = "header__left">
                <MenuIcon/>
                <NavLink  to = "/">
                <img className = "header__logo" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt = ""/>
                </NavLink>
            </div>
            <div className = "header__input">
                <input value = {inputSearch} onChange = {e => setinputSearch(e.target.value)} type = "text" placeholder = "Search" />
                <NavLink className = "inactive" to = {`/search/${inputSearch}`} >
                <SearchIcon className = "header__inputButton"/>
                </NavLink>
            </div>
            <div className = "header__icons">
                <VideoCallIcon className = "header__icon" />
                <AppsIcon className = "header__icon"/>
                <NotificationsIcon className = "header__icon"/>
                <Avatar  alt="Akshat" src="/static/images/avatar/1.jpg" />
            </div>
        </div>
        
            
        </>
    )
}

export default Header;