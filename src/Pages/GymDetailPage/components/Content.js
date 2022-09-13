import { useState } from "react";
import styled from "styled-components";
import 플러스기호 from "../../../Image/플러스 기호.png"
import ModalReview from "./ModalReview";

const Content = ({gym}) => {

const [modal, setModal] = useState(false)

    return(
        <div style={{width:'192rem', height:'80rem', backgroundColor:'#cccccc'}}>
            <div style={{width:'120rem', height:'64rem', margin:'auto', display:'flex'}}>
                <div style={{width:'70rem', height:'100%', margin:'8rem 0 0 0'}}>
                    <img src={gym.imgUrl} style={{width:'100%', height:'100%'}}/>
                </div>

                <div style={{width:'50rem', height:'100%', margin:'8rem 0 0 0', padding:'4rem', backgroundColor:'#f4f4f4'}}>
                    
                    <div style={{margin:'1rem 0 0 0', display:'flex'}}> <span style={{margin:'0 13rem 0 0'}}>🖤 즐겨찾기 한 짐 갯수가 들어와요</span>
                        <div type='button' onClick={()=>{setModal(true)}}>
                            <img src="https://cdn-icons-png.flaticon.com/512/2554/2554339.png" style={{width:'3rem'}}/>
                            <div>리뷰쓰기</div>
                        </div>
                        <div type='button' style={{margin:'0 0 0 2rem'}}>
                            <img src="https://cdn-icons-png.flaticon.com/512/93/93630.png" style={{width:'3rem'}}/>
                            <div>즐겨찾기</div>
                        </div>
                        
                    </div>
                    
                    <div style={{fontSize:'2rem', fontWeight:'700', margin:'3rem 0 0 0'}}>주소 <S_content> {gym.location} </S_content></div>
                    <div style={{fontSize:'2rem', fontWeight:'700', margin:'2rem 0 0 0'}}>전화번호 <S_content> {gym.phone} </S_content></div>

                    <div style={{fontSize:'2rem', fontWeight:'700', margin:'20rem 0 0 0'}}>클라이밍짐 사진이 들어와요</div>

                    <div>
                        슬라이더형식으로 들어와요
                        <img src="https://modo-phinf.pstatic.net/20160808_283/14706506407410zqiW_JPEG/mosa5uoyzj.jpeg?type=a1100" 
                            style={{width:'20rem'}}/>
                    </div>
                </div>
            </div>

            {
                modal && <ModalReview setModal={setModal}/>
            }

        </div>
    )
}

const S_content = styled.span`
margin-left: 1rem;
font-size: 2rem;
font-weight: 400;
`

export default Content;