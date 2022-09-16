import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import 슬라이더왼쪽버튼 from "../../../Image/btn_left.png"
import 슬라이더오른쪽버튼 from "../../../Image/btn_right.png"
import { useNavigate } from "react-router-dom";

const ReviewSlider = ({reviews}) => {

    const navigate = useNavigate()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
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
    
        <StyledSlider  {...settings} >

        {
            [...reviews]?.reverse().map((review, i) => {
                return(
                    <div key={i} >
                        <img src={review.reviewPhotoList[0].imgUrl} style={{width:'45rem', height:'25rem'}}/>
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
height: 0rem;
position: relative;
.slick-prev::before,
.slick-next::before{
    opacity: 0;
    display: none;
}
    .slick-slider{
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`

const Snext = styled.div`
width: 30px;
height: 30px;
position: absolute;
/* right: 16px; */
z-index: 999;
margin: 32% 10% 0 0;
/* text-align: right; */
line-height: 30px;
`;

const Sprev = styled.div`
width: 30px;
height: 30px;
position: absolute;
/* left: 16px; */
z-index: 999;
margin: 32% 0 0 14%;
/* text-align: left; */
line-height: 30px;
`;

export default ReviewSlider;