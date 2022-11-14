import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-use-history"
import Header from "./Header";
        

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  
  useEffect(() => {
    if (localStorage.getItem('user_info')) {
      console.log("login eff")
      history.push("./add")
    }
    
  }, [])
  
  const login = async () => {
    let data = { email, password }
    let result = await fetch("https://dashboard9api.herokuapp.com/login", {
      method: "post",
      
      headers: {
        "content-type": "Application/json",
        "Accept":"Application/json"
      },
      body:JSON.stringify(data)
    })
    result = await result.json()
    // console.log(result)
    if (result.auth) {
      localStorage.setItem("user_info", JSON.stringify(result.data))
      localStorage.setItem("token", JSON.stringify(result.auth))
      navigate("/add")
    }
    else {
      alert("Enter correct Details")
    }
    
  }
  
  return (
    <><Header />
      
      <div className='col-sm-4 offset-sm-4' >
      <br/>
      <h1>
        Login
      </h1>
      <br/>
      <br/>
      <input placeholder='Email' type="text" className='form-control' value={email}  onChange={(e)=>setEmail(e.target.value)} /> <br/>
      <input placeholder='Password' type="text" className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} /><br />
      <button className='btn btn-primary' onClick={login} >login</button>
      
      </div>
    </>
  )
}

export default Login