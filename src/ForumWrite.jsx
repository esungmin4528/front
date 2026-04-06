import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import './WritePost.css'; // 커뮤니티 글쓰기 디자인 완벽 재사용!

export default function ForumWrite() {
    const navigate = useNavigate();

    // 4개의 토글 스위치 상태 관리
    const [toggles, setToggles] = useState({
        comment: true,
        share: true,
        scrap: true,
        source: true
    });

    const handleToggle = (key) => {
        setToggles(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="write-container">
            {/* 1. 상단 네비게이션 바 */}
            <header className="navbar">
                <div className="logo">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span className="logo-icon">🌲</span>
                        <span className="logo-text">LoGrove</span>
                    </Link>
                </div>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/community">community ⌄</Link>
                    <Link to="/gallery">gallery ⌄</Link>
                    {/* 포럼 화면이므로 초록색 강조 */}
                    <Link to="/forum" style={{ color: '#66cdaa', fontWeight: 'bold' }}>forum</Link>
                </nav>
                <div className="nav-buttons">
                    <Link to="/login"><button className="login-btn">my page</button></Link>
                    <Link to="/signup"><button className="start-btn">Get started →</button></Link>
                </div>
            </header>

            {/* 2. 글쓰기 헤더 */}
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

            {/* 3. 메인 영역 */}
            <div className="write-content">

                {/* 왼쪽: 에디터 */}
                <main className="write-main">

                    {/* 🔥 수정된 부분: 게시판과 카메라 종류 드롭다운 나란히 배치 */}
                    <div className="editor-top">
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <select className="board-select" style={{ flex: 1 }}>
                                <option>게시판을 선택해 주세요</option>
                                <option>Q&A (질문/답변)</option>
                                <option>정보공유</option>
                            </select>
                            <select className="board-select" style={{ flex: 1 }}>
                                <option>카메라 종류를 선택해 주세요</option>
                                <option>Canon</option>
                                <option>Sony</option>
                                <option>Lieca</option>
                                <option>Film</option>
                                <option>Fujifilm</option>
                                <option>Hasselblad</option>
                                <option>Olympus</option>ß
                                <option>Panasonic</option>
                                <option>기타(etc)</option>
                            </select>
                        </div>
                        <input type="text" className="title-input" placeholder="제목을 입력해 주세요" />
                    </div>

                    {/* 에디터 툴바 (커뮤니티와 동일하게 복구) */}
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

                    <textarea className="content-textarea" placeholder="내용을 입력하세요"></textarea>

                    {/* 하단 태그 영역 */}
                    <div className="editor-bottom-tags">
                        <div className="tag-input-wrapper">
                            <span className="tag-count">태그된 주제(1)개</span>
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

                    {/* 토글 설정 박스 (4개로 복구) */}
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