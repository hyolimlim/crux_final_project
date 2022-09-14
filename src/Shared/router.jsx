import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Gym from "../Pages/GymPage/Gym";
import Crew from "../Pages/CrewPage/Crew";
import CrewDetail from "../Pages/CrewPage/CrewDetail";
import KakaoLogin from "../Pages/Login/KakaoLogin";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crews" element={<Crew />} />
      <Route path={"/crews/:crewId"} element={<CrewDetail />} />
      <Route path="/gyms" element={<Gym />} />
      <Route path="/kakaoLogin" element={<KakaoLogin />} />
    </Routes>
  );
};

export default Router;
