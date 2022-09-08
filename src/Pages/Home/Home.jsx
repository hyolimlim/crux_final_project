import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap';
import SliderBanner from './components/SliderBanner';


const Home = () => {
    return(
        <div>

        {/* 슬라이더 배너입니다 */}
            <SliderBanner /> 
            
        {/* 인기 크루 신규크루 Area입니다 */}
            <div style={{position:'relative', top:'11rem', margin:'0 auto', width:'162rem'}}>
                <h2>
                    <span style={{fontWeight: '700'}}>인기 크루</span> | 신규 크루
                </h2>
            </div>
            
            <CrewArea>
                <CrewList>
                    <img src='https://sports.seoul.go.kr/upfilePath/smarteditor/20210927091512112.jpg' alt='' 
                        style={{width:'100%', height:'38rem'}}/>                   
                    
                    <h3>와우산30</h3>
                    <p>마포구를 베이스로 달리는 러닝 크루이며 매주 화요일에 뛰어요!
                        많은 참여 부탁드립니다.
                    </p>
                    <p>🖤 50명 | 🙍‍♀️ 30명</p>
                </CrewList>
                <CrewList>
                    <img src='https://sports.seoul.go.kr/upfilePath/smarteditor/20210927091512112.jpg' alt='' 
                        style={{width:'100%', height:'38rem'}}/>                   
                    
                    <h3>와우산30</h3>
                    <p>마포구를 베이스로 달리는 러닝 크루이며 매주 화요일에 뛰어요!
                        많은 참여 부탁드립니다.
                    </p>
                    <p>🖤 50명 | 🙍‍♀️ 30명</p>
                </CrewList>
                <CrewList>
                    <img src='https://sports.seoul.go.kr/upfilePath/smarteditor/20210927091512112.jpg' alt='' 
                        style={{width:'100%', height:'38rem'}}/>                   
                    
                    <h3>와우산30</h3>
                    <p>마포구를 베이스로 달리는 러닝 크루이며 매주 화요일에 뛰어요!
                        많은 참여 부탁드립니다.
                    </p>
                    <p>🖤 50명 | 🙍‍♀️ 30명</p>
                </CrewList>
                <CrewList>
                    <img src='https://sports.seoul.go.kr/upfilePath/smarteditor/20210927091512112.jpg' alt='' 
                        style={{width:'100%', height:'38rem'}}/>                   
                    
                    <h3>와우산30</h3>
                    <p>마포구를 베이스로 달리는 러닝 크루이며 매주 화요일에 뛰어요!
                        많은 참여 부탁드립니다.
                    </p>
                    <p>🖤 50명 | 🙍‍♀️ 30명</p>
                </CrewList>
                
            </CrewArea>


        {/* 이번 달 클라이밍 짐 순위 Area입니다 */}
            <div style={{position:'relative', top:'9rem', margin:'0 auto', width:'164rem'}}>
                <h2 style={{fontWeight:'bold'}}>이번 달 클라이밍 짐 순위</h2>
            </div>
            <GymArea>
                <GymList>
                    <img src='https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/15b65f7d993328e893/Big)JungClGym.jpg' 
                        alt='' style={{width:'100%', height:'25rem', borderRadius:'60%'}}/>
                    
                    <h3 style={{top:'3rem', position:'relative'}}>상호명</h3>
                    <p style={{top:'3rem', position:'relative'}}>좋아요 6개</p>
                </GymList>
                <GymList>
                    <img src='https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/15b65f7d993328e893/Big)JungClGym.jpg' 
                        alt='' style={{width:'100%', height:'25rem', borderRadius:'60%'}}/>
                    
                    <h3 style={{top:'3rem', position:'relative'}}>상호명</h3>
                    <p style={{top:'3rem', position:'relative'}}>좋아요 6개</p>
                </GymList>
                <GymList>
                    <img src='https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/15b65f7d993328e893/Big)JungClGym.jpg' 
                        alt='' style={{width:'100%', height:'25rem', borderRadius:'60%'}}/>
                    
                    <h3 style={{top:'3rem', position:'relative'}}>상호명</h3>
                    <p style={{top:'3rem', position:'relative'}}>좋아요 6개</p>
                </GymList>
                <GymList>
                    <img src='https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/15b65f7d993328e893/Big)JungClGym.jpg' 
                        alt='' style={{width:'100%', height:'25rem', borderRadius:'60%'}}/>
                    
                    <h3 style={{top:'3rem', position:'relative'}}>상호명</h3>
                    <p style={{top:'3rem', position:'relative'}}>좋아요 6개</p>
                </GymList>
            </GymArea>

        {/* 이미지 배너입니다 */}
            <ImgBanner />

        {/* 갤러리 Area입니다 */}
            <div style={{position:'relative', top:'9rem', margin:'0 auto', width:'164rem'}}>
                <h2 style={{fontWeight:'bold'}}>갤러리</h2>
            </div>

            <Container>
                <Row md={3} style={{justifyContent:'center'}}>
                    <Col style={{width:'32rem'}}>
                        <img src='https://image.jtbcplus.kr/data/UPLOAD/keyvisual_pc/IMG_2022_06_07/040007230001.jpg'
                            alt='' style={{width:'32rem', height:'32rem', position:'relative', top:'160px'}}/>
                    </Col>
                    <Col style={{width:'32rem'}}>
                        <img src='https://image.jtbcplus.kr/data/UPLOAD/keyvisual_pc/IMG_2022_06_07/040007230001.jpg'
                            alt='' style={{width:'32rem', height:'32rem', position:'relative', top:'160px'}}/>
                    </Col>
                    <Col style={{width:'32rem'}}>
                        <img src='https://image.jtbcplus.kr/data/UPLOAD/keyvisual_pc/IMG_2022_06_07/040007230001.jpg'
                            alt='' style={{width:'32rem', height:'32rem', position:'relative', top:'160px'}}/>
                    </Col>
                    <Col style={{width:'32rem'}}>
                        <img src='https://image.jtbcplus.kr/data/UPLOAD/keyvisual_pc/IMG_2022_06_07/040007230001.jpg'
                            alt='' style={{width:'32rem', height:'32rem', position:'relative', top:'160px'}}/>
                    </Col>
                    <Col style={{width:'32rem'}}>
                        <img src='https://image.jtbcplus.kr/data/UPLOAD/keyvisual_pc/IMG_2022_06_07/040007230001.jpg'
                            alt='' style={{width:'32rem', height:'32rem', position:'relative', top:'160px'}}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const CrewArea = styled.div`
display: flex;
width: 100%;
height: 85rem;
margin: 0px 0px 0px 0px;
justify-content: center;
position: relative;
top: 12.5rem
`

const CrewList = styled.div`
justify-content: center;
width: 38rem;
height: 50rem;
margin: 2rem 3rem 0 0;
`

const GymArea = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 70rem;
`

const GymList = styled.div`
width: 25rem;
top: 19.6rem;
margin: 0 3rem 0 0;
justify-content: center;
position: relative;

text-align: center;
`

const GalleryArea = styled.div`
width: 100%;
height: 65rem;
margin: 0 36rem 0 36rem;
`

const GalleryList = styled.div`
margin: 0 2rem 0 0;
`

const ImgBanner = styled.div`
/* width: 192rem; */
height: 70rem;
background-image: url('http://wingxing1.jpg1.kr/design/MAINB/ROCKCL.jpg');
background-position: center;
background-size: cover;
`







export default Home;