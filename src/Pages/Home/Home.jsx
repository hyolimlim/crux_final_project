import NavSlider from './components/NavSlider'
import CrewArea from './components/CrewArea';
import GymArea from './components/GymArea';
import ImgBannerArea from './components/ImgBannerArea';
import GalaryArea from './components/GalaryArea';
import Navbar from './components/Navbar'

function Home() {



// useEffect(()=> {
//   console.log(token)
//   if (token) {
  
//       const eventSource = new EventSource('http://54.180.31.108/subscribe',
//       {headers: {Authorization: `${token}` }
//       }) 
      

//       eventSource.onopen = () => {
//         console.log("SSE 연결성공!")
//       }
//       eventSource.onerror = (err) => {
//         console.log("SSE 에러에러@!!", err)
//       }
//       eventSource.onmessage = (stream) => {
//         const data = JSON.parse(stream.data)
//         console.log(data)
//       }
//   }
// },[token])



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