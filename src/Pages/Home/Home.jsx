import NavSlider from './components/NavSlider'
import CrewArea from './components/CrewArea';
import GymArea from './components/GymArea';
import ImgBannerArea from './components/ImgBannerArea';
import GalaryArea from './components/GalaryArea';
import Navbar from './components/Navbar'

function Home() {


  return (
    <div style={{width:'192rem', backgroundColor:'#111', margin:'0 auto', color:"#fff"}}>
      <Navbar />

      <NavSlider />

      {/*현재 검은 화면입니다 */}
      <div style={{width:'192rem', height:'90rem', margin:'0 auto'}}>
        <div style={{width:'100%', height:'80rem', backgroundColor:'#ffb800', color:'black', fontSize:'4rem', textAlign:'center'}}>디자이너님이 만들어주시는 배너가 들어옵니다! </div>
      </div>

      <CrewArea />

      <GymArea />

      <ImgBannerArea />

      <GalaryArea />

    </div>
  );
}

export default Home;