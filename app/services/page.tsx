import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollAnimator from '@/components/scroll-animator'
import PageLoader from '@/components/page-loader'
import Link from 'next/link'
import {
  Palette,
  Globe,
  Smartphone,
  BarChart3,
  ShoppingCart,
  Settings2,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react'

const services = [
  {
    icon: Palette,
    titleAr: 'تصميم UX/UI',
    titleEn: 'UX/UI Design',
    descAr:
      'نبتكر واجهات وتجارب مستخدم عصرية تجمع بين الجمال والسهولة، بحيث يجد المستخدم ما يحتاجه بكل يسر وراحة.',
    features: ['بحث المستخدمين', 'النماذج الأولية', 'اختبار الاستخدامية', 'تصميم المكونات'],
    color: '#9F27D6',
    bg: 'rgba(159,39,214,0.07)',
  },
  {
    icon: Globe,
    titleAr: 'تطوير المواقع',
    titleEn: 'Website Development',
    descAr:
      'ننشئ مواقع حديثة ومتجاوبة تعكس هوية علامتك التجارية وتُحقق أهدافك التسويقية بأداء عالٍ وسرعة استثنائية.',
    features: ['مواقع تعريفية', 'بوابات إلكترونية', 'تحسين SEO', 'أداء عالٍ'],
    color: '#1F3292',
    bg: 'rgba(31,50,146,0.07)',
  },
  {
    icon: Smartphone,
    titleAr: 'تطبيقات الجوال',
    titleEn: 'Mobile App Development',
    descAr:
      'تصميم وبرمجة تطبيقات احترافية لأنظمة iOS وAndroid تُقدّم تجربة مستخدم سلسة وتُلبّي احتياجاتك التشغيلية.',
    features: ['تطبيقات iOS', 'تطبيقات Android', 'تطبيقات هجينة', 'نشر وصيانة'],
    color: '#9F27D6',
    bg: 'rgba(159,39,214,0.07)',
  },
  {
    icon: BarChart3,
    titleAr: 'الاستشارات التقنية',
    titleEn: 'Technical Consulting',
    descAr:
      'نقدم استشارات تقنية متخصصة لتحليل احتياجاتك ووضع الخطط الاستراتيجية المناسبة للتحول الرقمي في مؤسستك.',
    features: ['تحليل الأنظمة', 'خارطة التحول الرقمي', 'اختيار التقنيات', 'تحسين الأداء'],
    color: '#1F3292',
    bg: 'rgba(31,50,146,0.07)',
  },
  {
    icon: ShoppingCart,
    titleAr: 'حلول التجارة الإلكترونية',
    titleEn: 'E-Commerce Solutions',
    descAr:
      'نبني متاجر إلكترونية متكاملة تمنح عملاءك تجربة شراء مميزة مع أنظمة دفع آمنة وإدارة متقدمة للمنتجات.',
    features: ['متاجر متجاوبة', 'بوابات دفع', 'إدارة المخزون', 'تحليلات المبيعات'],
    color: '#9F27D6',
    bg: 'rgba(159,39,214,0.07)',
  },
  {
    icon: Settings2,
    titleAr: 'أنظمة ERP/CRM',
    titleEn: 'ERP/CRM Systems',
    descAr:
      'نطور أنظمة مخصصة لإدارة العمليات والموارد والعملاء، مصمّمة خصيصاً لاحتياجات مؤسستك وطبيعة عملك.',
    features: ['إدارة الموارد', 'علاقات العملاء', 'تقارير متقدمة', 'تكاملات خارجية'],
    color: '#1F3292',
    bg: 'rgba(31,50,146,0.07)',
  },
]

export const metadata = {
  title: 'خدماتنا | رواد للحلول التقنية',
  description: 'اكتشف خدماتنا التقنية المتكاملة من تصميم وتطوير واستشارات',
}

export default function ServicesPage() {
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
              className="absolute top-20 left-20 w-72 h-72 rounded-full opacity-10 blur-3xl"
              style={{ background: '#9F27D6' }}
            />
            <div
              className="absolute bottom-10 right-20 w-56 h-56 rounded-full opacity-10 blur-3xl"
              style={{ background: '#1F3292' }}
            />
            <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1F3292" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid2)" />
            </svg>
          </div>
          <div className="relative max-w-3xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9F27D6] mb-4 animate-fade-in-up">
              <span className="w-6 h-px bg-[#9F27D6]" />
              خدماتنا
              <span className="w-6 h-px bg-[#9F27D6]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance animate-fade-in-up delay-100">
              حلول تقنية
              <span className="brand-gradient-text"> متكاملة</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-fade-in-up delay-200">
              نقدم مجموعة شاملة من الخدمات التقنية المصممة خصيصاً لتحويل أفكارك إلى واقع رقمي ناجح
            </p>
          </div>
        </section>

        {/* Services detailed grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <div
                  key={service.titleAr}
                  className="service-card group rounded-2xl border border-border bg-white p-8 animate-on-scroll"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: service.bg }}
                    >
                      <service.icon size={26} style={{ color: service.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                        {service.titleEn}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">{service.titleAr}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                        {service.descAr}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-center gap-2 text-sm text-foreground/80"
                          >
                            <CheckCircle2 size={14} style={{ color: service.color }} className="shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section
          className="py-20"
          style={{ background: 'linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 animate-on-scroll">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9F27D6] mb-4">
                <span className="w-6 h-px bg-[#9F27D6]" />
                لماذا رواد؟
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
                ما الذي يجعلنا
                <span className="brand-gradient-text"> الخيار الأمثل</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'خبرة عميقة', desc: 'فريق من المحترفين ذوي خبرة واسعة في أحدث التقنيات' },
                { num: '02', title: 'تسليم في الموعد', desc: 'نلتزم بمواعيد التسليم المتفق عليها دون مساومة على الجودة' },
                { num: '03', title: 'دعم مستمر', desc: 'نوفر دعماً فنياً شاملاً بعد الإطلاق لضمان نجاح مشروعك' },
                { num: '04', title: 'أسعار تنافسية', desc: 'نقدم أفضل قيمة مقابل استثمارك مع ضمان الجودة العالية' },
              ].map((item, i) => (
                <div
                  key={item.num}
                  className="text-center p-6 rounded-2xl bg-white border border-border animate-on-scroll service-card"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="text-3xl font-bold brand-gradient-text mb-4"
                  >
                    {item.num}
                  </div>
                  <h4 className="font-bold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center animate-on-scroll">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-balance">
              مستعد لبدء مشروعك؟
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              تواصل معنا اليوم وسنساعدك على اختيار الحل المناسب لاحتياجاتك
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              style={{ background: 'linear-gradient(135deg, #1F3292, #9F27D6)' }}
            >
              تواصل معنا الآن
              <ArrowLeft size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
