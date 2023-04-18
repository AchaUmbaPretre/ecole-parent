import { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {

  const [login, setLogin] = useState({
    nom : '',
    postnom: ''
  })
const handChange = (e) =>{
  setLogin((prev) =>({...prev, [e.target.name]:e.target.value}))
}

  return (
    <>
        <div className="login">
          <div className="login-container">
            <h1 className="login-h1">Sign In</h1>
            <div className="form-div">
              <input type="text" className="form-input" placeholder='' name='nom' onChange={handChange} />
              <label htmlFor="" className="form-label">Nom</label>
            </div>

            <div className="form-div">
              <input type="text" className="form-input" placeholder='' name='password' onChange={handChange} />
              <label htmlFor="" className="form-label">Password</label>
            </div>
            <button className="login-btn">envoyer</button>
            <span className="register-span"><Link to={'/register'} className="register-link">creer un compte ici</Link></span>
          </div>
        </div>
    </>
  )
}

export default Login