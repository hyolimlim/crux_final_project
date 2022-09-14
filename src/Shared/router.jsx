import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Gym from "../Pages/GymPage/Gym";
import Crew from "../Pages/CrewPage/Crew";
import CrewDetail from "../Pages/CrewPage/CrewDetail";
import GymDetail from "../Pages/GymDetailPage/GymDetail";
import KakaoLogin from "../Pages/Login/KakaoLogin";
import CreateCrew from "../Pages/CrewPage/CreateCrew";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crews" element={<Crew />} />
      <Route path={"/crews/:crewId"} element={<CrewDetail />} />
      <Route path="/gyms" element={<Gym />} />
      <Route path={"/gyms/:gymId"} element={<GymDetail />} />
      <Route path="/kakaoLogin" element={<KakaoLogin />} />
      <Route path="/createcrew" element={<CreateCrew />} />
    </Routes>
  );
};

export default Router;
