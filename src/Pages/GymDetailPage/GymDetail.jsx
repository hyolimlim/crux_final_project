import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import { __getGymDetail } from "../../Redux/modules/gymDetilSlice";
import Content from "./components/Content";
import Review from "./components/Review";
import Loading from "../../Shared/Loading.js"
import axios from "axios";
import { useState } from "react";

const GymDetail = () => {

const params = useParams().gymId
console.log(params)

// const dispatch = useDispatch()

// const { isLoading, error, gymDetail } = useSelector((state) => state.gymDetail)
// console.log(isLoading, error, gymDetail)
// const gym = gymDetail.data
// // const gymDetil = useSelector((state)=> state)
// // console.log(gymDetil)

// useEffect(()=> {
//     dispatch(__getGymDetail(params))
// },[])

// if (isLoading) {
//     return(
//         <Loading />
//     )
// }
const [gym, setGym] = useState([])

// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect( async()=>{
    await axios.get(`https://01192mg.shop/gyms/${params}`)
    .then((res)=>{
        console.log(res.data.data)
        setGym(res.data.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}, [])

    return(
        <div style={{width:'192rem', height:'100rem'}}>
            
            <Navbar />

    {/* 헤더 영역 입니다 */}
            <div style={{width:'192rem', height:'20rem'}}>
                <div style={{width:'120rem', margin:'0 auto', padding:'10rem 0 0 0'}}>
                        <div style={{fontSize:'4.4rem', fontWeight:'700'}}>
                            {gym?.name} {Number(gym?.avgScore).toFixed(2)} (평점)
                        </div>
                </div>
            </div>

    {/* content 영역 입니다 */}
            <Content gym={gym}/>

    {/* review 영역 입니다 */}
            <Review gym={gym}/>

        </div>
    );
}

export default GymDetail;