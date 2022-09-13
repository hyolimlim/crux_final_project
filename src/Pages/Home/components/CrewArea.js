import { useState } from "react";
import styled from "styled-components";



const CrewArea = () => {

    const [crewList, setCrewList] = useState([1,2,3,4])
    
    

    return(
        <div style={{width:'1920px',height:'600px', backgroundColor:'#111', margin:'0 auto'}}>
            <div style={{width:'1210px', height:'70px', fontSize:'34px', margin:'0 auto', color:'white'}}>
                <span style={{margin:'0 50px 0 0'}}>인기 크루</span>
                <span>신규 크루</span>
            </div>
            <div style={{width:'1210px', height:'250px', margin:'0 auto', display:'flex'}}>
            {
                crewList.map((crew,i)=>{
                    return(
                            <div key={i} style={{width:'274px', height:'400px', margin:'0 3%'}}>
                                <img src="https://cdn-pro-web-209-212-godomall.spdycdn.net/malb2b1_godomall_com/data/goods/21/01/02/19184/19184_detail_038.jpg" alt="" 
                                style={{width:'250px', height:'250px', margin:'0 10px', borderRadius:'60%'}}/>
                                <div>
                                    <Snumber>{i+1}</Snumber>
                                    <div style={{textAlign:'center'}}>
                                        <div style={{color:'white', margin:'0 0 14px 0'}}>더클라임 양재점</div>
                                        <div style={{color:'white'}}>좋아요 30개</div>
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
margin: -104px 0 0 -22px;
`

export default CrewArea;