import { useRef, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React from "react";
import styled from "styled-components";

function CrewPhotos() {
  const imgRef = useRef();
  const [imgUrl, setImgUrl] = useState(null);

  const onChangeImg = (e) => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    console.log(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgUrl(reader.result);
    };
  };

  const [files, setFiles] = useState("");

  function onLoadFile(e) {
    const file = e.target.files;
    setFiles(file);
  }

  const [fileUrl, setFileUrl] = useState("");
  const [reload, setReload] = useState(false);

  const storage = getStorage();
  const storageRef = ref(storage);

  const uploadFB = async (e) => {
    console.log(e.target.files);
    const upload_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );
    console.log(upload_file);

    const file_url = await getDownloadURL(upload_file.ref);
    console.log(file_url);
    setFileUrl(file_url);
  };

  //이미지 인풋박스 클릭시 업로드
  const onClickImg = () => {
    imgRef.current.click();
  };

  return (
    <Container>
      <div>
        <input
          type="file"
          accept=".jpg, .png"
          ref={imgRef}
          onChange={(e) => {
            onChangeImg(e);
            uploadFB(e);
          }}
        />
        {/* <ImgText
          type="button"
          onClick={(e) => {
            onClickImg(e);
          }}
        >
          <PhotoButton>
            <Xbtn />
            <p>사진올리기</p>
          </PhotoButton>
        </ImgText> */}
      </div>

      <div />
      <div />
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
      background-color: red;
    }
  }
`;

// const ImgText = styled.div`
//   width: 300px;
//   height: 300px;
//   position: relative;
//   p {
//     margin-top: 18px;
//     margin-left: 94px;
//     font-weight: 700;
//     font-size: 20px;
//     color: #666666;
//   }
// `;
// const PhotoButton = styled.div`
//   positon: absolute;
// `;

// const Xbtn = styled.button`
//   width: 60px;
//   height: 60px;
//   background: none;
//   border: none;
//   position: absolute;
//   right: 130px;
//   top: -10px;
//   ::before,
//   ::after {
//     position: absolute;
//     top: -2px;
//     content: "";
//     height: 60px;
//     width: 6px;
//     background-color: #666666;
//   }
//   ::before {
//     transform: rotate(90deg);
//   }
//   ::after {
//     transform: rotate(0deg);
//   }
// `;
