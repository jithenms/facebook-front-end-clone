import React from 'react'
import { useState, useEffect } from "react";

import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import GroupIcon from '@material-ui/icons/Group';
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import './Header.css'

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

const Header = () => {
    
    const size = useWindowSize();
    
    function placeholder() {
        if (size.width < 900) {
            return null
        } else {
            return 'Search Facebook'
        }
    }

    const mockPerson = {firstName: "John",lastName: "Doe",email: 'johndoe@apple.com',age: 50};

    const brand_logo = 'https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512'
    
    return (
        <div className="header">
            <div className="header_left">
                <img src={brand_logo} alt="Facebook Logo"/>
            </div>
            <div className="header_input">
                <SearchIcon/>
                <input style={{"color": "#b0b3b8"}} placeholder={placeholder()} type="text"/>
            </div>
            <div className="header_center">
                <div className="header_option header_option--active">
                <HomeIcon fontsize="large"/>
                </div>
                <div className="header_option">
                    <GroupIcon fontsize="large"/>
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontsize="large"/>
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar src="https://avatars.githubusercontent.com/u/67240543?v=4"/>
                    <h4>{mockPerson.firstName}</h4>
                </div>
                <div className="header_info icons">
                <IconButton>
                <AddIcon style={{ fill: '#b0b3b8' }}/>
                </IconButton>
                <IconButton>
                <ForumIcon style={{ fill: '#b0b3b8' }}/>
                </IconButton>
                <IconButton>
                <NotificationsActiveIcon style={{ fill: '#b0b3b8' }}/>
                </IconButton>
                <IconButton>
                <ExpandMoreIcon style={{ fill: '#b0b3b8' }}/>
                </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header
