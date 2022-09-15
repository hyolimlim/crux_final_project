import React from "react";
import styled from "styled-components";

function CrewNotice() {
  return (
    <Container>
      <Intro>
        <IntroContent>
          <h2>공지사항</h2>
          <p>공지사항입니다.</p>
        </IntroContent>
      </Intro>
    </Container>
  );
}

export default CrewNotice;

const Intro = styled.div`
  width: 1200px;
  height: 155px;
  background-color: #cccccc;
  padding: 40px 30px 40px 30px;
`;

const IntroContent = styled.div`
  width: 1200px;
  hieght: 108px;
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

const Container = styled.div`
  width: 1200px;
  height: auto;
  margin-top: 60px;
`;
