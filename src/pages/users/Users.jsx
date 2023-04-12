import './users.css'
import { DataGrid } from '@mui/x-data-grid'
import acha from './../../assets/acha.jpg'
import { rows } from '../../dummy'
import { useState } from 'react'
import { DeleteOutline } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Users = () => {
  const [data, setData] = useState(rows);

  const HandleDelete = (id) =>{
    const dataFilter = data.filter(item=> item.id !== id)
    setData(dataFilter)
  }

  const columns = [
    {field: 'id', HeaderName: 'ID', width: 70},
    {field: 'username', HeaderName: 'Username', width: 200, renderCell: (params) =>{
      return <div className="userList">
                <img src={params.row.avatar} alt="" className="userImg" />
                {params.row.username}
             </div>
    }},
    {field: 'email', HeaderName: 'Email', width: 220},
    {field: 'status', HeaderName: 'Status', width: 120},
    {field: 'transactions', HeaderName: 'Transactions Volume', width: 160},
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
      <div className="user">
        <DataGrid rows={data} columns={columns} pageSize={10} checkboxSelection className="userTable" />
      </div>
    </>
  )
}

export default Users