import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'People',
      links: [
        {
          text: 'Principal Investigator',
          href: getPermalink('/people/principal-investigator'),
        },
        {
          text: 'Funders',
          href: getPermalink('/people/funders'),
        },
        {
          text: 'Team',
          href: getPermalink('/people/team'),
        },
      ],
    },
    {
      text: 'Publications',
      links: [
        {
          text: 'Publications',
          href: getPermalink('/publications/publications'),
        },
        {
          text: 'Awards and Honours',
          href: getPermalink('/publications/awards-and-honours'),
        },
        {
          text: 'Videos and Podcasts',
          href: getPermalink('/publications/videos-and-podcasts'),
        },
        {
          text: 'Thesis',
          href: getPermalink('/publications/thesis'),
        },
        {
          text: 'Press Releases',
          href: getPermalink('/publications/press-releases'),
        },
      ],
    },
    {
      text: 'Connections',
      links: [
        {
          text: 'Affiliations',
          href: getPermalink('/connections/affiliations'),
        },
        {
          text: 'Collaborators',
          href: getPermalink('/connections/collaborators'),
        },
        {
          text: 'Memberships in International Associations',
          href: getPermalink('/connections/memberships-in-international-associations'),
        },
      ],
    },
    {
      text: 'Other',
      links: [
        {
          text: 'Waist/Height Calculator',
          href: getPermalink('/other/waist-height-calculator'),
        },
        {
          text: 'Non-academic',
          href: getPermalink('/other/non-academic'),
        },
      ],
    },
    // {
    //   text: 'Other',
    //   links: [
    //     {
    //       text: 'Editor/Reviewer',
    //       href: getPermalink('/editor-reviewer'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    // {
    //   title: 'Product',
    //   links: [
    //     { text: 'Features', href: '#' },
    //     { text: 'Security', href: '#' },
    //     { text: 'Team', href: '#' },
    //     { text: 'Enterprise', href: '#' },
    //     { text: 'Customer stories', href: '#' },
    //     { text: 'Pricing', href: '#' },
    //     { text: 'Resources', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'UEF', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdZiiuH4iCX717vfGEGUxjz2j30m7Z0OYYw&s', href: 'https://uefconnect.uef.fi/en/group/understanding-fitness-and-cardiometabolic-health-in-little-darlings-urfit-child/#information'  },
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  // footNote: `
  //   <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
  //   Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  // `,
};
