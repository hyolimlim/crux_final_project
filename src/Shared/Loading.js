import styled from "styled-components";
import loadingSpinner from '../Image/Spinner-1s-200px.gif'

const Loading = () => {
    return (
        <div>
            <LoadingSpinner>
                <LoadingText>잠시만 기다려 주세요~</LoadingText>
                <img src={loadingSpinner} alt="로딩중" width="5%"/>
            </LoadingSpinner>
        </div>
    );
}

const LoadingSpinner = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
background: #ffffffb7;
z-index: 999;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const LoadingText = styled.div`
font: 1rem 'Noto Sans KR';
text-align: center;
`

export default Loading;