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
    'شركة رواد للحلول التقنية في عمان، متخصصة في تطوير تطبيقات الجوال، تصميم المواقع، والأنظمة الذكية. نقدم حلول رقمية مبتكرة تساعد عملك على النمو.',

  keywords: [
    'رواد للحلول التقنية',
    'Rowad Technology Solutions',
    'تطوير تطبيقات في عمان',
    'تصميم مواقع',
    'شركة برمجة',
    'UX UI Design',
  ],

  authors: [{ name: 'Rowad Technology Solutions' }],
  creator: 'Rowad Technology Solutions',

  openGraph: {
    title: 'رواد للحلول التقنية | Rowad Technology Solutions',
    description: 'تقنية تصنع الفارق – Technology that makes a difference',
    locale: 'ar_OM',
    type: 'website',
    url: 'https://your-domain.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rowad Technology Solutions',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@rowadtechsol',
    title: 'رواد للحلول التقنية',
    description: 'تقنية تصنع الفارق',
    images: ['/og-image.jpg'],
  },

  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://your-domain.com',
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