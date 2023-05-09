import React, { useEffect, useState } from "react";
import Header from "./Header";
import { FloatingLabel, Form } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const [name, setName] = useState("");
  const Navigate = useNavigate();
  const params = useParams();
  let userInfo = JSON.parse(localStorage.getItem("user_info"));
  useEffect(() => {
    if (!userInfo) {
      Navigate("/");
    } else {
      setName(userInfo.username);
      console.log(userInfo._id);
    }
  }, []);

  const updatehandler = async (e) => {
    e.preventDefault();
    console.log("hello");
    let result = await fetch(`http://localhost:5000/update/${userInfo._id}`, {
      method: "PUT",
      body: JSON.stringify({ username: name }),
      headers: {
        "Content-type": "application/json",
        Accept: "Application/json",
      },
    });
    result = await result.json();
    localStorage.setItem(
      "user_info",
      JSON.stringify({ userInfo, username: name })
    );

    Navigate("/");
  };

  return (
    <div>
      <Header />
      <div className="col-sm-4 offset-sm-4">
        <br />
        <h1>Update Details</h1>
        <br />
        <br />
        <Form onSubmit={updatehandler}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Change Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <br />
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Dashboard;
