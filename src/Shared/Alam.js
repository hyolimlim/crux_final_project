import styled from "styled-components";
import { useState, useEffect } from "react";
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';
import { __getAlam, _readAlam, _addAlam, _deleteAlam, _deleteAlams, __NreadAlam, _minusAlam, _plusAlam } from "../Redux/modules/notification";
import Loading from "../Shared/Loading"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Alam = () => {
const BASE_URL = "http://sparta-tim.shop";
const [reload, setReload] = useState(false)
const {isLoading, error, alams} = useSelector((state) => state.alams)
// console.log(alams)

const {isLoading2, error2, NreadAlams} = useSelector((state) => state.NreadAlams)
// console.log(NreadAlams.data)
// console.log(error2)

const navigate = useNavigate()
const dispatch = useDispatch()
//SSE 연결하기
const EventSource = EventSourcePolyfill || NativeEventSource;  //eventsource 쓰려면 import 해야됨!

const [listening, setListening] = useState(false);
const [alam, setAlam] = useState([])
const [value, setValue] = useState(null)
const [meventSource, msetEventSource] = useState(undefined);

const [showAlam, setShowAlam] = useState(false)

let sse = undefined;

useEffect(()=>{
  if(!listening) {
    sse = new EventSource('http://54.180.31.108/subscribe',     //구독
    {headers: {Authorization: localStorage.getItem("access_token") }
    })

    sse.onopen = event => {
      console.log("연결완료")
    }

    sse.addEventListener('sse', (e) => {
        if(e.data.startsWith('{')) {
          console.log(JSON.parse(e.data))

          dispatch(_addAlam(JSON.parse(e.data)))
          dispatch(_plusAlam(1))
          // setAlam(prev => [...prev, JSON.parse(e.data).content])
        }}
    )

    sse.onerror = event => {
      console.log(event.target.readyState);
      if (event.target.readyState === EventSource.CLOSED) {
        console.log("eventsource closed (" + event.target.readyState + ")");
      }
      sse.close();
    };
    setListening(true);
  }
  return () => {
    sse.close();
  }
}, [])

useEffect(()=>{
  dispatch(__getAlam())
  dispatch(__NreadAlam())
},[])

const onclickReadAlam = (notificationId) => {
  readAlam(notificationId)
  dispatch(_readAlam(notificationId))

  const a = alams.data.findIndex((v) => v.id === notificationId)
  if (!alams.data[a].status) {
    dispatch(_minusAlam(1))
  }
}

const onclickDeleteAlam = (notificationId) => {
  deleteAlam(notificationId)
  dispatch(_deleteAlam(notificationId))

  const a = alams.data.findIndex((v) => v.id === notificationId)
  if (!alams.data[a].status) {
    dispatch(_minusAlam(1))
  }
}

const onclickDeleteAlams = () => {
  deleteAlams()
  dispatch(_deleteAlams())
  dispatch(_minusAlam(NreadAlams.data.count))
}

const readAlam = async (notificationId) => {
  await axios.post(`${BASE_URL}/notifications/${notificationId}`, null,
          { headers: {Authorization: window.localStorage.getItem("access_token")}})
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    }) 
}
const deleteAlam = async (notificationId) => {
  await axios.delete(`${BASE_URL}/notifications/${notificationId}`,
          { headers: {Authorization: window.localStorage.getItem("access_token")}})
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    }) 
}
const deleteAlams = async () => {
  await axios.delete(`${BASE_URL}/notifications`,
          { headers: {Authorization: window.localStorage.getItem("access_token")}})
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    }) 
}

    return (
        <>
        <div style={{position:'absolute', margin:'-28px 0 0 861px'}}>
         <img style={{width:'3rem', margin:'0 3rem 0 0'}} src="https://previews.123rf.com/images/get4net/get4net1711/get4net171100677/89003028-%EC%A2%85-%EC%95%84%EC%9D%B4%EC%BD%98.jpg" 
          onClick={()=>setShowAlam(!showAlam)}/>
            <div style={{width:'3rem', height:'3rem', backgroundColor:'white', borderRadius:'60%', position:'absolute', margin:'-48px 0 0 9px', textAlign:'center', padding:'7px 0 0 0'}}>
             
             { isLoading2 ? <Loading/> : NreadAlams.data.count}
            
            </div>
          
      { showAlam &&
          <AlamBox>
          {
            isLoading ? <Loading /> :
             alams?.data.length === 0 ? (<p>아직 알람이 없습니다</p>) : (
                  
                <>
                  <button onClick={(e)=>{e.stopPropagation(); onclickDeleteAlams()}}>전체 삭제</button>
                 
                  {
                      alams?.data.map((alam) => {
                    return (
                      <div key={alam.id}>
                        {!alam.status ? 
                          (<AlamContent onClick={(e)=>{e.stopPropagation(); onclickReadAlam(alam.id)}} >
                            {alam.content} <button onClick={(e)=>{e.stopPropagation(); onclickDeleteAlam(alam.id)}}>삭제</button> 
                          </AlamContent>)
                         :
                         (<ReadAlamContent >
                            {alam.content} <button onClick={(e)=>{e.stopPropagation(); onclickDeleteAlam(alam.id)}}>삭제</button> 
                          </ReadAlamContent>)
                        }
                      </div>
                    )})
                  }

                </>)
          }
          </AlamBox>
        }
        </div>
        </>
    )
}

const AlamBox = styled.div`
width: 30rem;
height: 30rem;
border: 1px solid yellow;
border-radius: 10px;
position: absolute;
background: #ffffff;
color: #141414;
overflow: auto;
z-index: 999;
`

const AlamContent = styled.div`

`

const ReadAlamContent = styled.div`
opacity: 0.3;
`

export default Alam;