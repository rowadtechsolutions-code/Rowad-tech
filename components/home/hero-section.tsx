'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowDown } from 'lucide-react'

const headlines = [
  'نبتكر الحلول الرقمية',
  'نطوّر تجارب استثنائية',
  'نبني مستقبلك الرقمي',
]

export default function HeroSection() {
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setHeadlineIndex((i) => (i + 1) % headlines.length)
        setAnimating(false)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden hero-pattern"
      dir="rtl"
      style={{
        background: 'linear-gradient(160deg, #f8f9ff 0%, #eef1ff 40%, #f5f0ff 100%)',
      }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none select-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: '#1F3292' }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: '#9F27D6' }}
        />
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1F3292" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8 animate-fade-in-up border border-[#1F3292]/20 bg-white/80 backdrop-blur-sm text-[#1F3292]">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: '#9F27D6' }}
            />
            شريكك في التحول الرقمي
          </div>

          {/* Animated headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-100">
            <span
              className="block transition-all duration-400"
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}
            >
              <span className="brand-gradient-text">{headlines[headlineIndex]}</span>
            </span>
            <span className="block text-foreground mt-1">بخبرة واحترافية عالية</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-in-up delay-200 text-balance">
            رواد للحلول التقنية – نحوّل أفكارك إلى منتجات رقمية متكاملة من تطبيقات ومواقع وأنظمة ذكية مصممة لتحقيق نتائج حقيقية.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              style={{ background: 'linear-gradient(135deg, #1F3292, #9F27D6)' }}
            >
              ابدأ مشروعك الآن
              <ArrowLeft
                size={18}
                className="transition-transform group-hover:-translate-x-1"
              />
            </Link>
            <Link
              href="/works"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border-2 border-[#1F3292]/30 text-[#1F3292] hover:border-[#1F3292] hover:bg-[#1F3292]/5 transition-all duration-200"
            >
              استعرض أعمالنا
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in-up delay-500">
            {[
              { num: '∞', label: 'إمكانيات بلا حدود' },
              { num: '100%', label: 'تركيز على الجودة' },
              { num: '24/7', label: 'شغف بالتطوير' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="text-xl font-bold text-[#1F3292]">{stat.num}</span>
                <span>{stat.label}</span>
                <span className="text-border mx-2 hidden sm:inline">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground animate-bounce">
        <ArrowDown size={20} />
      </div>
    </section>
  )
}
