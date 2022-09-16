import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import 플러스기호 from "../../../Image/플러스 기호.png"
import ModalReview from "./ModalReview";
import ReviewSlider from "./ReviewSlider";
import 클라이밍 from '../../../Image/클라이밍1.png'


const Content = ({gym}) => {

const navigate = useNavigate()
const [modal, setModal] = useState(false)
// console.log(gym.imgUrl)

const onclickLikeGym = () => {
    likeGym();
}

const likeGym = useCallback(async() => {
    console.log(gym.id)
    await axios.post(`https://01192mg.shop/likegyms/${gym.id}`, null,{
        headers: {access_token: window.localStorage.getItem("access_token")}})
    .then((res) => {
        console.log(res.data)
        alert('즐겨찾기 추가 완료')
        // window.location.reload(`/gyms/${gym.id}`)
        navigate(`/gyms/${gym.id}`)
    })
    .catch((err) => {
        console.log(err)
    })
}, [onclickLikeGym])

    return(
        <div style={{width:'192rem', height:'80rem', backgroundColor:'#cccccc'}}>
            <div style={{width:'120rem', height:'64rem', margin:'auto', display:'flex'}}>
                <div style={{width:'70rem', height:'100%', margin:'8rem 0 0 0'}}>
                    
                    <img src={클라이밍} 
                    style={{width:'100%', height:'100%'}}/>
                
                </div>

                <div style={{width:'50rem', height:'100%', margin:'8rem 0 0 0', padding:'4rem', backgroundColor:'#262626', color:'white'}}>
                    
                    <div style={{margin:'1rem 0 0 0', display:'flex'}}> <span style={{margin:'0 13rem 0 0'}}>🖤 즐겨찾기 한 짐 갯수가 들어와요</span>
                        <div type='button' onClick={()=>{setModal(true)}}>
                            <img src="https://cdn-icons-png.flaticon.com/512/2554/2554339.png" style={{width:'3rem'}}/>
                            <div>리뷰쓰기</div>
                        </div>
                        <div type='button' onClick={onclickLikeGym} style={{margin:'0 0 0 2rem'}}>
                            <img src="https://cdn-icons-png.flaticon.com/512/93/93630.png" style={{width:'3rem'}}/>
                            <div>즐겨찾기</div>
                        </div>
                        
                    </div>
                    
                    <div style={{fontSize:'2rem', fontWeight:'700', margin:'3rem 0 0 0'}}>주소 <S_content> {gym.location} </S_content></div>
                    <div style={{fontSize:'2rem', fontWeight:'700', margin:'2rem 0 0 0'}}>전화번호 <S_content> {gym.phone} </S_content></div>

                    <div style={{fontSize:'2rem', fontWeight:'700', margin:'10rem 0 0 0'}}>방문객 포토리뷰</div>

                    <div style={{width:'90%', height:'22rem', margin:'2rem auto'}}>
                        {
                            gym.reviews === [null] ? 
                            
                            <div color="white">아직 포토 리뷰가 없습니다 <br/>
                                제일 먼저 리뷰를 남겨주세요!</div> 
                            
                            :  
                            gym.reviews?.slice(0,2).map((review,i)=>{
                            return(
                                <ReviewSlider reviews={gym.reviews}/>
                            )})
                        }
                    </div>
                    <div style={{margin:'9rem 0 0 0', color:'#FFB800'}}>리뷰 상세보기</div>
                </div>
            </div>

    {/* 리뷰 작성 모달창입니다 */}
            {
                modal && <ModalReview setModal={setModal} gym={gym}/>
            }

        </div>
    )
}

// const MainImg = styled.div`
// width: 100%;
// height: 100%;
// background: url(${(props) => props.gymImg});
// background-position: center;
// background-size: cover;
// background-repeat: no-repeat;
// `


const S_content = styled.span`
margin-left: 1rem;
font-size: 2rem;
font-weight: 400;
`


export default Content;