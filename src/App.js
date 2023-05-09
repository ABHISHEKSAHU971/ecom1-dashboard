import "./App.css";
import {} from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Register from "./Component/Register";
import Login from "./Component/Login";
import Protectedregister from "./Component/Protectedregister";
import Products from "./Component/Products";
import Dashboard from "./Component/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
