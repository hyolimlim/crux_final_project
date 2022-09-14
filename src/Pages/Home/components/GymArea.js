import { useState } from "react";
import GymSlider from "./GymSlider";

const GymArea = () => {


    return(
        <div style={{width:'1920px', height:'980px',margin:'0 auto', background:'#111'}}>
            <div>
                <div style={{width:'1290px', height:'700px', opacity:'0.1', backgroundColor:'#fff'}}></div>
                <div style={{width:'359px', height:'420px', color:'white', margin:'-30% 0 0 11%'}}>
                    <div style={{fontSize:'41px', fontWeight:'700', margin:'0 0 20px 0'}}>이번 달<br/> 인기 클라이밍짐</div>
                    <div style={{fontSize:'24px', margin:'0 0 24px 0'}}>드림캐처클라이밍짐</div>
                    <div>스포츠클라이밍은 누구나 재미있게 즐기며 몸매관리 및 다이어트에<br/> 매우 좋은 운동입니다.일일예약 및 단체 예약 후 이용 가능합니다.</div>
                    <div>영업시간</div>
                    <div>9AM - 10PM</div>
                    <div style={{fontSize:'100px', margin:'20% 0 0 0'}}>
                    </div>
                </div>
                <div style={{margin:'-16% 0 0 42%'}}>
                
                    <GymSlider />
                   
                </div>
            </div>

        </div>
    )
}

export default GymArea;