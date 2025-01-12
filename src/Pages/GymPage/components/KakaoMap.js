import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { useState } from 'react';
import { useEffect } from 'react';


const KakaoMap = () => {

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
    {
      title: "강동클라이밍짐",
      latlng: { lat: 37.5336414, lng: 127.142309 }
    },
    {
      title: "손상원 클라이밍짐 잠실점",
      latlng: { lat: 37.5031384, lng: 127.091292 }
    },
  ] 


  return (
    <div>

      <Map
        center={ state.center }
        style={{ width: "134rem", height: "110rem" }}
        level={7}
      >
        <MapMarker position={state.center}>
          <div style={{ padding: "5px", color: "black", textAlign:'center', backgroundColor:"aquamarine", width:'178%' }}>현재위치!</div>
        </MapMarker>

        {
          positions.map((val, i) => (
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
      
    </div>
  );
}


export default KakaoMap;