import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChatRoom } from "../../Redux/modules/chatSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    <div>
      <h1>크루리스트</h1>
      {chatRoomList &&
        chatRoomList.map((chatRoom) => (
          <ChatLists
            key={chatRoom.roomId}
            onClick={() => {
              navigate(`/chat/${chatRoom.roomId}`);
            }}
          >
            <h3>{chatRoom.crewName}</h3>
          </ChatLists>
        ))}
    </div>
  );
}

export default ChatList;

const ChatLists = styled.div`
  width: 1200px;
  height: 50px;
`;
