'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  {
    title: 'ComplianceGuard',
    subtitle: 'AI-Powered Legal Assistant',
    description: 'Navigate Tunisia\'s Startup Act and ensure full legal compliance with AI assistance. Generate documents, check compliance, and stay updated with regulatory changes.',
    gradient: 'from-violet-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=800&fit=crop&q=80',
  },
  {
    title: 'TeamBuilder',
    subtitle: 'AI Recruitment Platform',
    description: 'Find, evaluate, and hire the perfect team members with AI-powered CV parsing, smart matching, and salary intelligence for the Tunisian market.',
    gradient: 'from-indigo-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&q=80',
  },
  {
    title: 'Market Analysis',
    subtitle: 'AI Market Intelligence',
    description: 'Get competitive analysis, market positioning strategy, and SWOT insights with multi-agent web scraping to understand your market landscape.',
    gradient: 'from-pink-500 to-rose-600',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80',
  },
  {
    title: 'Green Analysis',
    subtitle: 'Environmental & ESG Platform',
    description: 'Measure your environmental impact, get ESG scores, access green certifications, and unlock sustainable financing opportunities for your startup.',
    gradient: 'from-green-500 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=800&fit=crop&q=80',
  },
  {
    title: 'Tech Agent',
    subtitle: 'AI Technical Advisor',
    description: 'Get expert guidance on tech stack selection, architecture design, product roadmap, cost estimation, and security best practices for your startup.',
    gradient: 'from-blue-500 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&q=80',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative overflow-hidden h-[600px] md:h-[700px]">
      {/* Background Images with Overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          {/* Dark Overlay with Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-80`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 absolute'
                }`}
              >
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold mb-4 text-white border border-white/30">
                  {slide.subtitle}
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white drop-shadow-2xl">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/95 leading-relaxed drop-shadow-lg">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="http://localhost:3000"
                    className="px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all text-center"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    href="/features"
                    className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-full text-lg font-bold hover:bg-white/20 transition-all text-center"
                  >
                    Explore Features
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center transition-all border border-white/30"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center transition-all border border-white/30"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
