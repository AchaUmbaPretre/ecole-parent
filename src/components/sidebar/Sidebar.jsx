import { Link } from 'react-router-dom'
import React from 'react'
import './sidebar.css'
import { LineStyle,ListAltOutlined, Person3Outlined, Person4TwoTone, PublishedWithChangesTwoTone } from '@mui/icons-material'

const Sidebar = () => {
  return (
    <>
        <div className="sidebar">
            <div className="sidebarWrapper">
              <div className="sidebarMenu">
                <h3 className="sidebarH3">Dashboard</h3>
                <ul className="sidebarUl">
                  <Link to={'/'}><li className="sidebarLi active"><LineStyle className="sidebarIcon"/>Accueil</li></Link>
                  <Link to={'/eleves'}><li className="sidebarLi"><Person3Outlined className="sidebarIcon"/>Eleves</li></Link>
                  <Link to={'/inscription'}><li className="sidebarLi"><PublishedWithChangesTwoTone className="sidebarIcon"/>Inscription</li></Link>
                  <Link to={'/prof'}><li className="sidebarLi"><Person4TwoTone className="sidebarIcon"/>Professeurs</li></Link>
                  <Link to={'/publications'}><li className="sidebarLi"><PublishedWithChangesTwoTone className="sidebarIcon"/>Publications</li></Link>
                  <Link to={'/presence'} ><li className="sidebarLi"><ListAltOutlined  className="sidebarIcon"/>Présences</li></Link>
                </ul>
              </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar