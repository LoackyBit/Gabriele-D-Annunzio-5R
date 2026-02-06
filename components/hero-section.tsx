'use client'

import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" className="hero-section" aria-label="Sezione hero">
      <style jsx>{`
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--text-light);
          padding: 0;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          z-index: -1;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: 5rem;
          line-height: 1.1;
          margin: 20px 0;
          color: var(--text-light);
        }

        .hero-title .highlight {
          color: var(--primary-burgundy);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-family: var(--font-body);
          font-style: italic;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .hero-subtitle small {
          display: block;
          font-size: 1rem;
          font-style: normal;
          margin-top: 15px;
          color: rgba(255, 255, 255, 0.6);
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 30px;
          border-radius: var(--radius-lg);
          font-weight: 700;
          font-family: var(--font-body);
          cursor: pointer;
          transition: all var(--transition-normal);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 0.95rem;
          border: none;
          text-decoration: none;
          min-height: 44px;
          min-width: 44px;
        }

        .btn-primary {
          background-color: var(--primary-burgundy);
          color: var(--text-light);
          box-shadow: 0 4px 20px rgba(139, 0, 0, 0.4);
        }

        .btn-primary:hover,
        .btn-primary:focus {
          background-color: #a00000;
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(139, 0, 0, 0.5);
        }

        .btn-primary:active {
          transform: translateY(0);
          box-shadow: 0 2px 10px rgba(139, 0, 0, 0.3);
        }

        .btn-primary span {
          margin-right: 8px;
        }

        .btn-outline {
          background-color: transparent;
          border: 2px solid var(--secondary-gold);
          color: var(--secondary-gold);
        }

        .btn-outline:hover,
        .btn-outline:focus {
          background-color: rgba(212, 175, 55, 0.15);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <div
        className="hero-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(24, 17, 19, 0.5), rgba(24, 17, 19, 0.8)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwJUfpZZDU-wsKWJ7qDSPjXcYFSxfi1rNQiSD_UyQ72b-qTECl8SjcPuXWT86Xa6RUjuO568QNOSynhF_4OXFIhoFnTVkKEX9in8XOU5WvenbMkcYF1pLO-Wtv35HbOqdqO9-m-MK2tKyd7Ntv5bjoOhU59QwLM13rVGilNST-GEQPw0ccXaXD3pw-_PbT_oZBx8EtkqMpsSyz6PCU-qr7fegHVYKAknuFAVNq1CLabAMMORqCM8eBOqdMxZvQXcX8sJ8YfqYRMZFq')`
        }}
        role="img"
        aria-label="Ritratto di Gabriele D'Annunzio"
      />
      <div ref={contentRef} className="container hero-content fade-in-up">
        <div className="divider-ornament" aria-hidden="true">
          <span className="line"></span>
          <span className="text">Poeta • Soldato • Eroe</span>
          <span className="line"></span>
        </div>
        <h1 className="hero-title">
          Gabriele D&apos;Annunzio:<br />
          <span className="highlight">Il Vate</span>
        </h1>
        <p className="hero-subtitle">
          <em>&quot;Ama il tuo sogno se pur ti tormenta.&quot;</em>
          <small>Esplora la vita e le opere del poeta soldato attraverso un&apos;esperienza interattiva unica.</small>
        </p>
        <div className="hero-actions">
          <a href="#chat" className="btn btn-primary" role="button">
            <span className="material-symbols-outlined" aria-hidden="true">chat_bubble</span>
            Dialoga ora
          </a>
          <a href="#ballata" className="btn btn-outline" role="button">
            Scopri le opere
          </a>
        </div>
      </div>
    </section>
  )
}
