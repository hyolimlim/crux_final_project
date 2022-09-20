import styled from "styled-components";
import 사용자이미지 from "../../../Image/사용자기본이미지.jpg"
import Loading from "../../../Shared/Loading";

const Review = ({gym}) => {

// console.log(gym.reviews)

if(gym === undefined) {
    return( <Loading/>)
}

    return(
        <div style={{width:'192rem', backgroundColor:'#141414', height:'115rem'}}>
            <div style={{width:'120rem', margin:'0 auto', padding:'3rem 0 0 0', background:'#262626', color:'#ffffff', height:'107rem', overflow:'auto'}}>
                
                {
                    gym.reviews?.map((review,i) => {
                        return(
                            <div key={i} style={{width:'90%', padding:'1rem', margin:'0 auto',display:'flex', borderBottom:'1px solid gray'}}>
                                <div style={{width:'10%', height:'100%', margin:'2rem 0 0 0'}}>
                                    <div style={{display:'flex', justifyContent:'center'}}><img src={review.imgUrl !== null ? review.imgUrl : 사용자이미지} style={{width:'5rem', height:'5rem', borderRadius:'60%'}}/></div>
                                    <div style={{textAlign:'center', margin:'7px 0 0 0'}}>{review.nickname}</div>
                                </div>
                                <div style={{width:'70%', height:'100%', padding:'1rem', fontSize:'1.4rem'}}>
                                    <div style={{opacity:'0.5'}}>{review.createdAt?.substr(0,10)}</div>
                                    <div>{review.content}</div>
                                    <img src={review.reviewPhotoList[0]?.imgUrl} style={{width:'7rem', height:'7rem', margin:'1rem 0 0 0'}}/>
                                </div>
                                <div style={{width:'20%', hieght:'100%', padding:'2rem 0 0 1rem' }}>
                                
                                {
                                    review.score === 1 ? <Star />
                                     : review.score === 2 ? <Star2 />
                                        : review.score === 3 ? <Star3 />
                                            : review.score === 4 ? <Star4 />
                                                : review.score === 5 ? <Star5 />
                                                    : ''
                                }

                                </div>
                                
                            </div>
                        )
                    })
                }
                
            </div>
            


        </div>
    )
}

const Star = () => {
    return(
        <img src ="https://cdn-icons-png.flaticon.com/512/6364/6364386.png" 
                style={{width:'3rem'}}/>
    )
}
const Star2 = () => {
    return(
        <>
        <img src ="https://cdn-icons-png.flaticon.com/512/6364/6364386.png" 
                style={{width:'3rem'}}/>
                <img src ="https://cdn-icons-png.flaticon.com/512/6364/6364386.png" 
                style={{width:'3rem'}}/>
        </>
    )
}
const Star3 = () => {
    return(
        <>
        <img src ="https://cdn-icons-png.flaticon.com/512/6364/6364386.png" 
                style={{width:'3rem'}}/>
                <img src ="https://cdn-icons-png.flaticon.com/512/6364/6364386.png" 
                style={{width:'3rem'}}/>
                <img src ="https://cdn-icons-png.flaticon.com/512/6364/6364386.png" 
                style={{width:'3rem'}}/>
        </>
    )
}
const Star4 = () => {
    return(
        <>
        <img src ="https://cdn-icons-png.flaticon.com/512/6364/6364386.png" 
                style={{width:'3rem'}}/>
                <img src ="https://cdn-icons-png.flaticon.com/512/6364/6364386.png" 
                style={{width:'3rem'}}/>
                <img src ="https://cdn-icons-png.flaticon.com/512/6364/6364386.png" 
                style={{width:'3rem'}}/>
                <img src ="https://cdn-icons-png.flaticon.com/512/6364/6364386.png" 
                style={{width:'3rem'}}/>
        </>
    )
}
const Star5 = () => {
    return(
        <>
        <img src ="https://cdn-icons-png.flaticon.com/512/6364/6364386.png" 
                style={{width:'3rem'}}/>
                <img src ="https://cdn-icons-png.flaticon.com/512/6364/6364386.png" 
                style={{width:'3rem'}}/>
                <img src ="https://cdn-icons-png.flaticon.com/512/6364/6364386.png" 
                style={{width:'3rem'}}/>
                <img src ="https://cdn-icons-png.flaticon.com/512/6364/6364386.png" 
                style={{width:'3rem'}}/>
                <img src ="https://cdn-icons-png.flaticon.com/512/6364/6364386.png" 
                style={{width:'3rem'}}/>
        </>
    )
}


export default Review;