import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './app/Layout';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import MyPage from './pages/user/MyPage';
import Community from './pages/post/Community';
import WritePost from './pages/post/WritePost';
import CommunityDetail from './pages/post/CommunityDetail';
import Gallery from './pages/post/Gallery';
import GalleryWrite from './pages/post/GalleryWrite';
import Forum from './pages/post/Forum';
import ForumWrite from './pages/post/ForumWrite';
import ForumDetail from './pages/post/ForumDetail';
import Study from './pages/mission/Study';
import StudyStep from './pages/mission/StudyStep';
import StudyMission from './pages/mission/StudyMission';

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
                    <Route path="/study/step" element={<StudyStep />} />
                    <Route path="/study/mission" element={<StudyMission />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;