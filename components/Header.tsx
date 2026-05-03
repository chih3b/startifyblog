'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-gray-200/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Startify Logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Startify Blog
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Features
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Team
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Contact
            </Link>
            <Link
              href="http://localhost:3000"
              className="px-6 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-medium"
            >
              Try Startify
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          <div className="md:hidden py-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-lg">
              Home
            </Link>
            <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-lg">
              Blog
            </Link>
            <Link href="/features" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-lg">
              Features
            </Link>
            <Link href="/team" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-lg">
              Team
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-lg">
              Contact
            </Link>
            <Link
              href="http://localhost:3000"
              className="block mx-4 px-6 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full text-center"
            >
              Try Startify
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
