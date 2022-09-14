import styled from 'styled-components'
import 돋보기 from '../../Image/검색 아이콘.png'
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
    const [gyms, setGyms] = useState([]) 

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
        
        await axios.get(`https://01192mg.shop/gyms?page=${page}&size=5&lat=${state.center.lat}&lon=${state.center.lng}`)
        
        .then((res) => {
            console.log(res.data) //..
            setGyms(prev => [...prev, ...res.data])
        })
        .catch((err) => {
            console.log(err)
        })
       setLoad(false);
    }, [page]);

    // useEffect(()=>{
    //     getGyms();
    // }, [page])



// 카카오 Map 입니다
    const [markerOpen, setMarkerOpen] = useState([])
  //개별 마커 열리고 내리는거 어떻게하지?? 배열 여러개 만들어서 boolean push 해주는식으로 하면되나?

  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    isPanto: false,
    errMsg: null,
    isLoading: true,
  })
  console.log(state.center)


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

  const categorySeoul = () => {
    //서울을 클릭하면 서울 특정 주소로 지도 중심을 이동시킨다
    //서울을 클릭하면 '서울' 검색어를 api에 넣어 주변 클라이밍짐을 띄워준다
    setState((prev) => ({
      ...prev,
      center: {
        lat: 37.5665734,
        lng: 126.978179,
      }}))}
  const categoryIncheon = () => {
    setState((prev) => ({...prev,center: {lat: 37.4562557,lng: 126.7052062,}}))}
  const categoryGg = () => {
    setState((prev) => ({...prev,center: {lat: 37.38890932792951,lng: 127.46020321292248,}}))}
  const categoryBusan = () => {
    setState((prev) => ({
      ...prev,
      center: {
        lat: 35.18387244538942,
        lng: 129.07040917346342,
      }}))}
  const categoryJeju = () => {
    setState((prev) => ({
      ...prev,
      center: {
        lat: 33.397224597475834,
        lng: 126.55475810720306,
      }}))}



//gym 검색 API 입니다~
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
      console.log(e.target.value)
    }

    const onclickSearchGym = () => {
        searchGym();
    }

    const searchGym = useCallback(async() => {
        await axios.get(`https://01192mg.shop/gyms/search?page=0&size=5&query=${search}`)
        .then((res) => {
            console.log(res.data.data)
            setGyms(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [onclickSearchGym])
    console.log(gyms)
    return (
        <div>

            <Navbar />

            <div style={{width:'192rem', height:'19.2rem'}}>
                
              <div style={{width:'120rem', margin:'10rem auto 0 auto', display:'flex'}}>
                  <h1 style={{width:'38rem', margin:'0 35.2rem 0 0'}}>클라이밍짐 후기</h1>
                  {/* <S_select onChange={handleChange}>
                      <S_option key="서울" defaultValue="서울">서울</S_option>
                      <option key="인천" value="인천">인천</option>
                      <option key="경기" value="경기">경기</option>
                      <option key="부산" value="부산">부산</option>
                      <option key="제주도" value="제주도">제주도</option>  
                  </S_select>  */}
                  <S_input onChange={(e)=>{ setSearch(e.target.value) }}/> 
                  <img src={돋보기} type="button" onClick={onclickSearchGym}
                  style={{width:'3rem', height:'3rem', margin:'1.1rem 0 0 116rem', position:'absolute'}} />
              </div>

              <div style={{width:'120rem', margin:'6.5rem auto 0 auto', display:'flex'}}>
                  <S_category onClick={categorySeoul} type="button"><h3>서울</h3></S_category>
                  <S_category onClick={categoryIncheon}><h3>인천</h3></S_category>
                  <S_category onClick={categoryGg}><h3>경기</h3></S_category>
                  <S_category onClick={categoryBusan}><h3>부산</h3></S_category>
                  <S_category onClick={categoryJeju}><h3>제주도</h3></S_category>
              </div>
              
            </div>
            

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


const S_input = styled.input`
width: 39rem;
height: 5rem;

border: 1px solid #CCCCCC;
`

const S_category = styled.div`
margin: 0 4rem 0 0;
`

const GymContainer = styled.div`
width: 58rem;
height: 110rem;

border: 1px solid #CCCCCC;
overflow: auto;
`


export default Gym;