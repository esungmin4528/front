import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Community.css';

export default function Community() {
    const [activeTag, setActiveTag] = useState('인기순위');
    const [boardList, setBoardList] = useState([]);

    const filteredList = activeTag === '인기순위'
        ? boardList
        : boardList.filter(board => board.tag === activeTag);

    const categoryList = ['인기순위', '일상', '자유', '사진', '거래', '유머', '출사'];

    const getTagClass = (tag) => {
        switch(tag) {
            case '일상': return 'tag-green';
            case '출사': return 'tag-blue';
            case '자유': return 'tag-orange';
            case '사진': return 'tag-pink';
            default: return 'tag-default';
        }
    };

    return (
        <div className="community-container">
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
                    <Link to="/community" style={{ color: '#66cdaa', fontWeight: 'bold' }}>community ⌄</Link>
                    <Link to="/gallery">gallery ⌄</Link>
                    {/* 🔥 드디어 커뮤니티 화면에서도 포럼 링크 연결! */}
                    <Link to="/forum">forum</Link>
                </nav>
                <div className="nav-buttons">
                    <Link to="/login"><button className="login-btn">Login</button></Link>
                    <Link to="/signup"><button className="start-btn">Get started →</button></Link>
                </div>
            </header>

            {/* 2. 메인 커뮤니티 영역 (좌/우 분할) */}
            <div className="comm-content">

                {/* 왼쪽: 게시판 메인 영역 */}
                <main className="comm-main">
                    <div className="comm-top-search">
                        <span className="search-icon">🔍 태그 검색</span>
                        <span className="view-all" onClick={() => setActiveTag('인기순위')} style={{cursor: 'pointer'}}>
              전체보기 ≡
            </span>
                    </div>

                    <div className="comm-categories">
                        {categoryList.map((tag) => (
                            <button
                                key={tag}
                                className={`cat-btn ${activeTag === tag ? 'active' : ''}`}
                                onClick={() => setActiveTag(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    <div className="comm-sub-filter">
                        <select className="filter-select">
                            <option>제목</option>
                        </select>
                        <input type="text" className="filter-input" placeholder="검색어를 입력해주세요" />
                    </div>

                    <table className="comm-table">
                        <thead>
                        <tr>
                            <th width="10%">번호</th>
                            <th width="15%">태그</th>
                            <th width="40%">제목</th>
                            <th width="15%">작성자</th>
                            <th width="10%">작성일</th>
                            <th width="10%">조회수</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredList.length > 0 ? (
                            filteredList.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>
                                        {row.tag && <span className={`table-tag ${getTagClass(row.tag)}`}>{row.tag}</span>}
                                    </td>
                                    <td className="title-cell">{row.title}</td>
                                    <td>{row.author}</td>
                                    <td>{row.date}</td>
                                    <td>{row.views}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" style={{ padding: '60px 0', color: '#999', textAlign: 'center' }}>
                                    아직 작성된 게시글이 없습니다.
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </main>

                {/* 오른쪽: 사이드바 영역 */}
                <aside className="comm-sidebar">
                    <div className="sidebar-box profile-box">
                        <div className="profile-info">
                            <div className="profile-avatar">👤</div>
                            <div className="profile-name">로그인 해주세요</div>
                        </div>
                        <Link to="/login" style={{textDecoration: 'none'}}>
                            <button className="write-btn">로그인 하러 가기</button>
                        </Link>
                    </div>

                    <div className="sidebar-box popular-box">
                        <h4>실시간 인기 게시판</h4>
                        <hr className="dashed-line" />
                        <div className="popular-content">
                            {/* 나중에 인기글 리스트가 들어갈 자리 */}
                        </div>
                    </div>
                </aside>

            </div>
        </div>
    );
}//