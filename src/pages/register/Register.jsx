import { useState } from 'react'
import './register.css'

const Register = () => {
  
  const [register, setRegister] = useState({
      nom:'',
      email: '',
      password: ''
  });

  const handChange =(e)=>{
    setRegister((prev)=>({...prev, [e.target.name]:e.target.value}));
  }
  console.log(register)
  return (
    <>
        <div className="login">
          <div className="login-container">
            <h1 className="login-h1">Registrer</h1>
            <div className="form-div">
              <input type="text" className="form-input" placeholder='' name="nom" onChange={handChange} />
              <label htmlFor="" className="form-label">Nom</label>
            </div>

            <div className="form-div">
              <input type="text" className="form-input" placeholder='' name="email" onChange={handChange} />
              <label htmlFor="" className="form-label">Email</label>
            </div>
            <div className="form-div">
              <input type="text" className="form-input" placeholder='' name="password" onChange={handChange} />
              <label htmlFor="" className="form-label">Password</label>
            </div>
            <button className="login-btn">register</button>

          </div>
        </div>
    </>
  )
}

export default Register