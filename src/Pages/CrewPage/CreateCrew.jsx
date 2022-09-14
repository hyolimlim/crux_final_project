import { useRef, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Navbar from "../../Shared/Navbar";
import { storage } from "../../Shared/firebase";
import { createCrew } from "../../Redux/modules/crewSlice";

function CreateCrew() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const payload = {
      name: data.name,
      content: data.contet,
      imgUrl: imgUrl,
    };
    dispatch(createCrew(payload));
  };

  const [imgUrl, setImgUrl] = useState(null);
  const imgRef = useRef();

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

  const uploadFB = () => {
    let image = imgRef.current?.files[0];
    const _upload = storage.ref(`images/${image.name}`).put(image);
    _upload.then((snapshot) => {
      snapshot.ref.getDownloadURL().then((url) => {
        setImgUrl(url);
      });
    });
  };

  return (
    <div>
      <Navbar />
      <Warp>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Imgbox>
            <img src={imgUrl}></img>
            <input
              type="file"
              accept=".gif, .jpg, .png"
              ref={imgRef}
              onChange={(e) => {
                onChangeImg(e);
                uploadFB(e);
              }}
            />
          </Imgbox>
          <InputContainer>
            <InputBox>
              <input placeholder="크루명" {...register("name")} />
              <input placeholder="크루소개" {...register("content")} />
            </InputBox>
            <SubmmitButton type="submit" disabled={isSubmitting}>
              입력완료
            </SubmmitButton>
          </InputContainer>
        </Form>
      </Warp>
    </div>
  );
}

export default CreateCrew;

const Warp = styled.div`
  width: 1920px;
  height: auto;
  display: flex;
  justify-content: center;
  align-item: center;
`;

const Form = styled.form`
  width: 1200px;
  height: 815px;
  display: flex;
  flex-direction: space-between;
`;

const InputContainer = styled.div`
  width: 600px;
  height: 815px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputBox = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  input {
    &:nth-child(1) {
      width: 393px;
      height: 55px;
      margin-bottom: 30px;
    }
    &:nth-child(2) {
      width: 393px;
      height: 100px;
      margin-bottom: 30px;
    }
  }
`;

const Imgbox = styled.div`
  width: 600px;
  height: 600px;
  position: relative;
  top: 57px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const SubmmitButton = styled.button`
  background-color: #ffb800;
  width: 265px;
  height: 60px;
  border: none;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: -0.05em;
  color: #000000;
`;
