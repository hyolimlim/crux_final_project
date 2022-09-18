import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

function CrewMember() {
  const crewDetail = useSelector((state) => state.crews.crewDetail);
  const members = crewDetail.data.memberList;
  console.log(members);

  return (
    <Container>
      {members.map((member) => (
        <IntroContent key={member.id}>
          <HostDetailBox>
            <img src={member.imgUrl}></img>
            <HostDetail>
              <p>{member.nickname}</p>
              <div>
                <p>{member.content}</p>
              </div>
            </HostDetail>
          </HostDetailBox>
        </IntroContent>
      ))}
    </Container>
  );
}

export default CrewMember;

const CrewIntroBox = styled.div`
  width: 100%;
  height: 360px;
  background-color: white;
  marin-top: 60px;
`;

const Intro = styled.div`
  width: 1200px;
  height: 220px;
  border-bottom: 1px solid #202020;
  display: flex;
  align-items: center;
  backgrond-color: white;
`;

const IntroContent = styled.div`
  width: 1200px;
  p {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.05em;
    color: #999999;
  }
`;

const Title = styled.div`
  color: #ffffff;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.05em;
`;

const HostDetail = styled.div`
  width: 1020px;
  height: 81px;
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
    margin-top: 10px;
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

const Container = styled.div`
  width: 1200px;
  height: auto;
  margin-top: 60px;
`;

//하단 소개박스
const HostIntro = styled.div`
  width: 1200px;
  height: 190px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

//이미지 cover로 수정
const HostDetailBox = styled.div`
  width: 1200px;
  height: 140px;
  display: flex;
  img {
    width: 140px;
    height: 140px;
    border-radius: 70%;
    overflow: hidden;
  }
`;
