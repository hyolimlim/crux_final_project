import styled from 'styled-components'
import KakaoMap from './components/KakaoMap';

const Gym = () => {


    return (
        <div>
            <h1>클라이밍짐 후기</h1>
            <div style={{display:'flex'}}>
                <h3>서울</h3>
                <h3>인천</h3>
                <h3>경기</h3>
                <h3>부산</h3>
                <h3>제주도</h3>
            </div>

            {/* 내 주변 클라이밍 짐 Area입니다 */}
            <div style={{display:'flex', justifyContent:'center'}}>

                <KakaoMap />  {/* 카카오 Map 입니다 */}
                <GymContainer>
                    <div>
                        <h3>강남역 주변 클라이밍짐</h3>
                        <div>
                            <div style={{display:'flex'}}>
                                <img src='http://dkmedal.co.kr/web/product/big/201611/362_shop1_803761.jpg' alt='' style={{width:'15rem', height:'15rem'}}/>
                                <div style={{width:'23rem'}}>
                                    <h3>와우산30</h3>
                                    <p>마포구를 베이스로 달리는 러닝 크루이며 매주 화요일에 뛰어요! 많은 참여 부탁드립니다.</p>
                                    <p>🖤 50명 | 🙍‍♀️ 30명</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </GymContainer>
            </div>
                
            
        </div>
    );
}

const GymContainer = styled.div`
width: 58rem;
height: 110rem;

border: 1rem solid #7989ac;
`


export default Gym;