import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/authActions"; 
import { editProfileRequest } from "../redux/profile/profileActions"; // ✅ Redux 액션 추가
import "./pages.css"; // ✅ CSS 스타일 추가
import profileImage from "../img/KakaoTalk_20241028_141805411.png";
import axios from "axios";

const Pages = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const serviceToken = useSelector((state) => state.auth.serviceToken);

    // ✅ user가 null이면 기본값 `{}` 설정
    const user = useSelector((state) => state.auth.user) || {};

    // ✅ 수정 모드 여부
    const [editMode, setEditMode] = useState(false);
    const [editedUser, setEditedUser] = useState({ ...user });

    useEffect(() => {
        if (!serviceToken) {
            console.log("로그아웃 성공! 로그인 페이지로 이동");
            navigate("/");  // ✅ 로그아웃 후 로그인 페이지로 이동
        }
    }, [serviceToken, navigate]);

    // ✅ 입력 값 변경 핸들러
    function handleChange(e) {
        setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    }

    // ✅ 수정 모드 활성화
    function enableEditMode() {
        setEditMode(true);
    }

    // ✅ 수정된 정보를 저장
    function saveChanges() {
        // dispatch(updateUserInfo(editedUser)); // Redux 상태 업데이트
        const name = editedUser.name;
        const id = editedUser.id;
        const email = editedUser.email;
        const password = editedUser.password;
        console.log("디버깅 포인트 : pages");
        dispatch(editProfileRequest(name, id, email, password));
        setEditMode(false);
    }

    // ✅ 로그아웃 처리
    function logoutHandle() {
        dispatch(logout());
    }

    function deleteAccount(){
        const email = editedUser.email;
        console.log(email);
        const params = {
            email: email
        }
        try {
            axios.post("http://localhost:8888/api/userDelete", params);
            dispatch(logout()); 
        } catch (error) {
            
        }
    }

    return (
        <div className="profile-container">
            <h1>회원 정보</h1>
            <div className="profile-box">
                <div className="profile-image">
                    <img src={profileImage} alt="프로필 이미지" />
                    {editMode && <button className="edit-photo">사진 변경</button>}
                </div>

                <div className="profile-info">
                    <label>아이디</label>
                    <input 
                        name="id"
                        value={editedUser.id}
                        onChange={handleChange}
                        disabled={!editMode}
                    />
                    <label>이름</label>
                    <input 
                        name="name"
                        value={editedUser.name}
                        onChange={handleChange}
                        disabled={!editMode}
                    />

                    <label>비밀번호</label>
                    <input 
                        name="password"
                        value={editedUser.password}
                        onChange={handleChange}
                        disabled={!editMode}
                    />

                    <label>이메일</label>
                    <input 
                        name="email"
                        value={editedUser.email}
                        onChange={handleChange}
                        disabled={true}
                    />
                </div>
            </div>

            <div className="button-group">
                {!editMode ? (
                    <button className="edit-btn" onClick={enableEditMode}>수정</button>
                ) : (
                    <button className="save-btn" onClick={saveChanges}>저장</button>
                )}
                <button className="logout-btn" onClick={logoutHandle}>로그아웃</button>
                <button className="logout-btn" onClick={deleteAccount}>회원탈퇴</button>
            </div>
        </div>
    );
};

export default Pages;
