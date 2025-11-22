export interface AuthField {
  id: string;
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  value: string;
  isRequired?: boolean;
  errorText?: string;
  variant?: 'default' | 'danger';
}

export interface AuthFormType {
  title: string;
  description: string;
  fields: AuthField[];
  buttonText: string;
  onSubmit?: (formData: FormData) => void;
  footerText?: string;
  footerLinkText?: string;
  footerLinkHref?: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  success: true;
  message: string;
  data: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt?: string;
}

export interface LoginResponse {
  success: true;
  message: string;
  data: {
    token: string;
    user: User;
  };
}

export interface GetMyProfileResponse {
  success: true;
  message: string;
  data: {
    profile: User;
    loanStats: {
      borrowed: number;
      late: number;
      returned: number;
      total: number;
    };
    reviewsCount: number;
  };
}

export interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}
