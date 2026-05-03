'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-32 h-20 transition-transform group-hover:scale-105">
              <Image
                src="/nexaura.png"
                alt="Nexaura"
                fill
                sizes="128px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/') 
                  ? 'text-violet-600 bg-violet-50' 
                  : 'text-gray-700 hover:text-violet-600 hover:bg-violet-50/50'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/blog') || pathname?.startsWith('/blog/') 
                  ? 'text-violet-600 bg-violet-50' 
                  : 'text-gray-700 hover:text-violet-600 hover:bg-violet-50/50'
              }`}
            >
              Blog
            </Link>
            <Link 
              href="/features" 
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/features') 
                  ? 'text-violet-600 bg-violet-50' 
                  : 'text-gray-700 hover:text-violet-600 hover:bg-violet-50/50'
              }`}
            >
              Features
            </Link>
            <Link 
              href="/team" 
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/team') 
                  ? 'text-violet-600 bg-violet-50' 
                  : 'text-gray-700 hover:text-violet-600 hover:bg-violet-50/50'
              }`}
            >
              Team
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive('/contact') 
                  ? 'text-violet-600 bg-violet-50' 
                  : 'text-gray-700 hover:text-violet-600 hover:bg-violet-50/50'
              }`}
            >
              Contact
            </Link>
            <div className="ml-4">
              <Link
                href="http://localhost:3000"
                className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all font-semibold inline-flex items-center gap-2"
              >
                Try Nexaura
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-1 border-t border-gray-200/50">
            <Link 
              href="/" 
              className={`block px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/') 
                  ? 'text-violet-600 bg-violet-50' 
                  : 'text-gray-700 hover:bg-violet-50/50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className={`block px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/blog') || pathname?.startsWith('/blog/') 
                  ? 'text-violet-600 bg-violet-50' 
                  : 'text-gray-700 hover:bg-violet-50/50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/features" 
              className={`block px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/features') 
                  ? 'text-violet-600 bg-violet-50' 
                  : 'text-gray-700 hover:bg-violet-50/50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/team" 
              className={`block px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/team') 
                  ? 'text-violet-600 bg-violet-50' 
                  : 'text-gray-700 hover:bg-violet-50/50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </Link>
            <Link 
              href="/contact" 
              className={`block px-4 py-3 rounded-lg transition-all font-medium ${
                isActive('/contact') 
                  ? 'text-violet-600 bg-violet-50' 
                  : 'text-gray-700 hover:bg-violet-50/50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link
                href="http://localhost:3000"
                className="block mx-4 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full text-center font-semibold hover:shadow-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Try Nexaura →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
