import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "../Pages/Home/Home";
import Gym from "../Pages/GymPage/Gym";
import Crew from "../Pages/CrewPage/Crew";
import CrewDetail from "../Pages/CrewPage/CrewDetail";
import GymDetail from "../Pages/GymDetailPage/GymDetail";
import KakaoLogin from "../Pages/Login/KakaoLogin";
import CreateCrew from "../Pages/CrewPage/CreateCrew";
import CrewEdit from "../Pages/CrewPage/CrewEdit";
import Mypage from "../Pages/MyPage/Mypage";

const Router = () => {
  return (
    <Warp>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crews" element={<Crew />} />
          <Route path={"/crews/:crewId"} element={<CrewDetail />} />
          <Route path="/gyms" element={<Gym />} />
          <Route path={"/gyms/:gymId"} element={<GymDetail />} />
          <Route path="/kakaoLogin" element={<KakaoLogin />} />
          <Route path="/createcrew" element={<CreateCrew />} />
          <Route path="/crewedit/:id" element={<CrewEdit />} />
          <Route path={"/members/:memberId"} element={<Mypage />}/>
        </Routes>
      </Container>
    </Warp>
  );
};

export default Router;

const Warp = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  width: 192rem;
  height: auto;
  margin: 0 auto;
`;
