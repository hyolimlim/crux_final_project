import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Gym from "../Pages/GymPage/Gym";
import Crew from "../Pages/CrewPage/Crew";
import CrewDetail from "../Pages/CrewPage/CrewDetail";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="/crews" element={<Crew />}/>
            <Route path={"/crews/:crewId"} element={<CrewDetail />}/>
            <Route path="/gyms" element={<Gym />} />

        </Routes>
    );
}

export default Router;