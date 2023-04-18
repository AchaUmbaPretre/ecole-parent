import './register.css'

const Register = () => {
  return (
    <>
        <div className="login">
          <div className="login-container">
            <h1 className="login-h1">Registrer</h1>
            <div className="form-div">
              <input type="text" className="form-input" placeholder='' />
              <label htmlFor="" className="form-label">Nom</label>
            </div>

            <div className="form-div">
              <input type="text" className="form-input" placeholder='' />
              <label htmlFor="" className="form-label">Email</label>
            </div>
            <div className="form-div">
              <input type="text" className="form-input" placeholder='' />
              <label htmlFor="" className="form-label">Password</label>
            </div>
            <button className="login-btn">register</button>

          </div>
        </div>
    </>
  )
}

export default Register