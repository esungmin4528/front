// src/shared/api/client.js
import axios from 'axios';

// 공통 API 클라이언트 인스턴스 생성
export const apiClient = axios.create({
    baseURL: 'http://localhost:8080', // 🔥 나중에 실제 백엔드 서버 주소로 변경하세요!
    headers: {
        'Content-Type': 'application/json',
    },
});

// (보너스) 나중에 로그인 토큰이 생기면 알아서 헤더에 넣어주는 인터셉터 (지금은 껍데기만 둡니다)
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});