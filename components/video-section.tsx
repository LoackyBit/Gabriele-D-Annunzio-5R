'use client'

import { useState, useRef } from 'react'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Errore durante la riproduzione del video:', error)
        setIsPlaying(false)
        alert('Impossibile riprodurre il video. Verifica la connessione o riprova.')
      })
    }
  }

  return (
    <section id="video" className="video-section section" aria-labelledby="video-title">
      <style jsx>{`
        .video-section {
          background-color: #2a161b;
          color: var(--text-light);
          background-image: url('https://www.transparenttextures.com/patterns/dark-leather.png');
        }

        .video-section .section-title {
          color: var(--text-light);
        }

        .liberty-frame {
          display: inline-block;
          padding: 10px;
          background-color: #2a161b;
          box-shadow: 0 0 0 4px #221015, 0 0 0 6px var(--secondary-gold);
          border-radius: 4px;
          margin: 20px 0;
          max-width: 100%;
        }

        .video-container {
          position: relative;
          width: 800px;
          max-width: 100%;
          aspect-ratio: 16/9;
          background-color: black;
          overflow: hidden;
        }

        .video-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwwpJKCwjdTk6xZ0r2z-ZSphtSF11-GolWxZWqOLcCspNvvaMhui6L4delU_0PMsfMqZK7KL_CBrwThp0biZSa3Nk44lwY5P1jNmbxtWAaOLjBsYMBh_qpfATfufr58yFn1sLLt00TKlDbblhsDzcBMfiT7BhqiuDss7A_WsNqPW2VScVTXb2pPqOaxEN0eTJNooRLYnzODzewbnkr68kZQp5trXy4Qlcx4mS0v39cj0LRqECJ27rgVXGhJ_k0zlSDP_T8TpQSMM4o");
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform var(--transition-normal), background var(--transition-normal);
          border: none;
          color: var(--text-light);
        }

        .video-placeholder:hover,
        .video-placeholder:focus {
          transform: scale(1.02);
          background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwwpJKCwjdTk6xZ0r2z-ZSphtSF11-GolWxZWqOLcCspNvvaMhui6L4delU_0PMsfMqZK7KL_CBrwThp0biZSa3Nk44lwY5P1jNmbxtWAaOLjBsYMBh_qpfATfufr58yFn1sLLt00TKlDbblhsDzcBMfiT7BhqiuDss7A_WsNqPW2VScVTXb2pPqOaxEN0eTJNooRLYnzODzewbnkr68kZQp5trXy4Qlcx4mS0v39cj0LRqECJ27rgVXGhJ_k0zlSDP_T8TpQSMM4o");
        }

        .play-button {
          width: 80px;
          height: 80px;
          background-color: rgba(139, 0, 0, 0.8);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          color: white;
          border: 3px solid rgba(255,255,255,0.3);
          transition: all var(--transition-normal);
        }

        .video-placeholder:hover .play-button,
        .video-placeholder:focus .play-button {
          background-color: rgba(139, 0, 0, 1);
          border-color: rgba(255,255,255,0.8);
          transform: scale(1.1);
        }

        .play-button span {
          font-size: 40px;
        }

        video {
          width: 100%;
          height: 100%;
        }

        .caption {
          margin-top: 20px;
          font-style: italic;
          color: rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 768px) {
          .video-container {
            width: 100%;
          }
        }
      `}</style>

      <div className="container text-center">
        <span className="sub-label" aria-hidden="true">Sezione IV</span>
        <h2 id="video-title" className="section-title">Video Introduttivo</h2>
        <div className="separator-gold mx-auto" aria-hidden="true"></div>

        <div className="video-frame liberty-frame fade-in-up">
          <div className="video-container">
            {!isPlaying && (
              <button
                className="video-placeholder"
                onClick={handlePlay}
                aria-label="Avvia video su Gabriele D'Annunzio"
              >
                <div className="play-button" aria-hidden="true">
                  <span className="material-symbols-outlined">play_arrow</span>
                </div>
                <p>Il Vate Parla: Discorso del Quarto dei Mille</p>
                <small>Durata: 04:32</small>
              </button>
            )}
            <video
              ref={videoRef}
              controls
              className={isPlaying ? '' : 'hidden'}
              width="100%"
              preload="metadata"
              onError={() => {
                setIsPlaying(false)
                alert('Errore nel caricamento del video.')
              }}
            >
              <source src="/dannunzio-project/assets/video/dannunzio-intro.mp4" type="video/mp4" />
              <track kind="captions" src="" srcLang="it" label="Italiano" />
              Il tuo browser non supporta il tag video.
            </video>
          </div>
        </div>

        <p className="caption">
          <em>&quot;Io ho quel che ho donato.&quot;</em> - Un raro documento visivo che ritrae il Poeta nell&apos;atto oratorio.
        </p>
      </div>
    </section>
  )
}
