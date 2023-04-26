import { InsertChartOutlinedSharp } from '@mui/icons-material'
import './inscription.css'
import user from '../../assets/img/user.jpg'
import { useState } from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'

const Inscription = () => {

    const [posts, setPosts] = useState({});
    const  [error, setError] = useState(false)
    const navigate  = useNavigate();

    const handChange = (e) =>{
        setPosts((prev)=>({ ...prev, [e.target.name]: e.target.value }))
    }
    const handsubmit = async (e) => {
        e.preventDefault();

        try{
            await axios.post("http://localhost:8800/api/eleves/posts", posts);
            navigate('/')
        }
        catch(error){
            console.log(error)
            setError(true)
        }
    }   

  return (
    <>
        <div className="inscription-container">
            <div className="inscription">
                <div className="inscription-title">
                    <InsertChartOutlinedSharp className='inscription-icon' />
                    <h2 className="inscription-h2">INSCRIPTION</h2>
                </div>
                <div className="inscription-rows">
                    <div className="inscription-left">
                        <div className="inscription-control">
                            <label htmlFor="" className="inscription-nom" >Nom</label>
                            <input type="text" className="inscription-input" name='nom' onChange={handChange} placeholder="ecrire le nom..." />
                        </div>

                        <div className="inscription-control">
                            <label htmlFor="" className="inscription-nom">Postnom</label>
                            <input type="text" className="inscription-input" onChange={handChange} name='postnom' placeholder="ecrire le postnom..." />
                        </div>

                        <div className="inscription-control">
                            <label htmlFor="" className="inscription-nom">Prenom</label>
                            <input type="text" className="inscription-input" onChange={handChange} name='prenom' placeholder="ecrire le prenom..." />
                        </div>

                        <div className="inscription-control">
                            <label htmlFor="" className="inscription-nom">Date de naissance</label>
                            <input type="date" className="inscription-input largeur-input" onChange={handChange} name='dateDeNaissance' />
                        </div>

                        <div className="inscription-control">
                            <label htmlFor="" className="inscription-nom">Lieu de naissance</label>
                            <input type="text" className="inscription-input" onChange={handChange} name='lieuDeNaissance' placeholder="ecrire le lieu..." />
                        </div>

                        <div className="inscription-control">
                            <label htmlFor="" className="inscription-nom">Filier</label>
                            <select name="filier" id="" className="inscription-select" onChange={handChange} >
                                <optgroup label='secondaire'>
                                    <option value="premiere">premiere</option>
                                    <option value="deuxieme">deuxieme</option>
                                </optgroup>
                                <optgroup label='Electricité'>
                                    <option value="3ieme electricité">3ieme</option>
                                    <option value="4ieme electricité">4ieme</option>
                                    <option value="5ieme electricité">5ieme</option>
                                    <option value="6ieme electricité">6ieme</option>
                                </optgroup>
                                <optgroup label='Mecanique'>
                                    <option value="3ieme macanique">3ieme</option>
                                    <option value="4ieme macanique">4ieme</option>
                                    <option value="5ieme macanique">5ieme</option>
                                    <option value="6ieme macanique">6ieme</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="inscription-control">
                            <label htmlFor="" className="inscription-nom">Annee scolaire</label>
                            <input type="text" className="inscription-input largeur-input" onChange={handChange} name='anneeScolaire' />
                        </div>
                        <div className="inscription-row-radio">
                            <label htmlFor="" className="inscription-nom">Sexe :</label>
                            <div className="inscription-radio" onChange={handChange}>
                                <input type="radio" value={"homme"} name='homme' />
                                <label htmlFor="" className="inscription-nom">Homme</label>
                                <input type="radio" value={"femme"} name='homme' />
                                <label htmlFor="" className="inscription-nom">Femme</label>
                            </div>
                        </div>
                        
                        <button className="inscription-btn" onClick={handsubmit}>Valider</button>
                    </div>
                    <div className="inscription-right">
                        <label htmlFor="file"><img src={user} alt="" className="inscription-img" /></label>
                        <input type="file" id='file' style={{display:'none'}} />
                    </div>
                </div>
                { error && <span className="error">Echec de la processus......</span>}
            </div>
        </div>
    </>
  )
}

export default Inscription