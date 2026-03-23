'use client'

import { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollAnimator from '@/components/scroll-animator'
import PageLoader from '@/components/page-loader'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

/* ── Data ── */
const categories = ['الكل', 'تطبيقات الجوال', 'تطوير مواقع', 'أنظمة مخصصة', 'تصميم UI/UX']

const works = [
  /* Mobile apps */
  {
    id: 1,
    title: 'تطبيق تجارة إلكترونية',
    titleEn: 'E-Commerce App',
    category: 'تطبيقات الجوال',
    image: '/images/project-ecom.jpg',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    descAr: 'تطبيق متكامل للتسوق الإلكتروني يدعم iOS وAndroid مع نظام دفع آمن وإدارة المخزون اللحظي.',
  },
  {
    id: 2,
    title: 'تطبيق توصيل طعام',
    titleEn: 'Food Delivery App',
    category: 'تطبيقات الجوال',
    image: '/images/project-delivery.jpg',
    tags: ['Flutter', 'Firebase', 'Google Maps'],
    descAr: 'تطبيق توصيل طعام مع تتبع الطلبات الفوري وتقييم المطاعم ونظام نقاط الولاء.',
  },
  /* Websites */
  {
    id: 3,
    title: 'موقع شركة متكامل',
    titleEn: 'Corporate Website',
    category: 'تطوير مواقع',
    image: '/images/project-corporate.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    descAr: 'موقع تعريفي احترافي يعكس هوية الشركة بتصميم عصري وأداء متميز وتحسين SEO كامل.',
  },
  {
    id: 4,
    title: 'منصة تعليمية تفاعلية',
    titleEn: 'E-Learning Platform',
    category: 'تطوير مواقع',
    image: '/images/project-elearning.jpg',
    tags: ['Vue.js', 'Django', 'AWS'],
    descAr: 'منصة تعليمية تدعم الفيديو والاختبارات والشهادات مع لوحة تحكم كاملة للمدربين.',
  },
  /* Custom systems */
  {
    id: 5,
    title: 'نظام إدارة ERP',
    titleEn: 'ERP Management System',
    category: 'أنظمة مخصصة',
    image: '/images/project-erp.jpg',
    tags: ['React', 'Laravel', 'PostgreSQL'],
    descAr: 'نظام متكامل لإدارة الموارد البشرية والعمليات المالية مع لوحات تحليلية تفاعلية.',
  },
  {
    id: 6,
    title: 'نظام نقاط البيع',
    titleEn: 'POS System',
    category: 'أنظمة مخصصة',
    image: '/images/project-pos.jpg',
    tags: ['Electron.js', 'SQLite', 'Bluetooth'],
    descAr: 'نظام نقاط بيع متكامل يعمل دون إنترنت مع مزامنة سحابية فورية عند الاتصال.',
  },
  /* UI/UX */
  {
    id: 7,
    title: 'تطبيق إدارة المواعيد',
    titleEn: 'Appointment Manager',
    category: 'تصميم UI/UX',
    image: '/images/project-booking.jpg',
    tags: ['Figma', 'React Native', 'UX Research'],
    descAr: 'تطبيق ذكي لإدارة المواعيد والحجوزات مع نظام تذكير تلقائي وتكامل مع التقويم.',
  },
  {
    id: 8,
    title: 'تصميم هوية بصرية',
    titleEn: 'Brand Identity Design',
    category: 'تصميم UI/UX',
    image: '/images/project-branding.jpg',
    tags: ['Figma', 'Adobe XD', 'Branding'],
    descAr: 'هوية بصرية متكاملة تشمل الشعار والألوان والخطوط ودليل استخدام العلامة التجارية.',
  },
]

/* ── Animated card ── */
function WorkCard({ work, index }: { work: (typeof works)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="project-card group rounded-2xl overflow-hidden border border-border bg-white shadow-sm"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      {/* Image area */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <Image
          src={work.image}
          alt={work.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay on hover */}
        <div
          className="overlay absolute inset-0 flex flex-col items-end justify-end p-5 gap-3"
          style={{ background: 'linear-gradient(to top, rgba(31,50,146,0.93) 0%, rgba(31,50,146,0.4) 60%, transparent 100%)' }}
        >
          <p className="text-white/90 text-sm leading-relaxed self-start">{work.descAr}</p>
          <Link
            href="/contact"
            className="self-start flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-[#1F3292] text-xs font-bold hover:bg-white/90 transition-colors"
          >
            استفسر عن مثله
            <ArrowUpRight size={13} />
          </Link>
        </div>
        {/* Category badge */}
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#1F3292] shadow-sm">
          {work.category}
        </span>
      </div>

      {/* Card body */}
      <div className="p-5">
        <p className="text-xs text-muted-foreground mb-1 font-medium">{work.titleEn}</p>
        <h3 className="font-bold text-foreground mb-3 text-base">{work.title}</h3>
        <div className="flex flex-wrap gap-1.5">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium"
              style={{ background: 'rgba(31,50,146,0.07)', color: '#1F3292' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Page ── */
export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState('الكل')
  const [displayedWorks, setDisplayedWorks] = useState(works)

  useEffect(() => {
    const filtered =
      activeCategory === 'الكل'
        ? works
        : works.filter((w) => w.category === activeCategory)
    setDisplayedWorks(filtered)
  }, [activeCategory])

  return (
    <>
      <PageLoader />
      <ScrollAnimator />
      <Navbar lang="ar" />
      <main dir="rtl">

        {/* ── Page Hero ── */}
        <section
          className="pt-32 pb-20 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #f8f9ff 0%, #eef1ff 100%)' }}
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-[0.07] blur-3xl" style={{ background: '#9F27D6' }} />
            <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full opacity-[0.07] blur-3xl" style={{ background: '#1F3292' }} />
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="#1F3292" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          <div className="relative max-w-3xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9F27D6] mb-5 animate-fade-in-up">
              <span className="w-8 h-px bg-[#9F27D6]" />
              أعمالنا
              <span className="w-8 h-px bg-[#9F27D6]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-5 text-balance animate-fade-in-up delay-100">
              مشاريع{' '}
              <span className="brand-gradient-text">نفتخر بها</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-fade-in-up delay-200">
              نماذج من أعمالنا التي نفذناها بشغف واحترافية لعملاء من مختلف القطاعات
            </p>
          </div>
        </section>

        {/* ── Filter Tabs ── */}
        <div className="sticky top-16 lg:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-0.5" style={{ scrollbarWidth: 'none' }}>
              {categories.map((cat) => {
                const active = activeCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-250"
                    style={
                      active
                        ? { background: 'linear-gradient(135deg, #1F3292, #9F27D6)', color: 'white', boxShadow: '0 4px 14px rgba(31,50,146,0.25)' }
                        : { background: 'rgba(31,50,146,0.06)', color: '#1F3292' }
                    }
                  >
                    {cat}
                    {cat !== 'الكل' && (
                      <span
                        className="mr-1.5 text-xs opacity-70"
                      >
                        ({works.filter(w => w.category === cat).length})
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── Works Grid ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {displayedWorks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {displayedWorks.map((work, i) => (
                  <WorkCard key={work.id} work={work} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 text-muted-foreground">
                لا توجد مشاريع في هذه الفئة حالياً
              </div>
            )}
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-2xl mx-auto px-4 text-center animate-on-scroll">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: '#9F27D6' }}
            >
              <span className="w-6 h-px bg-[#9F27D6]" />
              مشروعك القادم
              <span className="w-6 h-px bg-[#9F27D6]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-balance text-foreground">
              يمكن أن يكون المشروع القادم لك
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              انضم إلى قائمة عملائنا وابدأ رحلتك الرقمية مع رواد للحلول التقنية
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#1F3292]/20"
              style={{ background: 'linear-gradient(135deg, #1F3292, #9F27D6)' }}
            >
              ابدأ مشروعك الآن
              <ArrowLeft size={18} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
