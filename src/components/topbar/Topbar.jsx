import { Language, NotificationsNone, Settings, WbSunnyOutlined } from '@mui/icons-material'
import React from 'react'
import acha from './../../assets/acha.jpg'
import './topbar.css'

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <span className="logo">achadmin</span>
        <div className="topbar-right">
          <div className="topbar-icons">
            <NotificationsNone/>
            <span className="topbar-not">2</span>
          </div>
          <div className="topbar-icons">
            <Language/>
            <span className="topbar-not">2</span>
          </div>
          <div className="topbar-icons">
            <WbSunnyOutlined/>
          </div>
          <div className="topbar-icons">
            <img src={acha} alt="" className="topbar-img"/>
          </div>
          <div className="topbar-icons">
            <Settings/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar