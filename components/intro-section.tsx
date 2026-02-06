export default function IntroSection() {
  return (
    <section id="intro" className="intro-section section" aria-labelledby="intro-title">
      <style jsx>{`
        .intro-section {
          background-color: var(--bg-dark);
          color: var(--text-light);
        }

        .intro-section .section-title {
          color: var(--text-light);
        }

        .intro-section .section-desc {
          color: rgba(255, 255, 255, 0.8);
        }

        .icon-large {
          font-size: 4rem;
          color: var(--secondary-gold);
          margin-bottom: 20px;
        }
      `}</style>

      <div className="container text-center">
        <span className="material-symbols-outlined icon-large" aria-hidden="true">history_edu</span>
        <h2 id="intro-title" className="section-title">Un Ritratto del <span className="highlight">Decadentismo</span></h2>
        <div className="separator-gold" aria-hidden="true"></div>
        <p className="section-desc">
          Figura emblematica del Decadentismo europeo, Gabriele D&apos;Annunzio ha trasformato la sua stessa vita in un&apos;opera d&apos;arte inimitabile. Poeta, romanziere, drammaturgo e militare, la sua influenza sulla cultura italiana del Novecento è incalcolabile. Dalle stanze del Vittoriale alle trincee della Grande Guerra, ogni suo gesto fu un verso scolpito nella storia.
        </p>
      </div>
    </section>
  )
}
