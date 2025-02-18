import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Pages from "./pages/pages"; // ✅ 새로운 페이지 추가
import HomePage from "./HomePage/homePage";

function App() {
    return (
        <Router>  {/* ✅ <BrowserRouter>로 감싸기 */}
            <Routes>
                <Route path="/" element={<Login />} />  
                <Route path="/pages/pages" element={<Pages />} />  {/* ✅ 로그인 후 이동할 페이지 */}
                <Route path="/HomePage/homePage" element={<HomePage />} />  
            </Routes>
        </Router>
    );
}

export default App;
