import React, {useState, useEffect } from 'react';

const Login = () => {

  const [titlePage, setTitlePage] = useState("Login Page")
  
  const handleSubmit = () => {
    const data = {
      username : username,
      password : password,
    }
    console.log (data);
  }
  useEffect (() => {
    setTimeout(()=> {
      setTitlePage('Welcome')
    }, 3000)
  }, [])

  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');
  return (
    <div className="container">
    <h1 className="mt-5">{titlePage}</h1>
    <label className = "form-label">Username/Email</label>
    <input className="form-control" placeholder="Masukan Username or Email" value={username} 
    onChange={(event)=>setUsername(event.target.value)}/>
    <label className = "form-label">Password</label>
    <input className="form-control" placeholder="Masukan Password"value={password} type="password"
    onChange={(event)=>setPassword(event.target.value)}/>
    <br/>
    <br/>
    <button className='btn- btn-primary' onClick={handleSubmit}>Submit</button>
  </div>
  )
}

export default Login;