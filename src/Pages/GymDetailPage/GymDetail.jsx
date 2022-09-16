
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import { __getGymDetail } from "../../Redux/modules/gymDetilSlice";
import Content from "./components/Content";
import Review from "./components/Review";
import Loading from "../../Shared/Loading.js"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const GymDetail = () => {

const [showReview, setShowReview] = useState(false)

const params = useParams().gymId
console.log(params)

const dispatch = useDispatch()

const { isLoading, error, gymDetail } = useSelector((state) => state.gymDetail)
console.log(isLoading, error, gymDetail)

const gym = gymDetail.data
console.log(gym)

// const gymDetil = useSelector((state)=> state)
// console.log(gymDetil)

useEffect(()=>{
    console.log(1)
    dispatch(__getGymDetail(params))

},[])

if (gym === undefined) 
return(
    <Loading />
)
    return(
        <div style={{width:'192rem', height:'100rem'}}>
            
            <Navbar />

    {/* 헤더 영역 입니다 */}
            <div style={{width:'192rem', height:'20rem', backgroundColor:'#262626', color:'#ffffff'}}>
                <div style={{width:'120rem', margin:'0 auto', padding:'10rem 0 0 0'}}>
                        <div style={{fontSize:'4.4rem', fontWeight:'700'}}>
                            {gym?.name} {Number(gym?.avgScore).toFixed(2)} (평점)
                        </div>
                </div>
            </div>

    {/* content 영역 입니다 */}
            <Content gym={gym} setShowReview={setShowReview} showReview={showReview}/>

    {/* review 영역 입니다 */}
        {
            showReview === true ? <Review gym={gym}/> : null
        }
            

        </div>
    );
}

export default GymDetail;

