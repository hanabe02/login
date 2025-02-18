import "./homPage.css"; // 스타일 파일 가져오기
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [userid, setUserid] = useState("");
    const [useremail, setUseremail] = useState("");
    const [userpassword, setUserpassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // 오류 메시지 추가
    const navigate = useNavigate();

    // 회원가입 처리
    function signUp(e) {
        e.preventDefault(); // 기본 제출 동작 방지 (새로고침 방지)

        if (!userpassword || !checkPassword) {
            console.log("비밀번호를 입력하세요.");
            setErrorMessage("비밀번호를 입력하세요!"); // 오류 메시지 설정
            return; // 함수 종료
        }

        

        if (userpassword === checkPassword) {
            console.log("코드 정상적으로 실행");
            console.log(username);
            console.log(userid);
            console.log(useremail);
            console.log(userpassword);
        
            const params = {
                name : username,
                id : userid,
                email : useremail,
                password : userpassword,
            }
            console.log(params);

            try{
                const response = axios.post("http://localhost:8888/api/sign", params);
                console.log(response);
                setIsModalOpen(false);
            }catch{
            }





            setErrorMessage(""); // 오류 메시지 초기화
        } else {
            console.log("비밀번호 일치하지 않음");
            setErrorMessage("비밀번호가 일치하지 않습니다! 다시 입력하세요."); // 오류 메시지 설정

            // 🔹 비밀번호 입력 필드 초기화
            setUserpassword("");
            setCheckPassword("");
        }
    }

    function close() {
        setIsModalOpen(false);
    }

    function loginPage(){
        navigate('/');
    }

    return (
        <div className="container">
            <div className="signup-box">
                <h1>회원가입</h1>
                <p>회원가입 수단을 선택해 주세요.</p>

                <button className="signup-btn" onClick={() => setIsModalOpen(true)}>회원가입</button>
                <button className="signup-btn">전화번호로 회원가입</button>
                <button className="signup-btn" onClick={loginPage}>로그인</button>

                <div className="divider">또는</div>

                <button className="social-btn google">Google로 회원가입</button>
                <button className="social-btn facebook">Facebook으로 회원가입</button>
                <button className="social-btn apple">Apple로 회원가입</button>
                <button className="social-btn twitter">Twitter로 회원가입</button>
                <button className="social-btn line">LINE으로 회원가입</button>
                <button className="social-btn vk">VK로 회원가입</button>

                {isModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h2>회원가입</h2>
                            <form className="signup-form" onSubmit={signUp}>
                                <input 
                                    type="text" 
                                    placeholder="이름" 
                                    className="input-field" 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <input 
                                    type="text" 
                                    placeholder="아이디" 
                                    className="input-field" 
                                    value={userid}
                                    onChange={(e) => setUserid(e.target.value)}
                                />
                                <input 
                                    type="email" 
                                    placeholder="이메일" 
                                    className="input-field" 
                                    value={useremail}
                                    onChange={(e) => setUseremail(e.target.value)}
                                />
                                <input 
                                    type="password" 
                                    placeholder="비밀번호" 
                                    className="input-field" 
                                    value={userpassword}
                                    onChange={(e) => setUserpassword(e.target.value)}
                                />
                                <input 
                                    type="password" 
                                    placeholder="비밀번호 확인" 
                                    className="input-field" 
                                    value={checkPassword}
                                    onChange={(e) => setCheckPassword(e.target.value)}
                                />

                                {/* 🔹 오류 메시지 출력 */}
                                {errorMessage && <p className="error-message">{errorMessage}</p>}

                                <button type="submit" className="submit-btn">가입하기</button>
                                <button type="button" className="cancel-btn" onClick={close}>닫기</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
