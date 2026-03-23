import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import PageLoader from '@/components/page-loader'
import ScrollAnimator from '@/components/scroll-animator'
import HeroSection from '@/components/home/hero-section'
import StatsSection from '@/components/home/stats-section'
import AboutSnippet from '@/components/home/about-snippet'
import ServicesPreview from '@/components/home/services-preview'
import WorksPreview from '@/components/home/works-preview'
import ContactCta from '@/components/home/contact-cta'

export default function HomePage() {
  return (
    <>
      <PageLoader />
      <ScrollAnimator />
      <Navbar lang="ar" />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSnippet />
        <ServicesPreview />
        <WorksPreview />
        <ContactCta />
      </main>
      <Footer />
    </>
  )
}
