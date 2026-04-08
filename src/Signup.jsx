import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import './Auth.css';

export default function Signup() {
    const navigate = useNavigate();

    // 1️⃣ 입력값 상태 관리 (State) - 닉네임과 이메일 추가!
    const [userId, setUserId] = useState('');
    const [nickname, setNickname] = useState(''); // 🔥 닉네임 추가
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [email, setEmail] = useState(''); // 🔥 전화번호 대신 이메일로 변경

    // 에러 메시지와 인증 상태 관리
    const [errorMessage, setErrorMessage] = useState('');
    const [isIdChecked, setIsIdChecked] = useState(false);
    const [isNicknameChecked, setIsNicknameChecked] = useState(false); // 🔥 닉네임 중복확인 상태
    const [isEmailVerified, setIsEmailVerified] = useState(false); // 🔥 이메일 인증 상태

    // 2️⃣ 아이디 중복 확인 가짜 함수
    const handleIdCheck = () => {
        if (!userId) {
            alert('아이디를 먼저 입력해주세요.');
            return;
        }
        alert('사용 가능한 아이디입니다!');
        setIsIdChecked(true);
    };

    // 🔥 닉네임 중복 확인 가짜 함수 추가
    const handleNicknameCheck = () => {
        if (!nickname) {
            alert('닉네임을 먼저 입력해주세요.');
            return;
        }
        alert('사용 가능한 닉네임입니다!');
        setIsNicknameChecked(true);
    };

    // 3️⃣ 이메일 인증 가짜 함수
    const handleEmailVerify = () => {
        if (!email) {
            alert('이메일을 먼저 입력해주세요.');
            return;
        }
        alert('인증이 완료되었습니다!');
        setIsEmailVerified(true);
    };

    // 4️⃣ 회원가입 폼 제출 함수
    const handleSignupSubmit = (e) => {
        e.preventDefault();

        // 깐깐한 유효성 검사!
        if (!userId || !nickname || !name || !password || !passwordConfirm || !email) {
            setErrorMessage('모든 필수 항목(*)을 입력해주세요.');
            return;
        }
        if (!isIdChecked) {
            setErrorMessage('아이디 중복확인을 진행해주세요.');
            return;
        }
        if (!isNicknameChecked) {
            setErrorMessage('닉네임 중복확인을 진행해주세요.');
            return;
        }
        if (!isEmailVerified) {
            setErrorMessage('이메일 인증을 진행해주세요.');
            return;
        }
        if (password.length < 8) {
            setErrorMessage('비밀번호는 8자리 이상이어야 합니다.');
            return;
        }
        if (password !== passwordConfirm) {
            setErrorMessage('비밀번호가 일치하지 않습니다.');
            return;
        }

        // 🔥 로컬 스토리지에 정보 저장 (닉네임, 이메일 포함)
        const newUser = {
            userId: userId,
            nickname: nickname,
            name: name,
            password: password,
            email: email
        };

        localStorage.setItem('user_db', JSON.stringify(newUser));

        setErrorMessage('');
        console.log('가입 데이터 (로컬 DB 저장 완료):', newUser);
        alert(`${name}님, 회원가입이 완료되었습니다! 이제 로그인이 가능합니다.`);

        navigate('/login');
    };

    return (
        <div className="auth-container">
            <div className="auth-wrapper">
                <h1 className="auth-title">회원가입</h1>
                <p className="auth-subtitle" style={{marginBottom: '20px'}}></p>

                {/* 소셜 로그인 버튼들 */}
                <div className="social-login">
                    <button className="social-btn btn-google">G</button>
                    <button className="social-btn btn-apple"></button>
                    <button className="social-btn btn-naver">N</button>
                    <button className="social-btn btn-kakao">TALK</button>
                </div>

                <div className="divider">또는</div>

                {/* 🔥 디자인 순서에 맞춰 폼 영역 재배치! */}
                <form className="auth-form" onSubmit={handleSignupSubmit}>

                    {/* 1. 아이디 */}
                    <div className="input-group">
                        <label>아이디 <span>*</span></label>
                        <div className="input-with-btn">
                            <input
                                type="text"
                                className="auth-input"
                                placeholder="아이디를 입력해주세요"
                                value={userId}
                                onChange={(e) => {
                                    setUserId(e.target.value);
                                    setIsIdChecked(false);
                                }}
                            />
                            <button type="button" className="side-btn" onClick={handleIdCheck}>중복확인</button>
                        </div>
                    </div>

                    {/* 2. 닉네임 (새로 추가!) */}
                    <div className="input-group">
                        <label>닉네임 <span>*</span></label>
                        <div className="input-with-btn">
                            <input
                                type="text"
                                className="auth-input"
                                placeholder="닉네임을 입력해주세요"
                                value={nickname}
                                onChange={(e) => {
                                    setNickname(e.target.value);
                                    setIsNicknameChecked(false);
                                }}
                            />
                            <button type="button" className="side-btn" onClick={handleNicknameCheck}>중복확인</button>
                        </div>
                    </div>

                    {/* 3. 이름 */}
                    <div className="input-group">
                        <label>이름 <span>*</span></label>
                        <input
                            type="text"
                            className="auth-input"
                            placeholder="이름을 입력해주세요"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* 4. 비밀번호 */}
                    <div className="input-group">
                        <label>비밀번호 <span>*</span></label>
                        <input
                            type="password"
                            className="auth-input"
                            placeholder="비밀번호를 입력해주세요"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* 5. 비밀번호 확인 */}
                    <div className="input-group">
                        <label>비밀번호 확인 <span>*</span></label>
                        <input
                            type="password"
                            className="auth-input"
                            placeholder="비밀번호를 다시 한번 입력해주세요"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                    </div>

                    {/* 6. 이메일 (전화번호에서 변경!) */}
                    <div className="input-group">
                        <label>이메일 <span>*</span></label>
                        <div className="input-with-btn">
                            <input
                                type="email"
                                className="auth-input"
                                placeholder="이메일을 입력해주세요"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setIsEmailVerified(false);
                                }}
                            />
                            <button type="button" className="side-btn" onClick={handleEmailVerify}>인증하기</button>
                        </div>
                    </div>


                    {/* 에러 메시지 출력 영역 */}
                    {errorMessage && (
                        <div style={{ color: 'red', fontSize: '13px', marginTop: '10px', textAlign: 'center' }}>
                            {errorMessage}
                        </div>
                    )}

                    <button type="submit" className="submit-btn" style={{marginTop: '15px'}}>회원가입</button>
                </form>

                <div className="auth-footer">
                    <div>이미 계정이 있으신가요? <Link to="/login">로그인하기</Link></div>
                </div>
            </div>
        </div>
    );
}