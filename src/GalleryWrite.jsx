import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import './Gallery.css'; // 서브 헤더(검색창) 스타일 재사용
import './GalleryWrite.css';

export default function GalleryWrite() {
    const navigate = useNavigate();

    // 토글 스위치 상태 관리
    const [toggles, setToggles] = useState({
        comment: false,
        share: false,
    });

    const handleToggle = (key) => {
        setToggles(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="gallery-write-container">
            {/* 1. 상단 네비게이션 바 */}

            {/* 2. 서브 헤더 (검색창, 프로필) */}
            <div className="gallery-sub-header" style={{ marginBottom: '20px' }}>
                <div className="search-bar-wrapper">
                    <span className="search-icon">🔍</span>
                    <input type="text" placeholder="Search for..." className="gallery-search-input" />
                </div>
                <div className="gallery-actions">
                    <div className="user-profile-dropdown">
                        <div className="avatar-circle">👤</div>
                        <span className="dropdown-arrow">⌄</span>
                    </div>
                </div>
            </div>

            {/* 3. 갤러리 글쓰기 메인 박스 */}
            <div className="gw-main-wrapper">
                {/* 상단: 뒤로가기 & 타이틀 */}
                <div className="gw-header">
                    <button className="back-btn" onClick={() => navigate(-1)}>←</button>
                    <span className="gw-title">갤러리 글쓰기</span>
                </div>

                {/* 하단: 좌우 분할 콘텐츠 영역 */}
                <div className="gw-content">

                    {/* 왼쪽: 이미지 업로드 영역 */}
                    <div className="gw-left-upload">
                        <div className="upload-box">
                            <div className="upload-icon">↑</div>
                            <p>파일을 선택하거나<br />여기로 끌어다 놓으세요</p>
                        </div>
                    </div>

                    {/* 오른쪽: 텍스트 및 설정 입력 영역 */}
                    <div className="gw-right-form">

                        <div className="form-group">
                            <label>제목</label>
                            <input type="text" className="gray-input" placeholder="제목추가" />
                        </div>

                        <div className="form-group">
                            <label>설명</label>
                            <textarea className="gray-textarea" placeholder="자세한 설명을 추가하세요"></textarea>
                        </div>

                        <div className="form-group tag-group">
                            <div className="tag-search-box">
                                <span className="search-icon">🔍</span>
                                <input type="text" placeholder="태그 목록 검색" className="tag-search-input" />
                            </div>

                            <div className="gray-box tag-display-box">
                                <span className="tag-count">태그된 주제(0)개</span>
                                <p className="tag-desc">태그 검색</p>
                            </div>

                            <button className="tag-recommend-btn">태그 추천</button>
                        </div>

                        {/* 토글 스위치 영역 */}
                        <div className="form-toggles">
                            <div className="toggle-row">
                                <label className="switch">
                                    <input type="checkbox" checked={toggles.comment} onChange={() => handleToggle('comment')} />
                                    <span className="slider round"></span>
                                </label>
                                <span className="toggle-label">댓글달기 허용</span>
                            </div>
                            <div className="toggle-row">
                                <label className="switch">
                                    <input type="checkbox" checked={toggles.share} onChange={() => handleToggle('share')} />
                                    <span className="slider round"></span>
                                </label>
                                <span className="toggle-label">공유 허용</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}