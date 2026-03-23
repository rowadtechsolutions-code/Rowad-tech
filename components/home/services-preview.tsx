import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import {
  Palette,
  Globe,
  Smartphone,
  BarChart3,
  ShoppingCart,
  Settings2,
} from 'lucide-react'

const services = [
  {
    icon: Palette,
    titleAr: 'تصميم UX/UI',
    descAr: 'نبتكر واجهات وتجارب مستخدم عصرية تجمع بين الجمال والسهولة.',
    color: '#9F27D6',
  },
  {
    icon: Globe,
    titleAr: 'تطوير المواقع',
    descAr: 'ننشئ مواقع حديثة ومتجاوبة تعكس هوية علامتك التجارية.',
    color: '#1F3292',
  },
  {
    icon: Smartphone,
    titleAr: 'تطبيقات الجوال',
    descAr: 'تصميم وبرمجة تطبيقات احترافية لأنظمة iOS وAndroid.',
    color: '#9F27D6',
  },
  {
    icon: BarChart3,
    titleAr: 'الاستشارات التقنية',
    descAr: 'نقدم استشارات تقنية متخصصة لتحليل احتياجاتك ووضع الخطط.',
    color: '#1F3292',
  },
  {
    icon: ShoppingCart,
    titleAr: 'حلول التجارة الإلكترونية',
    descAr: 'نبني متاجر إلكترونية متكاملة تمنح عملاءك تجربة شراء مميزة.',
    color: '#9F27D6',
  },
  {
    icon: Settings2,
    titleAr: 'أنظمة ERP/CRM',
    descAr: 'نطور أنظمة مخصصة لإدارة العمليات والموارد والعملاء.',
    color: '#1F3292',
  },
]

export default function ServicesPreview() {
  return (
    <section
      className="py-24 overflow-hidden"
      dir="rtl"
      style={{ background: 'linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9F27D6] mb-4">
            <span className="w-8 h-px bg-[#9F27D6]" />
            خدماتنا
            <span className="w-8 h-px bg-[#9F27D6]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            حلول تقنية
            <span className="brand-gradient-text"> متكاملة </span>
            لعملك
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات التقنية المصممة خصيصاً لتلبية احتياجات مشروعك.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.titleAr}
              className="service-card bg-white rounded-2xl p-7 border border-border cursor-default animate-on-scroll group"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${service.color}15` }}
              >
                <service.icon size={22} style={{ color: service.color }} />
              </div>
              <h3 className="text-base font-bold mb-3 text-foreground">{service.titleAr}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.descAr}</p>
              <div className="mt-5 flex items-center gap-1 text-xs font-medium text-[#1F3292] opacity-0 group-hover:opacity-100 transition-opacity">
                اعرف المزيد
                <ArrowLeft size={12} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-[#1F3292]/30 text-[#1F3292] font-semibold hover:border-[#1F3292] hover:bg-[#1F3292]/5 transition-all duration-200"
          >
            استعرض جميع خدماتنا
            <ArrowLeft size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
