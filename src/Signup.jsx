import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Auth.css';

export default function Signup() {
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

            {/* 회원가입 폼 영역 */}
            <div className="auth-wrapper">
                <h1 className="auth-title">회원가입</h1>
                <p className="auth-subtitle" style={{marginBottom: '20px'}}></p> {/* 간격 맞추기용 */}

                <div className="social-login">
                    <button className="social-btn btn-google">G</button>
                    <button className="social-btn btn-apple"></button>
                    <button className="social-btn btn-naver">N</button>
                    <button className="social-btn btn-kakao">TALK</button>
                </div>

                <div className="divider">또는</div>

                <form className="auth-form">
                    <div className="input-group">
                        <label>아이디 <span>*</span></label>
                        <div className="input-with-btn">
                            <input type="text" className="auth-input" placeholder="아이디를 입력해주세요" />
                            <button type="button" className="side-btn">중복확인</button>
                        </div>
                    </div>

                    <div className="input-group">
                        <label>비밀번호 <span>*</span></label>
                        <input type="password" className="auth-input" placeholder="비밀번호를 입력해주세요" />
                    </div>

                    <div className="input-group">
                        <label>비밀번호 확인 <span>*</span></label>
                        <input type="password" className="auth-input" placeholder="비밀번호를 다시 한번 입력해주세요" />
                    </div>

                    <div className="input-group">
                        <label>이름 <span>*</span></label>
                        <input type="text" className="auth-input" placeholder="이름을 입력해주세요" />
                    </div>

                    <div className="input-group">
                        <label>전화번호 <span>*</span></label>
                        <div className="input-with-btn">
                            <input type="text" className="auth-input" placeholder="전화번호를 인증해주세요" />
                            <button type="button" className="side-btn">인증하기</button>
                        </div>
                    </div>

                    <div className="auth-options" style={{marginTop: '10px'}}>
                        <label>
                            <input type="checkbox" /> 기억하기
                        </label>
                        <a href="#">비밀번호를 잊으셨나요?</a>
                    </div>

                    <button type="submit" className="submit-btn">회원가입</button>
                </form>

                <div className="auth-footer">
                    <div>이미 계정이 있으신가요? <Link to="/login">로그인하기</Link></div>
                </div>
            </div>
        </div>
    );
}