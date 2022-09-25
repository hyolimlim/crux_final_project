import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import 슬라이더왼쪽버튼 from "../../../Image/btn_left.png"
import 슬라이더오른쪽버튼 from "../../../Image/btn_right.png"
import { useNavigate } from "react-router-dom";

const NavSlider = (props) => {

    const navigate = useNavigate()

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        // autoplay: true,
        autoplaySpeed: 5000,
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
    
        <StyledSlider  {...settings} style={{}}>

    {/* 1번째 슬라이드 */}
            <div>
                <BGimg >
                
                <div style={{width:'1200px', height:'163px', fontSize:'48px', margin:'0% auto 0 auto', padding:'20% 0 0 0'}}>클라이밍 상급자들을 위한 <br/>새로운 클라이밍 코스</div>

                <div style={{width:'1200px', height:'300px', fontSize:'20px', margin:'0 auto', padding:'11% 0 0 0'}}>상급자를 위한 새로운 코스를 원하신다면,<br/> 지금 바로 도전해보세요!</div>
            
                </BGimg>
            </div>

    {/* 2번째 슬라이드 */}
            <div>
                <BGimg2 >
                
                <div style={{width:'1200px', height:'163px', fontSize:'48px', margin:'0 auto 0 auto', padding:'20% 0 0 0'}}>클라이밍 상급자들을 위한 <br/>새로운 클라이밍 코스</div>

                <div style={{width:'1200px', height:'300px', fontSize:'20px', margin:'0 auto', padding:'11% 0 0 0'}}>상급자를 위한 새로운 코스를 원하신다면,<br/> 지금 바로 도전해보세요!</div>
            
                </BGimg2>
            </div>


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
z-index: 4;
margin: 30rem 147rem 0 0;
/* text-align: right; */
line-height: 30px;
`;

const Sprev = styled.div`
width: 30px;
height: 30px;
position: absolute;
/* left: 16px; */
z-index: 4;
margin: 30rem 0 0 38rem;
/* text-align: left; */
line-height: 30px;
`;


const BGimg = styled.div`
background: url('https://cdn.zeplin.io/630cb81b1f30b614a71ea8d4/assets/f0a7d311-2e7e-4507-8dd0-d8fa986ab334.png');
background-position: center;
background-size: cover;

width: 1920px;
height: 1000px;
margin: 0 auto;
`
const BGimg2 = styled.div`
background: url('https://wc.wallpaperuse.com/wallp/14-144050_s.jpg');
background-position: center;
background-size: cover;

width: 1920px;
height: 1000px;
margin: 0 auto;
`

// const NavBar = styled.div`
// width: 1400px;
// margin: 0 auto;
// padding: 6rem;


// display: flex;
// align-items: end;
// color: white;
// font-size: 1.2rem;
// font-weight: 700;
// `


export default NavSlider;