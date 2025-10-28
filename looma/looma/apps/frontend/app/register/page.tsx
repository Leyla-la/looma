'use client';

import { RegisterForm } from '@/components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ghibli-style background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--ghibli-pink)] via-[var(--ghibli-cream)] to-[var(--ghibli-lavender)] opacity-30" />
      
      {/* Floating decorations */}
      <div className="absolute top-20 right-10 w-32 h-20 bg-white/50 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-20 w-40 h-24 bg-white/40 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 right-1/4 w-36 h-22 bg-white/45 rounded-full blur-xl animate-float" style={{ animationDelay: '2.5s' }} />

      {/* Content */}
      <div className="relative z-10 w-full flex justify-center">
        <RegisterForm />
      </div>
    </div>
  );
}
