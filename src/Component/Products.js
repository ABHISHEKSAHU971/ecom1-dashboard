import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Table } from "react-bootstrap";
import {  Link } from "react-router-dom";

const Products = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    Getproducts();
  }, []);

  const Getproducts = async () => {
    let data = await fetch("https://dashboard9api.herokuapp.com/products", {
      
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    data = await data.json();
    setResult(data);
    console.log(JSON.parse(localStorage.getItem("token")))
  };
  const Deleteproduct = async (id) => {
    let result = await fetch(`https://dashboard9api.herokuapp.com/delete/${id}`, {
      
      method: "delete",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    result = await result.json();
    if (result) {
      Getproducts();
    }
  };
  const searchdata = async (e) => {
    
    let key = e.target.value
    if (key) {
      let result = await fetch(`https://dashboard9api.herokuapp.com/search/${key}`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      })
      result = await result.json()
      if (result) {
        
        setResult(result)
      }
    }
    else {
      Getproducts()
    }
   
    
  }
  



  return (
    <div>
      <Header />
      <div class="input-group rounded">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={searchdata}
        />
       
      </div>

      <div className="table">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Company</th>
              <th>Quantity</th>
              <th>Remove</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {result.length > 0 ? 
              result.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.ptname}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>{item.company}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button onClick={() => Deleteproduct(item._id)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link to={"/update/" + item._id}>Update</Link>
                  </td>
                </tr>
              ))
             : <h1 className="text-h1" > No Data Product Found </h1> }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Products;
