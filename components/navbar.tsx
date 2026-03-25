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
          ? 'bg-white/80 backdrop-blur-lg shadow-md border-b border-white/20'
          : 'bg-transparent'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 lg:h-24 justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Rowad Technology Solutions"
              width={160}
              height={42}
              priority
              className="h-9 lg:h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 mr-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300"
                >
                  <span
                    className={`${
                      isActive
                        ? 'text-[#1F3292]'
                        : scrolled
                        ? 'text-gray-700 group-hover:text-[#1F3292]'
                        : 'text-gray-900 group-hover:text-[#1F3292]'
                    }`}
                  >
                    {isAr ? link.labelAr : link.labelEn}
                  </span>
                  <span
                    className={`absolute left-3 right-3 bottom-1 h-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#1F3292] to-[#9F27D6] scale-x-100'
                        : 'bg-[#1F3292] scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Desktop Call-to-Action */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-xl text-sm font-semibold text-white 
                         transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 
                         hover:-translate-y-[1px] active:scale-95"
              style={{ background: 'linear-gradient(135deg, #1F3292, #9F27D6)' }}
            >
              {isAr ? 'ابدأ مشروعك' : 'Start Project'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden p-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden origin-top transition-transform duration-300 ease-out transform ${
          menuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        } bg-white/90 backdrop-blur-lg border-t border-white/20`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#1F3292]/10 text-[#1F3292] font-semibold'
                    : 'text-gray-800 hover:bg-gray-100 hover:text-[#1F3292]'
                }`}
              >
                {isAr ? link.labelAr : link.labelEn}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="mt-2 px-5 py-3 rounded-xl text-sm font-semibold text-white text-center 
                       transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-[1px] active:scale-95"
            style={{ background: 'linear-gradient(135deg, #1F3292, #9F27D6)' }}
          >
            {isAr ? 'ابدأ مشروعك' : 'Start Project'}
          </Link>
        </div>
      </div>
    </header>
  )
}