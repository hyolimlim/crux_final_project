import axios from 'axios';
import { useState, useEffect, useRef, useCallback } from 'react'


const InfiniteScroll = () => {

    const obsRef = useRef(null); //observer 요소
    const [List, setList] = useState([]) 
    // const [List, setList] = useState(() => list)  //post List

    const [page, setPage] = useState(1) //현재 페이지
    const [load, setLoad] = useState(false); //로딩 스피너
    const preventRef = useRef(true) //옵저버 중복 실행 방지
    const endRef = useRef(false) //모든 글 로드 확인

    

    

    const obsHandler = ((entries) => { //옵저버 콜백함수
        const target = entries[0];
        if(target.isIntersecting && preventRef.current) { //옵저버 중복 실행 방지
            preventRef.current = false;
            setPage(prev => prev + 1); //페이지 값 증가
        }
    })

    useEffect(()=>{
        const observer = new IntersectionObserver(obsHandler, { threshold : 0.5 });

        if(obsRef.current) observer.observe(obsRef.current);
        return () => { observer.disconnect(); }
    }, [])

    const getPost = useCallback(async() => { //글 불러오기
        console.log('crewList 가져오기!')
        setLoad(true); //로딩 시작

        const res = await axios({method: 'GET', url:`https://01192mg.shop/crews/popular?page=${page}&size=10`});
        if(res.data) {
            setList(prev => [...prev, ...res.data[0]]);
            preventRef.current = true;
        } else {
            console.log(res); //error
        }
        setLoad(false); //로딩 종료
    }, [page]);


    useEffect(()=>{
        getPost();
    }, [page])

    return(
        <div ref={obsRef}>
            {
                
            }
        </div>
    )
}