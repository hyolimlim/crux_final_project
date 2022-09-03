import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { reduxPlus, __thunkPrac } from './Redux/modules/testSlice';;


function App() {


  //리덕스 연결 확인 코드입니다 확인 후 지워주세요!
  const dispatch = useDispatch() 

  const prac = useSelector((state) => state.prac)
  console.log(prac)


  return (
    <div className="App">
        <h1>Hello, React!</h1>

        {/* 리덕스 연결 확인 코드입니다 확인 후 지워주세요! */}
        <div>
          <button onClick={()=>{dispatch(reduxPlus(1))}}>리덕스 연결확인 버튼</button>
        </div>

        <div>
        <button onClick={()=>{dispatch(__thunkPrac(3))}}>리덕스_thunk 연결확인 버튼</button>
        </div>

    </div>
  );
}

export default App;
