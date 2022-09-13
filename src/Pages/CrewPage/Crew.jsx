import styled from 'styled-components'
import Navbar from '../../Shared/Navbar.js'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { __getCrew } from "../../Redux/modules/crewSlice";
import Loading from "../../Shared/Loading";
import { useNavigate } from "react-router-dom";
import 검색아이콘 from "../../Image/검색 아이콘.png"
import axios from 'axios';
import { useState, useEffect, useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer';
import React from 'react';

const Crew = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const { crews, error, isLoading } = useSelector((state)=>state.crews)
    // console.log( isLoading, error, crews )
    // // const state = useSelector((state) => state)
    // // console.log(state)

    // useEffect(()=>{
    //     dispatch(__getCrew(lastCrewId))
    // }, [dispatch])



// 무한스크롤 적용하기

    const obsRef = useRef(null); //observer 요소
    // console.log(obsRef)
    const [list, setList] = useState([]) 
    // console.log(list)
    // console.log(list.at(-1).id)
    // const [List, setList] = useState(() => list)  //post List

    const [lastCrewId, setLastCrewId] = useState(21000000000) //현재 페이지
    const [load, setLoad] = useState(false); //로딩 스피너
    const preventRef = useRef(true) //옵저버 중복 실행 방지
    const endRef = useRef(false) //모든 글 로드 확인



    const obsHandler = ((entries) => { //옵저버 콜백함수
        const target = entries[0];
        if(!endRef.current && target.isIntersecting && preventRef.current) { //옵저버 중복 실행 방지
            preventRef.current = false;

            // const lastId = list?.at(-1).id
            // console.log(lastId)
            setLastCrewId(7); //페이지 값 증가 -> 마지막 crewId 가져오기
        }
    })

    useEffect(()=>{
        getCrew();
        const observer = new IntersectionObserver(obsHandler, { threshold : 0.1 });

        if(obsRef.current) observer.observe(obsRef.current); 
        return () => { observer.disconnect(); }
    }, []);

    const getCrew = useCallback(async() => { //crewList 불러오기
        setLoad(true); //로딩 시작
        console.log('getCrew 불러오기')
        await axios.get(`https://01192mg.shop/crews?lastCrewId=${lastCrewId}&size=10`)
        .then((res) => {
            console.log(res.data.data) //..
            setList(prev => [...prev, ...res.data.data])
        })
        .catch((err) => {
            console.log(err)
        })
       setLoad(false);
    }, [lastCrewId]);

    useEffect(()=>{
        getCrew();
    }, [lastCrewId])


    // 무한스크롤 2페이즈!!
    // const [items, setItems] = useState([])
    // const [page, setPage] = useState(1)
    // const [loading, setLoading] = useState(false)

    // const [ref, inView] = useInView()

    // const getItems = useCallback(async () => {
    //     setLoading(true)
    //     await axios.get(`https://01192mg.shop/crews?lastCrewId=${lastCrewId}&size=10`)
    //     .then((res) => {
    //         console.log(res.data.data)
    //         setItems(prev => [...prev, res.data.data])
    //     })
    //     setLoading(false)
    // }, [page])

    // useEffect(() => {
    //     getItems()
    // }, [getItems])

    // useEffect(() => {
    //     if (inView && loading) {
    //         setPage(prevState => prevState + 1)
    //     }
    // }, [inView, loading])


// if (isLoading) {
//     return  <div> 
//                 <Loading />
//             </div>
// }

    return(
        <div>
            <Navbar />

            <HeaderWrap>
                <h1 style={{width:'120rem', margin:'0 auto', padding:'10rem 0 0 0'}}>크루 모임</h1>
                
            {/* 검색 박스 */}
                <div style={{width:'120rem', margin:'0 auto', height:'8rem'}}>
                    <S_search placeholder='검색어를 입력해 주세요'/>
                    <img src={검색아이콘} type="button" style={{width:'3rem', height:'3rem', margin:'0 0 0 -5rem'}}/>
                </div>
                <div style={{width:'120rem', margin:'8rem auto 0 auto'}}>
                    <h3>
                        <span style={{fontWeight:'700', margin:'0 2rem 0 0'}}>인기 크루</span> <span style={{color:'#cccccc'}}>신규 크루</span>
                    </h3>
                </div>
            </HeaderWrap>

            {/* <div style={{width:'120rem', height:'134rem', margin:'0 auto'}}> */}
            
            <Container style={{width:'120rem', height:'134rem', margin:'0 auto', padding:'0'}}>
                <Row md={3} style={{margin:'0 auto', padding:'1rem 0 0 0'}}>
                
                {
                    list?.map((val, i) => (
                        <React.Fragment key={i}>
                                
                                <Col key={i} style={{width:'38rem', margin:'2rem 2rem 0 0', padding:'0'}} 
                                    onClick={()=>{ navigate(`/crews/${val.id}`) }}>
                                    <img src={val.imgUrl}
                                        alt='' style={{width:'38rem', height:'38rem'}}/>
                                    <h3 style={{margin:'2rem 0 0 0'}}>{val.name}</h3>
                                    <p style={{margin:'0.5rem 0 0 0'}}>{val.content}</p>
                                    <p style={{margin:'1rem 0 0 0'}}>🖤 50명 | 🙍‍♀️ {val.crewNum}</p>
                                </Col>

                        </React.Fragment>
                        )
                    )
                }
                </Row>
            </Container>

            {
                load ? <Loading />
                : null
            }

            <div ref={obsRef}></div>

        </div>
    );
}

const HeaderWrap = styled.div`
width: 192rem;
height: 35rem;
background-color: #fafafa;

`

const S_search = styled.input`
width: 60rem;
height: 5rem;
margin: 2rem auto;
border: 1px solid #f0f0f0;
border-radius: 0.5rem;
`

const Card = styled.span`
width: 38rem;
height: 49rem;
`

export default Crew;