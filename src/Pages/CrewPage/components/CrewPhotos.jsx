import { useRef, useState, useEffect } from "react";
import { storage } from "../../../Shared/firebase";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React from "react";
import styled from "styled-components";
import UploadPhotoModal from "./UploadPhotoModal";
import { getCrewPhoto } from "../../../Redux/modules/crewSlice";

function CrewPhotos() {
  const params = useParams().crewId;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCrewPhoto(params));
  }, []);

  const crewPhotos = useSelector((state) => state?.crews?.CrewPhotos);
  const Photos = crewPhotos?.data;

  //   const userData = useSelector((state) => state);
  //   console.log(userData);

  //모달 띄우기
  const [uploadModalVisible, setUploadModaVisible] = useState(false);

  const handleMadalClick = () => {
    setUploadModaVisible(!uploadModalVisible);
  };
  return (
    <Container>
      {uploadModalVisible && <UploadPhotoModal onClose={handleMadalClick} />}
      <div>
        <ImgText type="button">
          <PhotoButton onClick={handleMadalClick}>
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
