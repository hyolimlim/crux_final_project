import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Router from './Shared/router';


function App() {

  const navigate = useNavigate()

  return (
    <div className="App">

      {/* Navbar 입니다 App.js 가 커지면 component화 시키면 좋을 것 같습니다*/}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand type='button' onClick={()=>{navigate('/')}}>Crux</Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link >크루 모임</Nav.Link>
              <Nav.Link >크루 생성</Nav.Link>
              <Nav.Link >클라이밍짐 후기</Nav.Link>

            <span style={{display:'flex', position:'absolute', marginLeft:'60%'}}>
              <Nav.Link onClick={()=>{navigate('/login')}}>LOGIN</Nav.Link>
              <Nav.Link >REGISTER</Nav.Link>
            </span>
          </Nav>
        </Container>
      </Navbar>
      
      {/* router 연결 */}
      <Router />



    </div>
  );
}

export default App;
