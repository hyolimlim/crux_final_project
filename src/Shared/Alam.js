import styled from "styled-components";
import { useState, useEffect } from "react";
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';
import { __getAlam, __readAlam, __deleteAlam, __deleteAlams, __NreadAlam } from "../Redux/modules/notification";
import Loading from "../Shared/Loading"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Alam = () => {

const {isLoading, error, alams} = useSelector((state) => state.alams)
const Alam = alams?.data
console.log(Alam)

const {isLoading2, error2, NreadAlams} = useSelector((state) => state.NreadAlams)
const NreadAlam = NreadAlams.data
console.log(NreadAlam)

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

          setAlam(prev => [...prev, JSON.parse(e.data).content])
        }}
    )

    sse.onerror = event => {
      sse.close();
    }
    setListening(true);
  }
  return () => {
    sse.close();
  }
}, [])

useEffect(()=>{
  dispatch(__getAlam())
  dispatch(__NreadAlam())
},[alam])

const onclickReadAlam = (notificationId) => {
  dispatch(__readAlam(notificationId))
}

const onclickDeleteAlam = (notificationId) => {
  dispatch(__deleteAlam(notificationId))
}

const onclickDeleteAlams = () => {
  dispatch(__deleteAlams())
}


    return (
        <>
        <div>
         <img style={{width:'2rem', margin:'0 3rem 0 0'}} src="https://previews.123rf.com/images/get4net/get4net1711/get4net171100677/89003028-%EC%A2%85-%EC%95%84%EC%9D%B4%EC%BD%98.jpg" 
          onClick={()=>setShowAlam(!showAlam)}/>
          { showAlam &&
          <AlamBox>
            {
              isLoading ? <Loading /> :
                Alam?.length === 0 ? <p>아직 알람이 없습니다</p> : 
                  
                <>
                  <button onClick={onclickDeleteAlams}>전체 삭제</button>
                  {

                  Alam?.map((alam) => {
                    return (
                      <>
                      { alam.status === true ? 
                        (<div key={alam.id} style={{opacity:'0.5'}}>{alam.content} <button onClick={(e)=>{ e.stopPropagation();onclickDeleteAlam(alam.id)}}>삭제</button></div>)
                          : (<div key={alam.id} onClick={(e)=>{ e.stopPropagation(); onclickReadAlam(alam.id)}}>{alam.content} <button onClick={(e)=>{ e.stopPropagation(); onclickDeleteAlam(alam.id)}}>삭제</button></div>)
                      }
                      </>
                    )
                  })
                  }
                </>
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

export default Alam;