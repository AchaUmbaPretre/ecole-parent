import { ListAltOutlined } from '@mui/icons-material'
import './presence.css'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Presence = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <>
        <div className="presence">
            <div className="presence-container">
                <div className="presence-title">
                    <ListAltOutlined className='presence-icon'/>
                    <h2 className="presenceh2">PRESENCE</h2>
                </div>
                <div className="presence-rows">
                    <h2 className="presence-sous-h2">MOIS ET ANNEE</h2>
                    <div className="presence-row">
                        <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} className="presence-control"/>
                        <button className="presence-btn">Recherche</button>
                    </div>
                </div>

                <div className="presence-rows2">
                    <div className="presence-container2">
                        <div className="presence-mois">
                            <label className="presence-span">Dimanche</label>
                            <input type="number" className="presence-input" />
                        </div>

                        <div className="presence-mois">
                            <label className="presence-span yellow">Jour Férié</label>
                            <input type="number" className="presence-input" />
                        </div>

                        <div className="presence-mois">
                            <label className="presence-span black">Jour Surplus</label>
                            <input type="number" className="presence-input" />
                        </div>
                    </div>
                    <div className="row-btn">
                        <button className="presence-btn2">Ajouter</button>
                    </div>
                </div>

                <div className="presence-tableau">
                    <table>
                        <tr className="line-odd">
                            <td className="line-td line">ELEVE</td>
                            <td className="line-td line">STATISTIQUE</td>
                            <td className="line-td line">01</td>
                            <td className="line-td line">02</td>
                            <td className="line-td line">04</td>
                            <td className="line-td line">05</td>
                            <td className="line-td line">06</td>
                            <td className="line-td line">07</td>
                            <td className="line-td line">08</td>
                            <td className="line-td line">09</td>
                            <td className="line-td line">10</td>
                            <td className="line-td line">11</td>
                            <td className="line-td line">12</td>
                            <td className="line-td line">13</td>
                            <td className="line-td line">14</td>
                            <td className="line-td line">15</td>
                            <td className="line-td line">16</td>
                            <td className="line-td line">17</td>
                            <td className="line-td line">18</td>
                            <td className="line-td line">19</td>
                            <td className="line-td line">20</td>
                            <td className="line-td line">21</td>
                            <td className="line-td line">22</td>
                            <td className="line-td line">23</td>
                            <td className="line-td line">24</td>
                            <td className="line-td line">25</td>
                        </tr>
                        <tr className="line-even">
                        <td className="line-td">Acha ndambi</td>
                            <td className="line-td">
                                <div className="present-rows">
                                    <div className="present-row3">
                                        <span className="present-title">Present</span>
                                        <span className="present-num">10</span>
                                    </div>
                                    <div className="present-row3">
                                        <span className="present-title">Absent</span>
                                        <span className="present-num">10</span>
                                    </div>
                                    <div className="present-row3">
                                        <span className="present-title">Total</span>
                                        <span className="present-num">20</span>
                                    </div>
                                </div>
                            </td>
                            <td className="line-td">X</td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td">X</td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td">x</td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td">X</td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td">x</td>
                        </tr>

                        <tr className="line-even">
                        <td className="line-td">Acha</td>
                            <td className="line-td">
                                <div className="present-rows">
                                    <div className="present-row3">
                                        <span className="present-title">Present</span>
                                        <span className="present-num">10</span>
                                    </div>
                                    <div className="present-row3">
                                        <span className="present-title">Absent</span>
                                        <span className="present-num">10</span>
                                    </div>
                                    <div className="present-row3">
                                        <span className="present-title">Total</span>
                                        <span className="present-num">20</span>
                                    </div>
                                </div>
                            </td>
                            <td className="line-td">x</td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td">X</td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td">x</td>
                        </tr>

                        <tr className="line-even">
                        <td className="line-td">Acha Umba</td>
                            <td className="line-td">
                                <div className="present-rows">
                                    <div className="present-row3">
                                        <span className="present-title">Present</span>
                                        <span className="present-num">10</span>
                                    </div>
                                    <div className="present-row3">
                                        <span className="present-title">Absent</span>
                                        <span className="present-num">10</span>
                                    </div>
                                    <div className="present-row3">
                                        <span className="present-title">Total</span>
                                        <span className="present-num">20</span>
                                    </div>
                                </div>
                            </td>
                            <td className="line-td">x</td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td">x</td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td">x</td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td">X</td>
                        </tr>

                        <tr className="line-even">
                        <td className="line-td">Ndambi</td>
                            <td className="line-td">
                                <div className="present-rows">
                                    <div className="present-row3">
                                        <span className="present-title">Present</span>
                                        <span className="present-num">10</span>
                                    </div>
                                    <div className="present-row3">
                                        <span className="present-title">Absent</span>
                                        <span className="present-num">10</span>
                                    </div>
                                    <div className="present-row3">
                                        <span className="present-title">Total</span>
                                        <span className="present-num">20</span>
                                    </div>
                                </div>
                            </td>
                            <td className="line-td">X</td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td">X</td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td">X</td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td">X</td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td">X</td>
                        </tr>

                        <tr className="line-even">
                        <td className="line-td">Movoto</td>
                            <td className="line-td">
                                <div className="present-rows">
                                    <div className="present-row3">
                                        <span className="present-title">Present</span>
                                        <span className="present-num">10</span>
                                    </div>
                                    <div className="present-row3">
                                        <span className="present-title">Absent</span>
                                        <span className="present-num">10</span>
                                    </div>
                                    <div className="present-row3">
                                        <span className="present-title">Total</span>
                                        <span className="present-num">20</span>
                                    </div>
                                </div>
                            </td>
                            <td className="line-td">X</td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td">X</td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td">X</td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td">X</td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td"></td>
                            <td className="line-td">X</td>
                        </tr>
                    </table>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Presence