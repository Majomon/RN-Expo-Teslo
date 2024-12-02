import { User } from "@/core/auth/interfaces/user";
import { create } from "zustand";

export type AuthStatus = "authenticated" | "unauthenticated" | "checking";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  login: (email: string, password: string) => Promise<boolean>;
  chekcStatus: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set) => ({
  //Properties
  status: "checking",
  token: undefined,
  user: undefined,

  // Actions
  login: async (email, password) => {
    return true;
  },
  chekcStatus: async () => {},
  logout: async () => {},
}));
