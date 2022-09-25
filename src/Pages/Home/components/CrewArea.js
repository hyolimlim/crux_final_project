import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getCrew, __getGym } from "../../../Redux/modules/homeSlice";
import Loading from "../../../Shared/Loading"
import 인기크루 from "../../../Image/인기크루.png"



const CrewArea = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isLoading, error, getCrew} = useSelector((state)=>state.getCrew)
    
    const crews = getCrew?.data?.content
    // console.log(crews)

    useEffect(()=>{
        dispatch(__getCrew())
    },[])


return(
        <div style={{width:'1920px',height:'560px', backgroundColor:'#111', margin:'0 auto'}}>
            <div style={{width:'1220px', fontSize:'32px', margin:'0 auto', color:'white'}}>
                <span style={{margin:'0 0 0 0', fontWeight:'bold'}}>인기 크루</span>
                <span style={{margin:'0 25px 0 25px', opacity:"0.15"}}>|</span>
                <span>신규 크루</span>
            </div>
            <div style={{width:'1210px', margin:'12px 360px 0 350px', display:'flex'}}>
            {
                isLoading ? <Loading /> :
                    crews?.map((crew,i)=>{
                        return(
                                <div key={crew.id} style={{width:'274px', height:'400px', margin:'0 70px 0 0'}}>
                                    <img src={인기크루} alt="" style={{width:'250px', height:'250px', margin:'0 10px', borderRadius:'60%'}}
                                        onClick={()=>{navigate(`/crews/${crew.id}`)}}/>
                                    <div>
                                        <Snumber>{i+1}</Snumber>
                                        <div style={{textAlign:'center'}}>
                                            <div style={{color:'white', margin:'0 0 14px 0'}}>{crew?.name}</div>
                                            <div style={{color:'white'}}>좋아요 {crew?.likeNum}개</div>
                                        </div>
                                    </div>
                                    
                                </div>
                        )
                    })
            }
            </div>
        </div>
    )
}

const Snumber = styled.div`
width: 56px;
height: 135px;
opacity: 0.05;
font-family: Poppins;
font-size: 180px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -9px;
text-align: left;
color: #fff;
margin: -104px 0 0 -10px;
`

export default CrewArea;