import styled from 'styled-components'
import HomeMap from './components/HomeMap';
import SliderBanner from './components/SliderBanner';

const Home = () => {
    return(
        <div>

            <SliderArea> 
                <SliderBanner /> 
            </SliderArea>
            
        {/* 인기 크루 신규크루 Area입니다 */}
            <CrewArea>
                <h2><span style={{fontWeight:'bold'}}>인기 크루</span> | 신규 크루</h2>
                <CrewList>
                    <img src='https://sports.seoul.go.kr/upfilePath/smarteditor/20210927091512112.jpg' alt='' style={{width:'100%', height:'380px'}}/>                   
                    
                    <h2>와우산30</h2>
                    <p>마포구를 베이스로 달리는 러닝 크루이며 매주 화요일에 뛰어요!
                        많은 참여 부탁드립니다.
                    </p>
                    <p>🖤 50명 | 🙍‍♀️ 30명</p>
                </CrewList>
            </CrewArea>

        {/* 내 주변 클라이밍 짐 Area입니다 */}
            <MapArea>
                <h2 style={{margin:'0 0 0 360px', top:'140px', position:'relative'}}><span style={{fontWeight:'bold'}}>내 주변 클라이밍 짐</span> | 내 주변 인공암벽</h2>
                                
                <MainMap> 
                    <HomeMap />  {/* 카카오 Map 입니다 */}
                </MainMap>

            </MapArea>

        {/* 이번 달 클라이밍 짐 순위 Area입니다 */}
            <GymArea>
                <h2 style={{top:'140px', position:'relative', fontWeight:'bold'}}>이번 달 클라이밍 짐 순위</h2>
                <GymList>
                    <img src='https://cdn1.picuki.com/hosted-by-instagram/q=0exhNuNYnjBGZDHIdN5WmL9I2Pk2GAlRNecaS7j0nyZiNxIsbHWB58ltwdGn%7C%7CDh6Kwh9HS+Lfjlp4IsqVF5UZFdyP0PbTbKKSj9X6qWcXYCq2jFu9ZFgkbY8LHMaZXWr9KxySjyGPH0LCulNC7jhs7FXr5S7bzNq5TWWNPxEnGZtosv0FvItjK4u4Z2PlBbs5ZclJTpY82ZvIkU%7C%7CrYmX+3QMUvW+NMx3oa85SLIYzPgL6NDtmjHlQD1zPVFwFA+QsoicsMgFpDHpfhohym6Gf%7C%7CAXI2UI1RO+sxtsk6MbuJ2qZK9M+N8Z96PUTjtQEjktqBwzwMSCtheUZ1eN9Btfl3HK4KK4S9R%7C%7Cicb0HOulWuzh3BTBN+TpPZFODFAMU%7C%7CuBUnTFN7O5ApUPxdoYOKps8RiK%7C%7CgWCZ7nwgUQnBTYThQ==.jpeg?1' 
                        alt='' style={{width:'100%', height:'250px', borderRadius:'60%'}}/>
                    
                    <h4>상호명</h4>
                    <div>좋아요 6개</div>
                
                </GymList>
            </GymArea>

        {/* 이미지 배너입니다 */}
            <ImgBanner />

        {/* 갤러리 Area입니다 */}
            <GalleryArea>
                <h2 style={{position:'relative', top:'140px', fontWeight:'bold'}}>갤러리</h2>
                <GalleryList>
                    <img src='https://image.jtbcplus.kr/data/UPLOAD/keyvisual_pc/IMG_2022_06_07/040007230001.jpg'
                        alt='' style={{width:'320px', height:'320px', position:'relative', top:'160px'}}/>
                </GalleryList>
            </GalleryArea>
        </div>
    );
}

const GalleryArea = styled.div`
width: 100%;
height: 650px;
margin: 0 0 0 360px;
`

const GalleryList = styled.div`
margin: 0 20px 0 0;
`

const ImgBanner = styled.div`
width: 100%;
height: 500px;
background-image: url('http://wingxing1.jpg1.kr/design/MAINB/ROCKCL.jpg');
background-position: center;
background-size: cover;
`

const GymArea = styled.div`
width: 100%;
height: 650px;
margin: 0 350px 0 350px;
`

const GymList = styled.div`
width: 250px;
top: 196px;
position: relative;

text-align: center;
`

const MapArea = styled.div`
width: 100%;
height: 850px;

background-color: #D9D9D9;
`

const MainMap = styled.div`
width: 1200px;
height: 500px;
top: 190px;
margin: 0 360px 0 360px;
position: relative;

background-color: #b4cb86;
`

const SliderArea = styled.div`
width: 100%;
height: 800px;
background-color: #088d72;
`

const CrewArea = styled.div`
width: 100%;
height: 850px;
margin: 0px 360px 0px 360px;
position: relative;
top: 125px
`

const CrewList = styled.div`
width: 380px;
height: 501px;
left: 360px;
margin: 20px 30px 0 0;
`



export default Home;