import type { Locale } from '../lib/paths';

export type Tour = {
  slug: string;
  title: string;
  cardImage: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  body: string[];
  gallery?: { src: string; alt: string }[];
};

const images = {
  slide1: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/slide1.jpg',
  slide2: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/slide2.jpg',
  slide3: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/slide3.jpg',
  slide4: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/slide4.jpg',
  florence1: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/firenzeclassic1.jpg',
  florence2: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/firenzeclassic2_1.jpg',
  florence3: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/firenzeclassic3_1.jpg',
  florence4: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/firenzeclassic4_1.jpg',
  uffizi4: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/uffizi4.jpg',
  uffizi3: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/uffizi3.jpg',
  uffizi2: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/uffizi2.jpg',
  venus: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/nascita-di-venere-botticelli_1.jpeg',
  cathedral1: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/cathedral1.jpg',
  cathedral2: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/cathedral2.jpg',
  cathedral3: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/cathedral3.jpg',
  cathedral4: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/cathedral4.jpg',
  towns1: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/towns1_1.jpg',
  towns2: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/towns2_1.jpg',
  towns3: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/towns3_1.jpg',
  towns4: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/towns4_1.jpg',
  countryside1: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/countryside1.jpg',
  countryside2: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/countryside2_1.jpg',
  countryside3: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/countryside3_1.jpg',
  countryside4: 'https://www.guideitoscana.com/wp-content/uploads/2018/02/countryside4_1.jpg'
};

export const toursByLocale: Record<Locale, Tour[]> = {
  en: [
    {
      slug: 'palazzo-pitti-boboli-garden', title: 'Palazzo Pitti and Boboli Garden', cardImage: images.slide2, heroImage: images.slide2,
      metaTitle: 'Palazzo Pitti & Boboli Garden | Camilla Sinding-Larsen',
      metaDescription: 'Private guided visit to Palazzo Pitti and the Boboli Garden in Florence with licensed guide Camilla Sinding-Larsen.',
      body: [
        "In 1550 Cosimo I de' Medici bought Palazzo Pitti and transformed it into the new residence of the Medici family. The palace continued to be the official residence of Florence's rulers for more than three centuries, until it passed to the Italian state in 1919.",
        'The visit goes through the decorated rooms of the palace, where the important Medici collection includes works by celebrated artists such as Raphael and Artemisia Gentileschi, the first woman admitted to the Academy of Fine Arts in Florence.',
        'The tour ends with a walk through the Boboli Garden and its views over the city.'
      ]
    },
    {
      slug: 'florence-city-tour', title: 'The classic Florence city tour', cardImage: images.slide1, heroImage: images.florence1,
      metaTitle: 'Classic Florence City Tour | Camilla Sinding-Larsen',
      metaDescription: 'Private walking tour through the historic centre of Florence with licensed guide Camilla Sinding-Larsen.',
      body: [
        "Florence's historic centre covers a relatively compact area, so after a few hours together you can already become familiar with the city and its history while walking through narrow streets and among old buildings.",
        'By the end of the thirteenth century Florence was a rich and powerful trading city with a rapidly growing population. Many of the impressive buildings that still define the city date from this period, including Santa Maria del Fiore and the great dome later built by Filippo Brunelleschi.',
        "In Piazza della Signoria stands Palazzo Vecchio, founded in 1299 and still used by the city government. At its entrance is the copy of Michelangelo's David, while the square itself is filled with sculpture. Beside it is the Uffizi, one of Europe's great historic art museums.",
        'The walk continues into the medieval quarter associated with Dante Alighieri, through narrow lanes and past examples of the tower houses in which Florentine families once lived.',
        "Naturally the route also reaches Ponte Vecchio, Florence's oldest bridge, with its famous goldsmith shops and views over the Arno."
      ],
      gallery: [images.florence1, images.florence2, images.florence3, images.florence4].map((src, i) => ({ src, alt: ['Florence historic centre','Florence city tour','Historic Florence','Walking in Florence'][i] }))
    },
    {
      slug: 'florence-markets-tour', title: 'Florence city and markets tour', cardImage: images.slide4, heroImage: images.slide4,
      metaTitle: 'Florence City & Markets Tour | Camilla Sinding-Larsen',
      metaDescription: 'A private Florence walking tour combining the historic city with local market and food traditions, guided by Camilla Sinding-Larsen.',
      body: [
        "This tour combines a walk through Florence's historic centre with a visit to one of the city's markets, bringing together the monumental city and the everyday traditions of Florentine life.",
        'While walking through streets and squares, Camilla introduces the history and architecture of Florence. At the market the focus moves naturally towards local ingredients, seasonal products and the food traditions that are part of Tuscan culture.',
        'It is an informal way to discover the city from two sides at once: the Florence of palaces, churches and public spaces, and the Florence of daily habits, food and conversation.'
      ]
    },
    {
      slug: 'uffizi-gallery', title: 'The Uffizi Gallery', cardImage: images.uffizi4, heroImage: images.uffizi4,
      metaTitle: 'Uffizi Gallery Private Tour | Camilla Sinding-Larsen',
      metaDescription: 'Private guided visit to the Uffizi Gallery in Florence with licensed guide and former art conservator Camilla Sinding-Larsen.',
      body: [
        "During the Renaissance Florence's wealthy and powerful families collected ancient works of art and commissioned new works from important artists. Michelangelo, Leonardo da Vinci, Raphael and Botticelli all belong to the extraordinary artistic story of the city.",
        'Many works connected with this history are now housed in the Uffizi Gallery. The museum can be overwhelming when visited without a clear route, so Camilla helps you focus on the most important works and on the relationships between them.',
        'The visit looks not only at the subjects of the paintings, but also at artistic technique, symbolism and patronage. Often the most fascinating part is understanding why a particular work was made and the story hidden behind its commission.'
      ],
      gallery: [
        { src: images.uffizi4, alt: 'Uffizi Gallery' }, { src: images.uffizi3, alt: 'Uffizi Gallery artwork' },
        { src: images.uffizi2, alt: 'Art in the Uffizi' }, { src: images.venus, alt: 'Botticelli in the Uffizi' }
      ]
    },
    {
      slug: 'florence-cathedral', title: 'Santa Maria del Fiore and the Cathedral Square', cardImage: images.cathedral1, heroImage: images.cathedral1,
      metaTitle: 'Florence Cathedral & Duomo Tour | Camilla Sinding-Larsen',
      metaDescription: "Guided visit to Santa Maria del Fiore, the Cathedral Museum and Florence's Duomo area with Camilla Sinding-Larsen.",
      body: [
        "The first stone of Santa Maria del Fiore was laid in 1296. The cathedral became the setting for many important events in Florence's history and remains one of the city's defining monuments.",
        'The visit begins with the Cathedral Museum, renovated and reopened in 2015. It preserves many of the original works of art that were created for the cathedral and for the monuments around it.',
        "One section of the museum is dedicated to Filippo Brunelleschi's dome, a masterpiece of engineering, and the museum also contains a life-size reconstruction of the cathedral's early fourteenth-century facade.",
        'After the museum the route continues through the cathedral and the Baptistery, where the ceiling is covered with remarkable medieval mosaics.',
        'For visitors who wish to do so, the dome can also be climbed by its 463 steps. The staircase is narrow, but the view from the top opens across Florence.'
      ],
      gallery: [images.cathedral1, images.cathedral3, images.cathedral4, images.cathedral2].map((src, i) => ({ src, alt: ['Florence Cathedral','Cathedral complex','Florence Duomo','Santa Maria del Fiore'][i] }))
    },
    {
      slug: 'siena-city-tour', title: 'Siena city tour', cardImage: images.towns2, heroImage: images.towns2,
      metaTitle: 'Siena Private City Tour | Camilla Sinding-Larsen',
      metaDescription: 'Private guided walking tour of Siena with licensed Tuscany guide Camilla Sinding-Larsen.',
      body: [
        "Siena is one of Tuscany's great medieval cities, with narrow streets, brick palaces and a strong local identity that is still visible in everyday life.",
        'The walk leads through the historic centre towards Piazza del Campo, the civic heart of the city and the setting of the famous Palio horse race. From here the route continues through Siena\'s streets towards the Cathedral and the city\'s other important monuments.',
        "Along the way Camilla introduces Siena's history, its art and architecture, and the traditions that distinguish it from Florence and the other Tuscan cities.",
        'The visit can be adapted to the time available and to the interests of the group.'
      ]
    },
    {
      slug: 'tuscan-towns', title: 'Tuscan towns', cardImage: images.towns1, heroImage: images.towns1,
      metaTitle: 'Tuscan Towns Private Tours | Camilla Sinding-Larsen',
      metaDescription: 'Explore Siena, Lucca, Pisa, San Gimignano, Volterra and other Tuscan towns with licensed guide Camilla Sinding-Larsen.',
      body: [
        "Florence is certainly Tuscany's most visited city, but the whole region deserves to be discovered. The countryside is dotted with medieval hill towns, and places such as San Gimignano and Volterra offer a very different atmosphere from the larger cities of Siena, Lucca and Pisa.",
        'Every Tuscan town and village combines its own artistic heritage with local food and wine traditions. A tour can be organized around the places that best fit your journey and the part of Tuscany you would like to know.'
      ],
      gallery: [images.towns1, images.towns2, images.towns3, images.towns4].map((src, i) => ({ src, alt: ['Tuscan town','Historic Tuscany','Tuscany architecture','Tuscan landscape and town'][i] }))
    },
    {
      slug: 'tuscan-countryside', title: 'A day in the countryside', cardImage: images.slide3, heroImage: images.countryside1,
      metaTitle: 'Tuscan Countryside Experience | Camilla Sinding-Larsen',
      metaDescription: 'A private experience in the Tuscan countryside and Mugello area with Camilla Sinding-Larsen, combining landscape, traditions and local food culture.',
      body: [
        'In the Mugello area north of Florence, an old farm produces organic olive oil from olives harvested by hand and cold pressed, following a tradition that has shaped the countryside for centuries.',
        'The surrounding landscape offers many possibilities for a day outside the city. Walks can lead through chestnut woods, through places connected with Dante, or towards historic Medici sites such as Trebbio Castle.',
        'After exploring the area, the day can continue with local wine and lunch based on local products. A walk through the olive grove introduces how the fruit is grown and how olive oil is produced.',
        'The aim is to offer a direct encounter with traditional Tuscan rural culture and with a landscape that is still closely connected to food, agriculture and local history.',
        '<strong>Contact Camilla for a price quotation.</strong>'
      ],
      gallery: [images.countryside1, images.countryside2, images.countryside3, images.countryside4].map((src, i) => ({ src, alt: ['Tuscan countryside','Mugello countryside','Rural Tuscany','Tuscan landscape'][i] }))
    }
  ],
  nb: [
    {
      slug: 'palazzo-pitti-boboli-garden', title: 'Palazzo Pitti og Bobolihagen', cardImage: images.slide2, heroImage: images.slide2,
      metaTitle: 'Palazzo Pitti og Bobolihagen | Camilla Sinding-Larsen',
      metaDescription: 'Privat guidet besøk i Palazzo Pitti og Bobolihagen i Firenze med Camilla Sinding-Larsen.',
      body: [
        "I 1550 kjøpte Cosimo I de' Medici Palazzo Pitti og gjorde palasset til den nye residensen for Medici-familien. Palazzo Pitti forble den offisielle residensen for Firenzes herskere i mer enn tre århundrer, før det gikk over til den italienske staten i 1919.",
        'Besøket går gjennom de rikt dekorerte rommene, der den viktige Medici-samlingen omfatter verk av berømte kunstnere som Rafael og Artemisia Gentileschi, den første kvinnen som ble tatt opp ved kunstakademiet i Firenze.',
        'Turen avsluttes med en spasertur gjennom Bobolihagen og utsikten over byen.'
      ]
    },
    {
      slug: 'florence-city-tour', title: 'Byvandring i Firenzes sentrum', cardImage: images.slide1, heroImage: images.florence1,
      metaTitle: 'Byvandring i Firenze | Camilla Sinding-Larsen',
      metaDescription: 'Privat byvandring gjennom Firenzes historiske sentrum med autorisert guide Camilla Sinding-Larsen.',
      body: [
        'Firenzes historiske sentrum dekker et forholdsvis kompakt område, og etter noen timer sammen kan du allerede bli godt kjent med byen og historien mens vi går gjennom smale gater og mellom gamle bygninger.',
        'Mot slutten av 1200-tallet var Firenze blitt en rik og mektig handelsby med raskt voksende befolkning. Mange av bygningene som fortsatt preger byen stammer fra denne perioden, blant annet Santa Maria del Fiore og den store kuppelen som senere ble bygget av Filippo Brunelleschi.',
        'På Piazza della Signoria ligger Palazzo Vecchio, grunnlagt i 1299 og fortsatt brukt av byens administrasjon. Ved inngangen står kopien av Michelangelos David, mens selve plassen er fylt med skulpturer. Ved siden av ligger Uffiziene, et av Europas store historiske kunstmuseer.',
        'Vandringen fortsetter inn i middelalderkvartalet knyttet til Dante Alighieri, gjennom smale gater og forbi eksempler på tårnhusene der florentinske familier en gang bodde.',
        'Ruten når naturligvis også Ponte Vecchio, Firenzes eldste bro, med sine berømte gullsmedbutikker og utsikt over Arno.'
      ],
      gallery: [images.florence1, images.florence2, images.florence3, images.florence4].map((src, i) => ({ src, alt: ['Firenzes historiske sentrum','Byvandring i Firenze','Historiske Firenze','Vandring i Firenze'][i] }))
    },
    {
      slug: 'florence-markets-tour', title: 'Byvandring med en tur til markedet', cardImage: images.slide4, heroImage: images.slide4,
      metaTitle: 'Byvandring og marked i Firenze | Camilla Sinding-Larsen',
      metaDescription: 'Guidet byvandring i Firenze kombinert med marked og toskanske mattradisjoner.',
      body: [
        'Denne turen kombinerer en vandring gjennom Firenzes historiske sentrum med et besøk på et av byens markeder, og knytter den monumentale byen sammen med hverdagslivet i Firenze.',
        'Mens vi går gjennom gater og plasser forteller Camilla om Firenzes historie og arkitektur. På markedet flyttes oppmerksomheten naturlig mot lokale råvarer, sesongprodukter og mattradisjonene som er en del av den toskanske kulturen.',
        'Det er en uformell måte å oppleve byen fra to sider samtidig: Firenze med palasser, kirker og offentlige rom, og Firenze med daglige vaner, mat og samtaler.'
      ]
    },
    {
      slug: 'uffizi-gallery', title: 'Uffiziene', cardImage: images.uffizi4, heroImage: images.uffizi4,
      metaTitle: 'Guidet tur i Uffiziene | Camilla Sinding-Larsen',
      metaDescription: 'Privat guidet besøk i Uffiziene i Firenze med autorisert guide og tidligere kunstkonservator Camilla Sinding-Larsen.',
      body: [
        'Under renessansen samlet Firenzes rike og mektige familier antikke kunstverk og bestilte nye verk fra viktige kunstnere. Michelangelo, Leonardo da Vinci, Rafael og Botticelli er alle en del av byens ekstraordinære kunsthistorie.',
        'Mange verk knyttet til denne historien befinner seg i dag i Uffiziene. Museet kan virke overveldende uten en tydelig rute, og Camilla hjelper deg derfor med å konsentrere deg om de viktigste verkene og forbindelsene mellom dem.',
        'Besøket handler ikke bare om motivene i maleriene, men også om kunstnerisk teknikk, symbolikk og oppdragsgivere. Ofte er det mest fascinerende å forstå hvorfor et bestemt verk ble laget og historien som ligger bak bestillingen.'
      ],
      gallery: [
        { src: images.uffizi4, alt: 'Uffiziene' }, { src: images.uffizi3, alt: 'Kunstverk i Uffiziene' },
        { src: images.uffizi2, alt: 'Kunst i Uffiziene' }, { src: images.venus, alt: 'Botticelli i Uffiziene' }
      ]
    },
    {
      slug: 'florence-cathedral', title: 'Santa Maria del Fiore og domkirkeområdet', cardImage: images.cathedral1, heroImage: images.cathedral1,
      metaTitle: 'Domkirken i Firenze | Camilla Sinding-Larsen',
      metaDescription: 'Guidet besøk ved Santa Maria del Fiore, domkirkemuseet og dåpskapellet i Firenze.',
      body: [
        'Den første steinen til Santa Maria del Fiore ble lagt i 1296. Domkirken ble åsted for mange viktige hendelser i Firenzes historie og er fortsatt et av byens viktigste monumenter.',
        'Besøket begynner i domkirkemuseet, som ble renovert og gjenåpnet i 2015. Her finnes mange av de originale kunstverkene som ble skapt for domkirken og monumentene rundt den.',
        'En del av museet er viet Filippo Brunelleschis kuppel, et mesterverk innen ingeniørkunst, og museet har også en rekonstruksjon i full størrelse av domkirkens tidlige fasade fra 1300-tallet.',
        'Etter museet fortsetter ruten gjennom domkirkeområdet og dåpskapellet, der taket er dekket av bemerkelsesverdige middelaldermosaikker.',
        'For dem som ønsker det kan kuppelen også bestiges via 463 trinn. Trappen er smal, men utsikten fra toppen åpner seg over Firenze.'
      ],
      gallery: [images.cathedral1, images.cathedral3, images.cathedral4, images.cathedral2].map((src, i) => ({ src, alt: ['Domkirken i Firenze','Domkirkeområdet','Duomo i Firenze','Santa Maria del Fiore'][i] }))
    },
    {
      slug: 'siena-city-tour', title: 'Byvandring i Siena', cardImage: images.towns2, heroImage: images.towns2,
      metaTitle: 'Privat byvandring i Siena | Camilla Sinding-Larsen',
      metaDescription: 'Privat guidet byvandring i Siena med autorisert Toscana-guide Camilla Sinding-Larsen.',
      body: [
        'Siena er en av Toscanas store middelalderbyer, med smale gater, mursteinspalasser og en sterk lokal identitet som fortsatt er synlig i hverdagslivet.',
        'Vandringen går gjennom det historiske sentrum mot Piazza del Campo, byens sivile hjerte og arena for det berømte hesteløpet Palio. Herfra fortsetter ruten gjennom Sienas gater mot domkirken og byens andre viktige monumenter.',
        'Underveis forteller Camilla om Sienas historie, kunst og arkitektur, og om tradisjonene som skiller byen fra Firenze og de andre toskanske byene.',
        'Besøket kan tilpasses tiden dere har til rådighet og gruppens interesser.'
      ]
    },
    {
      slug: 'tuscan-towns', title: 'Toskanske byer', cardImage: images.towns1, heroImage: images.towns1,
      metaTitle: 'Guidede turer i toskanske byer | Camilla Sinding-Larsen',
      metaDescription: 'Oppdag Siena, Lucca, Pisa, San Gimignano, Volterra og andre toskanske byer med Camilla Sinding-Larsen.',
      body: [
        'Firenze er uten tvil Toscanas mest besøkte by, men hele regionen fortjener å bli oppdaget. Landskapet er fullt av middelalderbyer på høyder, og steder som San Gimignano og Volterra har en helt annen atmosfære enn større byer som Siena, Lucca og Pisa.',
        'Hver toskanske by og landsby kombinerer sin egen kunstneriske arv med lokale mat- og vintradisjoner. En tur kan organiseres rundt de stedene som passer best til reisen deres og den delen av Toscana dere ønsker å bli kjent med.'
      ],
      gallery: [images.towns1, images.towns2, images.towns3, images.towns4].map((src, i) => ({ src, alt: ['Toskansk by','Historiske Toscana','Arkitektur i Toscana','Toskansk landskap og by'][i] }))
    },
    {
      slug: 'tuscan-countryside', title: 'En dag på den toskanske landsbygda', cardImage: images.slide3, heroImage: images.countryside1,
      metaTitle: 'En dag på den toskanske landsbygda | Camilla Sinding-Larsen',
      metaDescription: 'Privat opplevelse i Mugello og den toskanske landsbygda med Camilla Sinding-Larsen.',
      body: [
        'I Mugello-området nord for Firenze produserer en gammel gård økologisk olivenolje av oliven som høstes for hånd og kaldpresses, etter en tradisjon som har formet landskapet i århundrer.',
        'Landskapet rundt byr på mange muligheter for en dag utenfor byen. Vandringer kan gå gjennom kastanjeskog, steder knyttet til Dante eller mot historiske Medici-steder som Trebbio-slottet.',
        'Etter å ha utforsket området kan dagen fortsette med lokal vin og lunsj basert på lokale produkter. En vandring gjennom olivenlunden gir innblikk i hvordan frukten dyrkes og hvordan olivenoljen produseres.',
        'Målet er å gi et direkte møte med tradisjonell toskansk bygdekultur og et landskap som fortsatt er nært knyttet til mat, jordbruk og lokal historie.',
        '<strong>Kontakt Camilla for pristilbud.</strong>'
      ],
      gallery: [images.countryside1, images.countryside2, images.countryside3, images.countryside4].map((src, i) => ({ src, alt: ['Toskansk landsbygd','Mugello-landskap','Toscana på landet','Toskansk landskap'][i] }))
    }
  ]
};
