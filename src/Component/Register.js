import React, { useState } from "react";
// import { useHistory } from "react-router-use-history"
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const Navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();

  const GetData = async () => {
    let data = { username, email, password };
    console.log(data);
    // url= https://retoolapi.dev/mGOLvL/data
    // loacl= http://localhost:5000

    let result = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
        Accept: "Application/json",
      },
      body: JSON.stringify(data),
    });
    result = await result.json();
    console.log("result", result);
    localStorage.setItem("user_info", JSON.stringify(result.data));
    // localStorage.setItem("token", JSON.stringify(result.auth));
    // history.push("/add")
    if (result) {
      Navigate("/");
    }
  };

  return (
    <>
      <Header />
      <div className="col-sm-4 offset-sm-4">
        <br />
        <h1>Register Page</h1>
        <br />
        <br />
        <input
          placeholder="name"
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br />
        <input
          placeholder="Email"
          type="text"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <input
          placeholder="Password"
          type="text"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="btn btn-primary" onClick={GetData}>
          Sign Up
        </button>
      </div>
    </>
  );
};

export default Register;
