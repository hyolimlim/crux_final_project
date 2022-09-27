import styled from "styled-components";
import { useState, useEffect } from "react";
import Loading from "../Shared/components/AlamLoading"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getAlam, _readAlam, _deleteAlam, _deleteAlams, _minusAlam } from "../Redux/modules/notification";
import axios from "axios";


const Alam = ({setShowAlam, NreadAlams}) => {

const BASE_URL = "http://sparta-tim.shop";
const {isLoading, error, alams} = useSelector((state) => state.alams)
console.log(alams)

const navigate = useNavigate()
const dispatch = useDispatch()

const closeModal = () => {
  setShowAlam(false)
}

const onclickReadAlam = (notificationId) => {
  readAlam(notificationId)
  dispatch(_readAlam(notificationId))

  const a = alams.data.findIndex((v) => v.id === notificationId)
  if (!alams.data[a].status) {
    dispatch(_minusAlam(1))
  }
}

const onclickDeleteAlam = (notificationId) => {
  deleteAlam(notificationId)
  dispatch(_deleteAlam(notificationId))

  const a = alams.data.findIndex((v) => v.id === notificationId)
  if (!alams.data[a].status) {
    dispatch(_minusAlam(1))
  }
}

const onclickDeleteAlams = () => {
  deleteAlams()
  dispatch(_deleteAlams())
  dispatch(_minusAlam(NreadAlams.data.count))
}

const readAlam = async (notificationId) => {
  await axios.post(`${BASE_URL}/notifications/${notificationId}`, null,
          { headers: {Authorization: window.localStorage.getItem("access_token")}})
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    }) 
}
const deleteAlam = async (notificationId) => {
  await axios.delete(`${BASE_URL}/notifications/${notificationId}`,
          { headers: {Authorization: window.localStorage.getItem("access_token")}})
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    }) 
}
const deleteAlams = async () => {
  await axios.delete(`${BASE_URL}/notifications`,
          { headers: {Authorization: window.localStorage.getItem("access_token")}})
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    }) 
}

useEffect(()=>{
  dispatch(__getAlam())
},[])



    return (
        <ModalPage onClick={closeModal}>
          
            <AlamBox onClick={(e)=>e.stopPropagation()}>
            
            {
              isLoading ? <Loading /> :
              alams?.data.length === 0 ? (<p>아직 알람이 없습니다</p>) : (
                    
                  <>
                    <div style={{fontSize:'2rem', margin:'7px 0 0 14px'}}> 나의 알림
                      <S_button onClick={(e)=>{e.stopPropagation(); onclickDeleteAlams()}}>전체 삭제</S_button>
                    </div>
                    
                    {
                        alams?.data.map((alam) => {
                      return (
                        <div key={alam.id}>
                          {!alam.status ? 
                            (<AlamContent onClick={(e)=>{e.stopPropagation(); onclickReadAlam(alam.id); navigate(`/crews/${alam.content.crewId}`)}} >
                              {alam.content.content} <button onClick={(e)=>{e.stopPropagation(); onclickDeleteAlam(alam.id)}}>삭제</button> 
                            </AlamContent>)
                          :
                          (<ReadAlamContent onClick={(e)=>{e.stopPropagation(); navigate(`/crews/${alam.content.crewId}`)}}>
                              {alam.content.content} <button onClick={(e)=>{e.stopPropagation(); onclickDeleteAlam(alam.id); }}>삭제</button> 
                            </ReadAlamContent>)
                          }
                        </div>
                      )})
                    }

                  </>)
            }
            </AlamBox>
          
        </ModalPage>
    )
}

const ModalPage = styled.div`
position: absolute;
top: 0;
margin: 0 -36rem 0 -36rem;
width: 1920px;
height: 100%;
z-index: 900;
`

const AlamBox = styled.div`
width: 30rem;
height: 30rem;
border: 1px solid yellow;
border-radius: 10px;
position: absolute;
top: 32rem;
left: 70%;
transform: translate(-50%, -50%);
background: #ffffff;
color: #141414;
overflow: auto;
z-index: 901;
`

const S_button = styled.button`
font-size: 1.4rem;
margin:0 0 0 7rem;
`

const AlamContent = styled.div`

`

const ReadAlamContent = styled.div`
opacity: 0.3;
`

export default Alam;