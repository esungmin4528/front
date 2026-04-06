import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Gallery.css';

export default function Gallery() {
    const galleryItems = [
        { id: 1, src: 'https://picsum.photos/400/600?random=1', title: 'Hong Kong' },
        { id: 2, src: 'https://picsum.photos/400/400?random=2', title: '' },
        { id: 3, src: 'https://picsum.photos/400/700?random=3', title: '' },
        { id: 4, src: 'https://picsum.photos/400/500?random=4', title: 'nature' },
        { id: 5, src: 'https://picsum.photos/400/800?random=5', title: '' },
        { id: 6, src: 'https://picsum.photos/400/450?random=6', title: '' },
        { id: 7, src: 'https://picsum.photos/400/550?random=7', title: '' },
        { id: 8, src: 'https://picsum.photos/400/650?random=8', title: '' },
    ];

    return (
        <div className="gallery-container">
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
                    <Link to="/gallery" style={{ color: '#66cdaa', fontWeight: 'bold' }}>gallery ⌄</Link>
                    {/* 🔥 갤러리 화면에서도 포럼으로 넘어갈 수 있게 링크 추가! */}
                    <Link to="/forum">forum</Link>
                </nav>
                <div className="nav-buttons">
                    <Link to="/login"><button className="login-btn">my page</button></Link>
                    <Link to="/signup"><button className="start-btn">Get started →</button></Link>
                </div>
            </header>

            {/* 2. 갤러리 서브 헤더 */}
            <div className="gallery-sub-header">
                <div className="search-bar-wrapper">
                    <span className="search-icon">🔍</span>
                    <input type="text" placeholder="Search for..." className="gallery-search-input" />
                </div>

                <div className="gallery-actions">
                    <Link to="/gallery/write">
                        <button className="gallery-write-btn">✎ writing</button>
                    </Link>
                    <div className="user-profile-dropdown">
                        <div className="avatar-circle">👤</div>
                        <span className="dropdown-arrow">⌄</span>
                    </div>
                </div>
            </div>

            {/* 3. 메이슨리 갤러리 영역 */}
            <main className="masonry-grid">
                {galleryItems.map((item) => (
                    <div className="masonry-item" key={item.id}>
                        <img src={item.src} alt="gallery thumbnail" className="masonry-img" />
                        <div className="masonry-info">
                            <span className="masonry-title">{item.title}</span>
                            <span className="masonry-more">...</span>
                        </div>
                    </div>
                ))}
            </main>

        </div>
    );
}