import './prof.css'
import { DataGrid } from '@mui/x-data-grid'
import { DataPresence } from '../../dummy'
import { useState } from 'react'
import { DeleteOutline, Person } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import acha from './../../assets/acha.jpg';
import Pop from '../pop/Pop'

const Users = () => {
  const [data, setData] = useState(DataPresence);
  const [close, setClose] = useState(false);

  const HandleDelete = (id) =>{
    const dataFilter = data.filter(item=> item.id !== id)
    setData(dataFilter)
  }

  const columns = [
    {field: 'id', HeaderName: 'ID', width: 70},
    {field: 'nom', HeaderName: 'nom', width: 150, renderCell: (params) =>{
      return <div className="userList">
                <img src={acha} alt="" className="userImg" />
                {params.row.nom}
             </div>
    }},
    {field: 'postnom', HeaderName: 'Postnom', width: 150},
    {field: 'prenom', HeaderName: 'Prenom', width: 120},
    {field: 'telephone', HeaderName: 'telephone', width: 120},
    {field: 'cours', HeaderName: 'cours', width: 160},
    {field: 'action', HeaderName: 'Action', width: 120, renderCell: (params) =>{
        return(
          <>
            <Link to={`/users/${params.row.id}`}><button className="userListBtn">Edit</button></Link>
            <DeleteOutline className="userListDelete" onClick={()=>{HandleDelete(params.row.id)}} />
          </>

        )
    }},
  ]

  return (
    <>
      <div className="user">
        <div className="usernew">
          <Person/>
          <button className="userbtn" onClick={()=>{setClose(!close)}} >New professeur</button>
          { close && <Pop close={close} setClose={setClose}/>
          }
        </div> 
        <DataGrid rows={data} columns={columns} pageSize={10} checkboxSelection className="userTable" />
      </div>
    </>
  )
}

export default Users