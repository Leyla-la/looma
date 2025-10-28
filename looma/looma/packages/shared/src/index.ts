// ===========================
// USER & AUTH TYPES
// ===========================

export interface User {
  id: string;
  email: string;
  name: string | null;
  credits: number;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  access_token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name?: string;
}

// This file exports all shared types, interfaces, and validation schemas.