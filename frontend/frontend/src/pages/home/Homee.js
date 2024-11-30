import React from 'react'
import Nav from '../../components/navbar/Nav'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from "../../components/feed/Feed"
import XX from "../../components/rightbar/Rightbar"
import './home.css'
export default function Home() {
  return (
<>
<Nav />
<div className="homeContainer">
        <Sidebar />
        <Feed/>
        <XX  />
      </div>
</>
  )
}
