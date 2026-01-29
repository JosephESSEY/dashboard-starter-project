/**
 * Authentication Service
 * 
 * Handles all authentication-related API calls.
 * Replace the mock responses with real API calls when backend is ready.
 */

import { apiClient } from '@/lib/api-client'

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  user: {
    id: string
    email: string
    name?: string
  }
  token?: string
}

export interface MeResponse {
  id: string
  email: string
  name?: string
}

class AuthService {
  async login(email: string, password: string): Promise<LoginResponse> {
    try {
      // Uncomment this when backend is ready:
      // return apiClient.post<LoginResponse>('/auth/login', {
      //   email,
      //   password,
      // })

      // Mock implementation
      return {
        user: {
          id: '1',
          email,
          name: email.split('@')[0],
        },
      }
    } catch (error) {
      throw new Error('Login failed')
    }
  }

  async logout(): Promise<void> {
    try {
      // Uncomment this when backend is ready:
      // await apiClient.post('/auth/logout')
    } catch (error) {
      throw new Error('Logout failed')
    }
  }

  async getMe(): Promise<MeResponse> {
    try {
      // Uncomment this when backend is ready:
      // return apiClient.get<MeResponse>('/auth/me')

      // Mock implementation
      return {
        id: '1',
        email: 'user@example.com',
        name: 'User',
      }
    } catch (error) {
      throw new Error('Failed to fetch user data')
    }
  }

  async refreshToken(): Promise<{ token: string }> {
    try {
      // Uncomment this when backend is ready:
      // return apiClient.post<{ token: string }>('/auth/refresh')

      // Mock implementation
      return {
        token: 'mock-token',
      }
    } catch (error) {
      throw new Error('Failed to refresh token')
    }
  }
}

export const authService = new AuthService()
