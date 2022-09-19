import React, { useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  createCrewNotice,
  deleteCrewNotice,
} from "../../../Redux/modules/crewSlice";

function CrewNotice({ notice }) {
  const params = useParams().crewId;

  const notices = notice;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const dispatch = useDispatch();

  //공지사항 등록
  const onSubmit = (data) => {
    const payload = {
      id: params,
      content: data.content,
    };
    console.log(payload);
    dispatch(createCrewNotice(payload), [dispatch]);
  };

  return (
    <Container>
      <Intro>
        <IntroContent>
          <h2>공지사항 입력</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("content", { required: true })} />
            <button type="submit" disabled={isSubmitting}>
              입력
            </button>
          </form>
        </IntroContent>
      </Intro>
      {notices &&
        notices.map((notice) => (
          <Intro key={notice.id}>
            <IntroContent>
              <TextButton>
                <span type="button">수정</span>
                <span
                  type="button"
                  onClick={() => {
                    dispatch(deleteCrewNotice(notice.id));
                  }}
                >
                  삭제
                </span>
              </TextButton>
              <h2>공지사항</h2>
              <p>{notice.content}</p>
            </IntroContent>
          </Intro>
        ))}
    </Container>
  );
}

export default CrewNotice;

const Intro = styled.div`
  width: 1200px;
  height: 155px;
  background-color: #cccccc;
  padding: 40px 30px 40px 30px;
  margin-bottom: 20px;
  input {
    width: 1000px;
    height: 30px;
    margin-top: 20px;
    border: none;
  }
  button {
    width: 140px;
    height: 30px;
    border: none;
  }
`;

const IntroContent = styled.div`
  width: 1200px;
  hieght: 108px;
  padding: 0;
  h2 {
    font-family: "Spoqa Han Sans Neo";
    font-style: bold;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: -0.05em;
    color: #ffffff;
  }
  p {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.05em;
    color: #ffffff;
  }
`;

const TextButton = styled.div`
  width: 1140px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.05em;
  span {
    border: none;
    color: #999999;
    margin-rignt: 6px;
    &:nth-child(1) {
      padding-right: 6px;
    }
    &:nth-child(2) {
      padding-left: 6px;
    }
  }
  position: relative;
  top: -20px;
`;

const Container = styled.div`
  width: 1200px;
  height: auto;
  margin-top: 60px;
  positon: absolute;
`;
