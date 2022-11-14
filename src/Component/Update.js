import Header from "./Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { type } from "@testing-library/user-event/dist/type";
import {useNavigate} from "react-router-dom"

function Update() {
  const [ptname, setPtname] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState("");
  const naviagte = useNavigate()
  const params = useParams();

  useEffect(() => {
    Getdetails();
  }, []);

  const Getdetails = async () => {
    let detail = await fetch(`https://dashboard9api.herokuapp.com/update/${params.id}`, {
      
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    detail = await detail.json();

    setPtname(detail.ptname);
    setPrice(detail.price);
    setCategory(detail.category);
    setCompany(detail.company);
    setQuantity(detail.quantity);
  };
  const Updatedetails = async () => {
    console.log(ptname, category, company, price, quantity)
    let result = await fetch(`https://dashboard9api.herokuapp.com/update/${params.id}`, {
      method: "put",
      body: JSON.stringify({ ptname, category, company, price, quantity }),
      headers: {
        'Content-type': "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    })
    result = await result.json()
    naviagte("/")
    
  };

  return (
    <div>
      <Header />
      <div className="col-sm-4 offset-sm-4">
        <br />
        <h1>Update Item</h1>
        <br />
        <br />
        <input
          placeholder="Product-Name"
          type="text"
          className="form-control"
          value={ptname}
          onChange={(e) => setPtname(e.target.value)}
        />

        <br />
        <input
          placeholder="Price"
          type="text"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br />
        <input
          placeholder="Category"
          type="text"
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <br />
        <input
          placeholder="Company"
          type="text"
          className="form-control"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <br />
        <input
          placeholder="Quantity"
          type="text"
          className="form-control"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <br />

        <button className="btn btn-primary" onClick={Updatedetails}>
          Update
        </button>
      </div>
    </div>
  );
}
export default Update;
