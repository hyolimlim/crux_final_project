import styled from "styled-components"
import { Rating } from 'react-simple-star-rating'
import { useEffect, useState } from "react"


const ModalReview = ({setModal}) => {

    const closeModal = () => {
        setModal(false)
    }

    const [rating, setRating] = useState(0)

    const handleRating = (rate: number) => {
        setRating(rate)
    }
    
    useEffect(()=>{
        console.log(rating)
    },[rating])

    return(
        <ModalPage onClick={closeModal}>
            <Container onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={closeModal}>
                    X
                </CloseButton>
                <div style={{margin:'7% 0 0 0'}}>
                        <span style={{fontSize:'36px', fontWeight:'700'}}>엠투 클라이밍</span>
                        <span>에 대한 솔직한 리뷰를 작성해주세요</span>
                    </div>
                    
                    <div style={{width:'90%', height:'200px', border:'1px solid black', margin:'3% auto'}}>
                        <div style={{width:'100%', height:'50px', borderBottom:'1px solid black'}}>별점 남기기 
                            <Rating onClick={handleRating} ratingValue={rating}/>
                        </div>
                        <textarea placeholder='후기를 남겨주세요' style={{width:'94.1%', heihgt:'58%', border:'none', padding:'3%'}}/>
                    </div>
                    
                    <label htmlFor='upload-photo'>
                        <input 
                        encType="multipart/form-data"
                        accept='image/*'
                        type="file"
                        id="upload-photo"
                        name='upload-photo'
                        style={{display:'none'}}
                        // onChange={uploadFB}
                        />
                        <SelectComputer type="button">
                            업로드 이미지가 들어와요
                        </SelectComputer>
                    </label>
            </Container>

        </ModalPage>
    )
}

const ModalPage = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 998;
background-color: rgba(0, 0, 0, 0.4);
`

const Container = styled.div`
width: 600px;
height: 400px;

z-index: 999;

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

background-color: white;
border: 1px solid black;
border-radius: 8px;
`

const CloseButton = styled.button`
position: absolute;
right: 10px;
top: 10px;
`

const SelectComputer = styled.div`
width: 100px;
background-color: red;
color: white;
border: none;
border-radius: 5px;
padding: 0.2rem 0.7rem;
/* margin-top: 10px; */
margin: -12px 0 0 6%;
  `


export default ModalReview;