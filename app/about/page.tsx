import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollAnimator from '@/components/scroll-animator'
import PageLoader from '@/components/page-loader'
import Image from 'next/image'
import { CheckCircle2, Target, Eye } from 'lucide-react'

const values = [
  { titleAr: 'الجودة', descAr: 'نلتزم بأعلى معايير الجودة في كل ما نقدمه' },
  { titleAr: 'الابتكار', descAr: 'نسعى دائماً لتقديم حلول إبداعية ومبتكرة' },
  { titleAr: 'الشفافية', descAr: 'نبني علاقات قائمة على الثقة والوضوح' },
  { titleAr: 'الشراكة', descAr: 'نتعامل مع عملائنا كشركاء حقيقيين في النجاح' },
]

export default function AboutPage() {
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
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: '#9F27D6' }} />
            <div className="absolute bottom-10 left-20 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ background: '#1F3292' }} />
          </div>
          <div className="relative max-w-3xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9F27D6] mb-4">
              <span className="w-6 h-px bg-[#9F27D6]" />
              من نحن
              <span className="w-6 h-px bg-[#9F27D6]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance animate-fade-in-up">
              رواد للحلول
              <span className="brand-gradient-text"> التقنية</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-fade-in-up delay-100">
              نبني مستقبلاً رقمياً مستداماً من خلال الابتكار التقني والخبرة العميقة
            </p>
          </div>
        </section>

        {/* Main about content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative animate-on-scroll">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/about-team.png"
                    alt="فريق رواد للحلول التقنية"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-border">
                  <div className="text-3xl font-bold brand-gradient-text">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">مشروع منجز</div>
                </div>
              </div>

              {/* Text */}
              <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
                <h2 className="text-3xl font-bold mb-6">قصتنا</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  شركة رواد للحلول التقنية، متخصصة في تطوير تطبيقات ومواقع وأنظمة ذكية مصممة بعناية لتلبية احتياجات عملائنا وفق أعلى معايير الجودة والاحترافية.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  ونؤمن بأن التقنية ليست مجرد أدوات، بل هي قوة دافعة لصناعة فرق حقيقي وتحقيق نتائج ملموسة في بيئة أعمال متسارعة.
                </p>
                <ul className="space-y-3">
                  {['جودة عالية في كل مرحلة', 'تسليم في الوقت المحدد', 'دعم فني مستمر بعد الإطلاق', 'حلول مخصصة لكل عميل'].map((v) => (
                    <li key={v} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 size={17} className="text-[#1F3292] shrink-0" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section
          className="py-20"
          style={{ background: 'linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="bg-white rounded-2xl p-8 border border-border animate-on-scroll shadow-sm">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[#1F3292]/10">
                  <Eye size={22} className="text-[#1F3292]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1F3292]">رؤيتنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  تقديم خدمات تقنية متكاملة تعتمد على الجودة والابتكار، لمساعدة عملائنا على تحقيق أهدافهم بثقة واستدامة.
                </p>
              </div>

              {/* Mission */}
              <div
                className="rounded-2xl p-8 animate-on-scroll text-white"
                style={{ background: 'linear-gradient(135deg, #1F3292, #9F27D6)', transitionDelay: '0.15s' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-white/20">
                  <Target size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">رسالتنا</h3>
                <p className="text-white/80 leading-relaxed">
                  أن نكون رواد التحول الرقمي في المنطقة، عبر تقديم حلول تقنية مبتكرة تساهم في تطوير الأعمال ورفع كفاءتها.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">قيمنا الجوهرية</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">المبادئ التي تحكم كل ما نقوم به</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div
                  key={v.titleAr}
                  className="text-center p-6 rounded-2xl bg-background border border-border animate-on-scroll service-card"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-lg font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #1F3292, #9F27D6)' }}
                  >
                    {i + 1}
                  </div>
                  <h4 className="font-bold mb-2">{v.titleAr}</h4>
                  <p className="text-sm text-muted-foreground">{v.descAr}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
