# Astro rebuild — branch `astro-rebuild`

## Obiettivo

Ricostruire la baseline corrente di Guide i Toscana con Astro senza cambiare intenzionalmente grafica, contenuti o struttura percepita.

La migrazione vive nel branch `astro-rebuild`; `main` resta la baseline HTML/CSS/JS di riferimento.

## Stato attuale

La migrazione strutturale è completata:

- home English;
- home Norsk;
- 8 tour English;
- 8 tour Norsk;
- switch lingua pagina-per-pagina;
- card tour interamente cliccabili tramite veri link HTML;
- logo originale locale;
- CSS della baseline mantenuto;
- JavaScript ridotto alle sole funzioni realmente necessarie: menu mobile e slideshow;
- output statico Astro;
- canonical e hreflang EN/NB;
- Open Graph e Twitter metadata;
- sitemap XML;
- robots.txt;
- pagina 404 noindex;
- TypeScript strict config.

## GitHub Actions

GitHub Actions non viene usato in questa fase. Il vecchio workflow Pages ereditato da `main` è stato rimosso dal branch Astro per evitare di legare la nuova architettura al deployment attuale.

Quando gli utilizzi Actions torneranno disponibili si potrà scegliere liberamente tra GitHub Pages, Cloudflare Pages o un altro deploy statico.

## Stack

- Astro 6
- TypeScript
- HTML statico generato al build
- CSS della baseline
- JavaScript vanilla minimo
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

Il primo `npm install` creerà anche `package-lock.json`; dopo aver verificato il build è consigliabile commetterlo nel branch per rendere le installazioni riproducibili.

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
    404.astro
    sitemap.xml.ts
    robots.txt.ts
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

## Pages CMS — passo successivo

Pages CMS non viene ancora configurato nel branch. Prima viene testato localmente.

Dopo il test, il percorso consigliato è:

1. introdurre una Content Collection `journal` / `articles`;
2. generare pagine articolo EN/NB da contenuti Markdown/MDX;
3. aggiungere `.pages.yml` con campi editoriali chiari;
4. consentire a Camilla di creare e modificare articoli da editor visuale;
5. mantenere tour, prezzi e impostazioni come contenuti strutturati solo quando avremo deciso quali parti debba poter modificare autonomamente.

## Immagini

Resta una dipendenza temporanea importante: molte fotografie provengono ancora dal vecchio WordPress `guideitoscana.com`.

Prima del go-live definitivo occorre:

- recuperare gli originali;
- copiarli in asset controllati;
- ottimizzarli;
- verificare crop desktop/mobile;
- evitare che la dismissione del vecchio WordPress rompa il nuovo sito.

## Verifica richiesta sul PC locale

Non essendo disponibile un runner di rete in questa sessione, il controllo finale da fare localmente è:

```bash
npm install
npm run build
npm run preview
```

Dopo il primo build riuscito, aggiungere `package-lock.json` al branch.
