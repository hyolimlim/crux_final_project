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
width: 100%;
height: 10rem;
margin: 2rem auto;
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