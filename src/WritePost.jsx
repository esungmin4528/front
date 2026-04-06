import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import './WritePost.css';

export default function WritePost() {
    const navigate = useNavigate(); // 뒤로 가기 기능을 위한 훅(Hook)

    // 우측 토글 스위치 상태 관리
    const [toggles, setToggles] = useState({
        comment: true,
        share: true,
        scrap: false,
        source: true
    });

    // 토글 클릭 시 상태 변경하는 함수
    const handleToggle = (key) => {
        setToggles(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="write-container">
            {/* 1. 상단 네비게이션 바 (공통) */}
            <header className="navbar">
                <div className="logo">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span className="logo-icon">🌲</span>
                        <span className="logo-text">LoGrove</span>
                    </Link>
                </div>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/community" style={{ color: '#66cdaa', fontWeight: 'bold' }}>community ⌄</Link>
                    <a href="#">gallery ⌄</a>
                    <a href="#">forum</a>
                </nav>
                <div className="nav-buttons">
                    <Link to="/login"><button className="login-btn">my page</button></Link>
                    <Link to="/signup"><button className="start-btn">Get started →</button></Link>
                </div>
            </header>

            {/* 2. 글쓰기 헤더 (뒤로가기, 제목, 등록 버튼) */}
            <div className="write-header-bar">
                <div className="write-header-left">
                    <button className="back-btn" onClick={() => navigate(-1)}>←</button>
                    <span className="write-header-title">LoGrove 글쓰기</span>
                </div>
                <div className="write-header-right">
                    <span className="temp-save">임시등록 <span className="temp-count">0</span></span>
                    <button className="submit-post-btn">등록</button>
                </div>
            </div>

            {/* 3. 글쓰기 메인 영역 (좌/우 분할) */}
            <div className="write-content">

                {/* 왼쪽: 에디터 영역 */}
                <main className="write-main">
                    {/* 게시판 선택 & 제목 입력 */}
                    <div className="editor-top">
                        <select className="board-select">
                            <option>게시판을 선택해 주세요</option>
                            <option>일상</option>
                            <option>출사</option>
                            <option>자유</option>
                        </select>
                        <input type="text" className="title-input" placeholder="제목을 입력해 주세요" />
                    </div>

                    {/* 에디터 툴바 (디자인) */}
                    <div className="editor-toolbar">
                        <div className="toolbar-icons">
                            <button>🖼️ 사진</button>
                            <button>🎥 동영상</button>
                            <button>🙂 이모티콘</button>
                            <button>🗺️ 장소</button>
                            <button>🔗 링크</button>
                            <button>📊 투표</button>
                        </div>
                        <div className="toolbar-text-options">
                            <select><option>본문</option></select>
                            <select><option>기본서체</option></select>
                            <select><option>15</option></select>
                            <div className="divider-vertical"></div>
                            <button><b>B</b></button>
                            <button><i>I</i></button>
                            <button><u>U</u></button>
                            <button><strike>T</strike></button>
                        </div>
                    </div>

                    {/* 본문 입력 창 */}
                    <textarea className="content-textarea" placeholder="내용을 입력하세요"></textarea>

                    {/* 하단 태그 영역 */}
                    <div className="editor-bottom-tags">
                        <div className="tag-input-wrapper">
                            <span className="tag-count">태그된 주제({1})개</span>
                            <div className="tag-input-row">
                                <input type="text" placeholder="태그 검색" />
                                <span className="dropdown-arrow">⌄</span>
                            </div>
                        </div>
                        <div className="tag-chips-row">
                            <span className="tag-chip">풍경사진 ✕</span>
                            <button className="tag-recommend-btn">태그 추천</button>
                        </div>
                    </div>
                </main>

                {/* 오른쪽: 설정 사이드바 */}
                <aside className="write-sidebar">
                    {/* 공개 설정 박스 */}
                    <div className="setting-box gray-box">
                        <div className="setting-title">공개설정 ⌄</div>
                        <div className="setting-list">
                            <label><input type="radio" name="visibility" /> 멤버공개</label>
                            <label><input type="radio" name="visibility" defaultChecked /> 전체공개</label>
                        </div>
                    </div>

                    {/* 토글 설정 박스 */}
                    <div className="setting-box gray-box">
                        <div className="toggle-row">
                            <span className="toggle-label">댓글달기 허용</span>
                            <label className="switch">
                                <input type="checkbox" checked={toggles.comment} onChange={() => handleToggle('comment')} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="toggle-row">
                            <span className="toggle-label">공유 허용</span>
                            <label className="switch">
                                <input type="checkbox" checked={toggles.share} onChange={() => handleToggle('share')} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="toggle-row">
                            <span className="toggle-label">스크랩 허용</span>
                            <label className="switch">
                                <input type="checkbox" checked={toggles.scrap} onChange={() => handleToggle('scrap')} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="toggle-row">
                            <span className="toggle-label">자동출처 사용</span>
                            <label className="switch">
                                <input type="checkbox" checked={toggles.source} onChange={() => handleToggle('source')} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </aside>

            </div>
        </div>
    );
}