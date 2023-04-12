import React from 'react'
import './widgetSm.css'
import acha from './../../assets/acha.jpg'
import { RemoveRedEye } from '@mui/icons-material'

const WidgetSm = () => {
  return (
    <>
        <div className="widgetSm">
            <span className="widgetTitle">Nouveaux membres</span>
            <ul className="widgetUl">
                <li className="widgetLi">
                    <img src={acha} alt="" className="widgetImg" />
                    <div className="widgetRows">
                        <span className="widgetSmUsername">Acha umba</span>
                        <span className="widgetSmUserTitle">Developper Front-end</span>
                    </div>
                    <button className="widgetSmBtn">
                        <RemoveRedEye className="widgetSmBtnIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetLi">
                    <img src={acha} alt="" className="widgetImg" />
                    <div className="widgetRows">
                        <span className="widgetSmUsername">Acha umba</span>
                        <span className="widgetSmUserTitle">Developper Front-end</span>
                    </div>
                    <button className="widgetSmBtn">
                        <RemoveRedEye className="widgetSmBtnIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetLi">
                    <img src={acha} alt="" className="widgetImg" />
                    <div className="widgetRows">
                        <span className="widgetSmUsername">Acha umba</span>
                        <span className="widgetSmUserTitle">Developper Front-end</span>
                    </div>
                    <button className="widgetSmBtn">
                        <RemoveRedEye className="widgetSmBtnIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetLi">
                    <img src={acha} alt="" className="widgetImg" />
                    <div className="widgetRows">
                        <span className="widgetSmUsername">Acha umba</span>
                        <span className="widgetSmUserTitle">Developper Front-end</span>
                    </div>
                    <button className="widgetSmBtn">
                        <RemoveRedEye className="widgetSmBtnIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetLi">
                    <img src={acha} alt="" className="widgetImg" />
                    <div className="widgetRows">
                        <span className="widgetSmUsername">Acha umba</span>
                        <span className="widgetSmUserTitle">Developper Front-end</span>
                    </div>
                    <button className="widgetSmBtn">
                        <RemoveRedEye className="widgetSmBtnIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    </>
  )
}

export default WidgetSm