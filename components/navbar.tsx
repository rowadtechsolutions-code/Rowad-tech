'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', labelAr: 'الرئيسية', labelEn: 'Home' },
  { href: '/about', labelAr: 'من نحن', labelEn: 'About' },
  { href: '/services', labelAr: 'خدماتنا', labelEn: 'Services' },
  { href: '/method', labelAr: 'منهجية العمل', labelEn: 'Work Method' },
  { href: '/works', labelAr: 'أعمالنا', labelEn: 'Our Works' },
  { href: '/contact', labelAr: 'اتصل بنا', labelEn: 'Contact' },
]

export default function Navbar({ lang = 'ar' }: { lang?: 'ar' | 'en' }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isAr = lang === 'ar'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 navbar-blur shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 👇 التعديل هنا */}
        <div className="flex items-center h-16 lg:h-20 gap-6">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Rowad Technology Solutions"
              width={160}
              height={42}
              priority
              className="h-9 lg:h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 mr-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors hover-underline ${
                    isActive
                      ? 'text-[#1F3292]'
                      : scrolled
                      ? 'text-foreground/80 hover:text-[#1F3292]'
                      : 'text-foreground/90 hover:text-[#1F3292]'
                  }`}
                >
                  {isAr ? link.labelAr : link.labelEn}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-[#1F3292] to-[#9F27D6]" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: 'linear-gradient(135deg, #1F3292, #9F27D6)' }}
            >
              {isAr ? 'ابدأ مشروعك' : 'Start Project'}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mobile-menu bg-white/98 navbar-blur border-t border-border ${
          menuOpen ? 'open' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary/5 text-[#1F3292] font-semibold'
                    : 'text-foreground/80 hover:bg-muted hover:text-[#1F3292]'
                }`}
              >
                {isAr ? link.labelAr : link.labelEn}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="mt-2 mb-1 px-5 py-3 rounded-lg text-sm font-semibold text-white text-center"
            style={{ background: 'linear-gradient(135deg, #1F3292, #9F27D6)' }}
          >
            {isAr ? 'ابدأ مشروعك' : 'Start Project'}
          </Link>
        </div>
      </div>
    </header>
  )
}