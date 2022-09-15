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
import {FontHightlight, FontHightlight2} from './components/FontHightlight.js';

const Crew = () => {

    const [choicePopularCrew, setChoicePopularCrew] = useState(true)

    const navigate = useNavigate()
    // const dispatch = useDispatch()
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

    const [page, setPage] = useState(0) //현재 페이지
    const [load, setLoad] = useState(false); //로딩 스피너
    const preventRef = useRef(true) //옵저버 중복 실행 방지
    const endRef = useRef(false) //모든 글 로드 확인



    const obsHandler = ((entries) => { //옵저버 콜백함수
        const target = entries[0];
        if(!endRef.current && target.isIntersecting && preventRef.current) { //옵저버 중복 실행 방지
            preventRef.current = false;

            setPage(prev => prev + 1); //페이지 값 증가 
        }
    })

    useEffect(()=>{
        const observer = new IntersectionObserver(obsHandler, { threshold : 0.1 });

        if(obsRef.current) observer.observe(obsRef.current); 
        return () => { observer.disconnect(); }
    }, []);

    const onclickGetCrew = () => {
        getCrew();
        setChoicePopularCrew(true)
    } 
    const getCrew = useCallback(async() => { //crewList 불러오기
        
    if(choicePopularCrew){
        setLoad(true); //로딩 시작
        await axios.get(`https://01192mg.shop/crews/popular?page=${page}&size=6`)
        .then((res) => {
            console.log(res.data.data.content) 
            setList(prev => [...prev, ...res.data.data.content])
        })
        .catch((err) => {
            console.log(err)
        })
        setLoad(false);
    }
        
    }, [page]);

    useEffect(()=>{
        getCrew();
        newCrew()
    }, [page])


// 신규크루 API 입니다
    const [newlist, setNewlist] = useState([])
    // console.log(newlist)
    const [newpage, setNewpage] = useState(0)

    const onclickNewCrew = () => {
        newCrew();
        setChoicePopularCrew(false);
    }

    const newCrew = useCallback(async() => {
        if(!choicePopularCrew) {
            setLoad(true); //로딩 시작
            await axios.get(`https://01192mg.shop/crews?page=${page}&size=6`)
            .then((res) => {
                console.log(res.data.data.content) 
                setNewlist(prev => [...prev, ...res.data.data.content])
            })
            .catch((err) => {
                console.log(err)
            })
           setLoad(false);
        }
    }, [page]);


// 크루검색 API 입니다
    const [search, setSearch] = useState('')

    const onclickSearchCrew = () => {
        searchCrew();
    }

    const searchCrew = useCallback(async() => {
        setLoad(true); //로딩 시작
        await axios.get(`https://01192mg.shop/crews/search?query=${search}`)
        .then((res) => {
            
            setList(res.data.data)
            setSearch('')
        })
        .catch((err) => {
            console.log(err)
        })
       setLoad(false);
    }, [onclickSearchCrew])

    
    
// 아래처럼 하지말고 load 처리 하려면 리덕스에서 받아온 Loading으로 할것
// if (load) {
//     return(
//         <Loading />
//     )
// }

    return(
        <div>
            <Navbar />

            <HeaderWrap>
                <h1 style={{width:'120rem', margin:'0 auto', padding:'10rem 0 0 0'}}>크루 모임</h1>
                
            {/* 검색 박스 */}
                <div style={{width:'120rem', margin:'0 auto', height:'8rem'}}>
                    <S_search placeholder='검색어를 입력해 주세요' onChange={(e)=> setSearch(e.target.value)}/>
                    <img src={검색아이콘} type="button" style={{width:'3rem', height:'3rem', margin:'0 0 0 -5rem'}} 
                        onClick={onclickSearchCrew}/>
                </div>
                <div style={{width:'120rem', margin:'7.5rem auto 0 auto'}}>
                    
                        {
                            choicePopularCrew === true ?
                            
                            <FontHightlight onclickNewCrew={onclickNewCrew} />
                            : 
                            <FontHightlight2 onclickGetCrew={onclickGetCrew}/>
                        }
                        
                </div>
            </HeaderWrap>

            
        <div style={{width:'192rem',height:'135rem', overflow:'auto', backgroundColor:'#141414', color:'#999999'}}>
            <Container style={{width:'120rem', height:'134rem', margin:'0 auto', padding:'0'}}>
                <Row md={3} style={{margin:'0 auto', padding:'1rem 0 0 0'}}>
                
                {   
                    newlist.length === 0 ? 

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
                    )           //기본적으로 위의 인기크루 list 를 반복문으로 보여주고
                    :           //신규크루값이 들어오면 newlist 반복문을 돌려줍니다 
                    newlist?.map((val, i) => (
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
        </div>

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
background-color: #262626;
color:#ffffff;

`

const S_search = styled.input`
width: 60rem;
height: 5rem;
margin: 2rem auto;
border: 1px solid #f0f0f0;
border-radius: 0.5rem;
font-size: 1.4rem; 
padding: 0 0 0 1rem;
`

const Card = styled.span`
width: 38rem;
height: 49rem;
`

export default Crew;











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