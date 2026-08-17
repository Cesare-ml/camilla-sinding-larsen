# Camilla Sinding-Larsen — website rebuild

## Obiettivo

Ricostruire `guideitoscana.com` come sito statico GitHub Pages dedicato **esclusivamente a Camilla Sinding-Larsen**.

Il lavoro è diviso intenzionalmente in due fasi:

1. **Baseline / replica riconoscibile** — una versione molto vicina al sito attuale per struttura, tono, contenuti, immagini e modalità di navigazione, eliminando Annika e le parti non più pertinenti.
2. **Redesign** — solo dopo aver mostrato la baseline a Camilla, preparare proposte visive alternative e miglioramenti UX/SEO/conversione senza perdere il carattere personale del servizio.

Questa separazione serve a farle vedere subito qualcosa che riconosce, avere un riferimento concreto da commentare e poi cambiare stile senza discutere in astratto.

## Scelte della baseline

- sito statico, senza CMS e senza build step;
- compatibile con GitHub Pages;
- HTML + CSS + JavaScript vanilla;
- responsive;
- English come homepage principale;
- Norwegian disponibile in `/nb/`;
- svedese rimosso, perché il nuovo sito è solo di Camilla;
- italiano previsto come possibile fase successiva;
- nessun riferimento ad Annika;
- contatti di Camilla mantenuti dalla versione attuale;
- prezzi della versione attuale mantenuti nella baseline: half day €170 / full day €340;
- elenco dei tour mantenuto il più vicino possibile all'attuale;
- immagini della versione attuale riutilizzate temporaneamente tramite URL remoti, così la prima demo resta riconoscibile;
- contenuti testuali riscritti/adattati al singolare invece di copiare meccanicamente il vecchio sito a due guide.

## Perché non ridisegnare subito

Camilla ha già espresso che lo stile grafico attuale non le piace. Nonostante questo, il primo obiettivo non è scegliere il nuovo stile ma creare una base funzionante che permetta di:

- vedere immediatamente cosa cambia passando da due guide a una;
- verificare contenuti, tour, prezzi, lingue e contatti;
- raccogliere il suo feedback su cosa conservare e cosa eliminare;
- produrre in seguito 2–3 direzioni visive realmente confrontabili.

## Struttura baseline

### Header

- wordmark testuale `GUIDE I TOSCANA`;
- menu a sezioni: About / Tours / Prices / Contact;
- selettore English / Norsk.

### Hero

- slideshow con quattro immagini già usate dal sito attuale;
- titolo `Guided Tours in Tuscany`;
- sottotitolo centrato sulla figura di Camilla.

### Introduzione

Tre blocchi brevi:

- tour privati/costruiti su richiesta;
- esperienza di oltre trent'anni in Italia;
- valore della guida autorizzata e della formazione artistica.

### About Camilla

Una sola scheda personale con:

- foto;
- background norvegese;
- esperienza come conservatrice/restauratrice;
- attività di guida autorizzata;
- lingue: Norwegian / English / Italian;
- telefono ed email.

### Tour

Baseline con gli otto tour principali della versione inglese attuale:

1. Palazzo Pitti and Boboli Garden
2. The classic Florence city tour
3. Florence city and markets tour
4. The Uffizi Gallery
5. Santa Maria del Fiore and the Cathedral Square
6. Siena city tour
7. Tuscan towns
8. A day in the countryside

I dettagli sono presentati in pannelli espandibili, così la prima demo mantiene il comportamento semplice del vecchio sito ma evita di creare subito otto template separati che verrebbero probabilmente ridisegnati nella fase successiva.

### Prices

- Half day — max 3 hours — €170
- Full day — max 6 hours — €340

### Contact

- Camilla Sinding-Larsen
- `camilla@guideitoscana.com`
- `+39 333 6369950`
- Norwegian / English / Italian

## Asset temporanei

Per la baseline vengono referenziate alcune immagini già pubblicate dal sito esistente, tra cui:

- `/wp-content/uploads/2018/02/slide1.jpg`
- `/wp-content/uploads/2018/02/slide2.jpg`
- `/wp-content/uploads/2018/02/slide3.jpg`
- `/wp-content/uploads/2018/02/slide4.jpg`
- `/wp-content/uploads/2024/03/camilla3-300x300.jpg`
- immagini Uffizi, Duomo e città toscane della galleria attuale.

**Prima della versione definitiva** gli originali dovranno essere copiati nel repository (o sostituiti con nuove immagini) per evitare dipendenze dal vecchio WordPress.

## Fase 2 — proposte da mostrare a Camilla

Dopo approvazione dei contenuti della baseline, preparare almeno tre homepage alternative.

### A. Editorial / Art historian

Direzione più elegante e culturale:

- grande fotografia;
- serif editoriale;
- molto spazio bianco;
- opere, architettura e dettagli materici;
- enfasi sul background da conservatrice d'arte;
- sensazione da guida privata / boutique culturale.

### B. Contemporary Tuscany

Direzione più calda e contemporanea:

- palette ispirata a pietra, terracotta, ulivo e crema;
- immagini del territorio più immersive;
- layout modulare;
- tono personale e accessibile;
- ottimo equilibrio tra arte, città, cibo e campagna.

### C. Minimal Scandinavian

Direzione più legata all'identità di Camilla:

- grafica nordica minimale;
- tipografia pulita;
- colori neutri;
- forte contrasto tra semplicità scandinava e immagini toscane;
- brand personale `Camilla Sinding-Larsen` in primo piano.

## Miglioramenti funzionali da valutare dopo la baseline

- CTA unica `Check availability` / `Plan your tour`;
- form richiesta con data, numero persone, città, lingua e messaggio;
- WhatsApp opzionale;
- recensioni verificabili;
- singole landing SEO per Firenze, Uffizi, Siena e Toscana;
- dati strutturati;
- hreflang EN/NB/IT;
- informazioni più chiare su durata, biglietti, inclusioni e meeting point;
- FAQ;
- immagini ottimizzate in WebP/AVIF;
- analytics privacy-friendly;
- dominio personalizzato in un secondo momento.

## GitHub Pages

Il repository contiene un workflow `pages.yml` per pubblicare direttamente il sito statico.

Il repository è attualmente privato e GitHub Pages non risulta ancora abilitato. Una volta pronta la prima demo, nelle impostazioni del repository va selezionato:

`Settings → Pages → Build and deployment → Source → GitHub Actions`

Dopo questa impostazione, ogni push su `main` pubblicherà automaticamente la versione corrente.

## Regola di lavoro

La baseline deve restare intenzionalmente conservativa. Qualsiasi cambiamento che trasformi in modo significativo identità, palette, tipografia, struttura commerciale o brand va trattato come **proposta di fase 2**, non incorporato di nascosto nella replica iniziale.
