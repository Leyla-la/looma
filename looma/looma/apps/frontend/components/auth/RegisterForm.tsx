'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, Loader2, Sparkles } from 'lucide-react';
import { authApi } from '@/lib/api';
import Link from 'next/link';

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      setError(null);

      await authApi.register({
        email: data.email,
        password: data.password,
        name: data.name,
      });

      // Redirect to login after successful registration
      router.push('/login?registered=true');
    } catch (err: any) {
      console.error('Registration error:', err);
      setError(err.response?.data?.message || 'Failed to create account. Email may already exist.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="ghibli-card p-8 animate-fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block animate-float mb-4">
            <Sparkles className="w-12 h-12 text-[var(--ghibli-pink)]" />
          </div>
          <h1 className="text-3xl font-bold text-[var(--ghibli-charcoal)] mb-2">
            Join Looma
          </h1>
          <p className="text-[var(--ghibli-dark)] opacity-70">
            Start your creative adventure today
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
          {/* Name field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[var(--ghibli-dark)]">
              Name (Optional)
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--ghibli-forest)] opacity-50" />
              <input
                type="text"
                {...register('name')}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-[var(--ghibli-gray)] 
                  focus:border-[var(--ghibli-pink)] focus:outline-none transition-all
                  bg-white text-[var(--ghibli-charcoal)] placeholder-gray-400"
                placeholder="Your name"
                disabled={isLoading}
              />
            </div>
            {errors.name && (
              <p className="text-sm text-red-500 ml-1">{errors.name.message}</p>
            )}
          </div>

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
                  focus:border-[var(--ghibli-pink)] focus:outline-none transition-all
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
                  focus:border-[var(--ghibli-pink)] focus:outline-none transition-all
                  bg-white text-[var(--ghibli-charcoal)] placeholder-gray-400"
                placeholder="••••••••"
                disabled={isLoading}
              />
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 ml-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[var(--ghibli-dark)]">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--ghibli-forest)] opacity-50" />
              <input
                type="password"
                {...register('confirmPassword')}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-[var(--ghibli-gray)] 
                  focus:border-[var(--ghibli-pink)] focus:outline-none transition-all
                  bg-white text-[var(--ghibli-charcoal)] placeholder-gray-400"
                placeholder="••••••••"
                disabled={isLoading}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 ml-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-6 rounded-2xl font-medium text-white
              bg-gradient-to-r from-[var(--ghibli-pink)] to-[var(--ghibli-lavender)]
              hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200
              disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
              flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Creating account...
              </>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-[var(--ghibli-dark)] opacity-70">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-medium text-[var(--ghibli-forest)] hover:text-[var(--ghibli-mint)] transition-colors"
          >
            Sign in
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="mt-8 text-center">
        <p className="text-xs text-[var(--ghibli-dark)] opacity-50">
          ✨ Begin your magical journey ✨
        </p>
      </div>
    </div>
  );
}
