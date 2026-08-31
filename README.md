# Giardinello House — Landing Page

Sito vetrina ufficiale di **consorzio Giardinello House** — Progetto immobiliare di ville e villini esclusivi a Seccagrande e Borgo Bonsignore, nel territorio di Ribera, Agrigento, Sicilia.

## Struttura

```
├── index.html              # Pagina principale
├── css/styles.css          # Design system + responsive + depliant + print
├── js/main.js              # Funzionalità (lingua, modali, form, depliant, scroll)
├── assets/
│   ├── images/
│   │   ├── ita/            # Rendering ville versione Italiano
│   │   ├── eng/            # Rendering ville versione Inglese
│   │   ├── foto_mare*.jpeg # Foto costa (usate per entrambe le lingue)
│   │   ├── planimetria.jpeg
│   │   ├── pianta.jpeg
│   │   └── consorzio_1.jpeg
│   ├── video_villa.mp4     # Video rendering 3D villa (sfondo hero)
│   └── *.pdf               # Brochure e documenti
├── ita/                    # Sorgente immagini ITA (originale)
├── eng/                    # Sorgente immagini ENG (originale)
├── README.md               # Questo file
├── AGENTS.md               # Guida per agenti AI
└── prompt_creazione.md     # Specifica originale del progetto
```

## Funzionalità

- **Bilingue IT/EN** — Italiano predefinito, inglese selezionabile dall'header
- **8 sezioni**: Hero, Value Proposition, Le Residenze, Territorio, Masterplan, Community, CTA/Contatti, Footer
- **4 ville** con modal dettagliato e lightbox immagini
- **Depliant digitale** — overlay con schede ville + consorzio, tab switching, Stampa/Salva PDF
- **Form contatti** con validazione client-side
- **WhatsApp** integrato ("Parla con noi")
- **Menu mobile** hamburger con navigazione completa
- **Smooth scroll** e animazioni fade-in
- **Header sticky** trasparente → bianco su scroll
- **SEO**: meta title, description, struttura semantica (H1 singolo, H2 per sezioni)
- **Video 3D** rendering villa come sfondo dell'hero
- **Download PDF** direttamente dal menu
- **Responsive**: mobile-first, perfetto su smartphone
- **Accessibilità**: contrasto adeguato, alt text, focus ring, prefers-reduced-motion
- **Stampa**: CSS print dedicato per il depliant

## Palette

| Colore          | Hex       | Uso                               |
| --------------- | --------- | --------------------------------- |
| Bianco avorio   | `#F7F4EE` | Sfondo principale                 |
| Sabbia chiara   | `#E5D3BF` | Accenti Villa Perla               |
| Terracotta      | `#B96040` | CTA, accento Villa Corallo        |
| Verde salvia    | `#899B68` | Accento Villa Smeraldo            |
| Azzurro polvere | `#91BCD6` | Accento Villa Azzurra             |
| Blu notte       | `#152331` | Footer, Community, Depliant brand |
| Testo antracite | `#1B1B1B` | Testo principale                  |

## Tipografia

- **Titoli**: Cormorant Garamond (serif)
- **Corpo**: Manrope (sans-serif)

## Immagini per lingua

Le immagini delle ville hanno versioni separate per ITA e ENG:

- `assets/images/ita/` — versione italiana (testi Italiano nelle immagini)
- `assets/images/eng/` — versione inglese (testi Inglese nelle immagini)
- Le foto mare e planimetrie sono condivise tra entrambe le lingue

Il sistema scambia automaticamente le immagini quando l'utente cambia lingua.

## Avvio

Aprire `index.html` nel browser. Nessuna build richiesta — HTML/CSS/JS puro.

## Note

- Le immagini dei rendering hanno valore illustrativo (disclaimer presente nel sito)
- Il form è predisposto per l'integrazione con email/CRM
- Predisposizione per Google Analytics e pixel di marketing (da attivare con consenso)
- `video_villa.mp4` viene riprodotto automaticamente in loop come sfondo dell'hero (muto)
- Il depliant digitale supporta la stampa/Salva PDF con Ctrl+P o il pulsante dedicato
