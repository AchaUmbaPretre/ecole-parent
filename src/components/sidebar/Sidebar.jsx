import { Link } from 'react-router-dom'
import React from 'react'
import './sidebar.css'
import { LineStyle,Timeline, TrendingUp } from '@mui/icons-material'

const Sidebar = () => {
  return (
    <>
        <div className="sidebar">
            <div className="sidebarWrapper">
              <div className="sidebarMenu">
                <h3 className="sidebarH3">Dashboard</h3>
                <ul className="sidebarUl">
                  <Link to={'/'}><li className="sidebarLi active"><LineStyle className="sidebarIcon"/>Accueil</li></Link>
                  <Link to={'/users'}><li className="sidebarLi"><Timeline className="sidebarIcon"/>Publications</li></Link>
                  <Link><li className="sidebarLi"><TrendingUp className="sidebarIcon"/>Présences</li></Link>
                </ul>
              </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar