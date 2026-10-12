/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE DATA — the single file every template user edits
 * ─────────────────────────────────────────────────────────────────────────────
 * Business name, contact info, services, reviews, team, hours, and navigation
 * all live here. Components and pages import from this file so you never need
 * to hunt through markup to update your business details.
 *
 * IMPORTANT: also update the `site` field in astro.config.mjs to match your
 * production domain.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const siteData = {
  // ── Business identity ────────────────────────────────────────────────────
  name: 'Superglass NI',
  tagline: 'Glass and Windscreens Repair across Northern Ireland.',
  description:
    'Superglass NI provides professional glass and winscreen repair across Northern Ireland.',
  url: 'https://example.com',
  locale: 'en_GB',

  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: '',

  // ── Contact ──────────────────────────────────────────────────────────────
  email: 'example@email.com',
  phoneForTel: '+442877700000',
  phoneFormatted: '+44 (0) 28 777 00000',
  address: {
    lineOne: '',
    lineTwo: '',
    city: 'Limavady',
    state: 'Co. Derry',
    zip: '',
    country: '',
    mapLink: 'https://www.google.com/maps/place/Super+Glass+NI/@55.0371969,-6.9357962,698m/data=!3m2!1e3!4b1!4m6!3m5!1s0x48601130ea80ebaf:0x55139eb15c69790a!8m2!3d55.0371969!4d-6.9357962!16s%2Fg%2F11h7b3pwf9?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D',
  },
  hours: [
    { days: 'Monday - Friday', time: '7:00 AM - 6:00 PM' },
    { days: 'Saturday', time: '8:00 AM - 2:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  emergencyService: '',

  // ── Social media (set to empty string to hide a link) ────────────────────
  socials: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps',
  },

  // ── Navigation (add, remove, or reorder as needed) ───────────────────────
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],

  // ── Services ─────────────────────────────────────────────────────────────
  services: [
    {
      title: 'Windsheild Repairs',
      description:
        'From leaky faucets to broken drywall, our team handles everyday repairs quickly and professionally. We diagnose the issue, explain your options, and get it fixed — no surprises on the bill.',
    },
    {
      title: 'Headlamp Restoration',
      description:
        'New fixtures, appliances, water heaters, ceiling fans, and more. We ensure every installation is up to code, properly tested, and backed by our workmanship guarantee.',
    },
    {
      title: 'Scratch Removal',
      description:
        'Comprehensive property inspections for homebuyers, sellers, and proactive homeowners. We identify potential issues before they become expensive emergencies.',
    },
    
  ],

  // ── Reviews ──────────────────────────────────────────────────────────────
  reviews: [
    { quote: "A 'cracking' job Absolutely delighted with the job. Sean arrived on time and was extremely efficient. Arrived within 24 hours of my original phone call. Highly recommend! A top 'glass' service", name: 'BrianM-65', location: 'Yell', rating: 5 },
    { quote: "Great job on repair to my window. Very responsive and would certainly recommend Super Glass.", name: 'EoighanR', location: 'Yell', rating: 5 },
    { quote: 'Our emergency call was answered in minutes. They had the problem fixed before dinner. Truly dependable.', name: 'Linda K.', location: 'Lakewood, CO', rating: 5 },
    { quote: 'The remodel turned out even better than we imagined. Professional, clean, and on budget. We couldn\'t be happier.', name: 'Tom & Beth P.', location: 'Boulder, CO', rating: 5 },
    { quote: 'Great communication from start to finish. They sent photos of the progress and cleaned up perfectly when done.', name: 'Anita W.', location: 'Littleton, CO', rating: 5 },
    { quote: "I appreciate the upfront pricing — no hidden fees or surprise charges. That's rare these days. Highly recommend.", name: 'Marcus D.', location: 'Arvada, CO', rating: 5 },
  ],

  // ── About page ───────────────────────────────────────────────────────────
  about: {
    story: [
      'What started as a one-person operation has grown into a trusted local team. For over 15 years, we\'ve served homeowners and businesses with reliable, high-quality work — and we plan to keep doing just that for decades to come.',
      'Every member of our crew is licensed, insured, and background-checked. We treat your property with the same care we\'d give our own, and we stand behind every job with a satisfaction guarantee.',
    ],
    team: [
       ],
  },

  // ── Trust bar items (homepage strip) ─────────────────────────────────────
  trustItems: [
    { label: 'Licensed' },
    { label: 'Fully Insured' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Jobs Completed', value: '2,500+' },
  ],

  // ── Footer nav columns ──────────────────────────────────────────────────
  footerNav: [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Reviews', href: '/reviews' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
  ],
} as const;

export type SiteData = typeof siteData;
