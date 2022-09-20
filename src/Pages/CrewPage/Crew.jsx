import styled from 'styled-components'
import Navbar from '../../Shared/Navbar.js'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { __getCrew } from "../../Redux/modules/crewSlice";
import Loading from "../../Shared/Loading";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect, useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer';
import React from 'react';
import {FontHightlight, FontHightlight2} from './components/FontHightlight.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Crew = () => {
    const BASE_URL = "http://sparta-tim.shop"
    
    // const SERVERT = process.env.REACT_APP_SERVER_T;
    // const BASE_URL = SERVERT;

    const [choicePopularCrew, setChoicePopularCrew] = useState(true)

    const navigate = useNavigate()

// 무한스크롤 적용하기

    const obsRef = useRef(null); //observer 요소
    // console.log(obsRef)
    const [list, setList] = useState([]) 

    const [page, setPage] = useState(0) //현재 페이지
    const [load, setLoad] = useState(false); //로딩 스피너
    const preventRef = useRef(true) //옵저버 중복 실행 방지
    const endRef = useRef(false) //모든 글 로드 확인

    // console.log(page)

    const obsHandler = ((entries) => { //옵저버 콜백함수
        const target = entries[0];
        if(!endRef.current && target.isIntersecting && preventRef.current) { //옵저버 중복 실행 방지
            preventRef.current = false;

            setPage(prev => prev + 1); //페이지 값 증가 
            
        }
    })

    useEffect(()=>{
        const observer = new IntersectionObserver(obsHandler, { threshold : 0.5 });

        if(obsRef.current) observer.observe(obsRef.current); 
        return () => { observer.disconnect(); }
    }, []);

    const onclickGetCrew = () => {
        getCrew();
        setChoicePopularCrew(true)
        setNewlist([])
    } 
    const getCrew = useCallback(async() => { //crewList 불러오기
        
    // if(choicePopularCrew){
        setLoad(true); //로딩 시작
        await axios.get(`${BASE_URL}/crews/popular?page=0&size=30`)
        .then((res) => {
            // console.log(res.data.data.content) 
            setList(prev => [...prev, ...res.data.data.content])
            setNewlist([])
        })
        .catch((err) => {
            console.log(err)
        })
        setLoad(false);
    // }
    }, [page]);

    useEffect(()=>{
        getCrew();
        // newCrew();
    }, [])


// 신규크루 API 입니다
    const [newlist, setNewlist] = useState([])
    // console.log(newlist)
    const [newpage, setNewpage] = useState(0)

    const onclickNewCrew = () => {
        setChoicePopularCrew(false);
        newCrew();
        setList([])
    }

    const newCrew = useCallback(async() => {
            setLoad(true); //로딩 시작
            await axios.get(`${BASE_URL}/crews?page=0&size=30`)
            .then((res) => {
                // console.log(res.data.data.content) 
                setNewlist(prev => [...prev, ...res.data.data.content])
            })
            .catch((err) => {
                console.log(err)
            })
           setLoad(false);
    }, [page]);


// 크루검색 API 입니다
    const [search, setSearch] = useState('')

    const onclickSearchCrew = () => {
        searchCrew();
    }

    const searchCrew = useCallback(async() => {
        setLoad(true); //로딩 시작
        await axios.get(`${BASE_URL}/crews/search?query=${search}`)
        .then((res) => {
            if(list.length !== 0) {
                setList(res.data.data)
            } else {
                setNewlist(res.data.data)
            }  
            setSearch('')
        })
        .catch((err) => {
            console.log(err)
        })
       setLoad(false);
    }, [onclickSearchCrew])


    return(
        <div>
            <Navbar />

            <HeaderWrap>
                <h1 style={{width:'120rem', margin:'0 auto', padding:'10rem 0 0 0'}}>크루 모임</h1>
                
            {/* 검색 박스 */}
                <div style={{width:'120rem', margin:'0 auto', height:'8rem'}}>
                    <S_search placeholder='검색어를 입력해 주세요' onChange={(e)=> setSearch(e.target.value)} value={search}/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="3x" color='black' onClick={onclickSearchCrew} style={{position:'absolute', margin:'3rem 1rem 0 -4.5rem'}} type="button"/>
                        
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

            
        <div style={{width:'192rem',height:'134rem', backgroundColor:'#141414', color:'#999999', overflow:'auto'}}>
            <Container style={{width:'120rem', height:'134rem', margin:'0 auto', padding:'0', backgroundColor:'#141414'}}>
                <Row md={3} style={{margin:'0 auto', padding:'1rem 0 0 0'}}>
                
                
                {
                load === true ? <Loading /> :
                
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

           <div ref={obsRef}></div>

        </div>

            {
                load ? <Loading />
                : null
            } 
            
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



