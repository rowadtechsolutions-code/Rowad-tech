'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollAnimator from '@/components/scroll-animator'
import PageLoader from '@/components/page-loader'
import { Phone, Mail, Send, CheckCircle2, Instagram, Facebook, Linkedin } from 'lucide-react'

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M18.901 1H22.5L14.36 10.31L24 23H16.406L10.406 15.3L3.5 23H0L8.64 13.09L0 1H7.781L13.219 8.02L18.901 1Z" />
  </svg>
)

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/rowad.information.tech/', icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61588453614906', icon: Facebook },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/%D8%B1%D9%88%D8%A7%D8%AF-%D9%84%D9%84%D8%AD%D9%84%D9%88%D9%84-%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9/', icon: Linkedin },
  { label: 'X', href: 'https://x.com/rowadtechsol', icon: XIcon },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'الاسم مطلوب'
    if (!form.email.trim()) e.email = 'البريد الإلكتروني مطلوب'
    if (!form.phone.trim()) e.phone = 'رقم الهاتف مطلوب'
    if (!form.message.trim()) e.message = 'الرسالة مطلوبة'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY',
          subject: 'رسالة جديدة من موقع رواد',
          from_name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setSubmitted(true)
        setForm({ name: '', email: '', phone: '', message: '' })
      } else {
        alert('حدث خطأ أثناء الإرسال')
      }
    } catch (err) {
      alert('فشل الاتصال، حاول مرة أخرى')
    }

    setSubmitting(false)
  }

  return (
    <>
      <PageLoader />
      <ScrollAnimator />
      <Navbar lang="ar" />

      <main dir="rtl">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">

            {/* Social */}
            <div className="flex gap-3 mb-10">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  className="p-3 rounded-xl border bg-white text-[#1F3292]"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                placeholder="الاسم"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border p-3 rounded"
              />

              <input
                placeholder="البريد"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border p-3 rounded"
              />

              <input
                placeholder="رقم الجوال"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border p-3 rounded"
              />

              <textarea
                placeholder="الرسالة"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border p-3 rounded"
              />

              <button className="bg-[#1F3292] text-white px-6 py-3 rounded">
                {submitting ? 'جارٍ الإرسال...' : 'إرسال'}
              </button>
            </form>

            {submitted && <p className="mt-4 text-green-600">تم الإرسال بنجاح</p>}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}