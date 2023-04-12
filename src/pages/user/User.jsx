import './user.css'
import acha from './../../assets/acha.jpg'
import { DateRange, DownloadDoneOutlined, MailLockOutlined, MessageOutlined, NotListedLocationOutlined, PhoneAndroidOutlined, SupervisedUserCircleOutlined, VerifiedUserOutlined } from '@mui/icons-material'

const User = () => {
  return (
    <>
        <div className="user">
            <div className="userTitleRow">
                <span className="widgetTitle">Edit User</span>
                <button className="userBtn">create</button>
            </div>
            <div className="userContainer">
                <div className="userRowLeft">
                    <div className="widgetLi">
                        <img src={acha} alt="" className="userImg" />
                        <div className="widgetRows">
                            <span className="widgetSmUsername">Acha umba</span>
                            <span className="widgetSmUserTitle">Developper Front-end</span>
                        </div>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarH3">Account Detail</h3>
                        <ul className="sidebarUl userUl">
                            <li className="sidebarLi"><SupervisedUserCircleOutlined className="sidebarIcon"/>Acha umba</li>
                            <li className="sidebarLi"><DateRange className="sidebarIcon"/>07.10.1900</li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarH3">Contact</h3>
                        <ul className="sidebarUl userUl">
                            <li className="sidebarLi"><PhoneAndroidOutlined className="sidebarIcon"/>+243824562776</li>
                            <li className="sidebarLi"><MailLockOutlined className="sidebarIcon"/>achandambi@gmail.com</li>
                            <li className="sidebarLi"><NotListedLocationOutlined className="sidebarIcon"/>Transactions</li>
                        </ul>
                    </div>
                </div>

                <div className="userRowRight">
                    <div className="userRowLeft1">
                        <h3 className="userH3">Edit</h3>
                        <div className="userRowLeftInput">
                            <label htmlFor="" className="userRowLeftLabel" >Username</label>
                            <input type="text" className="userInput"  placeholder='Acha umba' />
                        </div>
                        <div className="userRowLeftInput">
                            <label htmlFor="" className="userRowLeftLabel">Full name</label>
                            <input type="text" className="userInput"  placeholder='Acha umba' />
                        </div>
                        <div className="userRowLeftInput">
                            <label htmlFor="" className="userRowLeftLabel">Email</label>
                            <input type="text" className="userInput"  placeholder='achandambi@gmail.com' />
                        </div>
                        <div className="userRowLeftInput">
                            <label htmlFor="" className="userRowLeftLabel">Telephone</label>
                            <input type="text" className="userInput"  placeholder='+243824562776' />
                        </div>
                        <div className="userRowLeftInput">
                            <label htmlFor="" className="userRowLeftLabel">Adresse</label>
                            <input type="text" className="userInput"  placeholder='Debonhomme' />
                        </div>
                    </div>
                    <div className="userRowRight1">
                        <div className="userRowRight2">
                            <img src={acha} alt="" className="userRownRightImg" />
                            <DownloadDoneOutlined />
                        </div>
                        <button className="userRowBtn">Modifier</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default User