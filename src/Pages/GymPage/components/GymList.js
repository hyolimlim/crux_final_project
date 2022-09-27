import { useRef,useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import 디폴트짐 from "../../../Image/인기 클라이밍짐.png"



const GymList = ({gyms}) => {

const navigate = useNavigate()


    return (
        <div>
                <div>
                    
                    { gyms?.length === 0 ?  <p style={{color:'#ffffff', width:'20rem', margin:'6rem 0 0 16rem', fontSize:'1.6rem'}}>검색 결과가 없습니다.</p> : 
                        
                            gyms?.map((gym, i)=>{
                                return(
                                    <div key={gym.id} style={{display:'flex', margin:'2rem auto', width:'50rem', height:'17rem', borderBottom:'1px solid #262626'}} 
                                    onClick={()=>{ navigate(`/gyms/${gym.id}`) }}>
                                        <img src={디폴트짐} alt='' style={{width:'15rem', height:'15rem'}}/>
                                        <div style={{width:'35rem', padding:'1rem'}}>
                                            <h3 style={{margin:'0 0 0 0'}}>{gym.name}</h3>
                                            <p style={{margin:'2rem 0 0 0'}}>{gym.location}</p>
                                            <p style={{margin:'1rem 0 0 0'}}>{gym.phone}</p>
                                            <p style={{margin:'1rem 0 0 0'}}>✨ {Number(gym.avgScore).toFixed(2)}</p>
                                            
                                        </div>
                                    </div>
                                );
                            })
                        }

                </div>
        </div>
    )
}

export default GymList;