import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import 슬라이더왼쪽버튼 from "../../../Image/btn_left.png"
import 슬라이더오른쪽버튼 from "../../../Image/btn_right.png"
import 메인배너 from "../../../Image/메인배너.png"
import 클라이밍짐배너 from "../../../Image/클라이밍짐배너.png"
import { useNavigate } from "react-router-dom";

const NavSlider = (props) => {

    const navigate = useNavigate()

    const settings = {
        dots: false,
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
                
                    <div style={{width:'1200px', height:'163px', fontSize:'48px', margin:'0% auto 0 auto', padding:'20% 0 0 0'}}>
                        클라이머들을 위한 공간 <br/>
                        CRUX에서 완등하자!
                    </div>

                    <div style={{width:'1200px', height:'300px', fontSize:'20px', margin:'0 auto', padding:'11% 0 0 0'}}>
                        새로운 크루원들과 클라이밍을 원하신다면,<br/>
                        지금 바로 모임에 참가해보세요!
                    </div>
            
                </BGimg>
            </div>

    {/* 2번째 슬라이드 */}
            <div>
                <BGimg2 >
                
                    <div style={{width:'1200px', color:'black', fontSize:'48px', margin:'0 auto 0 auto', padding:'5% 0 0 13%'}}>
                        {/* 클라이머를 위한 것을 한 눈에 <br/> */}
                        주변 클라이밍짐을 확인해보세요!
                    </div>

                    <div style={{width:'61rem', height:'300px', color:'black', fontSize:'20px', margin:'2rem auto', textAlign:'end'}}>
                        마음에 드는 클라이밍 짐을 찾으셨다면,<br/>
                        즐겨찾기와 후기를 남겨주세요!
                    </div>
            
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
margin: 24rem 147rem 0 0;
/* text-align: right; */
line-height: 30px;
`;

const Sprev = styled.div`
width: 30px;
height: 30px;
position: absolute;
/* left: 16px; */
z-index: 4;
margin: 24rem 0 0 38rem;
/* text-align: left; */
line-height: 30px;
`;


const BGimg = styled.div`
background: url(${메인배너});
background-position: center;
background-size: cover;

width: 1920px;
height: 1000px;
margin: 0 auto;
`
const BGimg2 = styled.div`
background: url(${클라이밍짐배너});
background-position: center;
background-size: cover;

width: 1920px;
height: 75rem;
margin: 22rem auto 0 auto;
`


export default NavSlider;