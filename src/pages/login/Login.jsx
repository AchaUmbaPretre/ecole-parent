import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <>
        <div className="login">
          <div className="login-container">
            <h1 className="login-h1">Sign In</h1>
            <div className="form-div">
              <input type="text" className="form-input" placeholder='' />
              <label htmlFor="" className="form-label">Nom</label>
            </div>

            <div className="form-div">
              <input type="text" className="form-input" placeholder='' />
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