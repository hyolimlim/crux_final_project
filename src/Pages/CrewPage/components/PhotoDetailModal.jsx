import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { Component } from "react";
import styled from "styled-components";
import {
  getApplicationList,
  permitCrew,
} from "../../../Redux/modules/crewSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function PhotoDetailModal({ onClose, photoId }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const params = useParams().crewId;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApplicationList(params));
  }, [dispatch]);

  const photoList = photoId;

  //크루 등록 승인

  // const handlePermit = (data) => {
  //   const payload = {
  //     memberId: data,
  //     crewId: params,
  //   };
  //   console.log(payload);
  //   dispatch(permitCrew(payload));
  // };

  return (
    <Background>
      <Modal>
        <Xbtn onClick={onClose}></Xbtn>
        {photoList &&
          photoList.map((photo) => (
            <div key={photo.photoId}>
              <img src={photo.imgUrl}></img>
            </div>
          ))}
        <Buttonbox></Buttonbox>
      </Modal>
    </Background>
  );
}

export default PhotoDetailModal;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: 99999;
`;

const Modal = styled.div`
  width: 635px;
  height: 635px;
  background-color: #141414;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 200px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Login = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 2.75rem;
  letter-spacing: -0.05em;
  color: #ffffff;
`;

const PhotoButton = styled.div`
  width: 410px;
  height: 100%
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.div`
  display: flex;
  positon: relative;
  width: 410px;
  height: 484px;
  padding-top: 60px;
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
      top: 367px;
      left: 45px;
      background-color: #ffb800;
    }
    &:last-child {
      position: absolute;
      top: 510px;
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

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #262626;
  margin-bottom: 10px;
`;

const IntroContent = styled.div`
  width: 100%;
  p {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.05em;
    color: #999999;
  }
`;

const HostDetail = styled.div`
  width: 100%;
  height: auto;
  margin-left: 40px;
  p {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: -0.05em;
    color: #cccccc;
  }
  div {
    p {
      font-family: "Spoqa Han Sans Neo";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      letter-spacing: -0.05em;
      color: #999999;
    }
  }
`;

//이미지 cover로 수정
const HostDetailBox = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 70%;
    overflow: hidden;
  }
  button {
    width: 50px;
    height: 30px;
    border: none;
    color: #cccccc;
    background-color: transparent;
  }
`;
