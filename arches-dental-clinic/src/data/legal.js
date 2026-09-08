/*
 * Policy copy. These are solid, conventional drafts for a dental clinic
 * operating in the Philippines under the Data Privacy Act of 2012 (RA 10173)
 * — they are NOT a substitute for review by a lawyer or your Data Protection
 * Officer before you publish. Anything in [brackets] needs a real answer.
 */

export const LEGAL_UPDATED = 'September 2026'

export const privacyPolicy = {
  hash: 'privacy-policy',
  title: 'Privacy Policy',
  intro:
    'Arches Dental Clinic respects your privacy. This policy explains what information this website collects, why, and what you can do about it. It is written to align with the Data Privacy Act of 2012 (Republic Act No. 10173).',
  sections: [
    {
      heading: 'What this website collects',
      paragraphs: [
        'This website does not have a booking form, a contact form, or user accounts. It does not ask you to type in any personal information.',
        'If you tap a phone number or email address on this site, your own device opens your phone or mail app. The call or message goes directly to the clinic — this website does not record it.',
      ],
    },
    {
      heading: 'Cookies and similar technologies',
      paragraphs: [
        'We use a small number of cookies and equivalent browser storage:',
      ],
      list: [
        'Essential — remembers your language choice and whether you have answered the cookie banner. These are required for the site to work as you left it and cannot be switched off.',
        'Analytics — anonymous statistics about which pages are viewed and how the site performs. These are only set if you accept them, and you can decline without losing any functionality.',
      ],
    },
    {
      heading: 'Information you give us directly',
      paragraphs: [
        'When you call, email, message us on Facebook, or visit the clinic, we collect what we need to care for you: your name, contact details, and your dental and relevant medical history.',
        'Clinical records are held under the clinic\u2019s own records policy, not through this website. They are kept confidential and are only accessed by clinicians and staff involved in your care.',
      ],
    },
    {
      heading: 'Third-party services',
      paragraphs: [
        'Some parts of this page are provided by other companies, and their own privacy policies apply when you interact with them:',
      ],
      list: [
        'Google Maps — the embedded map on the contact section.',
        'Google Fonts — the typefaces used across the site.',
        'Facebook and Google — only if you follow the links to our pages there.',
      ],
    },
    {
      heading: 'How long we keep information',
      paragraphs: [
        'Dental records are retained for the period required by Philippine law and professional practice standards. Website preferences stored in your browser stay until you clear them or they expire.',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        'Under the Data Privacy Act you have the right to be informed, to access your personal data, to correct it, to object to processing, to have it erased or blocked where the law allows, to data portability, and to seek redress. To exercise any of these, contact us using the details below.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [
        'For any privacy question or request, contact Arches Dental Clinic at r.archesdental@gmail.com or 0962 089 2497, or visit us at Punta Guanzon St, Kabankalan City, 6111 Negros Occidental.',
        'You may also lodge a complaint with the National Privacy Commission (privacy.gov.ph).',
      ],
    },
  ],
}

export const termsOfService = {
  hash: 'terms-of-service',
  title: 'Terms of Service',
  intro:
    'These terms cover your use of the Arches Dental Clinic website. By using this site you agree to them. They govern the website only — treatment you receive at the clinic is covered by the consent and treatment documents we go through with you in person.',
  sections: [
    {
      heading: 'This site is information, not medical advice',
      paragraphs: [
        'Everything on this website is general information about our clinic and the services we offer. It is not a diagnosis, not a treatment plan, and not a substitute for being examined by a dentist.',
        'Reading this site does not create a dentist\u2013patient relationship. That begins when you are seen at the clinic.',
      ],
    },
    {
      heading: 'In an emergency',
      paragraphs: [
        'Do not rely on this website in an urgent situation. If you have severe pain, swelling, uncontrolled bleeding, or an injury to your teeth or jaw, call us on 0962 089 2497 or go to the nearest emergency department.',
      ],
    },
    {
      heading: 'Appointments and availability',
      paragraphs: [
        'We operate on a first-come, first-served basis during business hours. Opening hours, services, and clinicians listed here may change, and being listed on this site is not a guarantee that a particular service or clinician is available on a given day.',
      ],
    },
    {
      heading: 'Prices and estimates',
      paragraphs: [
        'Any figures shown on this site are indicative. The cost of your treatment depends on your examination and your treatment plan, and will be confirmed with you before work begins.',
      ],
    },
    {
      heading: 'Patient reviews',
      paragraphs: [
        'Reviews shown on this site are the words of the patients who wrote them, published as given. They describe those individuals\u2019 experiences and are not a promise of any particular outcome for you.',
      ],
    },
    {
      heading: 'Content and trademarks',
      paragraphs: [
        'The text, photographs, logo, and design of this site belong to Arches Dental Clinic. Please do not reproduce them without our permission. Clinical photographs are published with the consent of the patients concerned.',
      ],
    },
    {
      heading: 'Links to other sites',
      paragraphs: [
        'Where we link to another website, we are not responsible for its content or its privacy practices.',
      ],
    },
    {
      heading: 'Governing law',
      paragraphs: [
        'These terms are governed by the laws of the Republic of the Philippines.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [
        'Questions about these terms: r.archesdental@gmail.com or 0962 089 2497.',
      ],
    },
  ],
}

export const legalDocs = [privacyPolicy, termsOfService]
