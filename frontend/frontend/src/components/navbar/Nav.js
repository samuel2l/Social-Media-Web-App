import React from 'react'
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import './nav.css'
export default function Nav() {
  return (
<div className="navBarContainer">
      <div className="navBarLeft">
        <span className="logo">echoSpace</span>
      </div>
      <div className="navBarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend,post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="navBarRight">
        <div className="navBarLinks">
          <span className="navBarLink">Home</span>
          <span className="navBarLink">Posts For you</span>
        </div>
        <div className="navBarIcons">
          <div className="navBarIconItem">
            <Person />
            <span className="navBarIconBadge">1</span>
          </div>
          <div className="navBarIconItem">
            <Chat />
            <span className="navBarIconBadge">2</span>
          </div>
          <div className="navBarIconItem">
            <Notifications />
            <span className="navBarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="navBarImg"/>
      </div>
    </div>
  
  )
}
