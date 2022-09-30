import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChatRoom } from "../../Redux/modules/chatSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ChatXbtn } from "../../Image/chatx.svg";
import { ReactComponent as ChatBackbtn } from "../../Image/chatback.svg";
import { ReactComponent as ChatSendbtn } from "../../Image/chatsend.svg";

function ChatList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //채팅방 목록 불러오기
  useEffect(() => {
    dispatch(getChatRoom());
  }, []);

  const chatRoomList = useSelector((state) => state?.chat?.chatRoom?.data);
  console.log(chatRoomList);

  return (
    <div style={{ padding: "10px" }}>
      {/* <ChatWarp>
        <Title>
          <h3>크루리스트</h3>
          <h3>X</h3>
        </Title>
        <List>
          {chatRoomList?.map((room) => (
            <Room key={room.roomId}>
              <Content>
                <div>
                  <img src={room.imgUrl} />
                </div>
                <Text>
                  <div>
                    <h3>{room.crewName}</h3>
                    <p>22-09-27 07:19 AM </p>
                  </div>
                  <div>
                    <p>
                      클라이밍해서광명찾자님, 오늘 너무 즐거웠습니다. 즐거운
                      모임을 통해서 좋은 추억 많이 만드셨으면..
                    </p>
                  </div>
                </Text>
              </Content>
            </Room>
          ))}
        </List>
      </ChatWarp> */}
      <ChatWarp>
        <Top>
          <div>
            <ChatBackbtn />
            <h3>와우산어쩌고크루</h3>
            <p>22-09-27 07:19 AM</p>
          </div>
          <ChatXbtn />
        </Top>
        <CrewImgBox>
          <div>
            <img src="#" />
          </div>
          <div>
            <h3>크루 이름</h3>
            <p>22-09-27 07:19 AM</p>
          </div>
        </CrewImgBox>
        <ChatContainer>
          <CrewMessageBox>
            <div>
              <img src="#" />
            </div>
            <CrewMessage>
              <div>
                <p>크루 메시지입니다..</p>
              </div>
            </CrewMessage>
            <div>시간임</div>
          </CrewMessageBox>
          <MyMessage>
            <div>
              <p>lsdfjkasldfjkladsjafklasdjfklasjdfkj</p>
            </div>
          </MyMessage>
        </ChatContainer>
        <ChatInput>
          <input placeholder="메시지를 입력해주세요."></input>
          <ChatSendbtn style={{ cursor: "pointer" }} />
        </ChatInput>
      </ChatWarp>
    </div>
  );
}

export default ChatList;

const ChatContainer = styled.div`
  width: 100%;
`;

const CrewMessageBox = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  div {
    &:nth-child(1) {
      width: 25px;
      height: 25px;
      background: #e8e8e8;
      border-radius: 199.63px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &:nth-child(3) {
      background-color: gray;
      height: 100%;
      p {
        font-weight: 300;
        font-size: 8px;
        letter-spacing: -0.05em;
        color: #999999;
      }
    }
  }
`;

const CrewMessage = styled.div`
  padding: 0px 0px 0px 7px;
  background-color: red;
  display: flex;
  div {
    &:nth-child(1) {
      width: 100%;
      position: relative;
      background: #333333;
      border-radius: 0px 5px 5px 5px;
      padding: 10px;
      height: auto;
      word-break: break-all;
      ::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        height: 0;
        border: 7px solid transparent;
        border-right-color: #333333;
        border-left: 0;
        border-top: 0;
        margin-left: -7px;
      }
    }
    p {
      font-weight: 400;
      font-size: 12px;
      letter-spacing: -0.05em;
      color: #cccccc;
      margin-left: 0px;
    }
  }
`;

const MyMessage = styled.div`
  div {
    position: relative;
    background: #00aabb;
    border-radius: 0px 5px 5px 5px;
    padding: 10px;
    ::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 0;
      border: 7px solid transparent;
      border-right-color: #00aabb;
      border-left: 0;
      border-top: 0;
      margin-left: -7px;
    }
  }
`;

const ChatInput = styled.div`
  width: 100%;
  height: 52px;
  background: #333333;
  border-radius: 15px;
  padding-left: 20px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    width: 291px;
    height: 18px;
    background-color: transparent;
    border: none;
    :focus {
      outline: none;
    }
    color: #cccccc;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.05em;
    ::-webkit-input-placeholder {
      color: #3e3e3e;
    }
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gray;
  div {
    margin-right: 20px;
    display: flex;
    align-items: center;
    h3 {
      font-weight: 400;
      font-size: 20px;
      letter-spacing: -0.05em;
      color: #ffffff;
    }
    p {
      font-weight: 300;
      font-size: 10px;
      letter-spacing: -0.05em;
      color: #999999;
      margin-left: 10px;
      margin-top: 9px;
    }
  }
`;

const CrewImgBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    &:nth-child(1) {
      width: 100px;
      height: 100px;
      background: #e8e8e8;
      border-radius: 199.63px;
    }
    &:nth-child(2) {
      width: 100px;
      margin-top: 10px;
      text-align: center;
      h3 {
        font-weight: 400;
        font-size: 15px;
        letter-spacing: -0.05em;
        color: #ffffff;
      }
      p {
        font-weight: 300;
        font-size: 10px;
        letter-spacing: -0.05em;
        color: #999999;
      }
    }
  }
`;

const ChatWarp = styled.div`
  width: 430px;
  height: 550px;
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  background-color: #262626;
  padding: 40px 25px 47px 25px;
`;

const Title = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: -0.05em;
    color: #ffffff;
  }
`;

const List = styled.div`
  width: 380px;
  height: 418px;
  display: flex;
  flex-direction: colunm;
  overflow: auto;
  flex-wrap: wrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Room = styled.div`
  width: 380px;
  height: 97px;
  padding: 14px 55px 20px 20px;
  border-radius: 15px;
  background-color: #333333;
  margin-bottom: 10px;
  display: flex;
`;

const Content = styled.div`
  width: 305px;
  height: 63px;
  display: flex;
  div {
    &:nth-child(1) {
      img {
        width: 55px;
        height: 55px;
        border-radius: 199.63px;
        background: #e8e8e8;
        margin-top: 6px;
        margin-right: 20px;
      }
    }
  }
`;

const Text = styled.div`
  hegith: 60px;
  width: 230px;
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.05em;
    color: #999999;
  }
  div {
    &:nth-child(1) {
      display: flex;
      height: 30px;
      align-items: center;
      h3 {
        font-weight: 400;
        font-size: 15px;
        letter-spacing: -0.05em;
        color: #ffffff;
      }
      p {
        font-weight: 300;
        font-size: 10px;
        letter-spacing: -0.05em;
        color: #999999;
        margin-left: 5px;
        margin-top: 3px;
      }
    }
    &:nth-child(2) {
      p {
        font-weight: 400;
        font-size: 12px;
        letter-spacing: -0.05em;
        color: #999999;
      }
    }
  }
`;
