// src/features/auth/api/authApi.js
import { apiClient } from '../../../shared/api/client';

// 1. 회원가입 API (POST /api/users)
export const signupAPI = async (userData) => {
    // 백엔드 명세서에 맞게 POST 요청을 보냅니다.
    const response = await apiClient.post('/api/users', userData);
    return response.data;
};

// 2. 로그인 API (POST /api/auth/login)
export const loginAPI = async (credentials) => {
    const response = await apiClient.post('/api/auth/login', credentials);
    return response.data;
};