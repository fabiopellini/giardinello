# AGENTS.md — Giardinello House Landing Page

Guida per agenti AI e sviluppana che lavorano su questo progetto.

## Contesto

Sito vetrina per **Giardinello House S.r.l.**, azienda che sviluppa ville esclusive a Seccagrande/Borgo Bonsignore (Ribera, Agrigento, Sicilia). Il sito raccoglie richieste di contatto da potenziali acquirenti.

## Stack

- **HTML/CSS/JS puro** — nessun framework, nessuna build step
- **Font**: Google Fonts (Cormorant Garamond + Manrope)
- **Nessuna dipendenza esterna** — tutto inline o locale

## File principali

| File | Responsabilità |
|------|----------------|
| `index.html` | Tutta la struttura + contenuti bilingual (data-it / data-en) |
| `css/styles.css` | Design system, layout, responsive, animazioni, depliant, print |
| `js/main.js` | Switch lingua, modali, lightbox, depliant, form, scroll, menu mobile |
| `assets/images/ita/` | Rendering ville versione Italiano |
| `assets/images/eng/` | Rendering ville versione Inglese |
| `assets/images/` | Foto mare, planimetrie, consorzio (condivise) |
| `assets/video_villa.mp4` | Video 3D rendering villa (sfondo hero) |
| `assets/*.pdf` | Brochure e documenti scaricabili |

## Convenzioni

### Lingua
- Tutti i testi usano attributi `data-it` e `data-en` sull'elemento HTML
- Il testo di default è in italiano; l'inglese si applica via JavaScript
- Non aggiungere testi hardcoded — usare sempre il sistema data-it/data-en
- Il selettore lingua è nell'header (`.lang-switch`) e nel menu mobile (`.lang-switch-mobile`)
- Le immagini hanno attributi `data-it-src` e `data-en-src` per lo swap automatico

### CSS
- Variabili colore in `:root` — mai hardcoded hex nei blocchi figli
- Font tramite CSS variables: `--font-serif`, `--font-sans`
- Mobile-first: breakpoint a 480px, 768px, 1024px
- Animazioni: solo `opacity` e `transform` (GPU-only)
- Ridurre animazioni con `prefers-reduced-motion: reduce`
- CSS print dedicato per il depliant

### Struttura sezioni
Ogni sezione usa la classe `.container` (max-width: 1280px) e `.fade-in` per l'animazione all'entrata.

### Immagini
- Immagini ville in `assets/images/ita/` e `assets/images/eng/` (per lingua)
- Foto mare e planimetrie in `assets/images/` (condivise)
- Usare `loading="lazy"` tranne che per l'hero (`loading="eager"`)
- Ogni img deve avere `alt` descrittivo
- Per lo swap lingua: usare attributi `data-it-src` e `data-en-src`

### Ville
I dati delle 4 ville sono in `js/main.js` nell'oggetto `villaData`. Ogni villa ha:
- `image`: oggetto con percorsi IT/EN
- `title`: nome villa
- `desc`: oggetto con testi IT/EN
- `features`: array con punti chiave IT/EN
- `color`: colore accento hex

Per modifiche ai contenuti delle ville, editare `villaData` in `main.js`.

### Depliant
- Overlay full-screen con tab switching tra ville e consorzio
- Ogni scheda: immagine, testo descrittivo, contatti, branding
- Pulsante "Stampa / Salva PDF" usa `window.print()` con CSS print dedicato
- Funzioni: `openDepliant()`, `closeDepliant()`, `switchDepliantTab(tab)`

## Contatti

| Ruolo | Telefono |
|-------|----------|
| Arch. Salvatore Triassi | +39 340 3907922 |
| Ing. Vincenzo Caruana | +39 340 5796680 |
| Dott. Gianni Riggi | +39 366 1116521 |
| Arch. Massimiliano Triassi | +39 366 4353779 |

Email: consorziogiardinellohouse@gmail.com

## TODO / Integrazioni future

- [ ] Collegare form a backend/CRM (attualmente logga su console)
- [ ] Attivare Google Analytics con consenso cookie
- [ ] Attivare Google Maps nella sezione territorio
- [ ] Aggiungere pixel marketing (Meta, LinkedIn) con consenso
- [ ] Aggiungere Cookie Policy page
- [ ] Aggiungere Privacy Policy page
- [ ] Ottimizzare immagini (convertire a WebP)
- [ ] Aggiungere Open Graph meta tags per social sharing

## Note legali

- Non inventare prezzi, metrature, distanze, tempi di consegna, classi energetiche
- Non usare claim tipo "vista mare garantita", "investimento sicuro", "rendita garantita"
- Le immagini hanno valore illustrativo — disclaimer presente nel sito
- Dati tecnici non confermati come placeholder modificabili
