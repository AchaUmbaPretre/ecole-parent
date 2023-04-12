import React from 'react'
import './widgetLg.css'
import acha from './../../assets/acha.jpg'

const WidgetLg = () => {

    const Button = ({type}) =>{
      return <button className={`widgetLgBtn ${type}`}>{type}</button>
    }
  return (
    <>
        <div className="widgetLg">
          <span className="widgetTitle">Dernieres transactions</span>
          <table className="widgetLgTable">
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Client</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Montant</th>
              <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgTdUser">
                <img src={acha} className="widgetLgTdImg" alt="" />
                <span className="widgetLgName">Acha umba</span>
              </td>
              <td className="widgetLgTd">2 jan 2022</td>
              <td className="widgetLgTd">$122.00</td>
              <td className="widgetLgTd">
                <Button type='Approuvé'/>
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgTdUser">
                <img src={acha} className="widgetLgTdImg" alt="" />
                <span className="widgetLgName">Acha umba</span>
              </td>
              <td className="widgetLgTd">2 jan 2022</td>
              <td className="widgetLgTd">$122.00</td>
              <td className="widgetLgTd">
                <Button type='Diminué'/>
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgTdUser">
                <img src={acha} className="widgetLgTdImg" alt="" />
                <span className="widgetLgName">Acha umba</span>
              </td>
              <td className="widgetLgTd">2 jan 2022</td>
              <td className="widgetLgTd">$122.00</td>
              <td className="widgetLgTd">
                <Button type='Attendant'/>
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgTdUser">
                <img src={acha} className="widgetLgTdImg" alt="" />
                <span className="widgetLgName">Acha umba</span>
              </td>
              <td className="widgetLgTd">2 jan 2022</td>
              <td className="widgetLgTd">$122.00</td>
              <td className="widgetLgTd">
                <Button type='Approuvé'/>
              </td>
            </tr>
          </table>
        </div>
    </>
  )
}

export default WidgetLg