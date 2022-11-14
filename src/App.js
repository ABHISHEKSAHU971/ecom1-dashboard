import "./App.css";
import {} from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Addproduct from "./Component/Addproduct";
import Register from "./Component/Register";
import Update from "./Component/Update";
import Login from "./Component/Login";
import Protected from "./Protected";
import Protectedregister from "./Component/Protectedregister";
import Products from "./Component/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/add" element={<Protected cmp={Addproduct} />} />
          <Route path="/" element={<Protected cmp={Products
          } />} />
          <Route path="/update/:id" element={<Protected cmp={Update} />} />
          <Route element={<Protectedregister />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
