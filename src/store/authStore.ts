import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface AuthState {
  token: string | null
  isAuthenticated: boolean
}

interface AuthActions {
  setToken: (token: string | null) => void
  logout: () => void
}

type AuthStore = AuthState & AuthActions

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,

      setToken: (token: string | null) => {
        set({
          token: token,
          isAuthenticated: !!token
        })
      },

      logout: () => {
        set({
          token: null,
          isAuthenticated: false
        })
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)






