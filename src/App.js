import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Community from './Community';
import WritePost from './WritePost';
import Gallery from './Gallery';
import GalleryWrite from './GalleryWrite';
import Forum from './Forum';
import ForumWrite from './ForumWrite';
import Study from './Study';
import StudyStep from './StudyStep';
import StudyMission from './StudyMission'; // 🔥 방금 만든 사진제출형 학습 추가!

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/community" element={<Community />} />
                <Route path="/community/write" element={<WritePost />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/gallery/write" element={<GalleryWrite />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/forum/write" element={<ForumWrite />} />
                <Route path="/study" element={<Study />} />
                <Route path="/study/step" element={<StudyStep />} />
                <Route path="/study/mission" element={<StudyMission />} /> {/* 🔥 주소 연결! */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;