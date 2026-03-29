import Link from 'next/link'
import { Phone, Mail, ArrowLeft } from 'lucide-react'

export default function ContactCta() {
  return (
    <section
      className="py-24 overflow-hidden"
      dir="rtl"
      style={{ background: 'linear-gradient(160deg, #f8f9ff 0%, #eef1ff 100%)' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9F27D6] mb-4">
            <span className="w-8 h-px bg-[#9F27D6]" />
            تواصل معنا
            <span className="w-8 h-px bg-[#9F27D6]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            هل أنت مستعد لبدء
            <span className="brand-gradient-text"> مشروعك؟</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            تواصل معنا الآن وسيسعد فريقنا بالاستماع لفكرتك وتقديم أفضل الحلول التقنية.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] shadow-lg"
              style={{ background: 'linear-gradient(135deg, #1F3292, #9F27D6)' }}
            >
              ابدأ مشروعك
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            </Link>
            <a
              href="tel:+96877685747"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 border-[#1F3292]/30 text-[#1F3292] hover:border-[#1F3292] hover:bg-[#1F3292]/5 transition-all duration-200"
              dir="ltr"
            >
              <Phone size={18} />
              +968 77685747
            </a>
          </div>

          {/* Contact info chips */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <a
              href="tel:+96877685747"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              dir="ltr"
            >
              <Phone size={15} className="text-[#1F3292]" />
              +968 77685747
            </a>
            <span className="text-border">|</span>
            <a
              href="mailto:rowad.tech.solutions@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={15} className="text-[#1F3292]" />
              rowad.tech.solutions@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
