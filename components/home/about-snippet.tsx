import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

const values = [
  'جودة عالية في كل مرحلة',
  'تسليم في الوقت المحدد',
  'دعم فني مستمر',
  'حلول مخصصة لكل عميل',
]

export default function AboutSnippet() {
  return (
    <section className="py-24 bg-background overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-on-scroll order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-team.png"
                alt="فريق رواد للحلول التقنية"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: 'linear-gradient(135deg, #1F3292, #9F27D6)' }}
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-border"
            >
              <div className="text-3xl font-bold brand-gradient-text">100%</div>
              <div className="text-sm text-muted-foreground mt-1">رضا العملاء</div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll order-1 lg:order-2" style={{ transitionDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9F27D6] mb-4">
              <span className="w-8 h-px bg-[#9F27D6]" />
              من نحن
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-balance">
              نؤمن بأن التقنية
              <span className="brand-gradient-text"> قوة دافعة </span>
              لصناعة فارق حقيقي
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base">
              شركة رواد للحلول التقنية، متخصصة في تطوير تطبيقات ومواقع وأنظمة ذكية مصممة بعناية لتلبية احتياجات عملائنا وفق أعلى معايير الجودة والاحترافية.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              التقنية ليست مجرد أدوات، بل هي قوة دافعة لتحقيق نتائج ملموسة في بيئة أعمال متسارعة.
            </p>

            <ul className="space-y-3 mb-8">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <CheckCircle2 size={18} className="text-[#1F3292] shrink-0" />
                  {v}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[#1F3292] font-semibold hover-underline transition-colors"
            >
              اكتشف قصتنا
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
