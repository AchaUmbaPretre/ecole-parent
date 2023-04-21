import { Language, NotificationsNone, Settings } from '@mui/icons-material'
import React from 'react'
import acha from './../../assets/acha.jpg'
import './topbar.css'

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <span className="logo">ITI Kitomesa</span>
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
            <img src={acha} alt="" className="topbar-img"/>
            <span className="topbar-user">admin</span>
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