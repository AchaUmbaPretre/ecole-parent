import './eleves.css'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { rows } from '../../dummy'
import { useState } from 'react'
import { DeleteOutline } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Eleves = () => {

  const [data, setData] = useState(rows);

  const HandleDelete = (id) =>{
    const dataFilter = data.filter(item=> item.id !== id)
    setData(dataFilter)
  }

  const columns = [
    {field: 'id', HeaderName: 'ID', width: 70},
    {field: 'nom', HeaderName: 'Nom', width: 150, renderCell: (params) =>{
      return <div className="userList">
                <img src={params.row.avatar} alt="" className="userImg" />
                {params.row.nom}
             </div>
    }},
    {field: 'postnom', HeaderName: 'postnom', width: 150},
    {field: 'prenom', HeaderName: 'prenom', width: 100},
    {field: 'date_de_naissance', HeaderName: 'Date de naissance', width: 150},
    {field: 'lieu_de_naissance', HeaderName: 'Lieu de naissance', width: 160},
    {field: 'sexe', HeaderName: 'sexe', width: 80},
    {field: 'fillier', HeaderName: 'fillier', width: 150},
    {field: 'action', HeaderName: 'Action', width: 150, renderCell: (params) =>{
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
      <div className="eleve">
        <DataGrid rows={data} columns={columns} pageSize={10} checkboxSelection className="userTable" />
      </div>
    </>
  )
}

export default Eleves