import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalPortal from "../Pages/Login/MordalPortal";
import LoginModal from "../Pages/Login/LoginModal";
import Legister from "../Pages/Register/Register";

const Navbar = () => {
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
        <h1
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          CRUX
        </h1>
        <h3
          type="button"
          onClick={() => {
            navigate("/crews");
          }}
          style={{ position: "relative", left: "6rem" }}
        >
          크루 모임
        </h3>
        <h3
          type="button"
          style={{ position: "relative", left: "10rem" }}
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
          style={{ position: "relative", left: "14rem" }}
        >
          클라이밍짐 후기
        </h3>
        <div style={{ display: "flex", position: "relative", left: "60rem" }}>
          <h4 type="button" onClick={handleLoginModal}>
            LOGIN
          </h4>
          <h4
            style={{ position: "relative", left: "2.5rem" }}
            onClick={handleRegisterModal}
          >
            REGISTER
          </h4>
        </div>
      </NavContent>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  background-color: #141414;
`;

const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10rem 0 4.2rem 0;
  align-items: center;

  position: relative;
  left: 30rem;
  color: #ffffff;
  /* top: 11rem; */
`;

export default Navbar;

//     return (
//         <NavContainer>
//             <NavContent>
//                 <h1 type="button" onClick={()=>{ navigate('/') }} style={{fontWeight:'700'}}>CRUX</h1>
//                 <h3 type="button" onClick={()=>{ navigate('/crews') }} style={{fontWeight:'500', marginLeft:'6rem'}}>크루 모임</h3>
//                 <h3 style={{fontWeight:'500', marginLeft:'4rem'}}>크루 생성</h3>
//                 <h3 type="button" onClick={()=>{ navigate('/gyms') }} style={{fontWeight:'500', marginLeft:'4rem'}}>클라이밍짐 후기</h3>
//                 <div style={{display:'flex'}}>
//                     <h4 type="button" onClick={()=>{ navigate('/login') }} style={{fontWeight:'500', marginLeft:'47rem'}}>LOGIN</h4>
//                     <h4 style={{fontWeight:'500', marginLeft:'2.5rem'}}>REGISTER</h4>
//                 </div>
//             </NavContent>
//         </NavContainer>
//     );
// }

// const NavContainer = styled.div`
// display: flex;
// background-color: #42f9b9;
// width: 192rem;
// height: 18rem;
// `

// const NavContent = styled.div`
// width:120rem;
// margin: 8rem 36rem;

// display: flex;
// flex-direction: row;
// align-items: baseline;

// color: #ffffff
// /* top: 11rem; */
// `
