export interface SignUpForm {
  name?: string;
  phoneNumber?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface SignInform {
  email?: string;
  password?: string;
}

export type AuthState = {
  isAuthenticate: boolean;
  user: any;
  id: string | number;
};

export type User = {};

export type AuthActions = {
  signUp: (form: SignUpForm) => Promise<void>;
  signIn: (form: SignInform) => Promise<void>;
  signOut: () => void;
  setId: (id: number | string) => void;
};
