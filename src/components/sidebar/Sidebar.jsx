import { Link } from 'react-router-dom'
import React from 'react'
import './sidebar.css'
import { AttachMoney, Feedback, LineStyle, MailOutline, ManageAccounts, MessageOutlined, ProductionQuantityLimitsTwoTone, Report,Timeline, TrendingUp } from '@mui/icons-material'

const Sidebar = () => {
  return (
    <>
        <div className="sidebar">
            <div className="sidebarWrapper">
              <div className="sidebarMenu">
                <h3 className="sidebarH3">Dashboard</h3>
                <ul className="sidebarUl">
                  <Link><li className="sidebarLi active"><LineStyle className="sidebarIcon"/>Accueil</li></Link>
                  <Link><li className="sidebarLi"><Timeline className="sidebarIcon"/>Analytique</li></Link>
                  <Link><li className="sidebarLi"><TrendingUp className="sidebarIcon"/>Cout</li></Link>
                  <Link><li className="sidebarLi"></li></Link>
                </ul>
              </div>

              <div className="sidebarMenu">
                <h3 className="sidebarH3">Menu Rapide</h3>
                <ul className="sidebarUl">
                  <Link to={'/users'}><li className="sidebarLi"><LineStyle className="sidebarIcon"/>Utilisateur</li></Link>
                  <Link><li className="sidebarLi"><ProductionQuantityLimitsTwoTone className="sidebarIcon"/>Produits</li></Link>
                  <Link><li className="sidebarLi"><AttachMoney className="sidebarIcon"/>Transactions</li></Link>
                </ul>
              </div>

              <div className="sidebarMenu">
                <h3 className="sidebarH3">Notifications</h3>
                <ul className="sidebarUl">
                  <Link><li className="sidebarLi"><MailOutline className="sidebarIcon"/>Mail</li></Link>
                  <Link><li className="sidebarLi"><Feedback className="sidebarIcon"/>Feedback</li></Link>
                  <Link><li className="sidebarLi"><MessageOutlined className="sidebarIcon"/>Messages</li></Link>
                </ul>
              </div>

              <div className="sidebarMenu">
                <h3 className="sidebarH3">Staff</h3>
                <ul className="sidebarUl">
                  <Link><li className="sidebarLi"><ManageAccounts className="sidebarIcon"/>Manage</li></Link>
                  <Link><li className="sidebarLi"><Timeline className="sidebarIcon"/>Analytique</li></Link>
                  <Link><li className="sidebarLi"><Report className="sidebarIcon"/>Reports</li></Link>
                </ul>
              </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar