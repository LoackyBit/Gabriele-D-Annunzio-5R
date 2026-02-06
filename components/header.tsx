'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <style jsx>{`
        header.navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: background-color var(--transition-normal), padding var(--transition-normal), box-shadow var(--transition-normal);
          background-color: rgba(34, 16, 21, 0.95);
          border-bottom: 1px solid rgba(212, 175, 55, 0.3);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        header.navbar.scrolled {
          padding: 10px 0;
          background-color: rgba(34, 16, 21, 0.98);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-light);
          transition: transform var(--transition-fast);
        }

        .brand:hover {
          transform: scale(1.05);
        }

        .brand .icon {
          font-size: 32px;
          color: var(--secondary-gold);
          transition: transform var(--transition-normal);
        }

        .brand:hover .icon {
          transform: rotate(10deg);
        }

        .brand-text {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          font-style: italic;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          padding: 5px 0;
          transition: color var(--transition-fast);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--secondary-gold);
          transition: width var(--transition-normal);
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--secondary-gold);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-light);
          cursor: pointer;
          padding: 8px;
          border-radius: var(--radius-sm);
          transition: background-color var(--transition-fast);
        }

        .menu-toggle:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .mobile-menu {
          position: fixed;
          top: 70px;
          left: 0;
          width: 100%;
          background-color: rgba(34, 16, 21, 0.98);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          transform: translateY(-150%);
          transition: transform 0.4s ease;
          z-index: 999;
          border-bottom: 1px solid var(--secondary-gold);
        }

        .mobile-menu.active {
          transform: translateY(0);
        }

        .mobile-link {
          color: var(--text-light);
          font-size: 1.1rem;
          text-align: center;
          padding: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .mobile-link:hover {
          color: var(--secondary-gold);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .menu-toggle {
            display: block;
          }
        }
      `}</style>

      <div className="container">
        <div className="navbar-content">
          <a href="#hero" className="brand" aria-label="Torna alla homepage">
            <span className="material-symbols-outlined icon" aria-hidden="true">flight</span>
            <span className="brand-text">Il Vate</span>
          </a>

          <nav className="nav-links" role="navigation" aria-label="Menu principale">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#chat" className="nav-link">Chatta</a>
            <a href="#fragments" className="nav-link">Frammenti</a>
            <a href="#video" className="nav-link">Video</a>
            <a href="#ballata" className="nav-link">Ballata</a>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Apri menu di navigazione"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>

        <nav
          className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
          role="navigation"
          aria-label="Menu mobile"
        >
          <a href="#hero" className="mobile-link" onClick={handleLinkClick}>Home</a>
          <a href="#chat" className="mobile-link" onClick={handleLinkClick}>Chatta</a>
          <a href="#fragments" className="mobile-link" onClick={handleLinkClick}>Frammenti</a>
          <a href="#video" className="mobile-link" onClick={handleLinkClick}>Video</a>
          <a href="#ballata" className="mobile-link" onClick={handleLinkClick}>Ballata</a>
        </nav>
      </div>
    </header>
  )
}
