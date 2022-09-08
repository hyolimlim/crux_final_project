import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getCrew } from "../../Redux/modules/crewSlice";
import Loading from "../../Shared/Loading";
import { useNavigate } from "react-router-dom";

const Crew = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { crews, error, isLoading } = useSelector((state)=>state.crews)
    // console.log( isLoading, error, crews )

    useEffect(()=>{
        dispatch(__getCrew())
    }, [dispatch])

if (isLoading) {
    return  <div> 
                <Loading />
            </div>
}

    return(
        <div>
            <HeaderWrap>
                <h1>크루 모임</h1>
                <h3>
                    <span >인기 크루</span> <span style={{color:'#cccccc'}}>신규 크루</span>
                </h3>
            </HeaderWrap>

            <Container>
                <Row md={3} style={{justifyContent:'center'}}>
                    
                    {
                        crews?.map((crew) => {
                            return (
                                <Col key={crew.id} style={{width:'38rem', margin:'0 3rem 0 0'}} 
                                    onClick={()=>{ navigate(`/crews/${crew.id}`) }}>
                                    <img src={crew.imgUrl}
                                        alt='' style={{width:'38rem', height:'38rem'}}/>
                                    <h3>{crew.name}</h3>
                                    <p>{crew.content}</p>
                                    <p>🖤 50명 | 🙍‍♀️ {crew.crewNum}</p>
                                </Col>
                            );
                        })
                    }
                    
                </Row>
            </Container>
        </div>
    );
}


const HeaderWrap = styled.div`
width: 113rem;
margin: 10rem auto 4rem;

`

export default Crew;