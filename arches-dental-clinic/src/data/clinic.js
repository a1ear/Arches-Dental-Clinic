export const clinic = {
  name: 'Arches Dental Clinic',
  phone: '0962 089 2497',
  phoneHref: 'tel:+639620892497',
  emergencyPhone: '0962 089 2497',
  emergencyPhoneHref: 'tel:+639620892497',
  email: 'r.archesdental@gmail.com',
  address: 'Door 1, ArchDag Building, Punta Guanzon Street, Kabankalan City, 6111 Negros Occidental',
  mapsEmbedSrc:
    'https://www.google.com/maps?q=Arches+Dental+Clinic,+Punta+Guanzon+St,+Kabankalan+City,+6111+Negros+Occidental&output=embed',
  mapsDirectionsHref:
    'https://www.google.com/maps/dir/?api=1&destination=Punta+Guanzon+St,+Kabankalan+City,+6111+Negros+Occidental',
  hours: [
    { day: 'Monday', time: '9:30 AM – 5:00 PM' },
    { day: 'Tuesday', time: '9:30 AM – 5:00 PM' },
    { day: 'Wednesday', time: '9:30 AM – 5:00 PM' },
    { day: 'Thursday', time: '9:30 AM – 5:00 PM' },
    { day: 'Friday', time: '9:30 AM – 5:00 PM' },
    { day: 'Saturday', time: '9:30 AM – 5:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  social: {
    facebook: 'https://www.facebook.com/archesdental2024',
    instagram: 'https://instagram.com',
    google: 'https://share.google/zG338jiH8lbE01pfg',
  },
  googleReviewsUrl: 'https://share.google/zG338jiH8lbE01pfg',
}

// The clinic's dentist. Name and credential are proper nouns, not translated.
export const dentist = {
  name: 'Dr. Rikki Hope C. Arches',
  credential: 'DMD',
}

export const services = [
  {
    id: 'general-dentistry',
    name: 'General Dentistry',
    description:
      'Routine cleanings, exams, and preventive care to keep your whole family smiles healthy year-round.',
    icon: 'Sparkles',
  },
  {
    id: 'orthodontics',
    name: 'Orthodontics',
    description:
      'Braces for kids, teens, and adults — straighter teeth, fitted to your life.',
    icon: 'AlignCenter',
  },
  {
    id: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    description:
      'Whitening, crowns, and smile-enhancing care that improves how your teeth look — planned around what suits you and keeps your teeth healthy.',
    icon: 'SmilePlus',
  },
  {
    id: 'oral-surgery',
    name: 'Oral Surgery',
    description:
      'Extractions, implants, and surgical care delivered gently, with comfort and recovery as the priority.',
    icon: 'Stethoscope',
  },
]

// Order matches the page: About comes before Services on the way down.
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
]
