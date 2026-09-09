/*
 * Site copy by locale.
 *
 * Deliberately NOT translated:
 *   - Google review text and reviewer names — verbatim quotes from real
 *     people; rewording them would misrepresent what they said.
 *   - Clinical procedure names (root canal, fissure sealant, implants…) —
 *     these are used in English in Philippine dental practice, and inventing
 *     local equivalents would be less clear, not more.
 *   - Clinic name, address, phone, email.
 *   - The privacy policy and terms bodies — see src/data/legal.js.
 *
 * `tl` (Tagalog/Filipino) and `hil` (Hiligaynon/Ilonggo) are first drafts.
 * Have a native speaker review both before launch — Hiligaynon especially.
 */

export const LOCALES = [
  { code: 'en', short: 'en', label: 'English' },
  { code: 'tl', short: 'tl', label: 'Tagalog' },
  { code: 'hil', short: 'hil', label: 'Ilonggo' },
]

export const translations = {
  // ─── English ─────────────────────────────────────────────────────────────
  en: {
    nav: {
      home: 'Home', services: 'Services', about: 'About', reviews: 'Reviews',
      contact: 'Contact', faq: 'FAQ', language: 'Language',
      openMenu: 'Open menu', closeMenu: 'Close menu',
      home_aria: 'Arches Dental Clinic home',
    },
    cta: {
      call: 'Call Now', viewServices: 'View Services', directions: 'Get Directions',
      learnMore: 'Learn More', close: 'Close', viewAllReviews: 'View All Reviews',
    },
    hero: {
      title1: 'Healthy Smiles', title2: 'Begin Here',
      body: 'takes walk-ins — no appointment needed — with modern technology and compassionate care for every age.',
    },
    stats: [
      { value: '2,000+', label: 'Happy Patients' },
      { value: '4+', label: 'Years Experience' },
      { value: 'Modern', label: 'Equipment' },
      { value: 'Friendly', label: 'Professionals' },
    ],
    about: {
      eyebrow: 'About Our Clinic',
      title: 'Dental care built around', titleAccent: 'you',
      body: 'For over four years, Arches Dental Clinic has welcomed patients of every age into a warm, modern space where every visit feels personal. Our team blends genuine care with advanced technology, so you always know exactly what to expect — and never dread the chair.',
      highlights: [
        'Experienced, gentle dentists',
        'Comfortable, calming clinic',
        'Personalized treatment plans',
        'Latest dental technology',
        'Family-friendly care for all ages',
      ],
      badgeLabel: 'years caring for local smiles',
      imageAlt: 'Dentist at Arches Dental Clinic consulting with a patient',
    },
    services: {
      eyebrow: 'What We Offer',
      title: 'Services designed around your smile',
      body: 'From routine checkups to advanced procedures, every treatment is delivered with the same gentle, attentive care.',
      closeAria: 'Close {name} details',
      items: {
        'general-dentistry': {
          name: 'General Dentistry',
          description: 'Routine cleanings, exams, and preventive care to keep your whole family’s smiles healthy year-round.',
        },
        orthodontics: {
          name: 'Orthodontics',
          description: 'Braces for kids, teens, and adults — straighter teeth, fitted to your life.',
        },
        'oral-surgery': {
          name: 'Oral Surgery',
          description: 'Extractions, implants, and surgical care delivered gently, with comfort and recovery as the priority.',
        },
      },
    },
    why: {
      eyebrow: 'Why Choose Us',
      title: 'Why Patients Choose Arches',
      items: [
        { title: 'Gentle Care', desc: 'Patient, reassuring treatment for nervous visitors and kids alike.' },
        { title: 'Modern Technology', desc: 'Digital imaging and up-to-date tools for faster, more precise care.' },
        { title: 'Affordable Treatment', desc: 'Transparent pricing and flexible options that fit your budget.' },
        { title: 'Clean & Comfortable Clinic', desc: 'A bright, spotless space designed to put you at ease.' },
        { title: 'Convenient Location', desc: 'Easy to find, easy to park, easy to fit into your day.' },
        { title: 'Experienced Team', desc: 'Skilled clinicians with years of hands-on dental expertise.' },
      ],
    },
    reviews: {
      eyebrow: 'Google Reviews',
      title: 'Loved by our patients',
      source: 'Google Review',
      note: 'Reviews are shown in the language they were written in.',
    },
    gallery: {
      eyebrow: 'Take a Look Inside',
      title: 'Take a Look Inside Our Clinic',
      body: 'Explore our welcoming environment and modern facilities.',
      prev: 'Previous photo', next: 'Next photo',
      viewLarger: 'View {label} larger', counter: '{n} of {total}',
      photos: [
        { label: 'Reception Area', alt: 'Welcoming reception area at Arches Dental Clinic' },
        { label: 'Treatment Room', alt: 'Modern treatment room at Arches Dental Clinic' },
        { label: 'Dental Equipment', alt: 'Advanced dental equipment at Arches Dental Clinic' },
        { label: 'Clinic Exterior', alt: 'Exterior view of Arches Dental Clinic' },
      ],
    },
    contact: {
      eyebrow: 'Visit Us',
      title: 'Find Us & Plan Your Visit',
      body: 'No need to book online — just call ahead or stop by during business hours and our team will take great care of you.',
      address: 'Address', phone: 'Phone', email: 'Email',
      emergency: 'Emergency Line', hours: 'Business Hours', closed: 'Closed',
      mapTitle: 'Arches Dental Clinic location',
      days: {
        Monday: 'Monday', Tuesday: 'Tuesday', Wednesday: 'Wednesday',
        Thursday: 'Thursday', Friday: 'Friday', Saturday: 'Saturday', Sunday: 'Sunday',
      },
    },
    faq: {
      eyebrow: 'Common Questions',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Do I need to book an appointment in advance?', a: 'To improve efficiency while reducing unused or delayed appointment slots, we have transitioned to a FIRST-COME FIRST-SERVED approach. This ensures faster service for everyone and minimizes unnecessary waiting and scheduling gaps.' },
        { q: 'What should I expect during my first visit?', a: 'Your first visit typically includes a dental examination, X-rays if needed, and a discussion of your oral health and treatment options.' },
        { q: 'How often should I come in for a cleaning?', a: 'Most patients benefit from a checkup and cleaning every six months, though your dentist may recommend a different schedule based on your oral health.' },
        { q: 'Do you treat children and teenagers?', a: 'Yes — our team welcomes patients of every age, from a child’s first visit through adult and orthodontic care, in a relaxed family-friendly setting.' },
        { q: 'What should I do in a dental emergency?', a: 'Call our emergency line right away. We reserve same-day slots for urgent issues like severe pain, broken teeth, or swelling, and will guide you on next steps over the phone.' },
        { q: 'Is parking available at the clinic?', a: 'Yes, free on-site parking is available directly in front of the clinic, with additional street parking nearby.' },
      ],
    },
    firstVisit: {
      eyebrow: 'Your First Visit',
      title: 'Walk in, and we take it from there',
      body: 'No appointment, no forms to fill in beforehand. Here is exactly what happens.',
      steps: [
        { title: 'Walk in', desc: 'Come by during business hours. We work first-come, first-served, so there is nothing to book.' },
        { title: 'Exam and X-rays', desc: 'A dentist examines your teeth and gums, and takes X-rays only if they are needed.' },
        { title: 'Your plan, explained', desc: 'We talk through what we found, what it will cost, and what happens next — before anything begins.' },
      ],
      urgentLabel: 'In pain right now?',
      urgentBody: 'We keep same-day slots for severe pain, swelling, and broken teeth. Call and we will guide you over the phone.',
    },
    footer: {
      tagline: 'Modern, compassionate dental care for patients of all ages.',
      quickLinks: 'Quick Links', services: 'Services', contact: 'Contact',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy', terms: 'Terms of Service', cookieSettings: 'Cookie settings',
    },
    cookie: {
      aria: 'Cookie preferences',
      text: 'We use essential cookies to remember your language and this choice. With your permission we would also like anonymous analytics to see how the site is used.',
      readPolicy: 'Read our privacy policy',
      essential: 'Essential only', acceptAll: 'Accept all',
    },
    legal: { updated: 'Last updated', close: 'Close {title}' },
  },

  // ─── Tagalog ─────────────────────────────────────────────────────────────
  tl: {
    nav: {
      home: 'Home', services: 'Mga Serbisyo', about: 'Tungkol Sa Amin',
      reviews: 'Mga Review', contact: 'Kontak', faq: 'FAQ', language: 'Wika',
      openMenu: 'Buksan ang menu', closeMenu: 'Isara ang menu',
      home_aria: 'Arches Dental Clinic home',
    },
    cta: {
      call: 'Tumawag Na', viewServices: 'Tingnan ang Serbisyo',
      directions: 'Kunin ang Direksyon', learnMore: 'Alamin Pa', close: 'Isara',
      viewAllReviews: 'Tingnan Lahat ng Review',
    },
    hero: {
      title1: 'Malusog na Ngiti', title2: 'Nagsisimula Dito',
      body: 'ay tumatanggap ng walk-in — hindi kailangan ng appointment — may makabagong teknolohiya at maalagang pangangalaga para sa lahat ng edad.',
    },
    stats: [
      { value: '2,000+', label: 'Masayang Pasyente' },
      { value: '4+', label: 'Taong Karanasan' },
      { value: 'Makabago', label: 'na Kagamitan' },
      { value: 'Magiliw', label: 'na mga Propesyonal' },
    ],
    about: {
      eyebrow: 'Tungkol Sa Aming Klinika',
      title: 'Pangangalaga sa ngipin na nakasentro sa', titleAccent: 'iyo',
      body: 'Sa loob ng mahigit apat na taon, malugod na tinatanggap ng Arches Dental Clinic ang mga pasyente sa lahat ng edad sa isang mainit at makabagong espasyo kung saan personal ang bawat pagbisita. Pinagsasama ng aming koponan ang tunay na malasakit at makabagong teknolohiya, kaya alam mo palagi kung ano ang aasahan — at hindi mo na katatakutan ang silya.',
      highlights: [
        'Bihasa at maingat na mga dentista',
        'Komportable at kalmanteng klinika',
        'Personalisadong plano ng paggamot',
        'Pinakabagong teknolohiya sa ngipin',
        'Pangangalagang angkop sa buong pamilya',
      ],
      badgeLabel: 'taon ng pag-aalaga sa ngiti ng komunidad',
      imageAlt: 'Dentista sa Arches Dental Clinic na kumukonsulta sa pasyente',
    },
    services: {
      eyebrow: 'Ang Aming Alok',
      title: 'Mga serbisyong nakaayon sa iyong ngiti',
      body: 'Mula sa karaniwang checkup hanggang sa mas komplikadong procedure, iisa ang malumanay at maingat na pag-aalagang ibinibigay namin.',
      closeAria: 'Isara ang detalye ng {name}',
      items: {
        'general-dentistry': {
          name: 'Pangkalahatang Pangangalaga sa Ngipin',
          description: 'Regular na linis, eksaminasyon, at preventive care para manatiling malusog ang ngiti ng buong pamilya buong taon.',
        },
        orthodontics: {
          name: 'Ortodontiks (Braces)',
          description: 'Braces para sa bata, kabataan, at matanda — mas pantay na ngipin, akma sa iyong pamumuhay.',
        },
        'oral-surgery': {
          name: 'Oral Surgery',
          description: 'Pagbunot, implants, at surgical care na isinasagawa nang malumanay, kung saan nauuna ang ginhawa at paggaling.',
        },
      },
    },
    why: {
      eyebrow: 'Bakit Kami',
      title: 'Bakit Pinipili ng mga Pasyente ang Arches',
      items: [
        { title: 'Malumanay na Pag-aalaga', desc: 'Matiyaga at nakakapanatag na paggamot para sa kinakabahang bisita at maging sa mga bata.' },
        { title: 'Makabagong Teknolohiya', desc: 'Digital imaging at napapanahong kagamitan para sa mas mabilis at mas tumpak na pag-aalaga.' },
        { title: 'Abot-kayang Paggamot', desc: 'Malinaw na presyo at may kaluwagang opsyon na kasya sa iyong badyet.' },
        { title: 'Malinis at Komportableng Klinika', desc: 'Maliwanag at malinis na espasyo na idinisenyo para maging panatag ka.' },
        { title: 'Madaling Puntahan', desc: 'Madaling hanapin, madaling paradahan, madaling isingit sa iyong araw.' },
        { title: 'Bihasang Koponan', desc: 'Sanay na mga klinisyan na may maraming taong karanasan sa ngipin.' },
      ],
    },
    reviews: {
      eyebrow: 'Google Reviews',
      title: 'Minamahal ng aming mga pasyente',
      source: 'Google Review',
      note: 'Ipinapakita ang mga review sa wikang ginamit ng nagsulat.',
    },
    gallery: {
      eyebrow: 'Silipin ang Loob',
      title: 'Silipin ang Loob ng Aming Klinika',
      body: 'Tuklasin ang aming magiliw na kapaligiran at makabagong pasilidad.',
      prev: 'Nakaraang larawan', next: 'Susunod na larawan',
      viewLarger: 'Tingnan nang mas malaki ang {label}', counter: '{n} sa {total}',
      photos: [
        { label: 'Reception Area', alt: 'Magiliw na reception area sa Arches Dental Clinic' },
        { label: 'Silid Paggamot', alt: 'Makabagong silid paggamot sa Arches Dental Clinic' },
        { label: 'Kagamitang Dental', alt: 'Makabagong kagamitang dental sa Arches Dental Clinic' },
        { label: 'Labas ng Klinika', alt: 'Panlabas na tanawin ng Arches Dental Clinic' },
      ],
    },
    contact: {
      eyebrow: 'Bisitahin Kami',
      title: 'Hanapin Kami at Planuhin ang Iyong Pagbisita',
      body: 'Hindi kailangang mag-book online — tumawag lang o dumaan sa oras ng negosyo at aalagaan ka nang mabuti ng aming koponan.',
      address: 'Address', phone: 'Telepono', email: 'Email',
      emergency: 'Emergency Line', hours: 'Oras ng Negosyo', closed: 'Sarado',
      mapTitle: 'Lokasyon ng Arches Dental Clinic',
      days: {
        Monday: 'Lunes', Tuesday: 'Martes', Wednesday: 'Miyerkules',
        Thursday: 'Huwebes', Friday: 'Biyernes', Saturday: 'Sabado', Sunday: 'Linggo',
      },
    },
    faq: {
      eyebrow: 'Karaniwang Tanong',
      title: 'Mga Madalas Itanong',
      items: [
        { q: 'Kailangan ba akong mag-book ng appointment nang maaga?', a: 'Para mapabilis ang serbisyo at maiwasan ang hindi nagagamit o naaantalang appointment, lumipat kami sa FIRST-COME FIRST-SERVED na paraan. Nagbibigay ito ng mas mabilis na serbisyo para sa lahat at binabawasan ang hindi kailangang paghihintay.' },
        { q: 'Ano ang aasahan ko sa unang pagbisita ko?', a: 'Karaniwang kasama sa unang pagbisita ang eksaminasyon ng ngipin, X-ray kung kailangan, at talakayan tungkol sa kalusugan ng iyong bibig at mga opsyon sa paggamot.' },
        { q: 'Gaano kadalas ako dapat magpalinis ng ngipin?', a: 'Para sa karamihan, mainam ang checkup at linis tuwing anim na buwan, ngunit maaaring magrekomenda ang iyong dentista ng ibang iskedyul batay sa kalagayan ng iyong bibig.' },
        { q: 'Tumatanggap ba kayo ng mga bata at kabataan?', a: 'Oo — tinatanggap ng aming koponan ang pasyente sa lahat ng edad, mula sa unang pagbisita ng bata hanggang sa pang-adulto at ortodontik na pag-aalaga, sa isang relaks at pampamilyang kapaligiran.' },
        { q: 'Ano ang dapat kong gawin sa dental emergency?', a: 'Tumawag agad sa aming emergency line. Naglalaan kami ng same-day na puwesto para sa mga kagyat na problema tulad ng matinding sakit, bali na ngipin, o pamamaga, at gagabayan ka namin sa telepono.' },
        { q: 'May paradahan ba sa klinika?', a: 'Oo, may libreng paradahan mismo sa harap ng klinika, at may karagdagang paradahan sa kalye sa malapit.' },
      ],
    },
    firstVisit: {
      eyebrow: 'Ang Iyong Unang Pagbisita',
      title: 'Dumaan ka lang, kami na ang bahala',
      body: 'Walang appointment, walang pormang sasagutan nang maaga. Ito mismo ang mangyayari.',
      steps: [
        { title: 'Dumaan', desc: 'Pumunta sa oras ng negosyo. First-come, first-served kami, kaya walang kailangang i-book.' },
        { title: 'Eksamen at X-ray', desc: 'Susuriin ng dentista ang iyong ngipin at gilagid, at kukuha ng X-ray kung kailangan lamang.' },
        { title: 'Ipapaliwanag ang plano', desc: 'Pag-uusapan natin ang nakita namin, ang magiging gastos, at ang susunod na hakbang — bago pa magsimula ang anuman.' },
      ],
      urgentLabel: 'Masakit ba ngayon?',
      urgentBody: 'Naglalaan kami ng same-day na puwesto para sa matinding sakit, pamamaga, at bali na ngipin. Tumawag at gagabayan ka namin sa telepono.',
    },
    footer: {
      tagline: 'Makabago at maalagang pangangalaga sa ngipin para sa lahat ng edad.',
      quickLinks: 'Mabilisang Link', services: 'Mga Serbisyo', contact: 'Kontak',
      rights: 'Nakalaan ang lahat ng karapatan.',
      privacy: 'Patakaran sa Privacy', terms: 'Mga Tuntunin ng Serbisyo',
      cookieSettings: 'Setting ng cookie',
    },
    cookie: {
      aria: 'Kagustuhan sa cookie',
      text: 'Gumagamit kami ng mahahalagang cookie para matandaan ang iyong wika at ang pagpiling ito. Kung papayagan mo, nais din naming gumamit ng anonymous na analytics para makita kung paano ginagamit ang site.',
      readPolicy: 'Basahin ang aming patakaran sa privacy',
      essential: 'Mahalaga lamang', acceptAll: 'Tanggapin lahat',
    },
    legal: { updated: 'Huling na-update', close: 'Isara ang {title}' },
  },

  // ─── Hiligaynon / Ilonggo ────────────────────────────────────────────────
  hil: {
    nav: {
      home: 'Home', services: 'Mga Serbisyo', about: 'Parte sa Amon',
      reviews: 'Mga Review', contact: 'Kontak', faq: 'FAQ', language: 'Lenggwahe',
      openMenu: 'Buksan ang menu', closeMenu: 'Isira ang menu',
      home_aria: 'Arches Dental Clinic home',
    },
    cta: {
      call: 'Magtawag Na', viewServices: 'Tan-awa ang Serbisyo',
      directions: 'Kuhaa ang Direksyon', learnMore: 'Hibal-i Pa', close: 'Isira',
      viewAllReviews: 'Tan-awa Tanan nga Review',
    },
    hero: {
      title1: 'Mapagros nga Yuhum', title2: 'Nagasugod Diri',
      body: 'nagabaton sang walk-in — indi kinahanglan sang appointment — may moderno nga teknolohiya kag maalwan nga pag-atipan para sa tanan nga edad.',
    },
    stats: [
      { value: '2,000+', label: 'Malipayon nga Pasyente' },
      { value: '4+', label: 'Tuig nga Eksperiensya' },
      { value: 'Moderno', label: 'nga Kagamitan' },
      { value: 'Mainabyanon', label: 'nga mga Propesyonal' },
    ],
    about: {
      eyebrow: 'Parte sa Amon nga Klinika',
      title: 'Pag-atipan sa ngipon nga nakasentro sa', titleAccent: 'imo',
      body: 'Sa sulod sang sobra apat ka tuig, ginabaton sang Arches Dental Clinic ang mga pasyente sa tanan nga edad sa isa ka mainit kag moderno nga lugar diin personal ang kada pagbisita. Ginatingob sang amon team ang matuod nga pag-atipan kag abanse nga teknolohiya, agod nahibaluan mo permi kon ano ang paabuton — kag indi na ka mahadlok sa silya.',
      highlights: [
        'Eksperyensyado kag mahinay nga mga dentista',
        'Komportable kag kalmado nga klinika',
        'Personalisado nga plano sang bulong',
        'Pinakabag-o nga teknolohiya sa ngipon',
        'Pag-atipan para sa bug-os nga pamilya',
      ],
      badgeLabel: 'ka tuig nga nagaatipan sang yuhum sang komunidad',
      imageAlt: 'Dentista sa Arches Dental Clinic nga nagakonsulta sa pasyente',
    },
    services: {
      eyebrow: 'Ang Amon Ginatanyag',
      title: 'Mga serbisyo nga gindisenyo para sa imo yuhum',
      body: 'Halin sa kinaandan nga checkup tubtob sa mas komplikado nga procedure, pareho gihapon ang mahinay kag mainandamon nga pag-atipan.',
      closeAria: 'Isira ang detalye sang {name}',
      items: {
        'general-dentistry': {
          name: 'Kinaandan nga Pag-atipan sa Ngipon',
          description: 'Regular nga paglimpyo, eksaminasyon, kag preventive care agod magpabilin nga mapagros ang yuhum sang bug-os nga pamilya sa bug-os nga tuig.',
        },
        orthodontics: {
          name: 'Ortodontiks (Braces)',
          description: 'Braces para sa kabataan, tin-edyer, kag adulto — mas tadlong nga ngipon, bagay sa imo kabuhi.',
        },
        'oral-surgery': {
          name: 'Oral Surgery',
          description: 'Pagbunot, implants, kag surgical care nga ginahimo sing mahinay, nga nauna ang kaayuhan kag pagbalik sang lawas.',
        },
      },
    },
    why: {
      eyebrow: 'Ngaa Kami',
      title: 'Ngaa Ginapili sang mga Pasyente ang Arches',
      items: [
        { title: 'Mahinay nga Pag-atipan', desc: 'Mapailubon kag makapakalma nga bulong para sa nahadlok nga bisita kag sa kabataan man.' },
        { title: 'Moderno nga Teknolohiya', desc: 'Digital imaging kag bag-o nga kagamitan para sa mas madasig kag mas husto nga pag-atipan.' },
        { title: 'Barato nga Bulong', desc: 'Maathag nga presyo kag may kahilwayan nga opsyon nga bagay sa imo badyet.' },
        { title: 'Matinlo kag Komportable nga Klinika', desc: 'Masanag kag matinlo nga lugar nga gindisenyo agod mapatawhay ka.' },
        { title: 'Mahapos Kadtuan', desc: 'Mahapos pangitaon, mahapos parkingan, mahapos isulod sa imo adlaw.' },
        { title: 'Eksperyensyado nga Team', desc: 'Sinanay nga mga klinisyan nga may madamo nga tuig nga eksperiensya sa ngipon.' },
      ],
    },
    reviews: {
      eyebrow: 'Google Reviews',
      title: 'Ginahigugma sang amon mga pasyente',
      source: 'Google Review',
      note: 'Ginapakita ang mga review sa lenggwahe nga gingamit sang nagsulat.',
    },
    gallery: {
      eyebrow: 'Tan-awa ang Sulod',
      title: 'Tan-awa ang Sulod sang Amon Klinika',
      body: 'Usisaa ang amon mainabyanon nga palibot kag moderno nga pasilidad.',
      prev: 'Nagligad nga litrato', next: 'Masunod nga litrato',
      viewLarger: 'Tan-awa nga mas dako ang {label}', counter: '{n} sa {total}',
      photos: [
        { label: 'Reception Area', alt: 'Mainabyanon nga reception area sa Arches Dental Clinic' },
        { label: 'Kwarto sang Bulong', alt: 'Moderno nga kwarto sang bulong sa Arches Dental Clinic' },
        { label: 'Kagamitan sa Ngipon', alt: 'Abanse nga kagamitan sa ngipon sa Arches Dental Clinic' },
        { label: 'Guwa sang Klinika', alt: 'Panguwa nga hitsura sang Arches Dental Clinic' },
      ],
    },
    contact: {
      eyebrow: 'Bisitaha Kami',
      title: 'Pangitaa Kami kag Planuha ang Imo Pagbisita',
      body: 'Indi kinahanglan mag-book online — magtawag lang ukon magdayon sa oras sang negosyo kag atipanon ka gid sang amon team.',
      address: 'Address', phone: 'Telepono', email: 'Email',
      emergency: 'Emergency Line', hours: 'Oras sang Negosyo', closed: 'Sirado',
      mapTitle: 'Lokasyon sang Arches Dental Clinic',
      days: {
        Monday: 'Lunes', Tuesday: 'Martes', Wednesday: 'Miyerkoles',
        Thursday: 'Huwebes', Friday: 'Biyernes', Saturday: 'Sabado', Sunday: 'Domingo',
      },
    },
    faq: {
      eyebrow: 'Kinaandan nga Pamangkot',
      title: 'Mga Masunson nga Ginapamangkot',
      items: [
        { q: 'Kinahanglan bala ako mag-book sang appointment nga daan?', a: 'Agod mapadasig ang serbisyo kag mabuhinan ang wala nagamit ukon naatrasar nga appointment, nagsaylo kami sa FIRST-COME FIRST-SERVED nga pamaagi. Nagahatag ini sang mas madasig nga serbisyo para sa tanan kag nagabuhin sang wala kinahanglana nga paghulat.' },
        { q: 'Ano ang paabuton ko sa una ko nga pagbisita?', a: 'Kinaandan nga nalakip sa una nga pagbisita ang eksaminasyon sang ngipon, X-ray kon kinahanglan, kag paghambalanay parte sa kapagros sang imo baba kag mga opsyon sa bulong.' },
        { q: 'Pila ka beses ako dapat magpalimpyo sang ngipon?', a: 'Para sa kalabanan, maayo ang checkup kag paglimpyo kada anom ka bulan, pero mahimo magrekomenda ang imo dentista sang lain nga iskedyul base sa kahimtangan sang imo baba.' },
        { q: 'Nagabaton bala kamo sang kabataan kag tin-edyer?', a: 'Huo — ginabaton sang amon team ang pasyente sa tanan nga edad, halin sa una nga pagbisita sang bata tubtob sa pang-adulto kag ortodontik nga pag-atipan, sa relaks kag pampamilya nga palibot.' },
        { q: 'Ano ang dapat ko himuon sa dental emergency?', a: 'Magtawag gilayon sa amon emergency line. Nagatigana kami sang same-day nga puwesto para sa dalidali nga problema pareho sang mabaskog nga sakit, bali nga ngipon, ukon pamanog, kag gagiyahan ka namon sa telepono.' },
        { q: 'May parkingan bala sa klinika?', a: 'Huo, may libre nga parkingan mismo sa atubang sang klinika, kag may dugang nga parkingan sa dalan sa malapit.' },
      ],
    },
    firstVisit: {
      eyebrow: 'Ang Imo Una nga Pagbisita',
      title: 'Magdayon ka lang, kami na ang bahala',
      body: 'Wala sang appointment, wala sang porma nga sabtan nga daan. Amo gid ini ang matabo.',
      steps: [
        { title: 'Magdayon', desc: 'Magkadto sa oras sang negosyo. First-come, first-served kami, gani wala sang kinahanglan i-book.' },
        { title: 'Eksamen kag X-ray', desc: 'Usisaon sang dentista ang imo ngipon kag lagos, kag magkuha sang X-ray kon kinahanglan lang.' },
        { title: 'Ipaathag ang plano', desc: 'Hambalanay naton ang nakita namon, ang magasto, kag ang masunod nga tikang — antes pa magsugod ang bisan ano.' },
      ],
      urgentLabel: 'Ginasakitan ka subong?',
      urgentBody: 'Nagatigana kami sang same-day nga puwesto para sa mabaskog nga sakit, pamanog, kag bali nga ngipon. Magtawag kag gagiyahan ka namon sa telepono.',
    },
    footer: {
      tagline: 'Moderno kag maalwan nga pag-atipan sa ngipon para sa tanan nga edad.',
      quickLinks: 'Madasig nga Link', services: 'Mga Serbisyo', contact: 'Kontak',
      rights: 'Tanan nga kinamatarong ginareserba.',
      privacy: 'Patakaran sa Privacy', terms: 'Mga Kondisyon sang Serbisyo',
      cookieSettings: 'Setting sang cookie',
    },
    cookie: {
      aria: 'Gusto sa cookie',
      text: 'Nagagamit kami sang importante nga cookie agod madumduman ang imo lenggwahe kag ini nga pagpili. Kon tugutan mo, gusto man namon maggamit sang anonymous nga analytics agod makita kon paano gingamit ang site.',
      readPolicy: 'Basaha ang amon patakaran sa privacy',
      essential: 'Importante lang', acceptAll: 'Batunon tanan',
    },
    legal: { updated: 'Ulihi nga gin-update', close: 'Isira ang {title}' },
  },
}
