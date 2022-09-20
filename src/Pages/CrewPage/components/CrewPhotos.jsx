import { useRef, useState, useEffect } from "react";
import { storage } from "../../../Shared/firebase";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React from "react";
import styled from "styled-components";
import UploadPhotoModal from "./UploadPhotoModal";
import PhotoDetailModal from "./PhotoDetailModal";
import { getCrewPhoto } from "../../../Redux/modules/crewSlice";

function CrewPhotos() {
  const params = useParams().crewId;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCrewPhoto(params));
  }, []);

  const crewPhotos = useSelector((state) => state?.crews?.crewPhotos?.data);
  console.log(crewPhotos);
  // const Photos = crewPhotos?.data;

  //   const userData = useSelector((state) => state);
  //   console.log(userData);

  //업로드 모달 띄우기
  const [uploadModalVisible, setUploadModaVisible] = useState(false);

  const handleMadalClick = () => {
    setUploadModaVisible(!uploadModalVisible);
  };

  //이미지 리스트 모달 띄우기-->모달에 postId전달.
  const [photoDetailModalVisible, setImgListModaVisible] = useState(false);
  const [photoId, setPhotoId] = useState([]);

  const handleImgMadalClick = (data) => {
    setImgListModaVisible(!photoDetailModalVisible);
    setPhotoId(data);
  };

  return (
    <Container>
      {uploadModalVisible && <UploadPhotoModal onClose={handleMadalClick} />}
      {photoDetailModalVisible && (
        <PhotoDetailModal onClose={handleImgMadalClick} photoId={photoId} />
      )}
      <ImgBox onClick={handleMadalClick}>사진 등록하기</ImgBox>
      {crewPhotos &&
        crewPhotos.map((photo) => (
          <ImgBox
            type="button"
            key={photo.postId}
            onClick={() => {
              handleImgMadalClick(photo.imgList);
            }}
          >
            <img src={photo.imgList[0]?.imgUrl}></img>
          </ImgBox>
        ))}
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
`;

const ImgBox = styled.div`
  width: 280px;
  height: 280px;
  background-color: black;
  img {
    width: 100%;
    height: 100%;
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
  width: 280px;
  height: 280px;
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
