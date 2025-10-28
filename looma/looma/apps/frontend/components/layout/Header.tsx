'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, User, LogIn, UserPlus } from 'lucide-react';
import { useAuthStore } from '@/store/auth';

export function Header() {
  const pathname = usePathname();
  const { user, isAuthenticated } = useAuthStore();

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[var(--ghibli-gray)] bg-[var(--card-bg)]/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Sparkles className="w-6 h-6 text-[var(--ghibli-lavender)] group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-bold bg-gradient-to-r from-[var(--ghibli-mint)] to-[var(--ghibli-sky)] 
            bg-clip-text text-transparent">
            Looma
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-[var(--ghibli-mint)] ${
              pathname === '/' ? 'text-[var(--ghibli-forest)]' : 'text-[var(--ghibli-dark)]'
            }`}
          >
            Home
          </Link>
          <Link
            href="/generate"
            className={`text-sm font-medium transition-colors hover:text-[var(--ghibli-mint)] ${
              pathname === '/generate' ? 'text-[var(--ghibli-forest)]' : 'text-[var(--ghibli-dark)]'
            }`}
          >
            Generate
          </Link>
          <Link
            href="/gallery"
            className={`text-sm font-medium transition-colors hover:text-[var(--ghibli-mint)] ${
              pathname === '/gallery' ? 'text-[var(--ghibli-forest)]' : 'text-[var(--ghibli-dark)]'
            }`}
          >
            Gallery
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          {isAuthenticated && user ? (
            <>
              {/* Credits Display */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full 
                bg-gradient-to-r from-[var(--ghibli-peach)] to-[var(--ghibli-pink)] text-white text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                {user.credits}
              </div>

              {/* Profile Link */}
              <Link
                href="/profile"
                className="flex items-center gap-2 px-4 py-2 rounded-full
                  bg-gradient-to-r from-[var(--ghibli-mint)] to-[var(--ghibli-sky)]
                  text-white font-medium text-sm
                  hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {user.name || 'Profile'}
                </span>
              </Link>
            </>
          ) : (
            <>
              {/* Login Button */}
              <Link
                href="/login"
                className="flex items-center gap-2 px-4 py-2 rounded-full
                  text-[var(--ghibli-forest)] font-medium text-sm
                  hover:bg-[var(--ghibli-gray)] transition-all"
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Sign In</span>
              </Link>

              {/* Register Button */}
              <Link
                href="/register"
                className="flex items-center gap-2 px-4 py-2 rounded-full
                  bg-gradient-to-r from-[var(--ghibli-mint)] to-[var(--ghibli-sky)]
                  text-white font-medium text-sm
                  hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                <UserPlus className="w-4 h-4" />
                <span className="hidden sm:inline">Sign Up</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
