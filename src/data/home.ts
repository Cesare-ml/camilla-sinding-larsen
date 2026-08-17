import type { Locale } from '../lib/paths';

export const heroSlides = [
  'https://www.guideitoscana.com/wp-content/uploads/2018/02/slide1.jpg',
  'https://www.guideitoscana.com/wp-content/uploads/2018/02/slide2.jpg',
  'https://www.guideitoscana.com/wp-content/uploads/2018/02/slide3.jpg',
  'https://www.guideitoscana.com/wp-content/uploads/2018/02/slide4.jpg'
];

export const homeCopy: Record<Locale, any> = {
  en: {
    htmlLang: 'en',
    title: 'Camilla Sinding-Larsen | Guided Tours in Tuscany',
    description: 'Private guided tours in Florence, Siena and Tuscany with licensed guide and former art conservator Camilla Sinding-Larsen. Tours in English, Norwegian and Italian.',
    nav: { about: 'About', tours: 'Our tours', prices: 'Prices', contact: 'Contact', menu: 'Menu' },
    hero: {
      eyebrow: 'Camilla Sinding-Larsen · Licensed tour guide',
      title: 'Guided Tours in Tuscany',
      subtitle: 'Discover Florence, Siena and the Tuscan countryside through art, history, traditions and everyday Italian life.',
      toursCta: 'Explore the tours',
      contactCta: 'Contact Camilla'
    },
    intro: {
      eyebrow: 'Guide in Tuscany',
      title: 'A personal way to discover Tuscany',
      lead: 'Private and small-group visits can be tailored to your interests, whether you want to focus on art, architecture, history, food traditions or simply get to know the places you are visiting.',
      cards: [
        ['Florence & Siena', 'Walk through historic centres, museums, churches and palaces with the context that turns monuments into stories.'],
        ['More than 30 years in Italy', 'Camilla combines deep familiarity with Italian life and culture with the perspective of someone who originally came to Italy from Norway.'],
        ['Art from another point of view', 'Her earlier work as an art conservator brings particular attention to materials, artistic techniques, workshops and the physical making of works of art.']
      ]
    },
    about: {
      eyebrow: 'About',
      title: 'Camilla Sinding-Larsen',
      paragraphs: [
        'Camilla is from Norway and has lived in Italy for more than thirty years. She originally trained in Rome as an art conservator and worked on conservation projects in Italy and abroad before becoming a professionally licensed tour guide in Tuscany.',
        'That background gives her tours a distinctive point of view. Alongside the history of artists, patrons and cities, she can explain how works were made, which materials and techniques were used, and the practical world behind the masterpieces we see today.',
        'Her aim is to make Tuscany understandable, lively and enjoyable — connecting its extraordinary artistic heritage with the landscape, food traditions and contemporary Italian culture.'
      ],
      languages: 'Guides in Norwegian, English and Italian'
    },
    tours: {
      eyebrow: 'Experiences',
      title: 'Our tours in Tuscany',
      lead: 'A first selection based on the tours offered by the current site. Every visit can be adapted to the people, time available and interests of the group.',
      link: 'Discover the tour',
      custom: 'Customized tours can be organized on request.'
    },
    prices: {
      eyebrow: 'Prices',
      title: 'Simple rates',
      half: 'Half day',
      halfTime: 'max 3 hours',
      full: 'Full day',
      fullTime: 'max 6 hours'
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Plan your visit with Camilla',
      lead: 'Write or call with the city, date, number of people and what you would most like to see. The itinerary can then be adapted around your visit.',
      languages: 'Norwegian · English · Italian'
    },
    footer: 'Guided Tours in Tuscany'
  },
  nb: {
    htmlLang: 'nb',
    title: 'Camilla Sinding-Larsen | Guidede turer i Toscana',
    description: 'Private guidede turer i Firenze, Siena og Toscana med autorisert guide og tidligere kunstkonservator Camilla Sinding-Larsen. Guiding på norsk, engelsk og italiensk.',
    nav: { about: 'Om Camilla', tours: 'Våre turer', prices: 'Priser', contact: 'Kontakt', menu: 'Meny' },
    hero: {
      eyebrow: 'Camilla Sinding-Larsen · Autorisert guide',
      title: 'Guidede turer i Toscana',
      subtitle: 'Oppdag Firenze, Siena og den toskanske landsbygda gjennom kunst, historie, tradisjoner og italiensk hverdagsliv.',
      toursCta: 'Se turene',
      contactCta: 'Kontakt Camilla'
    },
    intro: {
      eyebrow: 'Guide i Toscana',
      title: 'En personlig måte å oppleve Toscana på',
      lead: 'Private turer og små grupper kan tilpasses interessene deres, enten dere ønsker å fordype dere i kunst, arkitektur, historie, matkultur eller ganske enkelt forstå stedene bedre.',
      cards: [
        ['Firenze & Siena', 'Gå gjennom historiske bysentre, museer, kirker og palasser med kunnskapen som gjør monumentene til levende historier.'],
        ['Mer enn 30 år i Italia', 'Camilla kombinerer lang erfaring med italiensk liv og kultur med perspektivet til en som opprinnelig kom til Italia fra Norge.'],
        ['Kunst fra en annen synsvinkel', 'Bakgrunnen som kunstkonservator gir særlig oppmerksomhet til materialer, teknikker, verksteder og hvordan kunstverk faktisk ble skapt.']
      ]
    },
    about: {
      eyebrow: 'Om',
      title: 'Camilla Sinding-Larsen',
      paragraphs: [
        'Camilla er fra Norge og har bodd i Italia i mer enn tretti år. Hun utdannet seg først som kunstkonservator i Roma og arbeidet med konserveringsprosjekter i Italia og i utlandet før hun ble profesjonelt autorisert turistguide i Toscana.',
        'Denne bakgrunnen gir turene hennes et eget perspektiv. Sammen med historiene om kunstnere, oppdragsgivere og byer kan hun forklare hvordan kunstverkene ble laget, hvilke materialer og teknikker som ble brukt og den praktiske verdenen bak mesterverkene vi ser i dag.',
        'Målet er å gjøre Toscana forståelig, levende og hyggelig å oppleve — og å knytte den enestående kunstarven sammen med landskapet, mattradisjonene og dagens italienske kultur.'
      ],
      languages: 'Guider på norsk, engelsk og italiensk'
    },
    tours: {
      eyebrow: 'Opplevelser',
      title: 'Guidede turer i Toscana',
      lead: 'Et første utvalg basert på turene i det nåværende nettstedet. Hvert besøk kan tilpasses gruppen, tiden dere har og det dere er mest interessert i.',
      link: 'Les mer',
      custom: 'Skreddersydde turer kan organiseres på forespørsel.'
    },
    prices: {
      eyebrow: 'Priser',
      title: 'Enkle priser',
      half: 'Halv dag',
      halfTime: 'maks 3 timer',
      full: 'Hel dag',
      fullTime: 'maks 6 timer'
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Planlegg besøket med Camilla',
      lead: 'Skriv eller ring med by, dato, antall personer og hva dere først og fremst ønsker å oppleve. Deretter kan turen tilpasses besøket deres.',
      languages: 'Norsk · Engelsk · Italiensk'
    },
    footer: 'Guidede turer i Toscana'
  }
};

export const profileImage = 'https://www.guideitoscana.com/wp-content/uploads/2024/03/camilla3-300x300.jpg';
