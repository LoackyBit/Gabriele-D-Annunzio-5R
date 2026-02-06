export default function BallataSection() {
  return (
    <section id="ballata" className="ballata-section section" aria-labelledby="ballata-title">
      <style jsx>{`
        .ballata-section {
          background-color: #f5f0e6;
          background-image: url('https://www.transparenttextures.com/patterns/cream-paper.png');
        }

        .poem-card {
          max-width: 800px;
          margin: 0 auto;
          background-color: rgba(255, 255, 255, 0.6);
          padding: 40px;
          border-radius: 8px;
          border: 1px solid rgba(44, 24, 16, 0.1);
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .poem-subtitle {
          font-size: 1rem;
          color: var(--primary-burgundy);
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .poem-text {
          font-family: var(--font-body);
          font-size: 1.2rem;
          line-height: 2;
          color: var(--accent-brown);
        }

        @media (max-width: 768px) {
          .poem-card {
            padding: 20px;
          }

          .poem-text {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="container text-center">
        <span className="sub-label" aria-hidden="true">Alcyone</span>
        <h2 id="ballata-title" className="section-title">La Ballata del Meriggio Sovrano</h2>
        <div className="divider-ornament" aria-hidden="true">
          <span className="line"></span>
          <span className="material-symbols-outlined">history_edu</span>
          <span className="line"></span>
        </div>

        <article className="poem-card fade-in-up">
          <h3 className="poem-subtitle">Una ballata nello stile dannunziano, creata dall&apos;intelligenza artificiale</h3>

          <div className="poem-text" role="article" aria-label="Testo della ballata">
            Sulla sabbia che l&apos;arsura divora<br />
            il passo dell&apos;uomo più non risuona<br />
            ma il respiro del Tirreno che ancora<br />
            si gonfia nel petto di zaffiro e dona<br />
            il suo sale al vento. Vedi la tamerice<br />
            che d&apos;oro si veste e s&apos;abbandona<br />
            sotto il dardo di Febo, implacabile ice<br />
            che non perdona la carne mortale.<br />
            <br />
            Ogni ago di pino è corda felice<br />
            tesa per un&apos;arpa che nel verticale<br />
            silenzio attende un tocco di dita<br />
            divine. Sento la linfa vitale<br />
            e amara scorrere dentro la ferita<br />
            delle mie vene d&apos;argilla densa,<br />
            mentre la mia forma si fa smarrita<br />
            e il volto si screpola. Chi mai pensa<br />
            di trovarmi? Divengo scorza dura<br />
            di corbezzolo, un&apos;ombra immensa<br />
            che non ha più nome. La mia natura<br />
            si perde nell&apos;onda salmastra, io sono<br />
            il sangue del mare, la vampa sicura<br />
            che sulla duna solitaria fa dono<br />
            di sé. Il silenzio è il grido che s&apos;alza<br />
            dal mio petto, un rutilante tuono<br />
            che morde la calura. La mia balza<br />
            è il mondo: non v&apos;è dio che eguagli<br />
            l&apos;atto mio mentre il fulgore mi scalza<br />
            dal tempo. Tutto è mio. Tra i barbagli<br />
            dell&apos;anima ch&apos;entro la selva io spando,<br />
            piego il destino al mio sovrano bando.
          </div>
        </article>
      </div>
    </section>
  )
}
