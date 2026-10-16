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
    body: 'Pro Bono Initiative (PBI) is a South Sudan-registered National NGO dedicated to promoting awareness and delivering direct legal aid to vulnerable populations, especially women and girls in rural settings. We do this through cross sector partnerships. ',
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
    body: 'A just society where the rule of law reigns and human dignity is preserved. ',
  },

  mission: {
    title: 'Our Mission',
    body: 'We work with stakeholders to identify vulnerable households in community, provide direct legal aid to them and conduct advocacy to enhance their access to justice. ',
  },

  
inspiration: {
  title: 'Our inspiration, action and scope',
  body: [
    'We target households whose access to fair trial and justice is hindered by statutory inefficiencies and cruel customary laws.',
    'We roll out our interventions in both customary and statutory courts.',
    'Cultural violations such as child marriage, rape and gender-based violence (GBV) disproportionately victimize women and girls. Women and girls are therefore a key focus group.',
    'Our interventions are implemented through well-trained community-based paralegals under the guidance of accredited advocates.',
  ],
},


  /** The Intervention Context section: an intro paragraph plus expandable mini cards. */
context: {
  title: 'Our Intervention Context and Justice Gaps',
  intro:
    'South Sudanese communities widely rely on customary laws that are predominantly patriarchal, while access to formal justice remains limited. PBI, in collaboration with stakeholders, seeks to address critical gaps in child protection and gender-based violence (GBV) frameworks through direct legal intervention alongside advocacy. Select a card below to explore the key aspects of this context.',

  cards: [
    {
      title: 'Constitutional & Legal Framework',
      body: "South Sudan's Transitional Constitution (Articles 16–17) enshrines the rights of women and children, prohibits harmful practices, and bans discrimination, exploitation, and violence. Statutory laws, including the Penal Code Act 2008 and the Child Act, criminalize rape, early marriage, and abuse. These protections align with broader commitments, including the African Union's goal of ending child marriage by 2030.",
    },
    {
      title: 'Enforcement Gap in Rural Areas',
      body: 'Despite these legal protections, enforcement remains limited in rural areas, where the majority of South Sudanese communities live. Customary justice systems, administered by traditional authorities, resolve over 90% of disputes because the formal judiciary has limited reach and capacity.',
    },
    {
      title: 'Patriarchal Bias & Impunity',
      body: 'Although customary justice offers accessible, community-based dispute resolution, its patriarchal nature often perpetuates gender inequality. Intimate partner violence is frequently dismissed as a "family matter," while perpetrators may receive lenient treatment under cultural norms that regard male authority as a form of discipline.',
    },
    {
      title: 'Child Marriage & Gender-Based Violence',
      body:[ 'Survivors of sexual and gender-based violence may face harmful practices, including forced marriage and bride-price compensation in rape cases. ',
        'These practices undermine survivors’ rights and contribute to a culture of impunity.',
        'Stigma, fear of retaliation, and the cultural normalization of child marriage and domestic violence further compound the problem.',
        'Approximately 65% of women and girls experience physical or sexual violence during their lifetimes, often beginning before the age of 18.',
    ],
  },
    {
      title: 'Underreporting & Barriers to Justice',
      body: 'Reporting violence to the police remains minimal due to distrust of formal institutions, cultural barriers, and a preference for traditional dispute-resolution mechanisms. These mechanisms often fail to uphold statutory legal protections, leaving survivors with limited access to justice and effective remedies.',
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

    address: 'Nile Beach Hotel, near Juba National Stadium',
    
contacts: [
  {
    name: 'Thon Atem',
    position: 'Executive Director',
    phone: '+211923761509',
    email: 'Thon@probonoinitiative.org',
  },
  {
    name: 'Nicholas Rabach',
    position: 'Country Head of Programmes',
    phone: '+211922618065',
    email: 'Rabach@probonoinitiative.org',
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
