import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signup, Signup } from "../../Redux/modules/userSlice";
import RegisterValidation from "./registerValidation";
import useOutSideClick from "../../Shared/hooks/useOutSideClick";

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

  return (
    <Background>
      <Modal ref={modalRef} onSubmit={handleSubmit(onSubmit)}>
        <Xbtn onClick={onClose}></Xbtn>
        <SignupTitle>회원가입</SignupTitle>
        <InputBox>
          <input
            type="text"
            placeholder="email"
            autoComplete="off"
            maxLength="320"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <input
            type="text"
            placeholder="nickname"
            autoComplete="off"
            maxLength="10"
            {...register("nickname")}
          />
          <p>{errors.nickname?.message}</p>
          <input
            type="text"
            placeholder="password"
            autoComplete="off"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <input
            type="password"
            placeholder="passwordConfirm"
            autoComplete="off"
            {...register("passwordConfirm")}
          />
          <p>{errors.passwordConfirm?.message}</p>
          <input
            type="text"
            placeholder="content"
            autoComplete="off"
            {...register("content")}
          />
          <p>{errors.content?.message}</p>
        </InputBox>
        {/* <label>14세 이상입니다(필수)</label>
        <p>동의</p>
        <input type="checkbox" value="true" />
        <label>사이트 이용약관(필수)</label>
        <p>동의</p>
        <input type="checkbox" value="true" />
        <label>개인정보처리 방침(필수)</label>
        <p>동의</p>
        <input type="checkbox" /> */}
        <SummitButton type="submit" disabled={isSubmitting}>
          입력
        </SummitButton>
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
  height: 635px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 65px 45px 65px 45px;
  position: relative;
`;

const SignupTitle = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 2.75rem;
  letter-spacing: -0.05em;
  color: #000000;
`;

const SummitButton = styled.button`
  width: 410px;
  height: 60px;
  border: none;
  background-color: #cccccc;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  color: #ffffff;
  letter-spacing: -0.05em;
  &:first-child {
    position: absolute;
    top: 367px;
    left: 45px;
  }
  &:last-child {
    position: absolute;
    top: 510px;
    left: 45px;
  }
`;

const InputBox = styled.div`
  input {
    width: 410px;
    height: 35px;
    outline: none;
    border: none;
    border-bottom: solid 1px #cccccc;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: -0.05em;
    margin: 0;
    padding: 0;
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
    background-color: #000000;
  }
  ::before {
    transform: rotate(45deg);
  }
  ::after {
    transform: rotate(-45deg);
  }
`;
