import styled from "styled-components";
import { useState, useEffect } from "react";
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';
import Loading from "../Shared/Loading"

const Alam = () => {


//SSE 연결하기
const EventSource = EventSourcePolyfill || NativeEventSource;  //eventsource 쓰려면 import 해야됨!

const [listening, setListening] = useState(false);
const [alam, setAlam] = useState([])
const [value, setValue] = useState(null)
const [meventSource, msetEventSource] = useState(undefined);

const [showAlam, setShowAlam] = useState(false)

let sse = undefined;

// useEffect(()=>{
//   if(!listening) {
//     sse = new EventSource('http://54.180.31.108/subscribe',     //구독
//     {headers: {Authorization: localStorage.getItem("access_token") }
//     })
//     msetEventSource(sse)

//     sse.onopen = event => {
//       console.log("연결완료")
//     }
//     sse.onmessage = event => {
//       console.log(event.data)
      
//       const sseData = JSON.parse(event.data) 
//       setAlam(prev => [...prev, sseData])
//     }

//     sse.onerror = event => {
//       setListening(true)
//     }


// // addEventListener 데이터 캐치 성공
//     sse.addEventListener('sse', (e) => {
//         if(e.data.startsWith('{')) {
//           console.log(JSON.parse(e.data).content)

//           setAlam(prev => [...prev, JSON.parse(e.data).content])
//         }}
//     )

//     // sse.addEventListener('error', (e) => {
//     //     if (e) { console.log(e) }
//     // })
//   }
//   return () => {
//     sse.close();
//   }
// }, [])



    return (
        <>
        <div>
         <img style={{width:'2rem', margin:'0 3rem 0 0'}} src="https://previews.123rf.com/images/get4net/get4net1711/get4net171100677/89003028-%EC%A2%85-%EC%95%84%EC%9D%B4%EC%BD%98.jpg" 
          onClick={()=>setShowAlam(!showAlam)}/>
          { showAlam &&
          <AlamBox>
            {
              alam === undefined ? <Loading /> :
                alam?.length === 0 ? <p>아직 알람이 없습니다</p> : 
                  alam?.map((list, i) => {
                    return (
                      <div key={i}>
                          {list}
                      </div>
                    )
                  })
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