import styled from 'styled-components'
import { useNavigate } from "react-router-dom";



const Navbar = () => {

    const navigate = useNavigate()

    return (
        <NavContainer>
            <NavContent>
                <h1 type="button" onClick={()=>{ navigate('/') }} style={{fontWeight:'700'}}>CRUX</h1>
                <h3 type="button" onClick={()=>{ navigate('/crews') }} style={{fontWeight:'500', marginLeft:'6rem'}}>크루 모임</h3>
                <h3 style={{fontWeight:'500', marginLeft:'4rem'}}>크루 생성</h3>
                <h3 type="button" onClick={()=>{ navigate('/gyms') }} style={{fontWeight:'500', marginLeft:'4rem'}}>클라이밍짐 후기</h3>
                <div style={{display:'flex'}}>
                
              {/* 로그인 모달창 */}
                    <h4 type="button" onClick={()=>{  }} style={{fontWeight:'500', marginLeft:'47rem'}}>LOGIN</h4>
                    
                    <h4 style={{fontWeight:'500', marginLeft:'2.5rem'}}>REGISTER</h4>

                </div>
            </NavContent>
        </NavContainer>
    );
}

const NavContainer = styled.div`
display: flex;
background-color: transparent;
z-index: 100;
position: absolute;
margin: 0;
width: 192rem;
height: 18rem;
`

const NavContent = styled.div`
width:120rem;
margin: 8rem 36rem;

display: flex;
flex-direction: row;
align-items: baseline;

color: #ffffff
/* top: 11rem; */
`

export default Navbar;