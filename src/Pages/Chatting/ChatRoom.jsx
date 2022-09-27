import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { addMessage } from "../../Redux/modules/chatSlice";

function ChatRoom() {
  //기본설정---헤더, 토큰, 주소설정
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const headers = {
    Authorization: window.localStorage.getItem("access_token"),
  };
  const socket = new SockJS(`https://01192mg.shop/stomp/chat`);
  const client = Stomp.over(socket);

  const roomId = useParams();
  console.log(roomId);

  //   렌더되면 소켓 연결실행
  useEffect(() => {
    onConneted();
    return () => {
      onConneted();
    };
  }, []);

  //   엔터 누르면 데이터 전송
  //   const handleEnterPress = (e) => {
  //     if (message.trim() === "") {
  //       e.preventDefault();
  //     }
  //     if (e.keyCode === 13 && e.shiftKey == false) {
  //       sendMessage();
  //     }
  //   };

  //   연결&구독
  function onConneted() {
    try {
      client.connect(headers, () => {
        client.subscribe(
          `/sub/chat/room/${roomId}`,
          (data) => {
            const newMessage = JSON.parse(data.body);
            dispatch(addMessage(newMessage));
          },
          headers
        );
      });
    } catch (error) {}
  }

  //메시지 보내기
  const sendMessage = () => {
    client.send(
      `/pub/chat/message`,
      headers,
      JSON.stringify({
        content: message,
      })
    );
    setMessage("");
  };

  return (
    <div>
      <input onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>전송</button>
    </div>
  );
}
export default ChatRoom;
