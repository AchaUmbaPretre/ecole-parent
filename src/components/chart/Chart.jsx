import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts'

const Chart = ({data, title, grid, datakey}) => {

    console.log(datakey)
  return (
    <>
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey='name' stroke='brown'/>
                    <Line type='monotone' dataKey={datakey} stroke='brown'/>
                    <Tooltip/>
                    <CartesianGrid stroke='gray' strokeDasharray='5 5'/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    </>
  )
}

export default Chart