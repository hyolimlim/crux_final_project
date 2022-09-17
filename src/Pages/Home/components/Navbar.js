import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalPortal from "../../Login/MordalPortal";
import LoginModal from "../../Login/LoginModal";
import Register from "../../Register/Register";

const Navbar = () => {

  const userToken = window.localStorage.getItem("access_token")
  // console.log(userToken)
  const removeToken = () => {
     localStorage.removeItem("access_token")
     alert('로그아웃 되었습니다.')
     navigate('/')
    //  window.location.reload('/')
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
        {registerVisible && <Register onClose={handleRegisterModal} />}
      </ModalPortal>
      <NavContent>
        <h1
          type="button"
          onClick={() => {
            navigate("/");
          }}
          style={{ fontWeight: "700" }}
        >
          CRUX
        </h1>
        <h3
          type="button"
          onClick={() => {
            navigate("/crews");
          }}
          style={{ fontWeight: "500", marginLeft: "6rem" }}
        >
          크루 모임
        </h3>
        <h3
          type="button"
          style={{ fontWeight: "500", marginLeft: "4rem" }}
          onClick={() => {
            navigate("/createcrew");
          }}
        >
          크루 생성
        </h3>
        <h3
          type="button"
          onClick={() => {
            navigate("/gyms");
          }}
          style={{ fontWeight: "500", marginLeft: "4rem" }}
        >
          클라이밍짐 후기
        </h3>
        <div style={{ display: "flex" }}>
          {
            userToken !== null ?
            <>
              <h4 type="button"
              onClick={()=>{}}
              style={{ fontWeight: "500", marginLeft: "47rem" }}
              >
                MYPAGE
              </h4>

              <h4
                type="button"
                onClick={removeToken}
                style={{ fontWeight: "500", marginLeft: "2.5rem" }}
              >
                LOGOUT
              </h4>
            </>

            :

            <>
              <h4
                type="button"
                onClick={handleLoginModal}
                style={{ fontWeight: "500", marginLeft: "47rem" }}
              >
                LOGIN
              </h4>

              <h4
                type="button"
                onClick={handleRegisterModal}
                style={{ fontWeight: "500", marginLeft: "2.5rem" }}
              >
                REGISTER
              </h4>
            </>
          }
          
        </div>
      </NavContent>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  background-color: transparent;
  z-index: 100;
  position: absolute;
  margin: 0;
  width: 192rem;
  height: 18rem;
`;

const NavContent = styled.div`
  width: 120rem;
  margin: 8rem 36rem;

  display: flex;
  flex-direction: row;
  align-items: baseline;

  color: #ffffff;
  /* top: 11rem; */
`;

export default Navbar;
