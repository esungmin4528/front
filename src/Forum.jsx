import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Community.css'; // 사이드바, 테이블 기본 스타일 재사용
import './Forum.css'; // 포럼 전용 스타일 (브랜드 그리드 등)

export default function Forum() {
    // 1. 현재 선택된 카메라 브랜드 상태 관리 (기본값: Canon)
    const [activeBrand, setActiveBrand] = useState('Canon');

    // 브랜드 목록 배열
    const brands = [
        'Canon', 'Sony', 'Nikon', 'Leica', 'Film',
        'Fujifilm', 'Hasselblad', 'Olympus', 'Panasonic', '기타(etc)'
    ];

    // 🔥 더미데이터를 삭제하여 빈 배열로 만듭니다. 나중에 백엔드 데이터를 넣을 공간.
    const boardList = [];

    return (
        <div className="community-container">
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
                    <Link to="/community">community ⌄</Link>
                    <Link to="/gallery">gallery ⌄</Link>
                    {/* 현재 화면이 포럼이므로 초록색 강조 */}
                    <Link to="/forum" style={{ color: '#66cdaa', fontWeight: 'bold' }}>forum</Link>
                </nav>
                <div className="nav-buttons">
                    <Link to="/login"><button className="login-btn">my page</button></Link>
                    <Link to="/signup"><button className="start-btn">Get started →</button></Link>
                </div>
            </header>

            {/* 2. 메인 포럼 영역 (좌/우 분할) */}
            <div className="comm-content">

                {/* 왼쪽: 게시판 메인 영역 */}
                <main className="comm-main">

                    {/* 카메라 브랜드 그리드 버튼 */}
                    <div className="brand-grid-wrapper">
                        <div className="brand-grid">
                            {brands.map((brand) => (
                                <button
                                    key={brand}
                                    className={`brand-btn ${activeBrand === brand ? 'active' : ''}`}
                                    onClick={() => setActiveBrand(brand)}
                                >
                                    {brand}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 게시판 상단 헤더 (현재 브랜드 이름 & 검색) */}
                    <div className="forum-table-header">
                        {/* 🔥 브랜드명 옆의 화살표 ⌄ 를 삭제했습니다. */}
                        <div className="current-brand-title">
                            📷 {activeBrand}
                        </div>

                        <div className="comm-sub-filter" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
                            <select className="filter-select">
                                <option>제목</option>
                            </select>
                            <input type="text" className="filter-input" placeholder="검색어를 입력해주세요" />
                        </div>
                    </div>

                    {/* 게시글 테이블 */}
                    <table className="comm-table forum-table">
                        <thead>
                        <tr>
                            <th width="10%">번호</th>
                            <th width="50%">제목</th>
                            <th width="15%">작성자</th>
                            <th width="15%">작성일</th>
                            <th width="10%">조회수</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* 🔥 게시글이 없을 때 보여주는 화면 (colSpan="5"로 테이블 전체를 차지) */}
                        {boardList.length === 0 ? (
                            <tr>
                                <td colSpan="5" style={{ padding: '60px 0', color: '#999', textAlign: 'center' }}>
                                    아직 작성된 게시글이 없습니다.
                                </td>
                            </tr>
                        ) : (
                            // 게시글이 있을 때 렌더링 (현재는 비어있음)
                            boardList.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td className="title-cell">{row.title}</td>
                                    <td>{row.author}</td>
                                    <td>{row.date}</td>
                                    <td>{row.views}</td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </main>

                {/* 오른쪽: 사이드바 영역 */}
                <aside className="comm-sidebar">
                    {/* 🔥 로그인 안되어있는 상태로 변경 (커뮤니티창처럼) */}
                    <div className="sidebar-box profile-box">
                        <div className="profile-info">
                            <div className="profile-avatar">👤</div>
                            <div className="profile-name">로그인 해주세요</div>
                        </div>
                        {/* 로그인 안했으니 로그인 화면으로 이동하는 버튼 */}
                        <Link to="/login" style={{textDecoration: 'none'}}>
                            <button className="write-btn">로그인 하러 가기</button>
                        </Link>
                    </div>

                    {/* 실시간 인기 포럼 */}
                    <div className="sidebar-box popular-box">
                        <h4>실시간 인기 포럼</h4>
                        <hr className="dashed-line" />
                        <div className="popular-content">
                            {/* 인기글 리스트 자리 */}
                        </div>
                    </div>

                    {/* 사이드바 하단 태그 검색 */}
                    <div className="sidebar-tag-search">
                        <span className="search-icon">🔍 태그 검색</span>
                        <span className="view-all">전체보기 ≡</span>
                    </div>
                </aside>

            </div>
        </div>
    );
}