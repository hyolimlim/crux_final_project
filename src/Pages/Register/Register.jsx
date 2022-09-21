import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signup } from "../../Redux/modules/userSlice";
import RegisterValidation from "./registerValidation";
import useOutSideClick from "../../Shared/hooks/useOutSideClick";
import { faGrinStars } from "@fortawesome/free-solid-svg-icons";

function Register({ onClose }) {
  const { schema } = RegisterValidation();

  //모달 스크롤 방지
  useEffect(() => {
    const $body = document.querySelector("body");
    $body.style.overflow = "hidden";
    return () => ($body.style.overflow = "auto");
  }, []);

  //모달 바깎 클릭시 close
  const modalRef = useRef(null);
  useOutSideClick(modalRef, onClose);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema), mode: "onBlur" });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const payload = {
      email: data.email,
      nickname: data.nickname,
      password: data.password,
      content: data.content,
    };
    dispatch(signup(payload));
  };

  const [firstForm, setFirstForm] = useState(true);
  const [secondForm, setSecondForm] = useState(false);
  const [thirdForm, setThirddForm] = useState(false);

  return (
    <Background>
      <Modal ref={modalRef} onSubmit={handleSubmit(onSubmit)}>
        <Xbtn onClick={onClose}></Xbtn>
        <Title>회원가입</Title>
        {firstForm && (
          <>
            <InputBox>
              <input placeholder="이메일" />
              <input placeholder="닉네임(특수문자 제외 2~10자)" />
              <input placeholder="비밀번호(영문 대소문자, 숫자, 특수문자 포함)" />
              <input placeholder="비밀번호 확인" />
            </InputBox>
            <SummitButton
              type="submit"
              onClick={() => {
                setFirstForm(false);
                setSecondForm(true);
              }}
            >
              입력
            </SummitButton>
          </>
        )}
        {secondForm && (
          <>
            <TextBox>
              <textarea placeholder="자기소개(150자 미만)" />
            </TextBox>
            <SummitButton
              type="submit"
              onClick={() => {
                setFirstForm(false);
                setSecondForm(true);
              }}
            >
              입력
            </SummitButton>
          </>
        )}
      </Modal>
    </Background>
  );
}

export default Register;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  padding-top: 200px;
  z-index: 99999;
`;

const Modal = styled.form`
  width: 500px;
  height: 610px;
  background-color: #141414;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 65px 50px 65px 50px;
  position: relative;
`;

const Title = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 2.75rem;
  letter-spacing: -0.05em;
  color: #ffffff;
`;

const SummitButton = styled.button`
  width: 400px;
  height: 60px;
  border: none;
  margin-top: 30px;
  background-color: #666666;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  color: #ffffff;
  letter-spacing: -0.05em;
`;

const InputBox = styled.div`
  width: 400px;
  height: 275px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  input {
    width: 400px;
    height: 60px;
    margin-bottom: 10px;
    outline: none;
    border: none;
    background-color: #262626;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-size: 1.25rem;
    font-weight: 400;
    color: #ffffff;
    letter-spacing: -0.05em;
    padding: 20px 21px 21px 20px;
    &:nth-child(2) {
      margin-bottom: 15px;
    }
  }
`;

const TextBox = styled.div`
  width: 400px;
  height: 280px;
  margin-top: 60px;
  textarea {
    width: 400px;
    height: 280px;
    background-color: #262626;
    resize: none;
    outline: none;
    border: none;
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
