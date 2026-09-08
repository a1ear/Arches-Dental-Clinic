/*
 * Site copy by locale.
 *
 * NOT translated, deliberately:
 *   - patient reviews (verbatim quotes attributed to named people)
 *   - clinic name, address, phone, email, clinician names
 *
 * `tl` (Tagalog/Filipino) and `hil` (Hiligaynon/Ilonggo) are first drafts.
 * Have a native speaker review them before launch — Hiligaynon especially,
 * and anything describing a clinical procedure.
 */

export const LOCALES = [
  { code: 'en', short: 'en', label: 'English' },
  { code: 'tl', short: 'tl', label: 'Tagalog' },
  { code: 'hil', short: 'hil', label: 'Ilonggo' },
]

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      reviews: 'Reviews',
      contact: 'Contact',
      faq: 'FAQ',
      language: 'Language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      home_aria: 'Arches Dental Clinic home',
    },
    cta: {
      call: 'Call Now',
      viewServices: 'View Services',
      directions: 'Get Directions',
    },
    hero: {
      badge: 'Now welcoming new patients',
      title1: 'Healthy Smiles',
      title2: 'Begin Here',
      body: 'takes walk-ins — no appointment needed — with modern technology and compassionate care for every age.',
    },
  },

  tl: {
    nav: {
      home: 'Home',
      services: 'Mga Serbisyo',
      about: 'Tungkol Sa Amin',
      reviews: 'Mga Review',
      contact: 'Kontak',
      faq: 'FAQ',
      language: 'Wika',
      openMenu: 'Buksan ang menu',
      closeMenu: 'Isara ang menu',
      home_aria: 'Arches Dental Clinic home',
    },
    cta: {
      call: 'Tumawag Na',
      viewServices: 'Tingnan ang Serbisyo',
      directions: 'Kunin ang Direksyon',
    },
    hero: {
      badge: 'Tumatanggap na ng bagong pasyente',
      title1: 'Malusog na Ngiti',
      title2: 'Nagsisimula Dito',
      body: 'ay tumatanggap ng walk-in — hindi kailangan ng appointment — may makabagong teknolohiya at maalagang pangangalaga para sa lahat ng edad.',
    },
  },

  hil: {
    nav: {
      home: 'Home',
      services: 'Mga Serbisyo',
      about: 'Parte sa Amon',
      reviews: 'Mga Review',
      contact: 'Kontak',
      faq: 'FAQ',
      language: 'Lenggwahe',
      openMenu: 'Buksan ang menu',
      closeMenu: 'Isira ang menu',
      home_aria: 'Arches Dental Clinic home',
    },
    cta: {
      call: 'Magtawag Na',
      viewServices: 'Tan-awa ang Serbisyo',
      directions: 'Kuhaa ang Direksyon',
    },
    hero: {
      badge: 'Nagabaton na sang bag-o nga pasyente',
      title1: 'Mapagros nga Yuhum',
      title2: 'Nagasugod Diri',
      body: 'nagabaton sang walk-in — indi kinahanglan sang appointment — may moderno nga teknolohiya kag maalwan nga pag-atipan para sa tanan nga edad.',
    },
  },
}
