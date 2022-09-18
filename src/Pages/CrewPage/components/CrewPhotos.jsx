import { useRef, useState } from "react";
import { storage } from "../../../Shared/firebase";
import { useParams } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React from "react";
import styled from "styled-components";

import { addCrewPhoto } from "../../../Redux/modules/crewSlice";

function CrewPhotos() {
  const params = useParams().crewId;

  const [files, setFileList] = useState([]); // 파일 리스트
  const [isUploading, setUploading] = useState(false); // 업로드 상태
  const [photoURL, setPhotosURL] = useState([]); // 업로드 완료된 사진 링크들
  const [disabled, setDisable] = useState(false);

  const payload = {
    id: params,
    imgList: photoURL,
  };

  // 파일 선택시 파일리스트 상태 변경해주는 함수
  const handleImageChange = (e) => {
    for (const image of e.target.files) {
      setFileList((prevState) => [...prevState, image]);
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
    } catch (err) {
      console.error(err);
    }
    setUploading(false);
  };

  //div클릭하면 file호출
  const imgRef = useRef();
  const onClickImg = () => {
    imgRef.current.click();
  };

  //dispatch로 이미지 등록하기
  const handleCrewimg = () => {};

  return (
    <Container>
      <div>
        <input
          type="file"
          multiple
          accept=".jpg, .png"
          ref={imgRef}
          onChange={(e) => {
            handleImageChange(e);
            handleImageUpload(e);
          }}
        />
        <ImgText
          type="button"
          onClick={(e) => {
            onClickImg(e);
          }}
        >
          <PhotoButton>
            <Xbtn />
            {/* <p>사진올리기</p> */}
          </PhotoButton>
        </ImgText>
      </div>
    </Container>
  );
}
export default CrewPhotos;

const Container = styled.div`
  width: 1200px;
  height: auto;
  max-height: 800px;
  margin-top: 60px;
  margin-bottom: 200px;
  display: grid;
  grid-template-columns: 280px 280px 280px 280px;
  grid-template-rows: 280px 280px 280px 280px;
  row-gap: 25px;
  column-gap: 27px;
  > div {
    :first-child {
<<<<<<< HEAD
      background-color: #262626;
=======
      align-items: center;
      justify-content: center;
      position: relateive;
>>>>>>> c8d2c01baf8aeeb9e10caba431602bc48668074a
    }
  }
  input {
    display: none;
  }
`;

const ImgText = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  p {
    margin-top: 18px;
    margin-left: 94px;
    font-weight: 700;
    font-size: 20px;
    color: #666666;
  }
`;
const PhotoButton = styled.div`
  background-color: gray;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Xbtn = styled.button`
  width: 60px;
  height: 60px;
  background: none;
  border: none;
  position: absolute;
  ::before,
  ::after {
    position: absolute;
    top: -2px;
    content: "";
    height: 60px;
    width: 6px;
    background-color: #666666;
  }
  ::before {
    transform: rotate(90deg);
  }
  ::after {
    transform: rotate(0deg);
  }
`;
