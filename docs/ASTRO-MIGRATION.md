# Astro rebuild — branch `astro-rebuild`

## Obiettivo

Ricostruire la baseline corrente di Guide i Toscana con Astro senza cambiare intenzionalmente grafica, contenuti o struttura percepita.

La migrazione vive nel branch `astro-rebuild`; `main` resta la baseline HTML/CSS/JS di riferimento.

## Vincoli attuali

- GitHub Actions non viene usato in questa fase.
- Il workflow esistente continua a essere limitato a `main`, quindi il branch Astro non lo attiva.
- Il progetto deve essere eseguibile e verificabile localmente.
- Output Astro: completamente statico / prerenderizzato.
- English e Norsk devono generare le stesse pagine e mantenere lo switch lingua pagina-per-pagina.
- Le 8 pagine tour mantengono gli slug attuali.
- Il logo originale viene riutilizzato come asset locale.
- Le immagini dei tour restano temporaneamente collegate al vecchio WordPress, come nella baseline.

## Stack

- Astro 6
- TypeScript
- HTML statico generato al build
- CSS della baseline riutilizzato senza redesign
- JavaScript vanilla della baseline per menu e slideshow
- nessun backend
- nessun database
- nessun CMS in questa prima migrazione

## Requisiti Node

Astro 6 richiede Node 22.12.0 o superiore. È presente `.nvmrc` con `22.12.0`.

## Avvio locale

```bash
npm install
npm run dev
```

Il sito locale è configurato alla root (`/`) e non al path GitHub Pages.

## Build locale

```bash
npm run build
npm run preview
```

L'output viene generato in `dist/`.

## Build futura per GitHub Pages

La configurazione usa la variabile `GITHUB_PAGES=true` per attivare:

- `site: https://cesare-ml.github.io`
- `base: /camilla-sinding-larsen`

In PowerShell:

```powershell
$env:GITHUB_PAGES='true'
npm run build
```

Quando gli utilizzi GitHub Actions saranno nuovamente disponibili si potrà sostituire il vecchio workflow con il deploy Astro ufficiale oppure pubblicare `dist/` con il sistema desiderato.

## Struttura

```text
src/
  components/
    Header.astro
    Footer.astro
    HomePage.astro
    TourCard.astro
    TourDetail.astro
  data/
    home.ts
    tours.ts
  layouts/
    BaseLayout.astro
  lib/
    paths.ts
  pages/
    index.astro
    nb/index.astro
    tours/[slug].astro
    nb/tours/[slug].astro
  styles/
    astro.css
public/
  assets/
```

## Perché i tour sono dati e non 16 file duplicati

English e Norsk condividono lo stesso componente `TourDetail.astro`. Titolo, testo, immagini e metadati sono definiti in `src/data/tours.ts`.

Questo evita di mantenere manualmente sedici pagine HTML quasi uguali e prepara il progetto a un successivo passaggio verso Content Collections o CMS.

## CMS futuro

Questa migrazione non introduce ancora un CMS. La struttura Astro rende però semplice il passaggio successivo:

1. spostare articoli e, se opportuno, tour in Content Collections;
2. collegare un CMS visuale/Git-based;
3. permettere a Camilla di creare bozze e pubblicare articoli senza modificare codice.

## Criterio di parità con la baseline

Prima di considerare il branch pronto da sostituire a `main`, verificare:

- home EN desktop/mobile;
- home NB desktop/mobile;
- logo e header;
- slideshow;
- 8 card completamente cliccabili;
- 8 tour EN;
- 8 tour NB;
- gallerie;
- frase custom tour;
- contatti e prezzi;
- switch EN/NO sulla stessa pagina;
- URL con trailing slash;
- build `npm run build` senza errori.
