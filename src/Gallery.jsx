import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Gallery.css';

export default function Gallery() {
    // 🔥 로그인 상태와 유저 이름을 관리할 상태 추가
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    // 🔥 컴포넌트가 렌더링될 때 로컬 스토리지 확인
    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedInStatus);

        if (loggedInStatus) {
            const savedUserString = localStorage.getItem('user_db');
            if (savedUserString) {
                const savedUser = JSON.parse(savedUserString);
                setUserName(savedUser.name);
            }
        }
    }, []);

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

            {/* 2. 갤러리 서브 헤더 */}
            <div className="gallery-sub-header">
                <div className="search-bar-wrapper">
                    <span className="search-icon">🔍</span>
                    <input type="text" placeholder="Search for..." className="gallery-search-input" />
                </div>

                <div className="gallery-actions">
                    {/* 🔥 로그인 여부에 따라 글쓰기 버튼 변경 */}
                    {isLoggedIn ? (
                        <Link to="/gallery/write">
                            <button className="gallery-write-btn">✎ writing</button>
                        </Link>
                    ) : (
                        <Link to="/login" style={{textDecoration: 'none'}}>
                            <button className="gallery-write-btn" style={{ backgroundColor: '#e5e5e5', color: '#666' }}>
                                로그인 하러 가기
                            </button>
                        </Link>
                    )}

                    <div className="user-profile-dropdown">
                        {/* 🔥 로그인 여부에 따라 프로필 이미지 변경 */}
                        {isLoggedIn ? (
                            <div className="avatar-circle" style={{ overflow: 'hidden' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=100&auto=format&fit=crop"
                                    alt="프로필"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    title={`${userName}님의 프로필`} /* 마우스 올리면 이름이 뜨게 설정! */
                                />
                            </div>
                        ) : (
                            <div className="avatar-circle">👤</div>
                        )}
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