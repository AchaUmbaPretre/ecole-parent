import './pop.css'
import { Close } from '@mui/icons-material'
import { useState } from 'react';

const Pop = ({close, setClose}) => {
    const [posts, setPosts] = useState({});
    
    const handChange = (e) =>{
        setPosts((prev)=>({...prev, [e.target.name]:e.target.value}))
    }
    console.log(posts)
  return (
    <>
                <div className="user-rows">
          <div className="user-pop">
            <Close className='user-clock' onClick={()=>{setClose(!close)}}/>
            <div className="Prof-control">
              <label htmlFor="" className="inscription-nom">Nom</label>
              <input type="text" className="Prof-input" placeholder='ecrire le nom...' name='nom' onChange={handChange} />
            </div>

            <div className="Prof-control">
              <label htmlFor="" className="inscription-nom">Postnom</label>
                <input type="text" className="Prof-input" placeholder='ecrire le postnom...' name='postnom' onChange={handChange}  />
            </div>

            <div className="Prof-control">
              <label htmlFor="" className="inscription-nom">Prenom</label>
              <input type="text" className="Prof-input" placeholder='ecrire le prenom...' name='prenom' onChange={handChange}  />
            </div>

            <div className="Prof-control">
              <label htmlFor="" className="inscription-nom">Adresse</label>
                <input type="text" className="Prof-input" placeholder="ecrire l'adresse..." name='adresse' onChange={handChange}  />
            </div>

            <div className="Prof-control">
              <label htmlFor="" className="inscription-nom">Telephone</label>
              <input type="tel" className="Prof-input" placeholder='ecrire le numero...' name='telephone' onChange={handChange}  />
            </div>

            <div className="Prof-control">
              <label htmlFor="" className="inscription-nom">Cours</label>
              <input type="text" className="Prof-input" placeholder='cours...' name='cours' onChange={handChange} />
            </div>
            <button className="inscription-btn">Valider</button>
          </div>
        </div>
    </>
  )
}

export default Pop