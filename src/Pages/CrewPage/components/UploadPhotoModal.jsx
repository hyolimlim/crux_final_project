import { useRef, useState } from "react";
import { storage } from "../../../Shared/firebase";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React from "react";
import styled from "styled-components";
import { addCrewPhoto } from "../../../Redux/modules/crewSlice";

function UploadPhotoModal({ onClose }) {
  const params = useParams().crewId;
  const dispatch = useDispatch();

  const [files, setFileList] = useState([]); // 파일 리스트
  const [isUploading, setUploading] = useState(false); // 업로드 상태
  const [photoURL, setPhotosURL] = useState([]); // 업로드 완료된 사진 링크들

  //useform 전송
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = () => {
    const payload = {
      id: params,
      imgUrl: photoURL,
    };
    dispatch(addCrewPhoto(payload));
  };

  // 이거로도 바꿔서 해보기~
  //   const handlePermit = (data) => {
  //     const payload = {
  //       memberId: data,
  //       crewId: params,
  //     };
  //     console.log(payload);
  //     dispatch(permitCrew(payload));
  //   };

  // 파일 선택시 파일리스트 상태 변경해주는 함수
  const handleImageChange = (e) => {
    for (const image of e.target.files) {
      setFileList((prevState) => [...prevState, image]);
      console.log(files);
    }
  };

  // 업로드시 호출될 함수
  const handleImageUpload = async (e, fileList) => {
    e.preventDefault();
    try {
      setUploading(true);
      const urls = await Promise.all(
        fileList?.map((file) => {
          const storageRef = ref(storage, `images/${file.name}`);
          const task = uploadBytesResumable(storageRef, file);
          return getDownloadURL(storageRef);
        })
      );
      setPhotosURL(urls);
      console.log(photoURL);
    } catch (err) {
      console.error(err);
    }
  };

  //div클릭하면 file호출
  const imgRef = useRef();
  const onClickImg = () => {
    imgRef.current.click();
  };

  return (
    <Background>
      <Modal>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title>사진 등록 (n/5)</Title>
          <Xbtn onClick={onClose}></Xbtn>
          <ImgBox type="button" onClick={onClickImg}>
            <input
              type="file"
              multiple
              accept=".jpg, .png"
              ref={imgRef}
              onChange={(e) => {
                handleImageChange(e);
                handleImageUpload(e, files);
              }}
            />
            <PhotoButton />
            <ImgPreviewBox></ImgPreviewBox>
          </ImgBox>
          <Buttonbox>
            <button type="submit" disabled={isSubmitting}>
              등록하기
            </button>
          </Buttonbox>
        </form>
      </Modal>
    </Background>
  );
}

export default UploadPhotoModal;

const ImgPreviewBox = styled.div`
  width: 410px;
  height: 60px;
  margin-top: 5px;
  background-color: red;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: 99999;
`;

const Modal = styled.div`
  width: 500px;
  height: 635px;
  background-color: #141414;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 65px 45px 65px 45px;
  position: relative;
  margin-top: 200px;
`;

const Title = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 2.75rem;
  letter-spacing: -0.05em;
  color: #ffffff;
`;

const PhotoButton = styled.div`
  background-color: gray;
  width: 410px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.div`
  display: flex;
  positon: relative;
  background=color: red;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  input {
    display: none;
  }
`;

const Buttonbox = styled.div`
  button {
    width: 410px;
    height: 60px;
    border: none;
    background-color: #cccccc;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    color: #141414;
    letter-spacing: -0.05em;
    &:first-child {
      position: absolute;
      top: 530px;
      left: 45px;
      background-color: #fae100;
    }
  }
`;

const Xbtn = styled.button`
  width: 25px;
  height: 25px;
  background: none;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  ::before,
  ::after {
    position: absolute;
    top: -2px;
    content: "";
    height: 25px;
    width: 1px;
    background-color: #ffffff;
  }
  ::before {
    transform: rotate(45deg);
  }
  ::after {
    transform: rotate(-45deg);
  }
`;
