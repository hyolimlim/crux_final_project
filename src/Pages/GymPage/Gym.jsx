import styled from 'styled-components'
import { useEffect, useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getGyms } from '../../Redux/modules/gymSlice';
import KakaoMap from './components/KakaoMap';
import Loading from "../../Shared/Loading.js"
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Shared/Navbar'
import GymHeader from './components/GymHeader';
import axios from 'axios';
import { Map, MapMarker } from 'react-kakao-maps-sdk'

const Gym = () => {

    const navigate = useNavigate()
    
    // 무한스크롤 적용하기

    const obsRef = useRef(null); //observer 요소
    const [gyms, setGyms] = useState([
      {
        "id" : 1,
        "name": "더클라임 양재점",
        "location": "서울특별시 강남구 남부순환로 2615 지하1 층",
        "phone": "123-1234",
        "imgUrl":"https://aaa.png",
        "avgScore": 4.7
      },
      {
        "id" : 2,
        "name": "더클라임 양재점",
        "location": "서울특별시 강남구 남부순환로 2615 지하1 층",
        "phone": "123-1234",
        "imgUrl":"https://aaa.png",
        "avgScore": 4.7
      },
      {
        "id" : 3,
        "name": "더클라임 양재점",
        "location": "서울특별시 강남구 남부순환로 2615 지하1 층",
        "phone": "123-1234",
        "imgUrl":"https://aaa.png",
        "avgScore": 4.7
      },
    ]) 

    const [page, setPage] = useState(1) //현재 페이지
    const [load, setLoad] = useState(false); //로딩 스피너
    const preventRef = useRef(true) //옵저버 중복 실행 방지
    // console.log(preventRef.current)


    const obsHandler = ((entries) => { //옵저버 콜백함수
        const target = entries[0];
        if(target.isIntersecting && preventRef.current) { //옵저버 중복 실행 방지
            preventRef.current = false;

            setPage(prev => prev + 1); //페이지 값 증가
            console.log(page)
        }
    })

    useEffect(()=>{
        const observer = new IntersectionObserver(obsHandler, { threshold : 1 });

        if(obsRef.current) observer.observe(obsRef.current); 
        return () => { observer.disconnect(); }
    }, []);

    const getGyms = useCallback(async() => { //gymList 불러오기
        setLoad(true); //로딩 시작
        
        await axios.get(`https://01192mg.shop/gyms?pageNum=${page}&size=10&lat=${state.center.lat}&lon=${state.center.lng}`)
        
        .then((res) => {
            console.log(res.data) //..
            setGyms(prev => [...prev, ...res.data])
        })
        .catch((err) => {
            console.log(err)
        })
       setLoad(false);
    }, [page]);

    useEffect(()=>{
        // getGyms();
    }, [page])



// 카카오 Map 입니다
    const [markerOpen, setMarkerOpen] = useState([])
  //개별 마커 열리고 내리는거 어떻게하지?? 배열 여러개 만들어서 boolean push 해주는식으로 하면되나?

  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  })
  // console.log(state.center)


  useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }))
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation 을 사용할 수 없네용, 애용!",
        isLoading: false,
      }))
    }
  }, [])

  const positions = [
    {
      title: "버티고클라이밍짐",
      latlng: { lat: 37.5551030, lng: 127.085719 }
    },
  ] 


    return (
        <div>

            <Navbar />

            <GymHeader />
            

            {/* 내 주변 클라이밍 짐 Area입니다 */}
            <div style={{display:'flex', justifyContent:'center'}}>


                {/* 카카오 Map 입니다 */}
                <Map
                    center={ state.center }
                    style={{ width: "134rem", height: "110rem" }}
                    level={7}
                >
                    <MapMarker position={state.center}>
                    <div style={{ padding: "5px", color: "black", textAlign:'center', backgroundColor:"aquamarine", width:'178%' }}>현재위치!</div>
                    </MapMarker>

                    {
                        positions?.map((val, i) => (
                            <MapMarker 
                            key={`${val.title}-${val.latlng}`}
                            position={val.latlng}
                            image={{size:{width: 24, height: 35}, src:"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"}}
                            title={val.title}
                            >
                            <div style={{ padding: "5px", color: "black", textAlign:'center' }}>{val.title}</div>
                            </MapMarker>
                        ))
                    }

                </Map>


                <GymContainer>
                    <div>
                        <div style={{width:'100%', height:'9.5rem', borderBottom:'1px solid #CCCCCC',padding:'3.5rem 3.5rem 3rem 3.5rem'}}>
                            <h3 style={{fontWeight:'700'}}>강남역 주변 클라이밍짐</h3>
                        </div>
                        
                        <div>

                        {
                            gyms?.map((gym, i)=>{
                                return(
                                    <div key={i} style={{display:'flex', margin:'2rem auto', width:'50rem', height:'17rem', borderBottom:'1px solid #cccccc'}} 
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

                        <div ref={obsRef}></div>

                        {
                            load ? <Loading />
                            : null
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

border: 1px solid #CCCCCC;
overflow: auto;
`


export default Gym;