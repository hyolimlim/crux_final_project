import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { kakaoLogin } from "../../Redux/modules/userSlice";

function KakaoLogin() {
  const location = useLocation();
  const dispatch = useDispatch();
  const KAKAO_CODE = location.search.split("=")[1];

  useEffect(() => {
    if (!location.search) return;
    dispatch(kakaoLogin(KAKAO_CODE));
  }, []);

  return <div>Login</div>;
}

export default KakaoLogin;
