import Header from "./Header";
import { useState } from "react";

function Addproduct() {
  const [ptname, setPtname] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState(false);

  const item = async () => {
    let userId = JSON.parse(localStorage.getItem("user_info"))._id;
    console.log("name",ptname)
    if (!ptname || !price || !category || !company || !quantity) {
      setError(true);
      return false;
    }

    const data = { ptname, price, category, company, quantity, userId };
    let result = await fetch("https://dashboard9api.herokuapp.com/add-product", {
      
      method: "POST",
      headers: {
        "content-type": "Application/json",
        Accept: "Application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      },
      body: JSON.stringify(data),
    });
    result = await result.json();
    if (result) {
      setPrice("")
      setPtname("")
      setCompany("")
      setCategory("")
      setQuantity("")
      alert("Item Added in your Product List")
    }
  };

  return (
    <div>
      <Header />
      <div className="col-sm-4 offset-sm-4">
        <br />
        <h1>Add Product</h1>
        <br />
        <br />
        <input
          placeholder="Product-Name"
          type="text"
          className="form-control"
          value={ptname}
          onChange={(e) => setPtname(e.target.value)}
        />
        {error && !ptname && <span>Enter Invalid name </span>}
        <br />
        <input
          placeholder="Price"
          type="text"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {error && !price && <span>Enter Invalid price </span>}
        <br />
        <input
          placeholder="Category"
          type="text"
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        {error && !category && <span>Enter Invalid category</span>}
        <br />
        <input
          placeholder="Company"
          type="text"
          className="form-control"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        {error && !company && <span>Enter Invalid company </span>}
        <br />
        <input
          placeholder="Quantity"
          type="text"
          className="form-control"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        {error && !quantity && <span>Enter Invalid quantity </span>}
        <br />

        <button className="btn btn-primary" onClick={item}>
          Add Item
        </button>
      </div>
    </div>
  );
}
export default Addproduct;
