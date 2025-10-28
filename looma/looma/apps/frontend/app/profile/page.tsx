'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Mail, Coins, Calendar, LogOut, Loader2 } from 'lucide-react';
import { useAuthStore } from '@/store/auth';
import { userApi } from '@/lib/api';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProfilePage() {
  const router = useRouter();
  const { user, token, isAuthenticated, logout, updateUser } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      if (!isAuthenticated || !token) {
        router.push('/login');
        return;
      }

      try {
        // Refresh user data from backend
        const userData = await userApi.getProfile();
        updateUser(userData);
      } catch (error) {
        console.error('Failed to load profile:', error);
        // Token might be expired
        logout();
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, [isAuthenticated, token, router, logout, updateUser]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--ghibli-sky)] via-[var(--ghibli-cream)] to-[var(--ghibli-peach)] opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="ghibli-card p-8 space-y-6">
            <Skeleton className="h-12 w-48" />
            <div className="space-y-4">
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      {/* Ghibli-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--ghibli-sky)] via-[var(--ghibli-cream)] to-[var(--ghibli-peach)] opacity-30" />
      
      {/* Floating decorations */}
      <div className="absolute top-10 right-10 w-32 h-20 bg-white/50 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 left-10 w-40 h-24 bg-white/40 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--ghibli-charcoal)] mb-2">
            Your Profile
          </h1>
          <p className="text-[var(--ghibli-dark)] opacity-70">
            Manage your account and creative journey
          </p>
        </div>

        {/* Profile Card */}
        <div className="ghibli-card p-8 mb-6">
          {/* Avatar and Name */}
          <div className="flex items-center gap-6 mb-8 pb-8 border-b-2 border-[var(--ghibli-gray)]">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--ghibli-mint)] to-[var(--ghibli-sky)] 
              flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              {user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--ghibli-charcoal)] mb-1">
                {user.name || 'Creative Explorer'}
              </h2>
              <p className="text-[var(--ghibli-dark)] opacity-70">
                Member since {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Email */}
            <div className="p-4 rounded-2xl bg-[var(--ghibli-cream)] border-2 border-[var(--ghibli-gray)]">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-[var(--ghibli-forest)]" />
                <span className="font-medium text-[var(--ghibli-dark)]">Email</span>
              </div>
              <p className="text-[var(--ghibli-charcoal)] ml-8">{user.email}</p>
            </div>

            {/* Credits */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--ghibli-peach)] to-[var(--ghibli-pink)] 
              border-2 border-[var(--ghibli-peach)]">
              <div className="flex items-center gap-3 mb-2">
                <Coins className="w-5 h-5 text-white" />
                <span className="font-medium text-white">Credits</span>
              </div>
              <p className="text-2xl font-bold text-white ml-8">{user.credits}</p>
            </div>

            {/* User ID */}
            <div className="p-4 rounded-2xl bg-[var(--ghibli-cream)] border-2 border-[var(--ghibli-gray)]">
              <div className="flex items-center gap-3 mb-2">
                <User className="w-5 h-5 text-[var(--ghibli-forest)]" />
                <span className="font-medium text-[var(--ghibli-dark)]">User ID</span>
              </div>
              <p className="text-xs text-[var(--ghibli-charcoal)] ml-8 font-mono">{user.id}</p>
            </div>

            {/* Last Updated */}
            <div className="p-4 rounded-2xl bg-[var(--ghibli-cream)] border-2 border-[var(--ghibli-gray)]">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-[var(--ghibli-forest)]" />
                <span className="font-medium text-[var(--ghibli-dark)]">Last Updated</span>
              </div>
              <p className="text-[var(--ghibli-charcoal)] ml-8">
                {new Date(user.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full py-3 px-6 rounded-2xl font-medium text-white
              bg-gradient-to-r from-red-400 to-red-500
              hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200
              flex items-center justify-center gap-2"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="ghibli-card p-6 text-center">
            <div className="text-3xl font-bold text-[var(--ghibli-mint)] mb-2">0</div>
            <div className="text-sm text-[var(--ghibli-dark)] opacity-70">Generations</div>
          </div>
          <div className="ghibli-card p-6 text-center">
            <div className="text-3xl font-bold text-[var(--ghibli-lavender)] mb-2">0</div>
            <div className="text-sm text-[var(--ghibli-dark)] opacity-70">Favorites</div>
          </div>
          <div className="ghibli-card p-6 text-center">
            <div className="text-3xl font-bold text-[var(--ghibli-peach)] mb-2">0</div>
            <div className="text-sm text-[var(--ghibli-dark)] opacity-70">Followers</div>
          </div>
        </div>
      </div>
    </div>
  );
}
