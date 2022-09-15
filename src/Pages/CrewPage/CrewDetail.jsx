import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getCrewDetail } from "../../Redux/modules/crewSlice";
import Navbar from "../../Shared/Navbar";
import CrewIntro from "./components/CrewIntro";
import CrewMember from "./components/CrewMember";
import CrewNotice from "./components/CrewNotice";
import CrewPhotos from "./components/CrewPhotos";

const CrewDetail = () => {
  const params = useParams().crewId;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCrewDetail(params));
  }, []);

  // console.log(useSelector((state) => state.crewDetail));
  // const { crewDetail } = useSelector((state) => state.crewDetail);
  // const { content, crewNum, id, imgUrl, name } = crewDetail.data;
  // const { memberList } = crewDetail.data;

  //탭 보이게 하기
  const [introVisible, setIntroVisible] = useState(true);
  const [memberVisible, setMemberVisible] = useState(false);
  const [noticeVisible, setNoticeVisible] = useState(false);
  const [photosVisible, setPhotosVisible] = useState(false);

  const handleIntro = () => {
    setIntroVisible(true);
    setMemberVisible(false);
    setNoticeVisible(false);
    setPhotosVisible(false);
  };

  const handleMember = () => {
    setMemberVisible(true);
    setIntroVisible(false);
    setNoticeVisible(false);
    setPhotosVisible(false);
  };

  const handleNotice = () => {
    setMemberVisible(false);
    setIntroVisible(false);
    setNoticeVisible(true);
    setPhotosVisible(false);
  };

  const handlePhotos = () => {
    setMemberVisible(false);
    setIntroVisible(false);
    setNoticeVisible(false);
    setPhotosVisible(true);
  };

  return (
    <div>
      <Navbar />
      <Warp>
        <ThumbnailContainer>
          <ThumbnailContentBox>
            <ImgBox></ImgBox>
            <ContentBox>
              <TextBox>
                <TextButton>
                  <span type="button">수정</span>
                  <span type="button">삭제</span>
                </TextButton>
                <h1>크루이름</h1>
                <TextDetail>
                  <Text>
                    <p>참여자</p> <p>n명</p>
                  </Text>
                  <Text>
                    <p>크루소개</p>
                    <p>크루 짱짱짱</p>
                  </Text>
                </TextDetail>
              </TextBox>
              <ButtonBox>
                <button>참가하기</button>
                <button>신청현황</button>
              </ButtonBox>
            </ContentBox>
          </ThumbnailContentBox>
          <TabButton>
            <span type="button" onClick={handleIntro}>
              소개
            </span>
            <span type="button" onClick={handleMember}>
              참여멤버
            </span>
            <span type="button" onClick={handleNotice}>
              모임공지
            </span>
            <span type="button" onClick={handlePhotos}>
              사진첩
            </span>
          </TabButton>
        </ThumbnailContainer>
        <TabContainer>
          {introVisible && <CrewIntro />}
          {memberVisible && <CrewMember />}
          {noticeVisible && <CrewNotice />}
          {photosVisible && <CrewPhotos />}
        </TabContainer>
      </Warp>
    </div>
  );
};

export default CrewDetail;

const Warp = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThumbnailContainer = styled.div`
  width: 1920px;
  height: 815px;
  background-color: #202020;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  position: relative;
`;

const TabContainer = styled.div`
  width: 1920px;
  height: 864px;
  background-color: #141414;
  display: flex;
  justify-content: center;
`;

const ThumbnailContentBox = styled.div`
  width: 1200px;
  height: 600px;
  display: flex;
  justify-content: space-between;
`;

const ImgBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: green;
`;

const ContentBox = styled.div`
  width: 550px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TextBox = styled.div`
  width: 550px;
  height: 372px;
  h1 {
    color: #ffffff;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    letter-spacing: -0.05em;
  }
`;

const TextDetail = styled.div`
  width: 550px;
  height: 206px;
  margin-top: 76px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  margin-botton: 14px;
  p {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: -0.05em;
    color: #cccccc;
    &:nth-child(1) {
      color: #666666;
      font-size: 20px;
      margin-right: 20px;
    }
  }
`;

const TextButton = styled.div`
  width: 550px;
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
`;

const ButtonBox = styled.div`
  width: 550px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.05em;
  button {
    width: 250px;
    height: 60px;
    border: none;
    color: #666666;
    background-color: #999999;
    &:hover {
      color: #262626;
      background-color: #ffb800;
      transition: 0.5s;
    }
  }
`;

const TabButton = styled.div`
  margin-top: 80px;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.05em;
  color: #999999;
  position: absolute;
  left: 360px;
  bottom: 3px;
  span {
    &:nth-child(1) {
      padding-right: 40px;
      text-decoration: underline 2px;
      text-underline-offset: 8px;
    }
    &:nth-child(2) {
      padding-right: 40px;
      text-decoration: underline 2px;
      text-underline-offset: 8px;
    }
    &:nth-child(3) {
      padding-right: 40px;
      text-decoration: underline 2px;
      text-underline-offset: 8px;
    }
    &:nth-child(4) {
      text-decoration: underline 2px;
      text-underline-offset: 8px;
    }
    &:hover {
      color: #ffffff;
      transition: 0.5s;
    }
  }
`;
