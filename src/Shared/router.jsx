import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

        </Routes>
    );
}

export default Router;