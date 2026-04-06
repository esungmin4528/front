import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './StudyMission.css';

export default function StudyMission() {
    const navigate = useNavigate();

    // 🔥 황금비율의 theme를 'purple'에서 'green'으로 변경했습니다!
    const missions = [
        {
            id: 1,
            title: '3분할',
            level: '레벨 1',
            theme: 'green',
            img: 'https://picsum.photos/400/250?random=1'
        },
        {
            id: 2,
            title: '황금비율',
            level: '레벨 1',
            theme: 'green', // 👈 여기를 바꿨습니다!
            img: 'https://picsum.photos/400/250?random=2'
        },
        {
            id: 3,
            title: '소실점',
            level: '레벨 1',
            theme: 'green',
            img: 'https://picsum.photos/400/250?random=3'
        },
        {
            id: 4,
            title: '야경사진',
            level: '레벨 1',
            theme: 'green',
            img: 'https://picsum.photos/400/250?random=4'
        },
    ];

    return (
        <div className="mission-container">
            {/* 1. 상단 네비게이션 바 */}
            <header className="step-navbar">
                <div className="step-nav-left">
                    <button className="back-arrow-btn" onClick={() => navigate(-1)}>←</button>
                    <div className="nav-divider"></div>

                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="logo-icon">🌲</span>
                        <span className="logo-text">LoGrove</span>
                    </Link>
                    <span className="step-nav-title">사진 제출형 학습</span>
                </div>

                <div className="step-nav-right">
                    <Link to="/login"><button className="login-btn">Login</button></Link>
                    <Link to="/signup"><button className="start-btn">Get started →</button></Link>
                </div>
            </header>

            {/* 2. 메인 콘텐츠 영역 */}
            <main className="step-main-content">

                {/* 왼쪽: 세로선과 추상 도형들 */}
                <aside className="step-sidebar">
                    <div className="graphics-placeholder">
                        {/* 여기에 피그마에서 추출한 왼쪽 도형들 이미지를 넣으세요! */}
                    </div>
                </aside>

                {/* 오른쪽: 미션 카드 그리드 */}
                <section className="mission-grid-section">
                    {missions.map((item) => (
                        <div
                            key={item.id}
                            className={`mission-card ${item.theme === 'purple' ? 'card-purple' : 'card-green'}`}
                        >
                            <div className="mission-card-header">
                                <h3 className="mission-card-title">{item.title}</h3>

                                <div className="mission-card-right">
                                    <div className="mission-card-level">
                                        <span className={`level-dot ${item.theme === 'purple' ? 'dot-purple' : 'dot-green'}`}></span>
                                        {item.level}
                                    </div>
                                    <button className={`mission-action-btn ${item.theme === 'purple' ? 'btn-purple' : 'btn-green'}`}>
                                        시작
                                    </button>
                                </div>
                            </div>

                            <div className="mission-card-image-box">
                                <img src={item.img} alt={item.title} />
                            </div>
                        </div>
                    ))}
                </section>

            </main>
        </div>
    );
}