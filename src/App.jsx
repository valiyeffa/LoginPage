import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const user = {
  email: "admin@123",
  password: "admin"
}

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [showPassword, setShowPassword] = useState();
  const [bg, setBg] = useState('fall');

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setBg('fall')
    } else {
      if (user.email === email && user.password === password) {
        setBg('spring')
      } else {
        setBg('winter')
      }
    }
  };

  return (
    <main className={bg}>
      <form onSubmit={formSubmit} >
        <h3>Login</h3>
        <div className="form-body">
          <div className="mb-3">
            <input type="email" placeholder='username' onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3 password">
            <input placeholder='password' type={showPassword ? "text" : "password"} onChange={(e) => { setPass(e.target.value) }} className="form-control" id="exampleInputPassword1" />
            <button className='show' onClick={passwordVisibility} > {showPassword ? <FaEyeSlash /> : <FaEye />}</button>
          </div>

          <button type="submit" className="btn">LOGIN</button>
        </div>

        <p>Not registered? <a href="#">Create an account</a></p>
      </form>
    </main>
  )
}

export default App