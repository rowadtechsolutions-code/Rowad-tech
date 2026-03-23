'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollAnimator from '@/components/scroll-animator'
import PageLoader from '@/components/page-loader'
import { Phone, Mail, Send, CheckCircle2, Instagram, Facebook, Linkedin } from 'lucide-react'

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
  >
    <path d="M18.901 1H22.5L14.36 10.31L24 23H16.406L10.406 15.3L3.5 23H0L8.64 13.09L0 1H7.781L13.219 8.02L18.901 1Z" />
  </svg>
)

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
    icon: XIcon,
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [notification, setNotification] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'الاسم مطلوب'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'البريد الإلكتروني غير صحيح'
    if (!form.phone.trim()) e.phone = 'رقم الهاتف مطلوب'
    if (!form.message.trim()) e.message = 'الرسالة مطلوبة'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()

    if (Object.keys(errs).length) {
      setErrors(errs)
      setNotification({
        type: 'error',
        message: 'يرجى تعبئة الحقول المطلوبة بشكل صحيح.',
      })
      setTimeout(() => setNotification(null), 3000)
      return
    }

    setErrors({})
    setSubmitting(true)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '9c483fff-837a-4326-bb0e-751cee933a39',
          subject: 'رسالة جديدة من موقع رواد للحلول التقنية',
          from_name: form.name,
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setSubmitting(false)
        setSubmitted(true)
        setForm({ name: '', email: '', phone: '', message: '' })
        setNotification({
          type: 'success',
          message: 'تم إرسال رسالتك بنجاح.',
        })
      } else {
        setSubmitting(false)
        setNotification({
          type: 'error',
          message: 'حدث خطأ أثناء الإرسال، حاول مرة أخرى.',
        })
      }
    } catch {
      setSubmitting(false)
      setNotification({
        type: 'error',
        message: 'تعذر الإرسال حاليًا، حاول مرة أخرى.',
      })
    } finally {
      setTimeout(() => setNotification(null), 3000)
    }
  }

  return (
    <>
      <PageLoader />
      <ScrollAnimator />
      <Navbar lang="ar" />
      <main dir="rtl">
        {notification && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[9999] px-4">
            <div
              className={`px-5 py-3 rounded-xl shadow-lg text-sm font-medium text-white transition-all ${
                notification.type === 'success' ? 'bg-green-600' : 'bg-red-500'
              }`}
            >
              {notification.message}
            </div>
          </div>
        )}

        {/* Page Hero */}
        <section
          className="pt-32 pb-20 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #f8f9ff 0%, #eef1ff 100%)' }}
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
              style={{ background: '#9F27D6' }}
            />
            <div
              className="absolute bottom-10 left-10 w-56 h-56 rounded-full opacity-10 blur-3xl"
              style={{ background: '#1F3292' }}
            />
            <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid5" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1F3292" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid5)" />
            </svg>
          </div>
          <div className="relative max-w-3xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9F27D6] mb-4 animate-fade-in-up">
              <span className="w-6 h-px bg-[#9F27D6]" />
              تواصل معنا
              <span className="w-6 h-px bg-[#9F27D6]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance animate-fade-in-up delay-100">
              نسعد
              <span className="brand-gradient-text"> بتواصلك</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-fade-in-up delay-200">
              سواء كان لديك مشروع في ذهنك أو مجرد استفسار، نحن هنا لمساعدتك
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

              {/* Info Column */}
              <div className="lg:col-span-2 space-y-8 animate-on-scroll">
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-foreground">معلومات التواصل</h2>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    فريقنا متاح للرد على استفساراتك وتقديم المساعدة في أسرع وقت ممكن.
                  </p>
                </div>

                {/* Contact cards */}
                <div className="space-y-4">
                  <a
                    href="tel:+96876972871"
                    className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-white service-card group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: 'rgba(31,50,146,0.08)' }}
                    >
                      <Phone size={20} className="text-[#1F3292]" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">الهاتف</div>
                      <div className="font-semibold text-foreground" dir="ltr">+968 76972871</div>
                    </div>
                  </a>

                  <a
                    href="mailto:rowad.tech.solutions@gmail.com"
                    className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-white service-card group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: 'rgba(159,39,214,0.08)' }}
                    >
                      <Mail size={20} className="text-[#9F27D6]" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">البريد الإلكتروني</div>
                      <div className="font-medium text-foreground text-sm break-all">
                        rowad.tech.solutions@gmail.com
                      </div>
                    </div>
                  </a>
                </div>

                {/* Social links */}
                <div>
                  <h3 className="font-semibold mb-4 text-foreground">تابعنا على وسائل التواصل</h3>
                  <div className="flex items-center gap-3 flex-wrap">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="p-3 rounded-xl border border-border bg-white hover:scale-110 transition-all duration-200 shadow-sm hover:shadow-md text-[#1F3292]"
                      >
                        <s.icon size={20} />
                      </a>
                    ))}
                    {/* TikTok */}
                    <a
                      href="https://www.tiktok.com/@rawad.information.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                      className="p-3 rounded-xl border border-border bg-white hover:scale-110 transition-all duration-200 shadow-sm hover:shadow-md text-[#1F3292]"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Response time badge */}
                <div
                  className="rounded-2xl p-5 text-white"
                  style={{ background: 'linear-gradient(135deg, #1F3292, #9F27D6)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0" />
                    <div>
                      <div className="font-semibold text-sm mb-0.5">وقت الاستجابة</div>
                      <div className="text-white/75 text-xs">نرد على رسائلك خلال 24 ساعة</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Column */}
              <div className="lg:col-span-3 animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(31,50,146,0.08)' }}
                      >
                        <CheckCircle2 size={32} className="text-[#1F3292]" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">تم إرسال رسالتك بنجاح!</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                        شكراً لتواصلك معنا. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 px-6 py-2.5 rounded-lg text-sm font-medium border-2 border-[#1F3292]/30 text-[#1F3292] hover:border-[#1F3292] hover:bg-[#1F3292]/5 transition-all"
                      >
                        إرسال رسالة أخرى
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold mb-6 text-foreground">أرسل لنا رسالة</h2>
                      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                        {/* Name & Email row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-1.5">
                              الاسم الكامل <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder="أدخل اسمك"
                              className={`form-input w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground text-sm ${
                                errors.name ? 'border-red-400' : 'border-border'
                              }`}
                            />
                            {errors.name && (
                              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-1.5">
                              البريد الإلكتروني <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              placeholder="example@email.com"
                              dir="ltr"
                              className={`form-input w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground text-sm text-right ${
                                errors.email ? 'border-red-400' : 'border-border'
                              }`}
                            />
                            {errors.email && (
                              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                            )}
                          </div>
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            رقم الهاتف <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="+968 XXXXXXXX"
                            dir="ltr"
                            className={`form-input w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground text-sm text-right ${
                              errors.phone ? 'border-red-400' : 'border-border'
                            }`}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                          )}
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            الرسالة <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="اكتب رسالتك هنا، أخبرنا عن مشروعك أو استفسارك..."
                            rows={5}
                            className={`form-input w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground text-sm resize-none ${
                              errors.message ? 'border-red-400' : 'border-border'
                            }`}
                          />
                          {errors.message && (
                            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                          )}
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
                          style={{ background: 'linear-gradient(135deg, #1F3292, #9F27D6)' }}
                        >
                          {submitting ? (
                            <>
                              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                              </svg>
                              جارٍ الإرسال...
                            </>
                          ) : (
                            <>
                              <Send size={16} />
                              إرسال الرسالة
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}