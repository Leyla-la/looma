'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { LoginForm } from '@/components/auth/LoginForm';
import { CardSkeleton } from '@/components/ui/skeleton';

function LoginContent() {
  const searchParams = useSearchParams();
  const registered = searchParams.get('registered');

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ghibli-style background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--ghibli-sky)] via-[var(--ghibli-cream)] to-[var(--ghibli-mint)] opacity-30" />
      
      {/* Floating cloud decorations */}
      <div className="absolute top-10 left-10 w-32 h-20 bg-white/50 rounded-full blur-xl animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-32 right-20 w-40 h-24 bg-white/40 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-36 h-22 bg-white/45 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 w-full">
        {registered && (
          <div className="max-w-md mx-auto mb-4 p-4 rounded-2xl bg-green-50 border-2 border-green-200 text-green-700 text-sm animate-fade-in text-center">
            ✨ Account created successfully! Please sign in.
          </div>
        )}
        <div className="flex justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center p-4">
        <CardSkeleton />
      </div>
    }>
      <LoginContent />
    </Suspense>
  );
}
