import styled from 'styled-components'
import HomeMap from './components/HomeMap';
import SliderBanner from './components/SliderBanner';

const Home = () => {
    return(
        <div>

        {/* 슬라이더 배너입니다 */}
            <SliderBanner /> 
            
        {/* 인기 크루 신규크루 Area입니다 */}
            <CrewArea>
                <h2>
                    <span style={{fontWeight: '700'}}>인기 크루</span> | 신규 크루
                </h2>
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

        {/* 내 주변 클라이밍 짐 Area입니다 */}
            <MapArea>
                <h2 style={{margin:'0 0 0 36rem', top:'140px', position:'relative', fontSize:'2rem'}}>
                    <span style={{fontWeight:'700'}}>내 주변 클라이밍 짐</span> | 내 주변 인공암벽
                </h2>
                                
                <MainMap> 
                    <HomeMap />  {/* 카카오 Map 입니다 */}
                </MainMap>

            </MapArea>

        {/* 이번 달 클라이밍 짐 순위 Area입니다 */}
            <GymArea>
                <h2 style={{top:'14rem', position:'relative', fontWeight:'bold'}}>이번 달 클라이밍 짐 순위</h2>
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
            <GalleryArea>
                <h2 style={{position:'relative', top:'140px', fontWeight:'bold'}}>갤러리</h2>
                <GalleryList>
                    <img src='https://image.jtbcplus.kr/data/UPLOAD/keyvisual_pc/IMG_2022_06_07/040007230001.jpg'
                        alt='' style={{width:'32rem', height:'32rem', position:'relative', top:'160px'}}/>
                </GalleryList>
            </GalleryArea>
        </div>
    );
}

const GalleryArea = styled.div`
width: 192rem;
height: 65rem;
margin: 0 0 0 36rem;
`

const GalleryList = styled.div`
margin: 0 2rem 0 0;
`

const ImgBanner = styled.div`
width: 192rem;
height: 70rem;
background-image: url('http://wingxing1.jpg1.kr/design/MAINB/ROCKCL.jpg');
background-position: center;
background-size: cover;
`

const GymArea = styled.div`
width: 192rem;
height: 70rem;
margin: 0 35rem 0 35rem;
`

const GymList = styled.div`
width: 25rem;
top: 19.6rem;
position: relative;

text-align: center;
`

const MapArea = styled.div`
width: 192rem;
height: 85rem;

background-color: #D9D9D9;
`

const MainMap = styled.div`
width: 120rem;
height: 50rem;
top: 19rem;
margin: 0 36rem 0 36rem;
position: relative;

background-color: #b4cb86;
`

const CrewArea = styled.div`
width: 192em;
height: 85rem;
margin: 0px 36rem 0px 36rem;
position: relative;
top: 12.5rem
`

const CrewList = styled.div`
width: 38rem;
height: 50rem;
left: 36rem;
margin: 2rem 3rem 0 0;
`



export default Home;