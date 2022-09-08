import styled from 'styled-components'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getGyms } from '../../Redux/modules/gymSlice';
import KakaoMap from './components/KakaoMap';
import Loading from "../../Shared/Loading.js"
import { useNavigate } from 'react-router-dom';

const Gym = () => {

    const navigate = useNavigate()
    const {isLoading, error, gyms} = useSelector((state)=>state.gyms)
    // console.log(gyms)

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(__getGyms())
    },[dispatch])



if (isLoading) {
    <Loading />
}

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

                        {
                            gyms?.map((gym)=>{
                                return(
                                    <div key={gym.id} style={{display:'flex', margin:'2rem auto', width:'50rem'}} 
                                    onClick={()=>{ navigate(`/gyms/${gym.id}`) }}>
                                        <img src='http://dkmedal.co.kr/web/product/big/201611/362_shop1_803761.jpg' alt='' style={{width:'15rem', height:'15rem'}}/>
                                        <div style={{width:'23rem'}}>
                                            <h3>{gym.name}</h3>
                                            <p>{gym.location}</p>
                                            <p>{gym.phone}</p>
                                            <p>✨ {gym.avgScore}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }

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