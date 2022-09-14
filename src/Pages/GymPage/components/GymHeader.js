import styled from "styled-components";
import 돋보기 from '../../../Image/검색 아이콘.png'

const GymHeader = () => {

    const onclickSearch = (e) => {
        
    }

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return(
        <div style={{width:'192rem', height:'19.2rem'}}>
                
            <div style={{width:'120rem', margin:'10rem auto 0 auto', display:'flex'}}>
                <h1 style={{width:'38rem', margin:'0 35.2rem 0 0'}}>클라이밍짐 후기</h1>
                <S_select onChange={handleChange}>
                    <S_option key="서울" defaultValue="서울">서울</S_option>
                    <option key="인천" value="인천">인천</option>
                    <option key="경기" value="경기">경기</option>
                    <option key="부산" value="부산">부산</option>
                    <option key="제주도" value="제주도">제주도</option>  
                </S_select> 
                <S_input /> 
                <img src={돋보기} type="button" onClick={()=>{}}
                style={{width:'3rem', height:'3rem', margin:'1.1rem 0 0 116rem', position:'absolute'}} />
            </div>

            <div style={{width:'120rem', margin:'6.5rem auto 0 auto', display:'flex'}}>
                <S_category>
                    <h3>서울</h3>
                </S_category>
                <S_category>
                    <h3>인천</h3>
                </S_category>
                <S_category>
                    <h3>경기</h3>
                </S_category>
                <S_category>
                    <h3>부산</h3>
                </S_category>
                <S_category>
                    <h3>제주도</h3>
                </S_category>
            </div>
        </div>
    )
}

const S_select = styled.select`
width: 16rem;
height: 5rem;
margin: 0 2rem 0 0;
padding: 0 0 0 1rem;

border: 1px solid #CCCCCC;
color: #CCCCCC;

font-size: 1.4rem;

`

const S_option = styled.option`

border: 1px solid #CCCCCC;
/* color: #CCCCCC; */
font-size: 1.4rem;

&:focus {
    border-color: red;
}
`

const S_input = styled.input`
width: 39rem;
height: 5rem;

border: 1px solid #CCCCCC;
`

const S_category = styled.div`
margin: 0 4rem 0 0;
`

export default GymHeader;