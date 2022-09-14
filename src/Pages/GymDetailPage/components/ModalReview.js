import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import styled from "styled-components"
import { Rating } from 'react-simple-star-rating'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import 이미지업로드 from "../../../Image/이미지업로드 아이콘.png"


const ModalReview = ({setModal, gym}) => {

    const closeModal = () => {
        setModal(false)
    }

// 별점 주기 <star rating> 라이브러리!

    const [rating, setRating] = useState(0)

    const handleRating = (rate: number) => {
        setRating(rate)
    }
    
    useEffect(()=>{
        console.log(rating)
    },[rating])

// 이미지 업로드 <firebase> 라이브러리! 

const [fileUrl, setFileUrl] = useState()
const [comment, setComment] = useState('')

// const storage = getStorage();
//   const storageRef = ref(storage);

// const uploadFB = async (e) => {
// // console.log(e.target.files);
// const upload_file = await uploadBytes(
//     ref(storage, `images/${e.target.files[0].name}`),
//     e.target.files[0]
// );
// // console.log(upload_file)

// const file_url = await getDownloadURL(upload_file.ref)
// // console.log(file_url)
// setFileUrl(file_url)
// // file_url !== '' ? setFileUrl(file_url) : setFileUrl(basicImg)
// // 기본 이미지 주는게 나으려나 그냥 없는게 나으려나
// }

// const uploadPost = () => {
//     const post = {
//       file: fileUrl,
//       description: comment,
//     }
//     // console.log(post)
//     // dispatch(__postPost(post))
//     alert('포스팅완료!')
//     // dispatch(getPost)
//     window.location.reload(`/gyms/${gym.id}`)
// }


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

                    <ImgPreview src={fileUrl !== '' ? fileUrl : {이미지업로드}} />
                    
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
                        <UploadImg type="button">
                            후기 사진 올리기:)
                        </UploadImg>
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

const UploadImg = styled.div`
width: 100px;
background-color: #FFB800;
color: white;
border: none;
border-radius: 5px;
padding: 0.2rem 0.7rem;
/* margin-top: 10px; */
margin: -12px 0 0 6%;
`

const ImgPreview = styled.img`
width: 5rem;
height: 5rem;
margin: 0 0 0 3rem;
`


export default ModalReview;