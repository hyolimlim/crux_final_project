import styled from "styled-components";
import { useState, useEffect } from "react";
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';
import { __getAlam, __readAlam, __deleteAlam, __deleteAlams, __NreadAlam } from "../Redux/modules/notification";
import Loading from "../Shared/Loading"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Alam = () => {

const [reload, setReload] = useState(false)
const {isLoading, error, alams} = useSelector((state) => state.alams)
const alamList = alams?.data
console.log(alamList)
console.log(error)

const {isLoading2, error2, NreadAlams} = useSelector((state) => state.NreadAlams)
const NreadAlam = NreadAlams.data
console.log(NreadAlam)
console.log(error2)

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
},[alam])

useEffect(()=>{
  dispatch(__getAlam())
  dispatch(__NreadAlam())
},[reload])

const onclickReadAlam = (notificationId) => {
  dispatch(__readAlam(notificationId))
  setReload(!reload)
  console.log(notificationId)
}

const onclickDeleteAlam = (notificationId) => {
  dispatch(__deleteAlam(notificationId))
  setReload(!reload)
}

const onclickDeleteAlams = () => {
  dispatch(__deleteAlams())
  setReload(!reload)
}

if (alamList === undefined) {
  return null;
}

    return (
        <>
        <div>
         <img style={{width:'2rem', margin:'0 3rem 0 0'}} src="https://previews.123rf.com/images/get4net/get4net1711/get4net171100677/89003028-%EC%A2%85-%EC%95%84%EC%9D%B4%EC%BD%98.jpg" 
          onClick={()=>setShowAlam(!showAlam)}/>
          
          { showAlam &&
          <AlamBox>
            {
              alamList?.length === 0 ? (<p>아직 알람이 없습니다</p>) : (
                  
                <>
                  <button onClick={(e)=>{e.stopPropagation(); onclickDeleteAlams()}}>전체 삭제</button>
                  {

                alamList?.map((alam) => {
                    return (
                      <>
                        {alam.content}
                      </>
                    )
                  })
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

const List = styled.div`
width: 23rem;
height: 2.5rem;
margin: 12px 0 0 0;
width: 10rem;
height: 1.5rem;
cursor: pointer;
padding-top: 1rem;
counter-reset: #141414;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`

export default Alam;