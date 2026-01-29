import { create } from 'zustand'

export interface User {
  id: string
  email: string
  name?: string
}

interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    set({ isLoading: true })
    try {
      // Replace with actual API call to backend
      // const response = await api.post('/auth/login', { email, password })
      // const { user, token } = response.data

      // Simulated login - remove this when integrating real API
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
      }

      set({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
      })
    } catch (error) {
      set({ isLoading: false })
      throw error
    }
  },

  logout: async () => {
    set({ isLoading: true })
    try {
      // Replace with actual API call to backend
      // await api.post('/auth/logout')

      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      })
    } catch (error) {
      set({ isLoading: false })
      throw error
    }
  },

  checkAuth: async () => {
    set({ isLoading: true })
    try {
      // Replace with actual API call to verify session
      // const response = await api.get('/auth/me')
      // set({ user: response.data, isAuthenticated: true })

      set({ isLoading: false })
    } catch {
      set({ isAuthenticated: false, isLoading: false })
    }
  },
}))
