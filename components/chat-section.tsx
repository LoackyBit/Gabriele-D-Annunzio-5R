'use client'

import { useEffect, useRef } from 'react'

export default function ChatSection() {
  const infoRef = useRef<HTMLDivElement>(null)
  const embedRef = useRef<HTMLDivElement>(null)

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

    if (infoRef.current) observer.observe(infoRef.current)
    if (embedRef.current) observer.observe(embedRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="chat" className="chat-section section" aria-labelledby="chat-title">
      <style jsx>{`
        .chat-section {
          background-color: #1c0d11;
          border-top: 1px solid #39282c;
          border-bottom: 1px solid #39282c;
          color: var(--text-light);
          overflow: hidden;
        }

        .chat-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .chat-info .badge-gold {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: var(--secondary-gold);
          text-transform: uppercase;
          font-weight: bold;
          font-size: 0.9rem;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .chat-info .section-title {
          color: var(--text-light);
          text-align: left;
        }

        .chat-info .section-desc {
          margin: 0 0 30px 0;
          color: rgba(255, 255, 255, 0.7);
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .feature-item {
          display: flex;
          gap: 15px;
          background-color: rgba(255, 255, 255, 0.05);
          padding: 15px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: border-color 0.3s;
        }

        .feature-item:hover {
          border-color: rgba(212, 175, 55, 0.5);
        }

        .feature-icon {
          background-color: rgba(212, 175, 55, 0.1);
          color: var(--secondary-gold);
          padding: 10px;
          border-radius: 50%;
          height: fit-content;
        }

        .feature-text h3 {
          color: var(--text-light);
          font-size: 1.1rem;
          margin-bottom: 5px;
        }

        .feature-text p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }

        .liberty-border {
          border: 1px solid var(--secondary-gold);
          padding: 5px;
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.1);
          background-color: #140b0d;
        }

        .chat-iframe {
          width: 100%;
          height: 600px;
          border: none;
          border-radius: 8px;
          background-color: #fff;
        }

        @media (max-width: 768px) {
          .chat-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .chat-info {
            text-align: center;
          }

          .chat-info .section-title {
            text-align: center;
          }

          .chat-iframe {
            height: 500px;
          }
        }
      `}</style>

      <div className="container">
        <article className="chat-layout">
          <div ref={infoRef} className="chat-info fade-in-left">
            <div className="badge-gold" aria-label="Badge esperienza AI">
              <span className="material-symbols-outlined" aria-hidden="true">auto_awesome</span>
              Esperienza AI
            </div>
            <h2 id="chat-title" className="section-title">Dialoga con <br /><span className="highlight">Il Vate</span></h2>
            <p className="section-desc">
              Un&apos;esperienza immersiva potenziata dall&apos;intelligenza artificiale. Poni le tue domande direttamente a Gabriele D&apos;Annunzio e scopri il suo pensiero su arte, guerra e amore. L&apos;anima del poeta rivive attraverso le tue parole.
            </p>

            <div className="feature-list" role="list">
              <div className="feature-item" role="listitem">
                <div className="feature-icon" aria-hidden="true">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <div className="feature-text">
                  <h3>Chiedi della sua filosofia</h3>
                  <p>Il superuomo, il piacere e la bellezza.</p>
                </div>
              </div>
              <div className="feature-item" role="listitem">
                <div className="feature-icon" aria-hidden="true">
                  <span className="material-symbols-outlined">menu_book</span>
                </div>
                <div className="feature-text">
                  <h3>Analizza i versi</h3>
                  <p>Scopri i segreti dell&apos;Alcyone e del Piacere.</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={embedRef} className="chat-embed-wrapper fade-in-right">
            <div className="liberty-border">
              <iframe
                src="https://gemini.google.com/gem/19IVSbMvgWbiQT5lsGlGUCxPbEDgRjgKH?usp=sharing"
                className="chat-iframe"
                title="Chat interattiva con Gabriele D'Annunzio"
                allow="clipboard-write"
                loading="lazy"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
