import styled from 'styled-components'
import { useNavigate } from "react-router-dom";



const Navbar = () => {

    const navigate = useNavigate()

    return (
        <NavContainer>
            <NavContent>
                <h1 type="button" onClick={()=>{ navigate('/') }}>CRUX</h1>
                <h3 type="button" onClick={()=>{ navigate('/crews') }} style={{position:'relative', left:'6rem'}}>크루 모임</h3>
                <h3 style={{position:'relative', left:'10rem'}}>크루 생성</h3>
                <h3 type="button" onClick={()=>{ navigate('/gyms') }} style={{position:'relative', left:'14rem'}}>클라이밍짐 후기</h3>
                <div style={{display:'flex', position:'relative', left:'60rem'}}>
                    <h4 type="button" onClick={()=>{ navigate('/login') }}>LOGIN</h4>
                    <h4 style={{position:'relative', left:'2.5rem'}}>REGISTER</h4>
                </div>
            </NavContent>
        </NavContainer>
    );
}

const NavContainer = styled.div`
display: flex;
background-color: #42f9b9;
`

const NavContent = styled.div`
display: flex;
flex-direction: row;
margin: 10rem 0 4.2rem 0;
align-items: center;

position: relative;
left: 30rem;
color: #ffffff
/* top: 11rem; */
`

export default Navbar;