/**
 * ============================================================
 *  EDIT YOUR WEBSITE CONTENT HERE
 * ============================================================
 * Every piece of text on the site lives in this one file.
 * Change the words between the quotes, save, and the site updates.
 *
 * - To ADD a mini card in the "Intervention Context" section,
 *   copy one `{ title: '...', body: '...' }` block inside
 *   `context.cards` and edit it.
 * - To REMOVE a mini card, delete its `{ ... },` block.
 * - Cards appear on the site in the same order they are listed.
 */

export type MiniCard = {
  title: string;
  body: string;
};

/** An image on the site. Put the file in /public/images and use '/images/your-file.jpg' as src. */
export type SiteImage = {
  src: string;
  alt: string; // short description, used by screen readers and if the image fails to load
};

export type GalleryImage = SiteImage & {
  caption?: string; // optional text shown on hover and in the full-screen viewer
};

export const siteContent = {
  /** Used in the header, loading screen and footer. */
  org: {
    name: 'Pro Bono Initiative',
    tagline: 'Justice for the Vulnerable',
    footerNote:
      'A South Sudan-registered National NGO delivering justice for vulnerable populations, especially women and girls, through partnership, legal aid, and advocacy.',
  },

  /** Short messages that cycle on the loading screen. */
  loadingMessages: [
    'Connecting to Pro Bono Initiative…',
    'Preparing our story…',
    'Almost there…',
  ],

  /** Links in the top navigation bar (href must match a section id below). */
  nav: [
    { label: 'Who We Are', href: '#who-we-are' },
    { label: 'Vision & Mission', href: '#vision' },
    { label: 'Our Work', href: '#context' },
    /* { label: 'Gallery', href: '#gallery' }, */
    { label: 'Partnership', href: '#partnership' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    title: 'Pro Bono Initiative',
    body: 'Justice for the vulnerable. PBI is a South Sudan-registered National NGO dedicated to delivering justice for vulnerable populations, especially women and girls, through partnership.',
    buttonLabel: 'Learn about our work',
    /**
     * OPTIONAL: a full-width photo behind the hero text (a dark green overlay is added
     * automatically so the text stays readable). Leave as '' for the plain green hero.
     * Example: '/images/hero.jpg'
     */
    backgroundImage: '' as string,
  },

  whoWeAre: {
    title: 'Who We Are',
    body: 'Pro Bono Initiative (PBI) is a South Sudan-registered National NGO dedicated to delivering justice for vulnerable populations, especially women and girls through partnership.',
    /**
     * OPTIONAL: a photo shown beside the text. Replace the placeholder with your own,
     */
    image: {
      src: '/images/hero-bg.jpg',
      alt: 'Placeholder: replace with a photo of the PBI team',
    } as SiteImage | null,
  },

  vision: {
    title: 'Our Vision',
    body: 'A society that values human rights, democracy, and the rule of law, free from discrimination, exploitation, and injustice.',
  },

  mission: {
    title: 'Our Mission',
    body: 'To amplify the voices of vulnerable individuals and groups, enabling their effective participation in advocating for economic, social, and cultural rights; to foster a peaceful society respecting human rights, the rule of law, and democratic governance; and to promote dignity through legal empowerment and systemic change.',
  },

  /** The Intervention Context section: an intro paragraph plus expandable mini cards. */
  context: {
    title: 'Our Intervention Context and Justice Gaps',
    intro:
      'Amid widespread reliance on customary laws and limited formal justice access, PBI in collaboration with stakeholders will contribute to addressing critical gaps in existing child protection and gender-based violence (GBV) frameworks, moving beyond advocacy to direct legal intervention. Select a card below to explore the key aspects of this context.',
    cards: [
      {
        title: 'Constitutional & Legal Framework',
        body: "South Sudan's Transitional Constitution (Articles 16-17) enshrines women's and children's rights, prohibits harmful practices, and bans discrimination, exploitation, and violence. Statutory laws like the Penal Code Act 2008 and the Child Act criminalize rape, early marriage, and abuse, aligning with commitments like the African Union's goal to end child marriage by 2030.",
      },
      {
        title: 'Enforcement Gap in Rural Areas',
        body: "Yet, in rural contexts, home to the majority of South Sudanese communities, these protections are rarely enforced. Customary systems administered by traditional authorities resolve over 90% of disputes due to the formal judiciary's limited reach and capacity.",
      },
      {
        title: 'Patriarchal Bias & Impunity',
        body: 'Although the customary pathway offers accessible, community-based resolution, its patriarchal nature often perpetuates inequality. Gross intimate partner violence is frequently dismissed as a "family matter." Survivors may face forced marriage, for example via bride price compensation in rape cases, and perpetrators often receive leniency under norms viewing male authority as disciplinary.',
      },
      {
        title: 'Prevalence Data',
        body: 'This fosters widespread impunity, compounded by stigma, retaliation fears, and cultural normalization of child marriage and domestic violence. Prevalence data highlight the crisis: approximately 65% of women and girls experience lifetime physical or sexual violence, often beginning before age 18.',
      },
      {
        title: 'Underreporting to Police',
        body: 'Reporting to police is minimal due to distrust, cultural barriers, and a preference for traditional mechanisms that seldom align with statutory protections.',
      },
    ] as MiniCard[],
  },

  /**
   * The photo gallery. Each image becomes a tile; click opens a full-screen viewer.
   * - The 1st, 6th, 11th... image is shown large, so put your best photo first.
   * - Add a photo: copy one `{ src, alt, caption }` block and change it.
   * - Remove a photo: delete its block. Delete them all and the section disappears.
   * - Photos of survivors or children should only be used with informed consent.
   */
  gallery: {
    title: 'Some Our Work in Action',
    intro: 'A glimpse into our work with communities and partners.',
    images: [
      { src: '/images/gallery-1.svg', alt: 'Placeholder photo 1', caption: 'Photo caption goes here' },
      { src: '/images/gallery-2.svg', alt: 'Placeholder photo 2', caption: 'Photo caption goes here' },
      { src: '/images/gallery-3.svg', alt: 'Placeholder photo 3', caption: 'Photo caption goes here' },
      { src: '/images/gallery-4.svg', alt: 'Placeholder photo 4', caption: 'Photo caption goes here' },
      { src: '/images/gallery-5.svg', alt: 'Placeholder photo 5', caption: 'Photo caption goes here' },
    ] as GalleryImage[],
  },

  partnership: {
    title: 'Our Partnership Statement',
    body: 'Partnership with the National Ministry of Justice as well as State Authorities will attempt to bridge these gaps through pro bono legal aid, survivor representation, paralegal support and advocacy. The organization will strive to empower survivors to pursue constitutional and statutory rights and challenge discriminatory customary outcomes through legal caucusing. PBI will also assist survivors to pursue formal remedies when viable, and engage traditional leaders and other actors to align practices with human rights standards. Ultimately, PBI will join hands with other humanitarian players to foster equitable justice, reduce impunity, and drive normative change in rural South Sudan, where women and girls disproportionately suffer from legal pluralism and weak rule of law.',
  },

  
  contact: {
    title: 'Get in Touch',
    intro:
      'We welcome inquiries, collaboration opportunities, and partnerships that advance access to justice and protect the rights of vulnerable communities.',

    email: 'info@probonoinitiative.org',

    phones: [
      {
        label: 'Main Office',
        number: '+211 XXX XXX XXX',
      },
      {
        label: 'Alternative Contact',
        number: '+254 XXX XXX XXX',
      },
    ],

socialMedia: [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/YOUR_PAGE',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/YOUR_PAGE',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/YOUR_PAGE',
  },
  {
    name: 'X',
    url: 'https://x.com/YOUR_PAGE',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@YOUR_USERNAME',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/211XXXXXXXXX',
  },
],
  },
};
