import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components";

const SliderBanner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    }

    return(
        <div>
            <Slider {...settings}>
                <Slide1 />
                <Slide2 />
                <Slide3 />
            </Slider>

        </div>
    );
}

const Slide1 = styled.div`
width: 192rem;
height: 80rem;
background-image: url('https://s1.best-wallpaper.net/wallpaper/m/1705/Rock-climbing-extreme-sport-cliff-trees_m.webp');
background-position: center;
background-size: cover;
`

const Slide2 = styled.div`
width: 192rem;
height: 80rem;
background-image: url('https://c.wallhere.com/photos/21/ea/climbing_nature_landscape_water_sea_rock_Vietnam_men-186963.jpg!d');
background-position: center;
background-size: cover;
`

const Slide3 = styled.div`
width: 192rem;
height: 80rem;
background-image: url('https://www.wallpaperuse.com/wallp/9-94576_m.jpg');
background-position: center;
background-size: cover;
`


export default SliderBanner;