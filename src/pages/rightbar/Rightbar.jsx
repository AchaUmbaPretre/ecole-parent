import React from 'react'
import Chart from '../../components/chart/Chart'
import FeatedInfo from '../../components/featedInfo/FeatedInfo'
import './rightbar.css'
import { data } from '../../dummy'

const Rightbar = () => {
  return (
    <>
        <div className="rightbar">
          <FeatedInfo/>
          <Chart data={data} title='Analyse de presence des eleves' grid datakey='Active User'/>
        </div>
    </>
  )
}

export default Rightbar