import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollAnimator from '@/components/scroll-animator'
import PageLoader from '@/components/page-loader'
import Link from 'next/link'
import {
  Search,
  Lightbulb,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
  ArrowLeft,
} from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Search,
    titleAr: 'الاستكشاف والتحليل',
    titleEn: 'Discovery & Analysis',
    descAr:
      'نبدأ بفهم عميق لاحتياجاتك وأهداف مشروعك من خلال جلسات نقاش مكثفة وتحليل شامل للسوق والمنافسين والمستخدمين المستهدفين.',
    details: ['تحليل المتطلبات', 'دراسة السوق', 'تحديد الأهداف', 'رسم خارطة المستخدم'],
    color: '#1F3292',
    bg: 'rgba(31,50,146,0.07)',
  },
  {
    num: '02',
    icon: Lightbulb,
    titleAr: 'التخطيط الاستراتيجي',
    titleEn: 'Strategic Planning',
    descAr:
      'نضع خطة متكاملة للمشروع تشمل جدول زمني واضح، وتوزيع المهام، وتحديد التقنيات المناسبة، وآليات التواصل والمتابعة.',
    details: ['خطة المشروع', 'الجدول الزمني', 'تحديد التقنيات', 'توزيع الموارد'],
    color: '#9F27D6',
    bg: 'rgba(159,39,214,0.07)',
  },
  {
    num: '03',
    icon: PenTool,
    titleAr: 'التصميم الإبداعي',
    titleEn: 'Creative Design',
    descAr:
      'يبدع فريق التصميم لدينا في رسم تجربة المستخدم والواجهات البصرية، مع الحرص على الجمال والوظيفية في آنٍ واحد.',
    details: ['تصميم الهوية', 'نماذج أولية', 'واجهات UI', 'مراجعة وتعديل'],
    color: '#1F3292',
    bg: 'rgba(31,50,146,0.07)',
  },
  {
    num: '04',
    icon: Code2,
    titleAr: 'التطوير والبرمجة',
    titleEn: 'Development',
    descAr:
      'ينفذ مطورونا المشروع باستخدام أحدث التقنيات وأفضل ممارسات البرمجة، مع تقديم تقارير دورية لضمان التوافق مع رؤيتك.',
    details: ['برمجة Front-end', 'برمجة Back-end', 'قواعد بيانات', 'API وتكاملات'],
    color: '#9F27D6',
    bg: 'rgba(159,39,214,0.07)',
  },
  {
    num: '05',
    icon: FlaskConical,
    titleAr: 'الاختبار والجودة',
    titleEn: 'Testing & QA',
    descAr:
      'نُجري اختبارات شاملة لضمان خلوّ المنتج من الأخطاء وتوافقه مع جميع الأجهزة والمتصفحات، قبل أن نُسلّمه بثقة.',
    details: ['اختبار الوحدات', 'اختبار الأداء', 'اختبار الأجهزة', 'اختبار المستخدم'],
    color: '#1F3292',
    bg: 'rgba(31,50,146,0.07)',
  },
  {
    num: '06',
    icon: Rocket,
    titleAr: 'الإطلاق والدعم',
    titleEn: 'Launch & Support',
    descAr:
      'نطلق المشروع بشكل احترافي ونوفر دعماً فنياً مستمراً بعد الإطلاق لضمان الاستمرارية والنمو في المرحلة القادمة.',
    details: ['إطلاق إنتاجي', 'مراقبة الأداء', 'دعم فني', 'تحديثات دورية'],
    color: '#9F27D6',
    bg: 'rgba(159,39,214,0.07)',
  },
]

export const metadata = {
  title: 'منهجية العمل | رواد للحلول التقنية',
  description: 'تعرّف على منهجيتنا المثبتة في تنفيذ المشاريع التقنية',
}

export default function MethodPage() {
  return (
    <>
      <PageLoader />
      <ScrollAnimator />
      <Navbar lang="ar" />
      <main dir="rtl">
        {/* Page Hero */}
        <section
          className="pt-32 pb-20 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #f8f9ff 0%, #eef1ff 100%)' }}
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10 blur-3xl"
              style={{ background: '#9F27D6' }}
            />
            <div
              className="absolute bottom-10 left-20 w-48 h-48 rounded-full opacity-10 blur-3xl"
              style={{ background: '#1F3292' }}
            />
            <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid3" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1F3292" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid3)" />
            </svg>
          </div>
          <div className="relative max-w-3xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9F27D6] mb-4 animate-fade-in-up">
              <span className="w-6 h-px bg-[#9F27D6]" />
              كيف نعمل
              <span className="w-6 h-px bg-[#9F27D6]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance animate-fade-in-up delay-100">
              منهجيتنا في
              <span className="brand-gradient-text"> تنفيذ المشاريع</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-fade-in-up delay-200">
              نتبع منهجية مثبتة ومنظمة تضمن تسليم مشروعك بأعلى جودة وفي الوقت المحدد
            </p>
          </div>
        </section>

        {/* Steps Timeline */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute right-8 top-0 bottom-0 w-px hidden lg:block"
                style={{ background: 'linear-gradient(180deg, #1F3292 0%, #9F27D6 100%)', opacity: 0.15 }}
              />

              <div className="space-y-10">
                {steps.map((step, i) => (
                  <div
                    key={step.num}
                    className="relative flex flex-col lg:flex-row gap-6 lg:gap-10 animate-on-scroll"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    {/* Number circle - desktop */}
                    <div className="hidden lg:flex shrink-0 w-16 h-16 rounded-full items-center justify-center text-white font-bold text-lg z-10 shadow-md"
                      style={{ background: 'linear-gradient(135deg, #1F3292, #9F27D6)' }}
                    >
                      {step.num}
                    </div>

                    {/* Card */}
                    <div
                      className="flex-1 service-card rounded-2xl border border-border bg-white p-7 group"
                    >
                      <div className="flex items-start gap-5">
                        {/* Mobile number */}
                        <div
                          className="lg:hidden flex shrink-0 w-12 h-12 rounded-full items-center justify-center text-white font-bold text-sm"
                          style={{ background: 'linear-gradient(135deg, #1F3292, #9F27D6)' }}
                        >
                          {step.num}
                        </div>
                        <div
                          className="hidden lg:flex w-12 h-12 rounded-xl items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                          style={{ background: step.bg }}
                        >
                          <step.icon size={22} style={{ color: step.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                            {step.titleEn}
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-foreground">{step.titleAr}</h3>
                          <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                            {step.descAr}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {step.details.map((d) => (
                              <span
                                key={d}
                                className="px-3 py-1 rounded-full text-xs font-medium border"
                                style={{
                                  borderColor: `${step.color}30`,
                                  color: step.color,
                                  background: step.bg,
                                }}
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20"
          style={{ background: 'linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)' }}
        >
          <div className="max-w-2xl mx-auto px-4 text-center animate-on-scroll">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-balance">
              هل أنت مستعد لبدء رحلتك معنا؟
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              نطبق هذه المنهجية في كل مشروع لنضمن لك نتائج استثنائية
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
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
