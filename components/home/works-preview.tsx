import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

const works = [
  {
    title: 'تطبيق تجارة إلكترونية',
    category: 'تطوير تطبيقات',
    image: '/images/project-1.jpg',
  },
  {
    title: 'موقع شركة متكامل',
    category: 'تطوير مواقع',
    image: '/images/project-2.jpg',
  },
  {
    title: 'تطبيق توصيل طعام',
    category: 'تطوير تطبيقات',
    image: '/images/project-3.jpg',
  },
  {
    title: 'نظام إدارة ERP',
    category: 'أنظمة مخصصة',
    image: '/images/project-4.jpg',
  },
]

export default function WorksPreview() {
  return (
    <section className="py-24 bg-white overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 animate-on-scroll">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9F27D6] mb-3">
              <span className="w-8 h-px bg-[#9F27D6]" />
              أعمالنا
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">
              مشاريع
              <span className="brand-gradient-text"> نفتخر </span>
              بها
            </h2>
          </div>
          <Link
            href="/works"
            className="group inline-flex items-center gap-2 text-[#1F3292] font-semibold text-sm hover-underline shrink-0"
          >
            عرض جميع الأعمال
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {works.map((work, i) => (
            <div
              key={work.title}
              className="project-card relative rounded-2xl overflow-hidden cursor-pointer animate-on-scroll"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-64 sm:h-72">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Overlay */}
              <div className="overlay absolute inset-0 flex flex-col items-center justify-center gap-3" style={{ background: 'rgba(31,50,146,0.85)' }}>
                <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
                  {work.category}
                </span>
                <h3 className="text-xl font-bold text-white">{work.title}</h3>
                <Link
                  href="/works"
                  className="mt-2 flex items-center gap-2 px-5 py-2 rounded-lg bg-white text-[#1F3292] text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  <ExternalLink size={14} />
                  عرض التفاصيل
                </Link>
              </div>
              {/* Category tag */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-[#1F3292]">
                {work.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
