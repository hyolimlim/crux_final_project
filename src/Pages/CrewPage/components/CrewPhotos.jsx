import React from "react";
import styled from "styled-components";

function CrewPhotos() {
  return (
    <Container>
      <Photobox></Photobox>
      <Photobox></Photobox>
      <Photobox></Photobox>
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
`;

const Photobox = styled.div`
  width: 280px;
  height: 280px;
  background-color: #202020;
`;
