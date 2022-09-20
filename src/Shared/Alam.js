import styled from "styled-components";
import { useState, useEffect } from "react";
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';


const Alam = () => {


//SSE 연결하기
const EventSource = EventSourcePolyfill || NativeEventSource;  //eventsource 쓰려면 import 해야됨!
const token = localStorage.getItem("access_token")

const [alam, setAlam] = useState([])
const [showAlam, setShowAlam] = useState(false)

useEffect(()=>{

  if(token) {
    // const sse = new EventSource('http://54.180.31.108/subscribe',
    // {headers: {Authorization: localStorage.getItem("access_token") }
    // }) 
    // console.log('sse', sse);
    // sse.onopen = event => {
    //   console.log("커넥션 성공~~!!", event)
    // }

    // sse.addEventListener('sse', (e) => {
    //     // console.log(e.data)         
    //     setAlam(prev => [...prev, e.data])
    //     // setAlam(e.data)
    //     }
    // )

    // sse.addEventListener('error', (e) => {
    //     if (e) { console.log(e) }
    // })
  }
  // console.log(alam)
}, [token])



    return (
        <>
        <div>
         <img style={{width:'2rem', margin:'0 3rem 0 0'}} src="https://previews.123rf.com/images/get4net/get4net1711/get4net171100677/89003028-%EC%A2%85-%EC%95%84%EC%9D%B4%EC%BD%98.jpg" 
          onClick={()=>setShowAlam(!showAlam)}/>
          { showAlam &&
          <AlamBox>
            {
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