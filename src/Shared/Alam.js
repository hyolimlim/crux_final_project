import { useState, useEffect } from "react";
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';

const Alam = () => {


//SSE 연결하기
const EventSource = EventSourcePolyfill || NativeEventSource;  //eventsource 쓰려면 import 해야됨!


const [listening, setListening] = useState(false);
const [data, setData] = useState([]);
const [data2, setData2] = useState([]);
const [data3, setData3] = useState([]);
const [value, setValue] = useState(null);
const [meventSource, msetEventSource] = useState(undefined);

console.log(data)
console.log(data2)
console.log(data3)

useEffect(()=>{
  
  console.log("listening", listening);
  let eventSource = null

  if(!listening) {
    eventSource = new EventSource('http://54.180.31.108/subscribe',
    {headers: {Authorization: localStorage.getItem("access_token") }
    }) 
    
    msetEventSource(eventSource)
    console.log('eventSource', eventSource);

    eventSource.onopen = event => {
      console.log("커넥션 성공~~!!", event)
    }

    eventSource.onmessage = (event) => {
      console.log("result", event.data);
      console.log(JSON.parse(event.data))
      setData(prev => [...prev, event.data]);
      setValue(event.data)
    }

    // onmessage 말고 addeventlister 써보자
    eventSource.addEventListener('sse', (e) => {
        // const data = JSON.parse(e.data);
        console.log(e.data)
        }
    )

    eventSource.addEventListener('sse', (e) => {
        // setData3(prev => [...prev, JSON.parse(e.data)])
    })
  }
  return () => {
    eventSource.close();
    console.log("eventSource closed")
  }
}, [])



    return (
        <>
         🔔
        </>
    )
}

export default Alam;