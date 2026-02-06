import type { Metadata } from 'next'
import { Playfair_Display, Crimson_Text } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const crimson = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-crimson',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gabriele D\'Annunzio - Il Vate | Progetto Scolastico Interattivo',
  description: 'Sito scolastico dedicato a Gabriele D\'Annunzio con progetti interattivi: chat AI, gioco letterario, video e poesia generata dall\'IA. Classe 5R - Liceo Scientifico.',
  keywords: 'Gabriele D\'Annunzio, letteratura italiana, decadentismo, Il Piacere, Alcyone, intelligenza artificiale, progetto scolastico, Google Gemini',
  authors: [{ name: 'Lorenzo - Liceo Scientifico 5R' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://gabriele-dannunzio.vercel.app/',
    title: 'Gabriele D\'Annunzio - Il Vate',
    description: 'Progetto scolastico interattivo su D\'Annunzio con IA, gioco letterario e contenuti multimediali',
    images: [{
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwJUfpZZDU-wsKWJ7qDSPjXcYFSxfi1rNQiSD_UyQ72b-qTECl8SjcPuXWT86Xa6RUjuO568QNOSynhF_4OXFIhoFnTVkKEX9in8XOU5WvenbMkcYF1pLO-Wtv35HbOqdqO9-m-MK2tKyd7Ntv5bjoOhU59QwLM13rVGilNST-GEQPw0ccXaXD3pw-_PbT_oZBx8EtkqMpsSyz6PCU-qr7fegHVYKAknuFAVNq1CLabAMMORqCM8eBOqdMxZvQXcX8sJ8YfqYRMZFq',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriele D\'Annunzio - Il Vate',
    description: 'Progetto scolastico interattivo su D\'Annunzio',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBwJUfpZZDU-wsKWJ7qDSPjXcYFSxfi1rNQiSD_UyQ72b-qTECl8SjcPuXWT86Xa6RUjuO568QNOSynhF_4OXFIhoFnTVkKEX9in8XOU5WvenbMkcYF1pLO-Wtv35HbOqdqO9-m-MK2tKyd7Ntv5bjoOhU59QwLM13rVGilNST-GEQPw0ccXaXD3pw-_PbT_oZBx8EtkqMpsSyz6PCU-qr7fegHVYKAknuFAVNq1CLabAMMORqCM8eBOqdMxZvQXcX8sJ8YfqYRMZFq'],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦅</text></svg>",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${playfair.variable} ${crimson.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
