import React, { useEffect } from 'react'
import { useHistory } from "react-router-use-history"
import Header from "./Component/Header";
        

const Login = (props) => {
    let Cmp = props.cmp
  const history = useHistory();
  
  useEffect(() => {
    if (!localStorage.getItem('user_info')) {
      
      history.push("./register")
    }
    
  },[])
  
  return (
    <>
    <Cmp/>
    </>
  )
}

export default Login