import { InsertChartOutlinedSharp } from '@mui/icons-material'
import './inscription.css'
import user from '../../assets/img/user.jpg'
import { useState } from 'react'

const Inscription = () => {

    const [posts, setPosts] = useState({
        nom: '',
        postnom: '',
        prenom: '',
        date:'',
    })

    const handChange = (e) =>{
        setPosts((prev)=>({...prev, [e.target.name]: e.target.value}))
    }
    
  return (
    <>
        <div className="inscription-container">
            <div className="inscription">
                <div className="inscription-title">
                    <InsertChartOutlinedSharp className='presence-icon' />
                    <h2 className="inscription-h2">Inscription</h2>
                </div>
                <div className="inscription-rows">
                    <div className="inscription-left">
                        <div className="inscription-control">
                            <label htmlFor="" className="inscription-nom" >Nom</label>
                            <input type="text" className="inscription-input" name='nom' onChange={handChange} />
                        </div>

                        <div className="inscription-control">
                            <label htmlFor="" className="inscription-nom">Postnom</label>
                            <input type="text" className="inscription-input" onChange={handChange} name='postnom' />
                        </div>

                        <div className="inscription-control">
                            <label htmlFor="" className="inscription-nom">Prenom</label>
                            <input type="text" className="inscription-input" onChange={handChange} name='prenom' />
                        </div>

                        <div className="inscription-control">
                            <label htmlFor="" className="inscription-nom">Date de naissance</label>
                            <input type="date" className="inscription-input" onChange={handChange} name='datedenaissance' />
                        </div>

                        <div className="inscription-control">
                            <label htmlFor="" className="inscription-nom">Lieu de naissance</label>
                            <input type="date" className="inscription-input" onChange={handChange} name='lieudenaissance'/>
                        </div>

                        <div className="inscription-control">
                            <label htmlFor="" className="inscription-nom">Sexe</label>
                            <input type="text" className="inscription-input" onChange={handChange} />
                        </div>

                        <div className="inscription-control">
                            <label htmlFor="" className="inscription-nom">Fillier</label>
                            <input type="text" className="inscription-input largeur-input" onChange={handChange} />
                        </div>
                        <div className="inscription-control">
                            <label htmlFor="" className="inscription-nom">Annee scolaire</label>
                            <input type="text" className="inscription-input largeur-input" onChange={handChange} />
                        </div>
                        <button className="inscription-btn">Valider</button>
                    </div>
                    <div className="inscription-right">
                        <img src={user} alt="" className="inscription-img" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Inscription