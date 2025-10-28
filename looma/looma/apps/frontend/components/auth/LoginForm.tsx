'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Loader2, Sparkles } from 'lucide-react';
import { authApi, userApi } from '@/lib/api';
import { useAuthStore } from '@/store/auth';
import Link from 'next/link';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();
  const { setAuth } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      setError(null);

      // Login and get token
      const authResponse = await authApi.login(data);
      
      // Get user profile
      const tempToken = authResponse.access_token;
      // Temporarily set token for the profile request
      const apiClient = (await import('@/lib/api')).apiClient;
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${tempToken}`;
      
      const user = await userApi.getProfile();
      
      // Save to store
      setAuth(user, tempToken);

      // Redirect to profile
      router.push('/profile');
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="ghibli-card p-8 animate-fade-in">
        {/* Header with floating sparkle */}
        <div className="text-center mb-8">
          <div className="inline-block animate-float mb-4">
            <Sparkles className="w-12 h-12 text-[var(--ghibli-lavender)]" />
          </div>
          <h1 className="text-3xl font-bold text-[var(--ghibli-charcoal)] mb-2">
            Welcome Back
          </h1>
          <p className="text-[var(--ghibli-dark)] opacity-70">
            Sign in to continue your creative journey
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50 border-2 border-red-200 text-red-600 text-sm animate-fade-in">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[var(--ghibli-dark)]">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--ghibli-forest)] opacity-50" />
              <input
                type="email"
                {...register('email')}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-[var(--ghibli-gray)] 
                  focus:border-[var(--ghibli-mint)] focus:outline-none transition-all
                  bg-white text-[var(--ghibli-charcoal)] placeholder-gray-400"
                placeholder="your@email.com"
                disabled={isLoading}
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500 ml-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[var(--ghibli-dark)]">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--ghibli-forest)] opacity-50" />
              <input
                type="password"
                {...register('password')}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-[var(--ghibli-gray)] 
                  focus:border-[var(--ghibli-mint)] focus:outline-none transition-all
                  bg-white text-[var(--ghibli-charcoal)] placeholder-gray-400"
                placeholder="••••••••"
                disabled={isLoading}
              />
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 ml-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-6 rounded-2xl font-medium text-white
              bg-gradient-to-r from-[var(--ghibli-mint)] to-[var(--ghibli-sky)]
              hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200
              disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
              flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-[var(--ghibli-dark)] opacity-70">
          Don't have an account?{' '}
          <Link
            href="/register"
            className="font-medium text-[var(--ghibli-forest)] hover:text-[var(--ghibli-mint)] transition-colors"
          >
            Create one
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="mt-8 text-center">
        <p className="text-xs text-[var(--ghibli-dark)] opacity-50">
          ✨ Powered by imagination ✨
        </p>
      </div>
    </div>
  );
}
