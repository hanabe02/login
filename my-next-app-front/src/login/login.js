import {React, useEffect} from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import "./login.css"; 
import { loginClick } from "../redux/auth/authActions";
import {useNavigate} from 'react-router-dom';

// ✅ 페이지 이동을 위한 useNavigate 추가


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    // redux dispatch 함수 사용 
    const navigate = useNavigate();


    
    const serviceToken = useSelector((state) => state.auth.serviceToken);

    useEffect(() => {
        if (serviceToken) {
            console.log("로그인 성공! 메인 페이지로 이동");
            navigate("./pages/pages")
        }
    }, [serviceToken]); 

    function ButtonClick(){
        // 버튼 클릭시 dispatch 함수 실행
        dispatch(loginClick(username, password));
    } 

    function UsernameChange(e){
        setUsername(e.target.value);
    }
    function PasswordChange(e){
        setPassword(e.target.value);
    }

    function click(){
        navigate("./HomePage/homePage");
    }
    
    return (
        <div className="login-container">
        <h2 className="login-logo">Hanabe</h2>
        

        {/* 입력 필드 */}
        <div>
        <input
            type="text"
            placeholder="아이디"
            className="login-input"
            value={username}
            onChange={UsernameChange} // 입력값 변경
        />
        <input
            type="password"
            placeholder="비밀번호"
            className="login-input"
            value={password}
            onChange={PasswordChange} // 입력값 변경
        />
        </div>

        {/* 로그인 상태 유지 체크박스 */}
        <div className="checkbox-container">
            <input type="checkbox" id="keep-login" />
            <label htmlFor="keep-login">로그인 상태 유지</label>
        </div>

        {/* 로그인 버튼 */}
        <button className="login-button" onClick={ButtonClick}>넥슨ID 로그인</button>

        {/* 하단 링크 */}
        <div className="footer-links">
            <a href="/Homepage/homePage">회원가입</a>
            <a href="#">넥슨ID 찾기</a>
            <a href="#">비밀번호 찾기</a>
        </div>
        </div>
    );
    }

export default Login;
