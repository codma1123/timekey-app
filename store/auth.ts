import { delay } from "@/lib/delay";
import { AuthActions, AuthState, SignInform, SignUpForm, User } from "@/store/auth/type";
import axios, { AxiosResponse } from "axios";
import { omit } from "lodash";
import { create, useStore } from "zustand";

const initial = {
  isAuthenticate: false,
  user: null,
  id: null,
};

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  ...initial,

  signUp: async (form) => {
    try {
      await delay(2000);

      const response = await axios.post<Omit<SignUpForm, "confirmPassword">>(
        /** "http://192.168.1.17:8080/users/signup" */
        "",
        omit(form, ["confirmPassword"]),
        { headers: { "Content-Type": "application/json" } }
      );
    } catch (e) {
    } finally {
    }
  },

  signIn: async (form) => {
    try {
      await delay(2000);
      const response = await axios.post<SignInform, AxiosResponse<User>>("", form, {});
      set({ isAuthenticate: true, user: response.data });
    } catch (e) {
    } finally {
    }
  },

  signOut: () => {
    set({ isAuthenticate: false, user: null });
  },

  setId: (id: string | number) => {
    set({ id });
  },
}));
