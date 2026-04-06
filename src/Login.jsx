import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // 상단바 디자인 가져오기
import './Auth.css'; // 로그인/회원가입 디자인 가져오기

export default function Login() {
    return (
        <div className="auth-container">
            {/* 상단 네비게이션 바 */}
            <header className="navbar">
                <div className="logo">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span className="logo-icon">🌲</span>
                        <span className="logo-text">LoGrove</span>
                    </Link>
                </div>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <a href="#">community ⌄</a>
                    <a href="#">gallery ⌄</a>
                    <a href="#">forum</a>
                </nav>
                <div className="nav-buttons">
                    <Link to="/login"><button className="login-btn">Login</button></Link>
                    <Link to="/signup"><button className="start-btn">Get started →</button></Link>
                </div>
            </header>

            {/* 로그인 폼 영역 */}
            <div className="auth-wrapper">
                <h1 className="auth-title">Welcome Back</h1>
                <p className="auth-subtitle">Please log in to continue</p>

                <div className="social-login">
                    <button className="social-btn btn-google">G</button>
                    <button className="social-btn btn-apple"></button>
                    <button className="social-btn btn-naver">N</button>
                    <button className="social-btn btn-kakao">TALK</button>
                </div>

                <div className="divider">또는</div>

                <form className="auth-form">
                    <div className="input-group">
                        <label>아이디 또는 이메일 ID</label>
                        <input type="text" className="auth-input" placeholder="필수 입력" />
                    </div>

                    <div className="input-group">
                        <label>비밀번호</label>
                        <input type="password" className="auth-input" placeholder="필수 입력" />
                    </div>

                    <div className="auth-options">
                        <label>
                            <input type="checkbox" /> 기억하기
                        </label>
                        <a href="#">비밀번호를 잊으셨나요?</a>
                    </div>

                    <button type="submit" className="submit-btn">Log In</button>
                </form>

                <div className="auth-footer">
                    <div>계정이 없으신가요? <Link to="/signup">회원가입하기</Link></div>
                    <div><a href="#">ID/비밀번호찾기</a></div>
                </div>
            </div>
        </div>
    );
}