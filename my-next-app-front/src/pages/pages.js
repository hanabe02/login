import {React, useEffect} from "react";
import { useNavigate } from "react-router-dom"; // ✅ useNavigate 추가
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/authActions"; // ✅ 로그아웃 액션 추가


const Pages = () => {

    const navigate = useNavigate(); // ✅ useNavigate 사용
    const dispatch = useDispatch();
    const serviceToken = useSelector((state) => state.auth.serviceToken);

    useEffect(() => {
        if (serviceToken == false) {
            console.log("로그아웃 성공! 로그인 페이지로 이동");
            navigate("/");
        }
    }, [serviceToken]);

    function logoutHandle(){
        dispatch(logout()); // ✅ 로그아웃 액션 실행 (Redux 상태 초기화) 
    }

    return (
        <div>
            <h1>로그인 성공</h1>
            <button onClick={logoutHandle}>로그아웃</button>
        </div>
    );
};

export default Pages;
