import api from './axiosInstance';

export interface LoginData {
  username: string
  password: string
}

export interface AuthResponse {
  token: string
}

export const authApi = {
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/login', data)
    return response.data
  }
}

