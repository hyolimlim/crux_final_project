import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalPortal from "../Pages/Login/MordalPortal";
import LoginModal from "../Pages/Login/LoginModal";
import Legister from "../Pages/Register/Register";
import Alam from "./Alam";

const Navbar = () => {
  const userToken = window.localStorage.getItem("access_token")
  const userId = window.localStorage.getItem("userId")
  // console.log(userToken)
  const removeToken = () => {
     localStorage.removeItem("access_token")
     localStorage.removeItem("userId")
     alert('로그아웃 되었습니다.')
     window.location.reload()
  }

  const navigate = useNavigate();

  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  const handleLoginModal = () => {
    setLoginVisible(!loginVisible);
  };

  const handleRegisterModal = () => {
    setRegisterVisible(!registerVisible);
  };

  return (
    <NavContainer>
      <ModalPortal>
        {loginVisible && <LoginModal onClose={handleLoginModal} />}
        {registerVisible && <Legister onClose={handleRegisterModal} />}
      </ModalPortal>
      <NavContent>
        <NavMain type="button" onClick={() => {navigate("/")}}>
          CRUX
        </NavMain>
        <NavCrew type="button" onClick={() => {navigate("/crews")}}>
          크루 모임
        </NavCrew>
        <NavCreateCrew type="button" onClick={() => {navigate("/createcrew")}}> 
          크루 생성
        </NavCreateCrew>
        <NavGym type="button" onClick={() => {navigate("/gyms")}}>
          클라이밍짐 후기
        </NavGym>
          
          {
            userToken !== null ?
            <>
              <Alam />
              <NavLogin type="button" onClick={()=>{navigate(`/members/${userId}`)}}>
                MYPAGE
              </NavLogin>

              <NavRegister type="button" onClick={removeToken} >
                LOGOUT
              </NavRegister>
            </>

            :

            <>
              <NavLogin type="button" onClick={handleLoginModal}>
                LOGIN
              </NavLogin>

              <NavRegister type="button" onClick={handleRegisterModal}>
                REGISTER
              </NavRegister>
            </>
          }
          
      </NavContent>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  background-color: #000000;
`;

const NavContent = styled.div`
  width: 120rem;
  margin: 10rem 36rem 4.2rem 36rem;
  align-items: baseline;
  color: #999999;
`;

const NavMain = styled.span`
margin: 0 60px 0 0;
font-family: GothamBold;
font-size: 40px;
font-weight: 700;
letter-spacing: -2px;
text-align: left;
color: #ffffff;
`

const NavCrew = styled.span`
margin: 0 40px 0 0;
font-size: 20px;
font-weight: 500;
letter-spacing: -1px;
text-align: left;
`

const NavCreateCrew = styled.span`
margin: 0 40px 0 0;
font-size: 20px;
font-weight: 500;
letter-spacing: -1px;
text-align: left;
`
const NavGym = styled.span`
margin: 0 0 0 0;
font-size: 20px;
font-weight: 500;
letter-spacing: -1px;
text-align: left;
`

const NavLogin = styled.span`
margin: 0 25px 0 390px;
font-size: 16px;
font-weight: 500;
`

const NavRegister = styled.span`
font-size: 16px;
font-weight: 500;
`

export default Navbar;