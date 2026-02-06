'use client'

import { useState } from 'react'

interface Fragment {
  id: number
  title: string
  text: string
  isAI: boolean
  feedback: string
  image: string
}

const fragments: Fragment[] = [
  {
    id: 1,
    title: "L'Agonia del Crisoberillo",
    text: `Egli restava assorto e inerte d'innanzi al tripode di bronzo, ove la lenta combustione dei grani orientali esalava una nuvola di fumo azzurrognolo e denso. L'aria della stanza, saturata da quel vapore di sandalo, pareva quasi cristallizzarsi intorno ai mobili di ebano e d'avorio, in una sospensione di tempo inaudita e vana. Egli, l'uomo d'intelletto vorace di sensazioni rare, accarezzava col pollice la superficie di un crisoberillo incastonato in un anello di foggia bizantina, sentendo sotto i polpastrelli la freddezza della pietra farsi quasi tiepida per il contatto della sua carne. Un brivido sottile, simile a un richiamo lontano, gli percorse l'anima: tra le spire evanescenti del fumo, egli cercava invano di ricomporre il fantasma d'una voluttà perduta, assaporando l'amarezza squisita d'un desiderio che, privo ormai d'oggetto, finiva per divorare dolcemente se stesso.`,
    isAI: true,
    feedback: "✓ CORRETTO! Questo frammento è stato generato dall'IA. Notare l'eccessiva ricercatezza lessicale e la costruzione troppo perfetta della prosa decadente.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdGrO5C4uGWHfpH9JWkL4LFshR8y8AEtKQWzkYhRVJsD5gg7ZTLcjLgCH-k8NcSCXbJwg-ldD8EGV2y_IYJ2MQQEfiXRrC1nJ81DchUfQHir0b0jrJkcwSo6QsO60NffKueERFF8mBAleH6gMzA2NoOHnIAKG4vdC9zu2-wLMW4IG9ZavGBEzokoAElNQkCXvoPxfBqUSGO7QS4TXXZoNrpdkMvqwXK-WdjlmA6c3hLWc2Du1KmkcU--1PuIMkts3udmtHZ7Fs_Xvt"
  },
  {
    id: 2,
    title: "Donna Ippolita",
    text: `Avrebbe voluto affrontarlo sùbito, in quello stesso giorno, in quella stessa ora, senza altro indugio, per godere una duplice vittoria e per mordere quindi al frutto che gli offriva la mano di Donna Ippolita. Tutto il suo essere accendevasi d'orgoglio selvaggio, al pensiero di posseder quella bianca e superba donna per diritto di conquista violenta. L'imaginazione gli fingeva un gaudio non mai provato, quasi direi una voluttà d'altri tempi, quando i gentiluomini scioglievano i capelli delle amasie con mani omicide e carezzevoli, affondandovi la fronte ancóra grondante per la fatica dell'abbattimento e la bocca ancóra amara delle profferte ingiurie. Egli era invaso da quella inesplicabile ebrezza che dànno a certi uomini d'intelletto l'esercizio della forza fisica, l'esperimento del coraggio, la rivelazione della brutalità.`,
    isAI: false,
    feedback: "✗ ERRATO! Questo è un frammento autentico da 'Il Piacere' di Gabriele D'Annunzio.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbHej-kr_4W3gKpz63Jic5fR0MixBpVGiI22jaNuQc6Oigq2DveJU1s4VUx09LBfAVy-Es0rNJq8rVMQZIChbGM1DGhUv5w0YXEHBJWbvrEeEW73x8UZwNyiCFhpX7outwVPA9n5M4xBN7lC4fdl3uU-_ADKsFZUbLr7z5MWGnUpUu1ZuXn6pmjOX0uWJzS0nejFHoAVSg3F5lobhJ8ou6sMdZyCJgvFEBkzOmJDoO1TJ1i5zx1JStnq_UYwMPoXmszX1ZqGTswqMv"
  },
  {
    id: 3,
    title: "La notte",
    text: `Andrea si mise su per la scala. Al primo ripiano si soffermò, attirato dal tintinnio dei sonagli, che s'avvicinava. Veramente, egli si sentiva un po' stanco; a anche un po' triste, in fondo al cuore. Dopo la fierezza suscitatagli nel sangue da quel colloquio di scienza d'arme e dal ricordo della sua bravura, una specie d'inquietudine l'invadeva, non bene distinta, mista di dubbio e di scontento. I nervi, troppo tesi in quella giornata violenta e torbida, gli si rilassavano ora, sotto la clemenza della notte primaverile. - Perché, senza passione, per puro capriccio, per sola vanità, per sola prepotenza, erasi egli compiaciuto di sollevare un odio e di rendere dolorosa l'anima di un uomo? - Il pensiero della orribile pena che certo doveva affliggere il suo nemico, in una notte così dolce, gli mosse quasi un senso di pietà.`,
    isAI: false,
    feedback: "✗ ERRATO! Questo è un frammento autentico da 'Il Piacere' di Gabriele D'Annunzio.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK_ugJlaNj8fCs6WzeRM18z8MI4KZcWQtEIWTDXuKhQ-mXDOVG4A-IifFpTaLfDj0cIHJOABwx-UFHLU6QTDU4mR4aonzCuU3pQFiAyOv_LC2QbXNzGzbJu6TmAUKag94FH-B9x82ivBacCzVO3OPSZm_g0H6VYg0xe1mna4I1fZKP6CVT7wVoPZ60d3aNa8BbXGWIM7ru5SpWh8-csMcbDzCeIi4bYave_lyksoLCfZ5Rh0h6n1Sas8yt2o8ZiRm19IW05hvx17hU"
  }
]

export default function FragmentsSection() {
  const [score, setScore] = useState(0)
  const [answeredFragments, setAnsweredFragments] = useState<Set<number>>(new Set())
  const [feedbackVisible, setFeedbackVisible] = useState<{ [key: number]: boolean }>({})
  const [cardStates, setCardStates] = useState<{ [key: number]: 'correct' | 'wrong' | null }>({})

  const handleGuess = (fragment: Fragment) => {
    if (answeredFragments.has(fragment.id)) return

    const newAnswered = new Set(answeredFragments)
    newAnswered.add(fragment.id)
    setAnsweredFragments(newAnswered)

    setFeedbackVisible({ ...feedbackVisible, [fragment.id]: true })

    if (fragment.isAI) {
      setScore(score + 100)
      setCardStates({ ...cardStates, [fragment.id]: 'correct' })
    } else {
      setCardStates({ ...cardStates, [fragment.id]: 'wrong' })
    }

    if (newAnswered.size === fragments.length) {
      setTimeout(() => {
        const message = score + (fragment.isAI ? 100 : 0) >= 100
          ? 'Complimenti! Hai individuato correttamente il testo generato dall\'IA!'
          : 'Il gioco è terminato. Riprova per migliorare il tuo punteggio!'

        if (confirm(`${message}\n\nPunteggio finale: ${score + (fragment.isAI ? 100 : 0)}/${fragments.length * 100}\n\nVuoi giocare ancora?`)) {
          window.location.reload()
        }
      }, 1500)
    }
  }

  return (
    <section id="fragments" className="fragments-section section" aria-labelledby="fragments-title">
      <style jsx>{`
        .fragments-section {
          background-color: var(--bg-beige);
          background-image: url('https://www.transparenttextures.com/patterns/aged-paper.png');
        }

        .fragments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .fragment-card {
          background-color: #F0EAD6;
          border: 1px solid rgba(212, 175, 55, 0.4);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
          display: flex;
          flex-direction: column;
          min-height: 300px;
        }

        .fragment-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          border-color: rgba(212, 175, 55, 0.6);
        }

        .fragment-card.correct {
          border: 2px solid var(--success);
        }

        .fragment-card.wrong {
          border: 2px solid var(--error);
        }

        .fragment-card.shake {
          animation: shake 0.4s ease-in-out;
        }

        .card-header {
          height: 120px;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background-color: var(--accent-brown);
        }

        .card-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.4);
          transition: background var(--transition-normal);
        }

        .fragment-card:hover .card-header::before {
          background: rgba(0,0,0,0.3);
        }

        .card-title {
          position: relative;
          z-index: 1;
          color: var(--text-light);
          font-size: 1.3rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          border-bottom: 2px solid transparent;
          padding-bottom: 5px;
          transition: border-color var(--transition-normal);
        }

        .fragment-card:hover .card-title {
          border-color: var(--secondary-gold);
        }

        .card-body {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .fragment-text {
          font-style: italic;
          color: var(--text-dark);
          font-size: 1rem;
          max-height: 250px;
          overflow-y: auto;
          position: relative;
          padding-left: 15px;
          border-left: 2px solid rgba(212, 175, 55, 0.3);
        }

        .fragment-text::-webkit-scrollbar {
          width: 4px;
        }

        .fragment-text::-webkit-scrollbar-thumb {
          background-color: var(--secondary-gold);
        }

        .card-actions {
          margin-top: auto;
        }

        .btn-game {
          width: 100%;
          padding: 10px;
          background-color: transparent;
          border: 2px solid var(--primary-burgundy);
          color: var(--primary-burgundy);
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
          min-height: 44px;
        }

        .btn-game:hover:not(:disabled) {
          background-color: var(--primary-burgundy);
          color: white;
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .btn-game:active:not(:disabled) {
          transform: translateY(0);
        }

        .btn-game:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .feedback-msg {
          font-size: 0.9rem;
          margin-top: 10px;
          padding: 10px;
          border-radius: 5px;
          text-align: center;
          font-weight: bold;
        }

        .feedback-msg.success {
          background-color: rgba(76, 175, 80, 0.1);
          color: var(--success);
          border: 1px solid var(--success);
        }

        .feedback-msg.error {
          background-color: rgba(244, 67, 54, 0.1);
          color: var(--error);
          border: 1px solid var(--error);
        }

        .info-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background-color: rgba(0,0,0,0.05);
          border-radius: 50px;
          font-size: 0.9rem;
        }

        .score-display {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background-color: rgba(76, 175, 80, 0.1);
          color: var(--success);
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: bold;
          margin-left: 20px;
        }

        @media (max-width: 768px) {
          .fragments-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <div className="text-center mb-5">
          <div className="divider-ornament" aria-hidden="true">
            <span className="line"></span>
            <span className="text">Sfida Letteraria</span>
            <span className="line"></span>
          </div>
          <h2 id="fragments-title" className="section-title">Riconosci l&apos;Inganno</h2>
          <p className="section-desc">
            <em>&quot;La natura è un tempio ove pilastri viventi lasciano sfuggire a tratti confuse parole.&quot;</em><br />
            Due di questi frammenti appartengono al Vate, uno è un&apos;imitazione artificiale. Saprai distinguere l&apos;anima dalla macchina?
          </p>
        </div>

        <div className="fragments-grid" role="list" aria-label="Frammenti letterari">
          {fragments.map((fragment) => (
            <article
              key={fragment.id}
              className={`fragment-card fade-in-up ${cardStates[fragment.id] || ''} ${cardStates[fragment.id] === 'wrong' ? 'shake' : ''}`}
              role="listitem"
              aria-labelledby={`title-${fragment.id}`}
            >
              <div
                className="card-header"
                style={{ backgroundImage: `url('${fragment.image}')` }}
                role="img"
                aria-label={fragment.title}
              >
                <h3 id={`title-${fragment.id}`} className="card-title">{fragment.title}</h3>
              </div>
              <div className="card-body">
                <div className="fragment-text" tabIndex={0}>
                  &quot;{fragment.text}&quot;
                </div>
                <div className="card-actions">
                  <button
                    className="btn-game"
                    onClick={() => handleGuess(fragment)}
                    disabled={answeredFragments.has(fragment.id)}
                    aria-label="Seleziona questo frammento come generato dall'IA"
                  >
                    Questo è generato dall&apos;IA
                  </button>
                  {feedbackVisible[fragment.id] && (
                    <div
                      className={`feedback-msg ${fragment.isAI ? 'success' : 'error'}`}
                      role="alert"
                      aria-live="assertive"
                    >
                      {fragment.feedback}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="instructions mt-4">
          <div className="info-badge" role="status" aria-live="polite">
            <span className="material-symbols-outlined" aria-hidden="true">info</span>
            Seleziona il testo generato artificialmente per guadagnare punti.
          </div>
          {answeredFragments.size > 0 && (
            <div className="score-display" role="status" aria-live="polite">
              Punteggio: <span>{score}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
