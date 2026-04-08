import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './app/Layout';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import MyPage from './MyPage';
import Community from './Community';
import WritePost from './WritePost';
import CommunityDetail from './CommunityDetail';
import Gallery from './Gallery';
import GalleryWrite from './GalleryWrite';
import Forum from './Forum';
import ForumWrite from './ForumWrite';
import ForumDetail from './ForumDetail'; // 🔥 방금 만든 포럼 상세페이지 임포트!
import Study from './Study';
import StudyStep from './StudyStep';
import StudyMission from './StudyMission';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 🟢 [Layout 안쪽] 기본 공통 헤더가 나오는 페이지들 */}
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/mypage" element={<MyPage />} />

                    {/* 커뮤니티 관련 라우트 */}
                    <Route path="/community" element={<Community />} />
                    <Route path="/community/write" element={<WritePost />} />
                    <Route path="/community/:id" element={<CommunityDetail />} />

                    {/* 갤러리 관련 라우트 */}
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/gallery/write" element={<GalleryWrite />} />

                    {/* 포럼 관련 라우트 */}
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/forum/write" element={<ForumWrite />} />
                    {/* 🔥 여기에 포럼 게시글 상세 페이지 라우트 추가! */}
                    <Route path="/forum/:id" element={<ForumDetail />} />

                    {/* 학습 관련 라우트 */}
                    <Route path="/study" element={<Study />} />
                </Route>

                {/* 🔴 [Layout 바깥쪽] 자체 전용 헤더를 쓰는 페이지들 (이중창 방지!) */}
                <Route path="/study/step" element={<StudyStep />} />
                <Route path="/study/mission" element={<StudyMission />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;