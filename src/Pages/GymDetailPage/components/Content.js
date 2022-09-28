import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import 플러스기호 from "../../../Image/플러스 기호.png"
import ModalReview from "./ModalReview";
import 클라이밍 from '../../../Image/인기 클라이밍짐.png'
import {LikeHeart, LikedHeart } from "../../../Shared/components/LikeHeart";
import { useDispatch, useSelector } from "react-redux";
import { __getGymDetail } from "../../../Redux/modules/gymDetilSlice";
import Loading from "../../../Shared/Loading";
import 노랑별 from "../../../Image/노랑별.png"
import 검은별 from "../../../Image/검은별.png"



const Content = ({setShowReview, showReview, setReload, reload}) => {
    const BASE_URL = 'http://sparta-tim.shop'

const params = useParams().gymId
const dispatch = useDispatch()

const { isLoading, error, gymDetail } = useSelector((state) => state.gymDetail)
// console.log(isLoading, error, gymDetail)

const gym = gymDetail.data
console.log(gym)

const navigate = useNavigate()
const [modal, setModal] = useState(false)
// console.log(gym.imgUrl)

const onclickLikeGym = () => {
    likeGym();
}

const likeGym = async() => {
    // console.log(gym.id)
    await axios.post(`${BASE_URL}/gyms/${gym.id}/like`, null ,{
        headers: {Authorization: window.localStorage.getItem("access_token")}})
    .then((res) => {
        alert(res.data.data)
        setTimeout(() => {
            setReload(!reload)
        }, 0);
    })
    .catch((err) => {
        console.log(err)
    })
}

useEffect(()=>{
    dispatch(__getGymDetail(params))

},[reload])


if (gym === undefined) 
return(
    <Loading />
) 

    return(
        <div style={{width:'192rem', height:'81.5rem', backgroundColor:'#262626', color:'#cccccc'}}>
            <div style={{width:'192rem', height:'81.5rem', margin:'auto', display:'flex', justifyContent:'center'}}>
                <div style={{width:'60rem', height:'60rem', margin:'10rem 0 0 0'}}>
                    
                    <img src={gym.reviews[0]?.reviewPhotoList[0]?.imgUrl !== undefined ? gym.reviews[0]?.reviewPhotoList[0]?.imgUrl : 클라이밍} 
                    style={{width:'100%', height:'100%'}}/>
                    <HeartIcon type="button" onClick={onclickLikeGym}>
                        { gym?.likeGym === false ? 
                            <LikeHeart /> : <LikedHeart /> }
                    </HeartIcon>
                </div>

                <div style={{width:'60rem', height:'60rem', margin:'10rem 0 0 0', padding:'0rem 4rem 4rem 4rem', backgroundColor:'#262626', color:'#666666'}}>
                    
                    <div style={{margin:'0 0 0 0', color:'#999999'}}> <span style={{margin:'0 16rem 0 0'}}>💛 {gym.likeNum}명 | 리뷰 {gym?.reviews.length}건 </span></div>
                    <div style={{fontSize:'4.4rem', fontWeight:'700', color:'#ffffff',margin:'1rem 0 3.5rem 0'}}>{gym?.name}</div>
                    <S_title> 주소 <S_content> {gym.location} </S_content></S_title>
                    <S_title>전화번호 <S_content> {gym.phone} </S_content></S_title>
                    
                    <S_title> 평점
                            {
                                gym?.avgScore === 5 ? <Star5 /> :
                                    gym?.avgScore >= 4 ? <Star4 /> : 
                                        gym?.avgScore >= 3 ? <Star3 /> :
                                            gym?.avgScore >= 2 ? <Star2 /> :
                                                gym?.avgScore >= 1 ? <Star1 /> :
                                                                            <Star0 /> 
                            }
                              <S_content style={{fontSize:'1.4rem', margin:'0 0 0 0'}}>({Number(gym?.avgScore).toFixed(2)}점)</S_content> 
                    </S_title>
                    
                    <div style={{fontSize:'2rem', fontWeight:'700', margin:'5rem 0 0 0'}}>방문객 리뷰 {gym?.reviews.length}건</div>

                    <div style={{width:'38rem', height:'19rem', margin:'2rem 0 0 0'}}>
                        {
                            gym?.reviews.length === 0 ? 
                            
                            <div style={{color:'#ffffff', fontSize:'3rem', textAlign:'center', padding:'4rem 0 0 0' }}>아직 포토 리뷰가 없습니다 <br/>
                                제일 먼저 리뷰를 남겨주세요!</div> 
                            :  
                            
                            gym?.reviews.length === 1 ? 
                                    <ReviewWrap>
                                        <ReviewNickname>{gym.reviews[gym.reviews.length-1].nickname}</ReviewNickname>
                                        <ReviewContent>{gym.reviews[gym.reviews.length-1].content}</ReviewContent>
                                    </ReviewWrap>
                            :
                            gym?.reviews.length === 2 ? 
                                <>
                                    <ReviewWrap >
                                        <ReviewNickname style={{fontWeight:'700', margin:'0 2rem 0 0'}}>{gym.reviews[gym.reviews.length-1].nickname}</ReviewNickname>
                                        <ReviewContent>{gym.reviews[gym.reviews.length-1].content}</ReviewContent>
                                    </ReviewWrap>
                                    <ReviewWrap>
                                        <ReviewNickname>{gym.reviews[gym.reviews.length-2].nickname}</ReviewNickname>
                                        <ReviewContent>{gym.reviews[gym.reviews.length-2].content}</ReviewContent>
                                    </ReviewWrap>
                                </>
                            :
                                <>
                                <ReviewWrap >
                                    <ReviewNickname style={{fontWeight:'700', margin:'0 2rem 0 0'}}>{gym.reviews[gym.reviews.length-1].nickname}</ReviewNickname>
                                    <ReviewContent>{gym.reviews[gym.reviews.length-1].content}</ReviewContent>
                                </ReviewWrap>
                                <ReviewWrap>
                                    <ReviewNickname>{gym.reviews[gym.reviews.length-2].nickname}</ReviewNickname>
                                    <ReviewContent>{gym.reviews[gym.reviews.length-2].content}</ReviewContent>
                                </ReviewWrap>
                                <ReviewWrap>
                                    <ReviewNickname>{gym.reviews[gym.reviews.length-3].nickname}</ReviewNickname>
                                    <ReviewContent>{gym.reviews[gym.reviews.length-3].content}</ReviewContent>
                                </ReviewWrap>
                                </>
                        }
                    </div>
                    <div style={{display:'flex'}}>
                        <ButtonBox onClick={()=>{setShowReview(!showReview)}}>
                            <button>리뷰 상세보기</button>
                        </ButtonBox>
                        <ButtonBox onClick={()=>{setModal(true)}} style={{margin:'2rem 0 0 2rem'}}>
                            <button>후기 쓰기</button>
                        </ButtonBox>
                    </div>
                </div>
            </div>

    {/* 리뷰 작성 모달창입니다 */}
            {
                modal && <ModalReview setModal={setModal} gym={gym} reload={reload} setReload={setReload}/>
            }

        </div>
    )
}

const HeartIcon = styled.div`
  position: absolute;
  margin: -57rem 0rem 0 52rem;
`;
const S_title = styled.div`
font-size: 2rem;
font-weight: 400;
margin: 1.4rem 0 0 0;
`

const S_content = styled.span`
margin-left: 2rem;
font-size: 2rem;
font-weight: 400;
color: #cccccc;
`

const ReviewWrap = styled.div`
    display: flex;
    width: 90%;
    border-bottom: 1px solid #666666;
    margin: 0 0 2rem 0;
    padding: 10px;
    font-size: 1.4rem;
    color: #cccccc;
`
const ReviewNickname = styled.div`
    margin: 0px 2rem 0px 0px;
    font-weight: 700;
`
const ReviewContent = styled.div`
    margin: 0px 0px 0px 0px;
    font-weight: 400;
`

const ButtonBox = styled.div`
  width: 18rem;
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  letter-spacing: -0.05em;
  margin: 2rem 0 0 0rem;
  /* position: absolute; */
  button {
    width: 100%;
    height: 100%;
    border: none;
    color: #666666;
    background-color: #999999;
    &:hover {
      color: #262626;
      background-color: #ffb800;
      transition: 0.5s;
    }
  }
`
const Star0 = () => {
    return(
        <>
        <img src ={검은별} 
                style={{width:'2rem', margin:'0 0.8rem 0 3.8rem'}}/>
        <img src ={검은별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={검은별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={검은별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={검은별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        </>
    )
}
const Star1 = () => {
    return(
        <>
        <img src ={노랑별} 
                style={{width:'2rem', margin:'0 0.8rem 0 3.8rem'}}/>
        <img src ={검은별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={검은별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={검은별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={검은별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        </>
    )
}
const Star2 = () => {
    return(
        <>
        <img src ={노랑별} 
                style={{width:'2rem', margin:'0 0.8rem 0 3.8rem'}}/>
        <img src ={노랑별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={검은별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={검은별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={검은별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        </>
    )
}
const Star3 = () => {
    return(
        <>
        <img src ={노랑별} 
                style={{width:'2rem', margin:'0 0.8rem 0 3.8rem'}}/>
        <img src ={노랑별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={노랑별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={검은별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={검은별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        </>
    )
}
const Star4 = () => {
    return(
        <>
        <img src ={노랑별} 
                style={{width:'2rem', margin:'0 0.8rem 0 3.8rem'}}/>
        <img src ={노랑별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={노랑별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={노랑별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={검은별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        </>
    )
}
const Star5 = () => {
    return(
        <>
        <img src ={노랑별} 
                style={{width:'2rem', margin:'0 0.8rem 0 3.8rem'}}/>
        <img src ={노랑별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={노랑별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={노랑별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        <img src ={노랑별}
        style={{width:'2rem', margin:'0 0.8rem 0 0'}}/>
        </>
    )
}



export default Content;