export default function Footer() {
  return (
    <footer role="contentinfo">
      <style jsx>{`
        footer {
          background-color: #1a0b0f;
          border-top: 4px solid var(--secondary-gold);
          color: rgba(255, 255, 255, 0.6);
          padding: 50px 0;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .footer-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-links {
          display: flex;
          gap: 20px;
        }

        .footer-links a:hover {
          color: var(--text-light);
        }

        .copyright {
          text-align: center;
          font-size: 0.8rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
        }

        .text-gold {
          color: var(--secondary-gold);
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 20px;
          }

          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>

      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <span className="material-symbols-outlined text-gold" aria-hidden="true">school</span>
            <span>Progetto Didattico Classe 5R - Liceo Scientifico</span>
          </div>
          <nav className="footer-links" aria-label="Menu footer">
            <a href="https://www.dannunzio.org" target="_blank" rel="noopener noreferrer">Fonti</a>
            <a href="#" aria-label="Crediti del progetto">Credits</a>
            <a href="#" aria-label="Informativa privacy">Privacy</a>
          </nav>
        </div>
        <div className="copyright">
          © 2026 5R Liceo Scientifico. Curvatura Robotica e Informatica.
        </div>
      </div>
    </footer>
  )
}
