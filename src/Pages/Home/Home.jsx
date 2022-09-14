import NavSlider from './components/NavSlider'
import CrewArea from './components/CrewArea';
import GymArea from './components/GymArea';
import ImgBannerArea from './components/ImgBannerArea';
import GalaryArea from './components/GalaryArea';
import Navbar from './components/Navbar'

function Home() {
  return (
    <div>
      <Navbar />

      <NavSlider />

      {/* 검은 화면입니다 */}
      <div style={{width:'192rem', height:'100rem', backgroundColor:'#111', margin:'0 auto'}}></div>

      <CrewArea />

      <GymArea />

      <ImgBannerArea />

      <GalaryArea />

    </div>
  );
}

export default Home;