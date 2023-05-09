import React from "react";
import Header from "./Header";
const Products = () => {
  let user = JSON.parse(localStorage.getItem("user_info"));

  return (
    <div>
      <Header />
      <h2 style={{ marginTop: 30 }}>Hiii {user && user.username} </h2>
    </div>
  );
};

export default Products;
