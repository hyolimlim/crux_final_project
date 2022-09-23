import styled from 'styled-components'
import 돋보기 from '../../Image/검색 아이콘.png'
import { useEffect, useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from "../../Shared/Loading.js"
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Shared/Navbar'
import GymHeader from './components/GymHeader';
import axios from 'axios';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faL, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import GymList from './components/GymList';


const Gym = () => {
    const BASE_URL = "http://sparta-tim.shop"

    const [location, setLocation] = useState('내 주변 클라이밍짐')
    const [gyms, setGyms] = useState([]) 
    const [sizeMy, setSizeMy] = useState(10)
    const [sizeSeoul, setSizeSeoul] = useState(10)
    const [sizeGg, setSizeGg] = useState(25)
    const [sizeBs, setSizeBs] = useState(10)
    const [sizeDg, setSizeDg] = useState(10)
    const [sizeGj, setSizeGj] = useState(10)

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

// 현재위치 api 입니다
  useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude
          const lng = position.coords.longitude
          await axios.get(`${BASE_URL}/gyms?page=0&size=${sizeMy}&lon=${lng}&lat=${lat}`)
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
  }, [sizeMy])

  
    //서울을 클릭하면 서울 특정 주소로 지도 중심을 이동시킨다
    //서울 주변의 클라이밍짐을 띄워준다
  const onclickCategorySeoul = () => {

  }

  const categorySeoul = async() => {
    const lat = 37.56682195018582
    const lng = 126.97865225946583
    await axios.get(`${BASE_URL}/gyms?page=0&size=${sizeSeoul}&lon=${lng}&lat=${lat}`)
    .then((res) => {
      setGyms(res.data.data)
      setState((prev) => ({
        ...prev,
        center: {
          lat: 37.56682195018582,
          lng: 126.97865225946583,
      }}))
      setLocation('서울 주변 클라이밍짐')
      setPlusMy(false)
      setPlusSeoul(true)
      setPlusGg(false)
      setPlusBs(false)
      setPlusDg(false)
      setPlusGj(false)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const categoryGg = async() => {
    const lat = 37.23430874181801
    const lng = 127.20135714691537
    await axios.get(`${BASE_URL}/gyms?page=0&size=${sizeGg}&lon=${lng}&lat=${lat}`)
    .then((res) => {
      setGyms(res.data.data)
      setState((prev) => ({
        ...prev,
        center: {
          lat: 37.23430874181801,
          lng: 127.20135714691537,
      }}))
      setLocation('경기 주변 클라이밍짐')
      setPlusMy(false)
      setPlusSeoul(false)
      setPlusGg(true)
      setPlusBs(false)
      setPlusDg(false)
      setPlusGj(false)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const categoryBs = async() => {
    const lat = 35.179735278020225
    const lng = 129.0750650311972
    await axios.get(`${BASE_URL}/gyms?page=0&size=${sizeBs}&lon=${lng}&lat=${lat}`)
    .then((res) => {
      setGyms(res.data.data)
      setState((prev) => ({
        ...prev,
        center: {
          lat: 35.179735278020225,
          lng: 129.0750650311972,
      }}))
      setLocation('부산 주변 클라이밍짐')
      setPlusMy(false)
      setPlusSeoul(false)
      setPlusGg(false)
      setPlusBs(true)
      setPlusDg(false)
      setPlusGj(false)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const categoryDg = async() => {
    const lat = 35.87138346208865
    const lng = 128.60180223396753
    await axios.get(`${BASE_URL}/gyms?page=0&size=${sizeDg}&lon=${lng}&lat=${lat}`)
    .then((res) => {
      setGyms(res.data.data)
      setState((prev) => ({
        ...prev,
        center: {
          lat: 35.87138346208865,
          lng: 128.60180223396753,
      }}))
      setLocation('대구 주변 클라이밍짐')
      setPlusMy(false)
      setPlusSeoul(false)
      setPlusGg(false)
      setPlusBs(false)
      setPlusDg(true)
      setPlusGj(false)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const categoryGj = async() => {
    const lat = 35.160101970076916
    const lng = 126.8516381907944
    await axios.get(`${BASE_URL}/gyms?page=0&size=${sizeGj}&lon=${lng}&lat=${lat}`)
    .then((res) => {
      setGyms(res.data.data)
      setState((prev) => ({
        ...prev,
        center: {
          lat: 35.160101970076916,
          lng: 126.8516381907944,
      }}))
    })
    setLocation('광주 주변 클라이밍짐')
    setPlusMy(false)
    setPlusSeoul(false)
    setPlusGg(false)
    setPlusBs(false)
    setPlusDg(false)
    setPlusGj(true)
    .catch((err) => {
      console.log(err)
    })
  }


//gym 검색 API 입니다~
    const [search, setSearch] = useState('')

    const onclickSearchGym = () => {
      if(search === "") {
        alert('한 글자 이상 입력해주세요')
      } else {
        searchGym();
      }
    }

    const searchGym = async() => {
        await axios.get(`${BASE_URL}/gyms/search?page=0&size=100&query=${search}`)
        .then((res) => {
          if(res.data.data.length !== 0) {

              setState((prev) => ({
                ...prev, center: {lat: res.data.data[0]?.lat, lng: res.data.data[0]?.lon}
              }))
            }
            setGyms(res.data.data)
            setLocation("검색어 '" + search + "'")
            setSearch('')
            setPlusMy(false)
            setPlusSeoul(false)
            setPlusGg(false)
            setPlusBs(false)
            setPlusDg(false)
            setPlusGj(false)
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

// 더 보기 이벤트
      const [plusMy, setPlusMy] = useState(true)
      const [plusSeoul, setPlusSeoul] = useState(false)
      const [plusGg, setPlusGg] = useState(false)
      const [plusBs, setPlusBs] = useState(false)
      const [plusDg, setPlusDg] = useState(false)
      const [plusGj, setPlusGj] = useState(false)

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
                  <S_category onClick={categoryGg} type="button"><h3>경기</h3></S_category>
                  <S_category onClick={categoryBs} type="button"><h3>부산</h3></S_category>
                  <S_category onClick={categoryDg} type="button"><h3>대구</h3></S_category>
                  <S_category onClick={categoryGj} type="button"><h3>광주</h3></S_category>
              </div>
              
            </div>
            

            {/* 내 주변 클라이밍 짐 Area입니다 */}
            <div style={{display:'flex', justifyContent:'center'}}>


                {/* 카카오 Map 입니다 */}
                
                <Map
                    center={ state.center }
                    style={{ width: "134rem", height: "110rem" }}
                    level={5}
                >
                    
                    <MapMarker position={state.center}>
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
                    <div style={{width:'100%', height:'9.5rem', borderBottom:'1px solid #ffffff',padding:'3.5rem 3.5rem 3rem 3.5rem'}}>
                        <span style={{fontWeight:'700', fontSize:'2rem'}}>{location}</span>
                        {
                          plusMy ? <MoreGym onClick={()=>{setSizeMy(70)}} type="button"> 더 보기</MoreGym> :
                             plusSeoul ? <MoreGym onMouseOver={()=>{setSizeSeoul(80)}} onClick={categorySeoul} type="button"> 더 보기</MoreGym> :
                                plusGg ? <MoreGym onMouseOver={()=>{setSizeGg(50)}} onClick={categoryGg} type="button"> 더 보기</MoreGym> :
                                  plusBs ? <MoreGym onMouseOver={()=>{setSizeBs(50)}} onClick={categoryBs} type="button"> 더 보기</MoreGym> :
                                    plusDg ? <MoreGym onMouseOver={()=>{setSizeDg(50)}} onClick={categoryDg} type="button"> 더 보기</MoreGym> :
                                        plusGj ? <MoreGym onMouseOver={()=>{setSizeGj(50)}} onClick={categoryGj} type="button"> 더 보기</MoreGym> : null
                        }
                    </div>

                    <GymList gyms={gyms}/>
                    
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

const MoreGym = styled.span`
font-size: 1.4rem;
border-bottom: 1px solid #ffffff;
margin: 0 0 0 15px;
opacity: 0.8;
`

export default Gym;