import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import IntroSection from '@/components/intro-section'
import ChatSection from '@/components/chat-section'
import FragmentsSection from '@/components/fragments-section'
import VideoSection from '@/components/video-section'
import BallataSection from '@/components/ballata-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-to-main">Salta al contenuto principale</a>
      <Header />
      <main id="main" role="main">
        <HeroSection />
        <IntroSection />
        <ChatSection />
        <FragmentsSection />
        <VideoSection />
        <BallataSection />
      </main>
      <Footer />
    </>
  )
}
