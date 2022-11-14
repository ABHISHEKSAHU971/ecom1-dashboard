import React from "react";
import { Outlet ,Navigate} from "react-router-dom";

const Protectedregister = () => {
    const auth = localStorage.getItem("user_info");
    return auth ? <Navigate to="/add" />:<Outlet/>
}

export default Protectedregister;