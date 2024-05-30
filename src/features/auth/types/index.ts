export interface LoginBody {
  email: string;
  password: string;
  remember: boolean;
}

export interface RegisterBody {
  invitation_token: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface ForgotPasswordBody {
  email: string;
}

export interface ResetPasswordBody {
  token: string;
  password: string;
  password_confirmation: string;
}
