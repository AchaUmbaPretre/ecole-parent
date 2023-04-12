import React from 'react'
import Chart from '../../components/chart/Chart'
import FeatedInfo from '../../components/featedInfo/FeatedInfo'
import './rightbar.css'
import { data } from '../../dummy'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

const Rightbar = () => {
  return (
    <>
        <div className="rightbar">
          <FeatedInfo/>
          <Chart data={data} title='Analyse des utilisateurs' grid datakey='Active User'/>
          <div className="rightbarContainer">
            <WidgetSm/>
            <WidgetLg/>
          </div>
        </div>
    </>
  )
}

export default Rightbar