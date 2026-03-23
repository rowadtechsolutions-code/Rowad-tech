import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import './globals.css'

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-arabic',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#1F3292',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'رواد للحلول التقنية | Rowad Technology Solutions',
    template: '%s | رواد للحلول التقنية',
  },
  description:
    'شركة رواد للحلول التقنية – متخصصة في تطوير تطبيقات ومواقع وأنظمة ذكية. Rowad Technology Solutions – specialized in mobile apps, websites, and smart systems.',
  keywords:
    'Rowad Technology, رواد للحلول التقنية, تطوير تطبيقات, web development, mobile apps, Oman tech, UX design',
  authors: [{ name: 'Rowad Technology Solutions' }],
  openGraph: {
    title: 'رواد للحلول التقنية | Rowad Technology Solutions',
    description: 'تقنية تصنع الفارق – Technology that makes a difference',
    locale: 'ar_OM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rowadtechsol',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth" className={ibmPlexArabic.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
