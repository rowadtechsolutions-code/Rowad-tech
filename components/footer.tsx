import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react'

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rowad.information.tech/',
    icon: Instagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61588453614906',
    icon: Facebook,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/%D8%B1%D9%88%D8%A7%D8%AF-%D9%84%D9%84%D8%AD%D9%84%D9%88%D9%84-%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9/',
    icon: Linkedin,
  },
  {
    label: 'X',
    href: 'https://x.com/rowadtechsol',
    icon: Twitter,
  },
]

const footerLinks = [
  { href: '/', labelAr: 'الرئيسية' },
  { href: '/about', labelAr: 'من نحن' },
  { href: '/services', labelAr: 'خدماتنا' },
  { href: '/method', labelAr: 'منهجية العمل' },
  { href: '/works', labelAr: 'أعمالنا' },
  { href: '/contact', labelAr: 'اتصل بنا' },
]

const services = [
  'تطوير تطبيقات الجوال',
  'تطوير المواقع الإلكترونية',
  'الأنظمة المخصصة',
  'تصميم UI/UX',
  'تحسين محركات البحث',
  'الاستشارات التقنية',
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border" dir="rtl">
      {/* CTA Banner */}
      <div
        className="relative overflow-hidden py-16 px-4"
        style={{ background: 'linear-gradient(135deg, #1F3292 0%, #9F27D6 100%)' }}
      >
        {/* Decorative circles */}
        <div
          className="absolute -top-16 -left-16 w-56 h-56 rounded-full opacity-10"
          style={{ background: 'white' }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full opacity-10"
          style={{ background: 'white' }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-3">ابدأ اليوم</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white text-balance">
            هل لديك مشروع في ذهنك؟
          </h2>
          <p className="text-white/75 mb-8 text-lg">
            دعنا نحوّل فكرتك إلى واقع رقمي متكامل
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#1F3292] font-bold rounded-xl hover:bg-white/95 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          >
            ابدأ مشروعك الآن
          </Link>
        </div>
      </div>

      {/* Main footer body */}
      <div className="py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-5">
                <Image
                  src="/logo.svg"
                  alt="رواد للحلول التقنية – Rowad Technology Solutions"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                شركة رواد للحلول التقنية – متخصصة في تطوير تطبيقات ومواقع وأنظمة ذكية بأعلى معايير الجودة.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-2 flex-wrap">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group p-2.5 rounded-xl border border-border bg-muted hover:border-[#1F3292] hover:bg-[#1F3292] transition-all duration-200"
                  >
                    <s.icon
                      size={16}
                      className="text-muted-foreground group-hover:text-white transition-colors"
                    />
                  </a>
                ))}
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@rawad.information.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="group p-2.5 rounded-xl border border-border bg-muted hover:border-[#1F3292] hover:bg-[#1F3292] transition-all duration-200"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-muted-foreground group-hover:text-white transition-colors"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
                روابط سريعة
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-muted-foreground hover:text-[#1F3292] text-sm transition-colors flex items-center gap-2 group"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-[#9F27D6] transition-colors flex-shrink-0"
                        aria-hidden="true"
                      />
                      {l.labelAr}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
                خدماتنا
              </h4>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s}>
                    <Link
                      href="/services"
                      className="text-muted-foreground hover:text-[#1F3292] text-sm transition-colors flex items-center gap-2 group"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-[#9F27D6] transition-colors flex-shrink-0"
                        aria-hidden="true"
                      />
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
                تواصل معنا
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+96876972871"
                    className="group flex items-start gap-3 text-sm text-muted-foreground hover:text-[#1F3292] transition-colors"
                  >
                    <span className="mt-0.5 p-1.5 rounded-lg bg-[#1F3292]/8 group-hover:bg-[#1F3292]/15 transition-colors flex-shrink-0" style={{ background: 'rgba(31,50,146,0.07)' }}>
                      <Phone size={13} className="text-[#1F3292]" />
                    </span>
                    <span dir="ltr">+968 76972871</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:rowad.tech.solutions@gmail.com"
                    className="group flex items-start gap-3 text-sm text-muted-foreground hover:text-[#1F3292] transition-colors"
                  >
                    <span className="mt-0.5 p-1.5 rounded-lg flex-shrink-0 transition-colors group-hover:bg-[#1F3292]/15" style={{ background: 'rgba(31,50,146,0.07)' }}>
                      <Mail size={13} className="text-[#1F3292]" />
                    </span>
                    <span className="break-all">rowad.tech.solutions@gmail.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 p-1.5 rounded-lg flex-shrink-0" style={{ background: 'rgba(31,50,146,0.07)' }}>
                      <MapPin size={13} className="text-[#1F3292]" />
                    </span>
                    <span>سلطنة عُمان، مسقط</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} رواد للحلول التقنية. جميع الحقوق محفوظة.
            </p>
            <p className="text-xs text-muted-foreground" dir="ltr">
              Rowad Technology Solutions · Oman
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
