import { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from 'react-bootstrap';

const GalaryArea = () => {

    const [galaryImgs] = useState([1,2,3,4,5,6])

    return(
        <div style={{width:'1920px', height:'1180px', backgroundColor:'#111'}}>
            <Title>갤러리</Title>

            <div style={{width:'1206px', height:'804px', margin:'0 20% 0 20%' }}>
                
                {
                    galaryImgs.map((galaryImg,i)=>{
                        return(
                            <img key={i} src="https://youthpress.net/xe/files/attach/images/9794/655/296/a663deb238418033a8a79e789ddb923a.jpg" 
                                style={{width:'400px', height:'400px',position:'relative', margin:'0 1px 1px 0'}}/>
                        )
                    })
                }           

            </div>
            

            
            
        </div>
    )
}

const Title = styled.div`
width: 1200px;
/* height: 60px; */
margin: 0 15% 0px 15%;
padding: 4%;
font-family: SpoqaHanSansNeo;
font-size: 48px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -2.4px;
text-align: left;
color: #fff;
`


export default GalaryArea;