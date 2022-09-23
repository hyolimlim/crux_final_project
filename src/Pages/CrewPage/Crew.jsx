import styled from "styled-components";
import Navbar from "../../Shared/Navbar.js";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { __getCrew } from "../../Redux/modules/crewSlice";
import Loading from "../../Shared/Loading";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import React from "react";
import {
  FontHightlight,
  FontHightlight2,
} from "./components/FontHightlight.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import PopularCrew from "./components/PopularCrew.js";
import NewCrew from "./components/NewCrew.js";

const Crew = () => {
  const BASE_URL = "http://sparta-tim.shop";


  const [choicePopularCrew, setChoicePopularCrew] = useState(true);

  const navigate = useNavigate();

  // 크루검색 API 입니다
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([])

  const onclickSearchCrew = () => {
    searchCrew()
  };

  const searchCrew = useCallback(async () => {
    await axios.get(`${BASE_URL}/crews/search?query=${search}`)
      .then((res) => {
        setSearchData(res.data.data);
        setSearch("");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [onclickSearchCrew]);

  return (
    <div>
      <Navbar />

      <HeaderWrap>
        <h1
          style={{ width: "120rem", margin: "0 auto", padding: "10rem 0 0 0" }}
        >
          크루 모임
        </h1>

    {/* 검색 박스 */}
        <div style={{ width: "120rem", margin: "0 auto", height: "8rem" }}>
          <S_search
            placeholder="검색어를 입력해 주세요"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass} size="3x" color="black"
            onClick={onclickSearchCrew}
            style={{ position: "absolute", margin: "3rem 1rem 0 -4.5rem" }}
            type="button"
          />
        </div>
        <div style={{ width: "120rem", margin: "7.5rem auto 0 auto", display:'flex', fontSize:'2rem'}}>
          <div style={{margin:'0 2rem 0 0'}} type="button" 
            onClick={()=>{setChoicePopularCrew(true); setSearchData([])}}>인기 크루</div>
          <div type="button" 
            onClick={()=>{setChoicePopularCrew(false); setSearchData([])}}>신규 크루</div>
        </div>
      </HeaderWrap>

          {choicePopularCrew === true ? (<PopularCrew searchData={searchData}/>) : (<NewCrew searchData={searchData}/>)}

    </div>
  );
};

const HeaderWrap = styled.div`
  width: 192rem;
  height: 35rem;
  background-color: #262626;
  color: #ffffff;
`;

const S_search = styled.input`
  width: 60rem;
  height: 5rem;
  margin: 2rem auto;
  border: 1px solid #f0f0f0;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  padding: 0 0 0 1rem;
`;

const Card = styled.span`
  width: 38rem;
  height: 49rem;
`;

export default Crew;
