export interface AuthResponse {
  access_token: string,
  expires_in: number,
  token_type: string
}

export interface LoginDTO {
  email: string,
  password: string
}

export interface RegisterDTO {
  name: string,
  email: string,
  password: string,
  password_confirmation: string
}
