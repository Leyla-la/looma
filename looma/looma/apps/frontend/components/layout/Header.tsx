'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, User, LogIn, UserPlus } from 'lucide-react';
import { useAuthStore } from '@/store/auth';

export function Header() {
  const pathname = usePathname();
  const { user, isAuthenticated } = useAuthStore();

  return (
  <header className="fixed top-0 left-0 right-0 z-50 w-full border-b-2 border-(--ghibli-gray) bg-white/90 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Sparkles className="w-6 h-6 text-(--ghibli-lavender) group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-bold bg-linear-to-r from-(--ghibli-mint) to-(--ghibli-sky) 
            bg-clip-text text-transparent">
            Looma
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-(--ghibli-mint) ${
              pathname === '/' ? 'text-(--ghibli-forest)' : 'text-(--ghibli-dark)'
            }`}
          >
            Home
          </Link>
          <Link
            href="/generate"
            className={`text-sm font-medium transition-colors hover:text-(--ghibli-mint) ${
              pathname === '/generate' ? 'text-(--ghibli-forest)' : 'text-(--ghibli-dark)'
            }`}
          >
            Generate
          </Link>
          <Link
            href="/gallery"
            className={`text-sm font-medium transition-colors hover:text-(--ghibli-mint) ${
              pathname === '/gallery' ? 'text-(--ghibli-forest)' : 'text-(--ghibli-dark)'
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
                bg-linear-to-r from-(--ghibli-peach) to-(--ghibli-pink) text-white text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                {user.credits}
              </div>

              {/* Profile Link */}
              <Link
                href="/profile"
                className="flex items-center gap-2 px-4 py-2 rounded-full
                  bg-linear-to-r from-(--ghibli-mint) to-(--ghibli-sky)
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
                  text-(--ghibli-forest) font-medium text-sm
                  hover:bg-(--ghibli-gray) transition-all"
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Sign In</span>
              </Link>

              {/* Register Button */}
              <Link
                href="/register"
                className="flex items-center gap-2 px-4 py-2 rounded-full
                  bg-linear-to-r from-(--ghibli-mint) to-(--ghibli-sky)
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
