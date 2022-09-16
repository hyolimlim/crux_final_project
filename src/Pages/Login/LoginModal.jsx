import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../Redux/modules/userSlice";
import useOutSideClick from "../../Shared/hooks/useOutSideClick";

function LoginModal({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  const onError = () => {
    alert("이메일 또는 비밀번호를 확인해주세요");
  };

  //모달 스크롤 방지
  useEffect(() => {
    const $body = document.querySelector("body");
    $body.style.overflow = "hidden";
    return () => ($body.style.overflow = "auto");
  }, []);

  //모달 바깎 클릭시 close
  const modalRef = useRef(null);
  useOutSideClick(modalRef, onClose);

  //카카오 로그인
  const API = process.env.REACT_APP_KAKAO_API;
  const URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API}&redirect_uri=${URI}&response_type=code`;

  const handleKaKaoLogin = () => {
    window.location.replace(KAKAO_URL);
  };

  return (
    <Background>
      <Modal ref={modalRef} onSubmit={handleSubmit(onSubmit, onError)}>
        <Login>로그인</Login>
        <Xbtn onClick={onClose}></Xbtn>
        <Input>
          <input
            type="text"
            placeholder="이메일"
            maxLength="320"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
              },
            })}
          />
          <input
            type="password"
            placeholder="비밀번호"
            maxLength="20"
            autoComplete="off"
            {...register("password", {
              required: true,
              pattern: {
                value: /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?=\S+$).{4,12}/,
              },
            })}
          />
          <Checkbox>
            <input type="checkbox" />
            <label>로그인 상태 유지</label>
          </Checkbox>
        </Input>
        <Linkbox>
          <a href="/register">회원가입</a>
          <a href="/#">아이디/비밀번호 찾기</a>
        </Linkbox>
        <Buttonbox>
          <button type="submit" disabled={isSubmitting}>
            로그인
          </button>
          <button type="button" onClick={handleKaKaoLogin}>
            카카오톡 로그인
          </button>
        </Buttonbox>
      </Modal>
    </Background>
  );
}

export default LoginModal;

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

const Login = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 2.75rem;
  letter-spacing: -0.05em;
  color: #000000;
`;

const Input = styled.div`
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
    &:nth-child(1) {
      margin-top: 45px;
    }
    &:nth-child(2) {
      margin-top: 35px;
    }
  }
`;

const Checkbox = styled.div`
  width: 100%;
  height: 25px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  position: relative;
  input {
    width: 25px;
    height: 25px;
    position: absolute;
    top: -45px;
  }
  label {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    letter-spacing: -0.05em;
    margin-left: 40px;
  }
`;

const Linkbox = styled.div`
  a {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem
    letter-spacing: -0.05em;
    text-decoration-line:none;
    color: #000000;
    &:first-child {
      position: absolute;
      bottom: 163px;
      left: 45px;
    }
    &:last-child {
      position: absolute;
      bottom: 163px;
      right: 45px;
    }
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
