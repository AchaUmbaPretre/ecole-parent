import { ListAltOutlined } from '@mui/icons-material'
import './presence.css'

const Presence = () => {
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
                        <input type="date" className="presence-control" />
                        <button className="presence-btn">Recherche</button>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Presence