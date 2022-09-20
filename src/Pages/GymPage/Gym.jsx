import styled from 'styled-components'
import 돋보기 from '../../Image/검색 아이콘.png'
import 디폴트짐 from "../../Image/인기 클라이밍짐.png"
import { useEffect, useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getGyms } from '../../Redux/modules/gymSlice';
import Loading from "../../Shared/Loading.js"
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Shared/Navbar'
import GymHeader from './components/GymHeader';
import axios from 'axios';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Gym = () => {
    const BASE_URL = "http://sparta-tim.shop"

    const [location, setLocation] = useState('내')

    const navigate = useNavigate()
    
    const [gyms, setGyms] = useState([]) 

// 카카오 Map 입니다

  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    isPanto: false,
    errMsg: null,
    isLoading: true,
  })
  // console.log(state.center)


  useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude
          const lng = position.coords.longitude
          await axios.get(`${BASE_URL}/gyms?page=0&size=10&lon=${lng}&lat=${lat}`)
        .then((res) => {
            // console.log(res.data.data)
            setGyms(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })

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

    const onclickSearchGym = () => {
        searchGym();
    }

    const searchGym = async() => {
        await axios.get(`${BASE_URL}/gyms/search?page=0&size=5&query=${search}`)
        .then((res) => {
          if(res.data.data.length !== 0) {

              setState((prev) => ({
                ...prev, center: {lat: res.data.data[0]?.lat, lng: res.data.data[0]?.lon}
              }))
            }
            setGyms(res.data.data)
            setLocation(search)
            setSearch('')
        })
        .catch((err) => {
            console.log(err)
        })
      }
    
      useEffect(()=>{
        console.log(gyms)
      },[searchGym])

// 마커 마우스 호버 이벤트
      const [isopen, setIsopen] = useState(false)

if(state.isLoading) {
  return(<Loading />)
}

    return (
        <div>

            <Navbar />

            <div style={{width:'192rem', height:'26rem', padding:'8rem 0 0 0', backgroundColor:'#262626', color:'#ffffff'}}>
                
              <div style={{width:'120rem', margin:'0 auto 0 auto', display:'flex'}}>
                  <h1 style={{width:'38rem', margin:'0 35.2rem 0 0'}}>클라이밍짐 후기</h1>
                 
                  <S_input onChange={(e)=>{ setSearch(e.target.value) }} value={search}/> 
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="3x" color='black' onClick={onclickSearchGym} style={{position:'absolute', margin:'2rem 0 0 108rem'}} type="button"/> 
                  
              </div>

              <div style={{width:'120rem', margin:'6.5rem auto 0 auto', display:'flex'}}>
                  <S_category onClick={categorySeoul} type="button"><h3>서울</h3></S_category>
                  <S_category onClick={categoryIncheon} type="button"><h3>인천</h3></S_category>
                  <S_category onClick={categoryGg} type="button"><h3>경기</h3></S_category>
                  <S_category onClick={categoryBusan} type="button"><h3>부산</h3></S_category>
                  <S_category onClick={categoryJeju} type="button"><h3>제주도</h3></S_category>
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
                    
                    <MapMarker position={state.center} 
                    image={{size:{width: 100, height: 80}, src:"http://simpleicon.com/wp-content/uploads/map-marker-5.png"}}  
                    >
                    </MapMarker>

                    {
                        gyms?.map((val, i) => ( 
                          <>
                            <MapMarker onClick={()=>setIsopen(!isopen)}
                            key={`${val.name}-${val.lat}`}
                            position={{
                                lat: val.lat,
                                lng: val.lon
                            }}
                            image={{size:{width: 40, height: 60}, src:"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"}}
                            title={val.name}
                            clickable={true} 
                            >
                            </MapMarker>

                              {isopen && (
                              <CustomOverlayMap
                              position={{lat: val.lat,lng: val.lon}}
                              yAnchor={1}
                            >
                              <Wrap>
                                <GymName>{val.name}</GymName>
                                <GymAddress>{val.location}</GymAddress>
                                <a href={`https://map.kakao.com/link/to/HelloWorld!,${val.lat},${val.lon}`} target="_blank"rel="noreferrer">
                                  <span className="title">길찾기</span>
                                </a>
                              </Wrap>
                            </CustomOverlayMap>
                            )}

                          </>
                        ))
                    }
                    

                </Map>


                <GymContainer>
                    <div>
                        <div style={{width:'100%', height:'9.5rem', borderBottom:'1px solid #ffffff',padding:'3.5rem 3.5rem 3rem 3.5rem'}}>
                            <h3 style={{fontWeight:'700'}}>{location} 주변 클라이밍짐</h3>
                        </div>
                        
                        <div>
                    { gyms?.length === 0 ?  <p style={{color:'#ffffff', width:'20rem', margin:'6rem 0 0 16rem', fontSize:'1.6rem'}}>검색 결과가 없습니다.</p> : 
                        
                            gyms?.map((gym, i)=>{
                                return(
                                    <div key={gym.id} style={{display:'flex', margin:'2rem auto', width:'50rem', height:'17rem', borderBottom:'1px solid #262626'}} 
                                    onClick={()=>{ navigate(`/gyms/${gym.id}`) }}>
                                        <img src={디폴트짐} alt='' style={{width:'15rem', height:'15rem'}}/>
                                        <div style={{width:'35rem', padding:'1rem'}}>
                                            <h3 style={{margin:'0 0 0 0'}}>{gym.name}</h3>
                                            <p style={{margin:'2rem 0 0 0'}}>{gym.location}</p>
                                            <p style={{margin:'1rem 0 0 0'}}>{gym.phone}</p>
                                            <p style={{margin:'1rem 0 0 0'}}>✨ {Number(gym.avgScore).toFixed(2)}</p>
                                            
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
const Wrap = styled.div`
    border: 1px solid gray;
    border-radius: 1px;
    height: 6rem;
    text-align: center;
    margin: -126px 0 0 -8px;
    background-color: white;
`

const GymName = styled.div`
font-size: 14px;
width:100%;
height: 2rem;
padding: 2px 0 0 0;
border-bottom: #ebebeb;
background-color: #eeeeee;

`

const GymAddress = styled.div`
font-size: 11px;
`

const S_input = styled.input`
width: 39rem;
height: 5rem;
margin: 1rem 0 0 0;
font-size: 1.4rem;
padding: 0 0 0 1rem;
border: 1px solid #CCCCCC;
`

const S_category = styled.div`
margin: 0 4rem 0 0;
`

const GymContainer = styled.div`
width: 58rem;
height: 110rem;

background-color: #141414;
color: #ffffff;
border: 1px solid #CCCCCC;
overflow: auto;
`

export default Gym;