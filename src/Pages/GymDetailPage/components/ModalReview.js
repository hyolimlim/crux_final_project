import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import styled from "styled-components"
import { Rating } from 'react-simple-star-rating'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import 이미지업로드 from "../../../Image/이미지업로드 아이콘.png"
import { useRef } from "react";
import { useCallback } from "react";
import axios from "axios";


const ModalReview = ({setModal, gym}) => {

    const closeModal = () => {
        setModal(false)
    }

// 별점 주기 <star rating> 라이브러리!

    const [rating, setRating] = useState(0)
    console.log(rating)
    const handleRating = (rate: number) => {
        if(rate<20) {
            setRating(0)
        } else {
            setRating(rate/20)
        }
    }
    
    useEffect(()=>{
        
    },[rating])

// 이미지 업로드 <firebase> 라이브러리! 

const onsubmit = () => {
    createReview();
}

const [content, setContent] = useState('')

const createReview = useCallback(async() => {
    const payload = {
        score: rating,
        content: content,
        reviewPhotoList: [{imgUrl: fileUrl}],
      };
    await axios.post(`https://01192mg.shop/reviews/${gym.id}`, payload, {
        headers: {access_token: window.localStorage.getItem("access_token")}})
    .then((res) => {
        console.log(res.data)
        alert('리뷰 작성완료!')
        // window.location.reload(`/gyms/${gym.id}`)
    })
    .catch((err) => {
        console.log(err)
    })
}, [onsubmit])

  const [fileUrl, setFileUrl] = useState('')
  const [reload, setReload] = useState(false)

  const storage = getStorage();
  const storageRef = ref(storage);

  const uploadFB = async (e) => {
    console.log(e.target.files);
    const upload_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );
    console.log(upload_file)

    const file_url = await getDownloadURL(upload_file.ref)
    console.log(file_url)
    setFileUrl(file_url)
    // file_url !== '' ? setFileUrl(file_url) : setFileUrl(basicImg)
    // 기본 이미지 줄 수 있나? 없음 말고..
  }



    return(
        <ModalPage onClick={closeModal}>
            <Container onClick={(e) => e.stopPropagation()}>
                
                <div style={{margin:'7% auto 0 auto', width:'90%'}}>
                        <span style={{fontSize:'36px', fontWeight:'700'}}>엠투 클라이밍</span>
                        <span>에 대한 솔직한 리뷰를 작성해주세요</span>
                    </div>
                    
                    <div style={{width:'90%', height:'200px', border:'1px solid black', margin:'3% auto'}}>
                        <div style={{width:'100%', height:'50px', borderBottom:'1px solid black', padding:'5px 0 0 16px'}}>
                            <span style={{margin:'0 7px 0 0'}}>별점 남기기</span> 
                            <Rating onClick={handleRating} ratingValue={rating}/>
                        </div>
                    <textarea placeholder='후기를 남겨주세요' style={{width:'100%', height: '74%', border:'none', padding:'3%'}}
                        onChange={(e)=>{setContent(e.target.value)}}/>
                    </div>

                    <ImgPreview src={fileUrl !== null ? fileUrl : 이미지업로드} />

                    <label>
                        <input 
                        encType="multipart/form-data"
                        accept='image/*'
                        type="file"
                        style={{display:'none'}}
                        onChange={uploadFB}
                        />

                        <UploadImg type="button">
                                후기 사진 올리기
                        </UploadImg>
                    </label>
                    <div style={{display:'flex', margin:'-6rem 0 0 31.8rem'}}>
                        <S_btn style={{margin:'0 1rem 0 0'}} onClick={closeModal}>취소</S_btn>
                        <S_btn onClick={onsubmit}>리뷰 올리기</S_btn>
                    </div>
                    
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

const UploadImg = styled.div`
width: 100px;
background-color: #FFB800;
color: white;
border: none;
border-radius: 5px;
padding: 0.2rem 0.7rem;
/* margin-top: 10px; */
margin: -12px 0 0 6%;
text-align: center;
`


const ImgPreview = styled.img`
width: 5rem;
height: 5rem;
margin: 0 0 0 3rem;
`

const S_btn = styled.button`
width: 12rem;
margin: 0 0 0 0;
height: 3rem;
background-color: #ffb800;
`

// const Imgbox = styled.div`
// width: 600px;
// height: 600px;
// position: relative;
// top: 57px;
// img {
// width: 100%;
// height: 100%;
// }
// `;


export default ModalReview;