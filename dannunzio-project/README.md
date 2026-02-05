# 🦅 Gabriele D'Annunzio - Il Vate

Un sito web interattivo dedicato a Gabriele D'Annunzio, potenziato da intelligenza artificiale. Progetto scolastico della Classe 5R - Liceo Scientifico con curvatura Robotica e Informatica.

![Hero Image](https://img.shields.io/badge/Anno-2026-gold?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📚 Contenuti

Il sito presenta quattro sezioni principali che esplorano la figura di Gabriele D'Annunzio attraverso modalità innovative:

### 1. 💬 Chat Interattiva con D'Annunzio
- Esperienza conversazionale alimentata da **Google Gemini AI**
- Possibilità di interrogare "Il Vate" su filosofia, opere e pensiero
- Interfaccia immersiva con design ispirato al decadentismo

### 2. 🎭 Gioco dei Frammenti Letterari
- Sfida intellettuale: riconoscere testi autentici da quelli generati dall'IA
- Tre frammenti letterari (2 autentici + 1 artificiale)
- Sistema di punteggio interattivo
- Educativo: esplora i limiti e le capacità dell'intelligenza artificiale nella scrittura creativa

### 3. 🎥 Video Introduttivo
- Documento visivo storico su Gabriele D'Annunzio
- Player video integrato e ottimizzato
- Interfaccia elegante con cornice Liberty

### 4. 📜 Ballata AI-Generata
- Poesia in stile dannunziano creata dall'intelligenza artificiale
- "La Ballata del Meriggio Sovrano"
- Analisi dello stile poetico del Vate attraverso l'IA

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup, accessibilità WCAG AA
- **CSS3** - CSS Variables, Flexbox, Grid, Animations
- **Vanilla JavaScript** - ES6+, Intersection Observer API

### Fonts & Icons
- **Google Fonts**: Playfair Display, Crimson Text
- **Material Symbols** per iconografia

### AI Integration
- **Google Gemini** - Chat conversazionale
- **OpenAI/Claude** - Generazione contenuti letterari

### Deployment
- Ottimizzato per **Vercel**, **Netlify** o hosting statico

## 🚀 Setup Locale

### Prerequisiti
- Browser moderno (Chrome, Firefox, Safari, Edge)
- Server HTTP locale per sviluppo

### Installazione

```bash
# Clone del repository
git clone https://github.com/LoackyBit/Gabriele-D-Annunzio-5R.git
cd Gabriele-D-Annunzio-5R/dannunzio-project

# Avvia un server locale (scegli uno dei seguenti):

# Opzione 1: Python 3
python -m http.server 8000

# Opzione 2: Node.js (http-server)
npx http-server -p 8000

# Opzione 3: PHP
php -S localhost:8000

# Opzione 4: VS Code Live Server Extension
# Clicca con il tasto destro su index.html → "Open with Live Server"
```

Apri il browser su `http://localhost:8000`

## 📁 Struttura del Progetto

```
dannunzio-project/
├── index.html              # Pagina principale
├── css/
│   ├── style.css          # Stili principali
│   ├── responsive.css     # Media queries
│   └── animations.css     # Animazioni e transizioni
├── js/
│   ├── main.js            # Script principale (navbar, menu, video)
│   ├── fragments-game.js  # Logica del gioco letterario
│   └── smooth-scroll.js   # Smooth scrolling con offset
├── assets/
│   ├── video/
│   │   └── dannunzio-intro.mp4
│   ├── images/            # Immagini del progetto
│   └── fonts/             # Font personalizzati (opzionale)
└── README.md
```

## 🎨 Design & UX

### Palette Colori
- **Borgogna** (`#8B0000`) - Colore primario, evoca passione e letteratura
- **Oro** (`#D4AF37`) - Accenti, richiami al decadentismo e al Liberty
- **Marrone Scuro** (`#2C1810`) - Testo e contrasti
- **Beige** (`#F5F5DC`) - Background luminoso

### Tipografia
- **Heading**: Playfair Display (serif elegante)
- **Body**: Crimson Text (leggibilità ottimale)

### Accessibilità
- ✅ Navigazione completa da tastiera
- ✅ ARIA labels e semantic HTML
- ✅ Contrasto colori WCAG AA compliant
- ✅ Skip to main content link
- ✅ Focus states visibili
- ✅ Responsive design mobile-first

## 📱 Responsive Breakpoints

| Breakpoint | Dimensione | Target Device         |
|------------|------------|-----------------------|
| Desktop    | > 1024px   | Desktop, laptop       |
| Tablet     | 768-1024px | iPad, tablet          |
| Mobile     | < 768px    | Smartphone landscape  |
| Small      | < 480px    | Smartphone portrait   |

## 🧪 Testing & Validazione

### Validatori Usati
- ✅ [W3C HTML Validator](https://validator.w3.org/)
- ✅ [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- ✅ Chrome Lighthouse (Performance, Accessibility, SEO)

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📊 Performance

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Lighthouse Score**: 95+ (Performance / Accessibility / Best Practices / SEO)

## 🤝 Contributi

Progetto didattico realizzato per scopi educativi. Feedback e suggerimenti sono benvenuti!

### Come Contribuire
1. Fork del progetto
2. Crea un branch (`git checkout -b feature/nuova-feature`)
3. Commit delle modifiche (`git commit -m 'Aggiunge nuova feature'`)
4. Push del branch (`git push origin feature/nuova-feature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è rilasciato sotto licenza MIT per scopi educativi.

## 👨‍💻 Autore

**Lorenzo**  
Classe 5R - Liceo Scientifico  
Curvatura Robotica e Informatica

## 🙏 Credits & Fonti

- **Testi autentici**: Estratti da "Il Piacere" di Gabriele D'Annunzio (pubblico dominio)
- **Immagini**: Google Arts & Culture (uso educativo)
- **AI Integration**: Google Gemini per chat interattiva
- **Icone**: Material Symbols (Google)
- **Fonts**: Google Fonts (Playfair Display, Crimson Text)

## 📚 Risorse Utili

- [Gabriele D'Annunzio - Wikipedia](https://it.wikipedia.org/wiki/Gabriele_D%27Annunzio)
- [Il Vittoriale degli Italiani](https://www.vittoriale.it/)
- [Google Gemini AI](https://gemini.google.com/)

## 📅 Changelog

### v1.0.0 (Febbraio 2026)
- 🎉 Release iniziale
- ✅ Integrazione Google Gemini chat
- ✅ Gioco dei frammenti letterari
- ✅ Video player integrato
- ✅ Ballata AI-generata
- ✅ Design responsive completo
- ✅ Ottimizzazioni SEO e accessibilità

---

<p align="center">
  <em>"Ama il tuo sogno se pur ti tormenta."</em><br>
  <strong>- Gabriele D'Annunzio</strong>
</p>

<p align="center">
  Made with ❤️ by Classe 5R | 2026
</p>
