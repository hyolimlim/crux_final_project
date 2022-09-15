import styled from "styled-components";
import 사용자이미지 from "../../../Image/사용자기본이미지.jpg"
import Loading from "../../../Shared/Loading";

const Review = ({gym}) => {

console.log(gym.reviews)

if(gym === undefined) {
    return( <Loading/>)
}

    return(
        <div style={{width:'192rem', backgroundColor:'#cccccc'}}>
            <div style={{width:'120rem', margin:'0 auto', padding:'3rem 0 0 0', background:'white', height:'100rem', overflow:'auto'}}>
                
                {
                    gym.reviews?.map((review,i) => {
                        return(
                            <div key={i} style={{width:'90%', padding:'1rem', margin:'0 auto',display:'flex', borderBottom:'1px solid gray'}}>
                                <div style={{width:'10%', height:'100%'}}>
                                    <div style={{display:'flex', justifyContent:'center'}}><img src={사용자이미지} style={{width:'5rem', height:'5rem', borderRadius:'60%'}}/></div>
                                    <div style={{textAlign:'center', margin:'7px 0 0 0'}}>닉네임이 들어와요</div>
                                </div>
                                <div style={{width:'70%', height:'100%'}}>
                                    <div>2022-05-22쓴 날짜가 들어와요</div>
                                    <div>{review.content}</div>
                                    <img src={review.reviewPhotoList[0].imgUrl} style={{width:'7rem', height:'7rem', marign:'1rem 0 0 0'}}/>
                                </div>
                                <div style={{width:'20%', hieght:'100%'}}>
                                        
                                <img src ="https://cdn-icons-png.flaticon.com/512/6364/6364386.png" 
                                    style={{width:'3rem'}}/>

                                </div>
                                
                            </div>
                        )
                    })
                }
                
            </div>
            


        </div>
    )
}


export default Review;