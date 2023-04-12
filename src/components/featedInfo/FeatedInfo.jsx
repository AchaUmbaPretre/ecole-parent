import { ArrowDownward,ArrowUpward,PriceChange,TrendingUp, TurnedInTwoTone } from '@mui/icons-material'
import React from 'react'
import './featedInfo.css'

const FeatedInfo = () => {
  return (
    <>
        <div className="featedInfo">
            <div className="featedInfo-row">
                <div className="feated-left">
                    <h3 className="featedInfo-h3">Accueil</h3>
                    <div className="feated-row">
                        <span className="feated-somme"></span>
                        <div className="feated-rows">
                            <span className="feated-span"></span>
                            <ArrowDownward className="feated-icon"/>
                        </div>
                    </div>
                    <span className="feated-desc">Par rapport au mois dernier</span>
                </div>
                <div className="feated-right">
                    <TurnedInTwoTone className="feated-icon-right"/>   
                </div>
            </div>

            <div className="featedInfo-row">
                <div className="feated-left">
                    <h3 className="featedInfo-h3">Publications</h3>
                    <div className="feated-row">
                        <span className="feated-somme">50</span>
                        <div className="feated-rows">
                            <span className="feated-span">-9.10</span>
                            <ArrowDownward className="feated-icon"/>
                        </div>
                    </div>
                    <span className="feated-desc">Par rapport au mois dernier</span>
                </div>
                <div className="feated-right">
                    <TrendingUp className="feated-icon-right"/>   
                </div>
            </div>

            <div className="featedInfo-row">
                <div className="feated-left">
                    <h3 className="featedInfo-h3">Presences</h3>
                    <div className="feated-row">
                        <span className="feated-somme">20</span>
                        <div className="feated-rows">
                            <span className="feated-span">+8.10</span>
                            <ArrowUpward className="feated-icon green"/>
                        </div>
                    </div>
                    <span className="feated-desc">Par rapport au mois dernier</span>
                </div>
                <div className="feated-right">
                    <PriceChange className="feated-icon-right"/>   
                </div>
            </div>
        </div>
    </>
  )
}

export default FeatedInfo