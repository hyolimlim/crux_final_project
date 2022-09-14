import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import 슬라이더왼쪽버튼 from "../../../Image/btn_left.png"
import 슬라이더오른쪽버튼 from "../../../Image/btn_right.png"
import { useState } from "react";

const SliderGym = () => {

    const [gyms] = useState([0,1,2])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 5000,
        slidesToShow: 1.7,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: (
            <Snext>
                <img src={슬라이더오른쪽버튼} />
            </Snext>
        ),
        prevArrow: (
            <Sprev>
                <img src={슬라이더왼쪽버튼} />
            </Sprev>
        ),
      };

    return(
        <div>
        
            <StyledSlider {...settings}>

        {/* Gym 슬라이드 */}

            {
                gyms.map((gym,i)=>{
                    return(
                        <div key={i}>
                            <img src="https://cdn.c1news.kr/news/photo/202208/11752_16956_25.jpg" alt="" 
                                    style={{width:'630px', height:'630px', margin:'0 2%', position:'relative'}}/>
                        </div>
                    )
                })
            }

            </StyledSlider>

        </div>
    );
}

const StyledSlider = styled(Slider)`
width: 100%;
position: relative;
.slick-prev::before,
.slick-next::before{
    opacity: 0;
    display: none;
}
.slick-slide div {
    //슬라이더  컨텐츠
    /* cursor: pointer; */
}
`

const Snext = styled.div`
width: 30px;
height: 30px;
position: absolute;
/* right: 16px; */
z-index: 99;
margin: 0% 141% 0 0;
/* text-align: right; */
line-height: 30px;
`;

const Sprev = styled.div`
width: 30px;
height: 30px;
position: absolute;
/* left: 16px; */
z-index: 99;
margin: 0 0 0 -48%;
/* text-align: left; */
line-height: 30px;
`;


export default SliderGym;