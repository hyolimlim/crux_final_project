import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import 플러스기호 from "../../../Image/플러스 기호.png"
import ModalReview from "./ModalReview";
import ReviewSlider from "./ReviewSlider";
import 클라이밍 from '../../../Image/인기 클라이밍짐.png'
import {LikeHeart, LikedHeart } from "../../../Shared/components/LikeHeart";
import { useDispatch, useSelector } from "react-redux";
import { __getGymDetail } from "../../../Redux/modules/gymDetilSlice";
import Loading from "../../../Shared/Loading";




const Content = ({setShowReview, showReview, setReload, reload}) => {
    const BASE_URL = 'http://sparta-tim.shop'

const params = useParams().gymId
const dispatch = useDispatch()

const { isLoading, error, gymDetail } = useSelector((state) => state.gymDetail)
// console.log(isLoading, error, gymDetail)

const gym = gymDetail.data
// console.log(gym)

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
        <div style={{width:'192rem', height:'80rem', backgroundColor:'#141414', color:'#ffffff'}}>
            <div style={{width:'120rem', height:'64rem', margin:'auto', display:'flex'}}>
                <div style={{width:'70rem', height:'100%', margin:'8rem 0 0 0'}}>
                    
                    <img src={gym.reviews[0]?.reviewPhotoList[0]?.imgUrl !== undefined ? gym.reviews[0]?.reviewPhotoList[0]?.imgUrl : 클라이밍} 
                    style={{width:'100%', height:'100%'}}/>
                    <HeartIcon type="button" onClick={onclickLikeGym}>
                        { gym?.likeGym === false ? 
                            <LikeHeart /> : <LikedHeart /> }
                    </HeartIcon>
                </div>

                <div style={{width:'50rem', height:'100%', margin:'8rem 0 0 0', padding:'2rem 4rem 4rem 4rem', backgroundColor:'#262626', color:'white'}}>
                    
                    <div style={{margin:'0 0 0 0'}}> <span style={{margin:'0 16rem 0 0'}}>💛 30명 | 리뷰 {gym?.reviews.length}건 </span></div>
                    <div style={{fontSize:'3.2rem', fontWeight:'700', margin:'2rem 0 0 0'}}>{gym?.name}</div>
                    <div style={{fontSize:'2rem', fontWeight:'700', margin:'2rem 0 0 0'}}>주소 <S_content> {gym.location} </S_content></div>
                    <div style={{fontSize:'2rem', fontWeight:'700', margin:'2rem 0 0 0'}}>전화번호 <S_content> {gym.phone} </S_content></div>

                    <div style={{fontSize:'2rem', fontWeight:'700', margin:'3rem 0 0 0'}}>방문객 포토리뷰</div>

                    <div style={{width:'90%', height:'22rem', margin:'3rem auto'}}>
                        {
                            gym?.reviews.length === 0 ? 
                            
                            <div style={{color:'#ffffff', fontSize:'3rem', textAlign:'center', padding:'7rem 0 0 0' }}>아직 포토 리뷰가 없습니다 <br/>
                                제일 먼저 리뷰를 남겨주세요!</div> 
                            
                            :  
                                <ReviewSlider reviews={gym.reviews}/>
                        }
                    </div>
                    <div style={{display:'flex'}}>
                        <ButtonBox onClick={()=>{setShowReview(!showReview)}}>
                            <button>리뷰 상세보기</button>
                        </ButtonBox>
                        <ButtonBox onClick={()=>{setModal(true)}}>
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
  margin: -60rem 0rem 0 61rem;
`;

const S_content = styled.span`
margin-left: 1rem;
font-size: 2rem;
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
  margin: 2rem 0 0 2rem;
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

export default Content;